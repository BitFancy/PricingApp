from django.db import models

# Create your models here.
class StoreCluster(models.Model):
    store_id = models.ForeignKey(to='core.Store', on_delete=models.CASCADE)
    cluster = models.CharField(max_length=255)
    cluster_description = models.TextField()