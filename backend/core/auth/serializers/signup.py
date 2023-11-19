from rest_framework import serializers
from core.user.serializers import UserSerializer
from core.user.models import User

class SignUpSerializer(UserSerializer):
    """Registration serializer for requests and user creation"""
    password = serializers.CharField(max_length=128, min_length=8, write_only=True, required=True)
    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'company', 'role', 'created']
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)