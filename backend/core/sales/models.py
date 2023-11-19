from django.db import models

# Create your models here.
class Sales(models.Model):
    ticket_id = models.CharField(max_length=200, blank=True)
    date_sales = models.DateTimeField(auto_now_add=True)
    store_id = models.ForeignKey(to='store.Store', on_delete=models.CASCADE)
    sku_id = models.ForeignKey(to='sku.Sku', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    price = models.FloatField(default=0)
    costs = models.FloatField(default=0)