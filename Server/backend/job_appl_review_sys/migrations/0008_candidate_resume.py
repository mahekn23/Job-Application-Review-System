# Generated by Django 3.2.4 on 2022-09-08 06:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job_appl_review_sys', '0007_auto_20220908_1114'),
    ]

    operations = [
        migrations.AddField(
            model_name='candidate',
            name='resume',
            field=models.FileField(null=True, upload_to='resumes/'),
        ),
    ]