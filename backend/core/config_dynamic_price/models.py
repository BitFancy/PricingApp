from django.db import models

# Create your models here.

class ConfigDynamicPrice(models.Model):
    """
    ConfigDynamicPrice model
    """
    id = models.BigAutoField(
        auto_created=True,
        primary_key=True,
        serialize=False,
        verbose_name='ID'
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        help_text='Date time on which the object was created.',
        verbose_name='created at'
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        help_text='Date time on which the object was last modified.',
        verbose_name='updated at'
    )
    is_active = models.BooleanField(
        default=True,
        help_text='Boolean field to define if the config is active.',
        verbose_name='is active'
    )
    config_info = models.TextField(
        blank=True,
        help_text='Information about the config.'
    )