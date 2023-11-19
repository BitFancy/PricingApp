from django.db import models

# Create your models here.
class StoreMix(models.Model):
    store_id = models.CharField(max_length=255)
    mix_name = models.CharField(max_length=255)
    mix_description = models.TextField()
    sku_id = models.ForeignKey(to='core.Product')
    is_enable = models.BooleanField(default=False)