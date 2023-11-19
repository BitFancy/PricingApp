from django.db import models

# Create your models here.

class StoreDc(models.Model):
    dc_id = models.AutoField(primary_key=True)
    store_id = models.ForeignKey(to='core.Store', on_delete=models.CASCADE)
    sku_id = models.ForeignKey(to='core.Product', on_delete=models.CASCADE)
    