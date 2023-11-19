from django.db import models

# Create your models here.
class Hierarchy(models.Model):
    user_id = models.ForeignKey(to='user.User', on_delete=models.CASCADE)
    user_approver_id = models.ForeignKey(to='user.User', on_delete=models.CASCADE)