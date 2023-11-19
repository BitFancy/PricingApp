from django.db import models

# Create your models here.
class ConfigPrice(models.Model):
    """
    Model for configuration price
    """
    id = models.BigAutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    config_info = models.TextField(blank=True)