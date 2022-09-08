from django.db import models

# Create your models here.
class Candidate(models.Model):

    # personal details
    name = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=200, primary_key=True, null=False)
    contact = models.PositiveIntegerField(max_length=10, null=False)

    # education details
    edu_level = models.TextField(null=False)
    result = models.FloatField(null = False, default=0)
    
    # work experience
    workexp = models.TextField(null=False)

    # resume 
    resume = models.FileField(upload_to='resumes', null=True)
    filename = models.CharField(max_length=500, null=True)

    # status
    status = models.CharField(max_length=100, null=False)

    def __str__(self):
        return self.name
