from rest_framework import serializers
from rest_framework.exceptions import ValidationError 
from core.abstract.serializers import AbstractModelSerializer
from core.post.models import Post
from core.user.models import User
from core.user.serializers import UserSerializer

class PostSerializer(AbstractModelSerializer):
    author = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field='public_id')
    def validate_author(self, value):
        if self.context["request"].user != value:
            raise ValidationError("You can't create a post for another user.")
        return value
    
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        author = User.objects.get_object_by_public_id(rep["author"])
        rep["author"] = UserSerializer(author).data
        return rep
    
    def update(self, instance, validated_data):
        if not instance.edited:
            validated_data['edited'] = True
        instance = super().update(instance, validated_data)
        return instance

    class Meta:
        model = Post
        fields = ['id', 'author', 'body', 'edited', 'created', 'updated']
        read_only_fields = ['edited']
