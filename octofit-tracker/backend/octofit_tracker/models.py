from djongo import models
from djongo.models.fields import ObjectIdField

class User(models.Model):
    id = ObjectIdField(primary_key=True)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    age = models.IntegerField()

    def __str__(self):
        return self.email

    class Meta:
        app_label = 'octofit_tracker'

class Team(models.Model):
    name = models.CharField(max_length=255)
    members = models.ArrayField(model_container=User)

    def __str__(self):
        return self.name

    class Meta:
        app_label = 'octofit_tracker'

class Activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=255)
    duration = models.IntegerField()
    date = models.DateField()

    def __str__(self):
        return f"{self.user.email} - {self.activity_type}"

    class Meta:
        app_label = 'octofit_tracker'

class Leaderboard(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    score = models.IntegerField()

    def __str__(self):
        return f"{self.user.email} - {self.score}"

    class Meta:
        app_label = 'octofit_tracker'

class Workout(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        app_label = 'octofit_tracker'
