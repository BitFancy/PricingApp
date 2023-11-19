import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.exceptions import ObjectDoesNotExist
from django.db import models
from django.http import Http404
from core.abstract.models import AbstractModel, AbstractManager

# Create your models here.
class UserManager(BaseUserManager, AbstractManager):
    def get_object_by_public_id(self, public_id):
        try:
            instance = self.get(public_id = public_id)
            return instance
        except (ObjectDoesNotExist, ValueError, TypeError):
            return Http404
    def create_user(self, email, password=None, **kwargs):
        """Create and return a `User` with an email, phone number, username and password."""
        if email is None:
            raise TypeError('User must have an email.')
        if password is None:
            raise TypeError('User must have a password.')
        user = self.model(email = self.normalize_email(email), **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user
    def create_superuser(self, username, email, password, **kwargs):
        """Create and return a `User` with superuser (admiin) permissions."""
        if password is None:
            raise TypeError('Superuser must have a password.')
        if email is None:
            raise TypeError('Superuser must have an email.')
        user = self.create_user(email, password, **kwargs)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user

class User(AbstractModel, AbstractBaseUser, PermissionsMixin):
    # public_id = models.UUIDField(db_index=True, unique=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(db_index=True, unique=True)
    company = models.CharField(max_length=255, blank=True)
    role = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    # created = models.DateTimeField(auto_now=True)
    # updated = models.DateTimeField(auto_now_add=True)
    USERNAME_FIELD = 'email'
    objects = UserManager()
    def __str__(self):
        return f"{self.email}"
    

