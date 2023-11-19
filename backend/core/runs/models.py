from django.db import models

# Create your models here.
class Runs(models.Model):
    run_id = models.BigAutoField(primary_key=True)
    user_id = models.ForeignKey(to='user.User', on_delete=models.CASCADE)
    run_type = models.CharField(max_length=255)
    results = models.TextField(blank=True)
    is_approved = models.BooleanField(default=False)
    approver = models.ForeignKey(to='user.User')
    run_date = models.DateTimeField(auto_now_add=True)