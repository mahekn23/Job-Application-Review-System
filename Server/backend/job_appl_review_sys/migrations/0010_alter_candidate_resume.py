# Generated by Django 3.2.4 on 2022-09-08 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job_appl_review_sys', '0009_candidate_filename'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidate',
            name='resume',
            field=models.FileField(null=True, upload_to='resumes'),
        ),
    ]