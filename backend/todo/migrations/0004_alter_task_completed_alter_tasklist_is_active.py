# Generated by Django 4.1.3 on 2022-12-14 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_alter_tasklist_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='completed',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='tasklist',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
