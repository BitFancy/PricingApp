from django.db import models

# Create your models here.
class Store(models.Model):
    store_id = models.CharField(primary_key=True)
    store_size = models.FloatField(default=0)
    street_name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    zip_code = models.CharField()
    lat = models.FloatField(default=0)
    long = models.FloatField(default=0)