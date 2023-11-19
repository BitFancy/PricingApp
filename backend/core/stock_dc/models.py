from django.db import models

# Create your models here.

class StockDc(models.Model):
    date_stck = models.DateTimeField(auto_now_add=True)
    dc_id = models.ForeignKey(to='core.DistributionCenter', on_delete=models.CASCADE)
    sku_id = models.ForeignKey(to='core.Product', on_delete=models.CASCADE) 
    quantity = models.IntegerField(default=0)
    costs = models.FloatField(default=0)
