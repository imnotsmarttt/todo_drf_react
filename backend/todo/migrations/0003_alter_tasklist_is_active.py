# Generated by Django 4.1.3 on 2022-12-14 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_tasklist_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasklist',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
    ]