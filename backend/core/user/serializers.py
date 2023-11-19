from rest_framework import serializers
from core.user.models import User
from core.abstract.serializers import AbstractModelSerializer

class UserSerializer(AbstractModelSerializer):
    # id = serializers.UUIDField(source='public_id', read_only=True, format='hex')
    # created = serializers.DateTimeField(read_only=True)
    # updated = serializers.DateTimeField(read_only=True)
    
    class Meta:
        model = User
        fields = ['id', 'email', 'password', 'company', 'role', 'is_active', 'created', 'updated']
        read_only_field = ['is_active']
