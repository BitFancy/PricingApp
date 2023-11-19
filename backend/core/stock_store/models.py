from django.db import models

# Create your models here.
class StockStore(models.Model):
    date_stck = models.DateTimeField(auto_now_add=True)
    store_id = models.ForeignKey(to='core.Store')
    sku_id = models.CharField(max_length=255)
    quantity = models.IntegerField(default=0)
    cost = models.FloatField(default=0)
    