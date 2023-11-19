from django.db import models

# Create your models here.

class DcMix(models.Model):
    dc_id = models.ForeignKey(to='core.Dc', on_delete=models.CASCADE)
    mix_name = models.CharField(max_length=255)
    mix_description = models.TextField()
    sku_id = models.ForeignKey(to='core.Product', on_delete=models.CASCADE)
    is_enable = models.BooleanField(default=False)