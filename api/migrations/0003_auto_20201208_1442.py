# Generated by Django 3.1.4 on 2020-12-08 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20201207_1445'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='thumbnail_1',
            field=models.CharField(blank=True, max_length=800, null=True),
        ),
        migrations.AddField(
            model_name='series',
            name='number_of_season',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='series',
            name='thumbnail_1',
            field=models.CharField(blank=True, max_length=800, null=True),
        ),
        migrations.AlterField(
            model_name='episode',
            name='size',
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name='movie',
            name='size',
            field=models.CharField(max_length=15),
        ),
    ]
