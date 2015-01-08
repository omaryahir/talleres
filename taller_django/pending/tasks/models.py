from django.db import models

# Create your models here.


class Task(models.Model):
    description = models.CharField(max_length=100, verbose_name=u'Description')
    obs = models.TextField(verbose_name=u'Observations')
    responsible = models.CharField(max_length=100, verbose_name=u'Responsible')
    STATUS_CHOICE = (('To Do','To Do'),('Doing','Doing'),('Done','Done'))
    status = models.CharField(choices=STATUS_CHOICE, max_length=20, verbose_name=u'Status')
    registered = models.DateField(auto_now_add=True, verbose_name=u'Registered')

    class Meta:
        verbose_name = "Task"
        verbose_name_plural = "Tasks"

    def __str__(self):
        pass
