from django.db import models

# Create your models here.
class Promotions(models.Model):
    promotions_id = models.CharField(primary_key=True, max_length=255) 
    sku_id = models.CharField(max_length=255)
    store_id = models.CharField(max_length=255)
    date_ini = models.DateTimeField(auto_now_add=True)
    date_end = models.DateTimeField(auto_now=True)
    