# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-03 08:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finsite', '0003_currencyhistoryrecord'),
    ]

    operations = [
        migrations.AlterField(
            model_name='currencyhistoryrecord',
            name='time',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
