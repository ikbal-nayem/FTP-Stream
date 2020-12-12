from django.db import models


class ServerAddress(models.Model):
	name = models.CharField(max_length=50)
	address = models.CharField(max_length=30)

	def __str__(self):
		return f'{self.name} ({self.address})'



class ContentURL(models.Model):
	class Category(models.TextChoices):
		movie = 'Movie'
		series = 'Series'
	name = models.CharField(max_length=100)
	url = models.CharField(max_length=200)
	category = models.CharField(max_length=10, choices=Category.choices)
	address = models.ForeignKey(ServerAddress, on_delete=models.CASCADE, related_name="contents")
	upload_date = models.DateTimeField(blank=True, null=True)

	def __str__(self):
		return self.name



class Movie(models.Model):
	name = models.CharField(max_length=256)
	url = models.CharField(max_length=500)
	thambnail = models.CharField(max_length=800, null=True, blank=True)
	thumbnail_1 = models.CharField(max_length=800, null=True, blank=True)
	size = models.CharField(max_length=15)
	year = models.IntegerField(null=True, blank=True)
	content_type = models.ForeignKey(ContentURL, on_delete=models.CASCADE, related_name="movies")
	upload_date = models.DateTimeField(null=True, blank=True)

	def __str__(self):
		return self.name



class Series(models.Model):
	name = models.CharField(max_length=256)
	url = models.CharField(max_length=700)
	number_of_season = models.IntegerField(null=True)
	thumbnail = models.CharField(max_length=800, null=True, blank=True)
	thumbnail_1 = models.CharField(max_length=800, null=True, blank=True)
	content_type = models.ForeignKey(ContentURL, on_delete=models.CASCADE, related_name="series")
	upload_date = models.DateTimeField(null=True, blank=True)

	def __str__(self):
		return self.name



class Episode(models.Model):
	name = models.CharField(max_length=100)
	url = models.CharField(max_length=800)
	season_no = models.IntegerField()
	episode_no = models.IntegerField(null=True)
	size = models.CharField(max_length=15)
	series = models.ForeignKey(Series, on_delete=models.CASCADE, related_name="episodes")
	upload_date = models.DateTimeField(null=True, blank=True)

	def __str__(self):
		return self.name