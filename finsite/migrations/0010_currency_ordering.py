# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-14 06:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finsite', '0009_keywordsynonims'),
    ]

    operations = [
        migrations.AddField(
            model_name='currency',
            name='ordering',
            field=models.IntegerField(default=0),
        ),
    ]