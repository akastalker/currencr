# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-06 12:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finsite', '0016_exchange_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='currency',
            name='url_code',
            field=models.CharField(default='', max_length=10),
            preserve_default=False,
        ),
    ]
