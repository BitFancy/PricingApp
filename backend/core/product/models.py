from django.db import models

# Create your models here.

class Product(models.Model):
    sku_id = models.CharField(primary_key=True, max_length=255)
    sku_name = models.CharField(max_length=255)
    sku_description = models.TextField(blank=True)
    category_1_id = models.CharField(max_length=255)
    category_2_id = models.CharField(max_length=255)
    