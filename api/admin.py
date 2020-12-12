from django.contrib import admin
from api.models import ServerAddress, ContentURL, Movie, Series, Episode


class ServerAdmin(admin.ModelAdmin):
	list_display = ('pk', 'name', 'address')
	list_display_links = ('name',)

class ContentAdmin(admin.ModelAdmin):
	list_display = ('name', 'category', 'address', 'url')
	list_display_links = ('name', 'category')
	search_fields = ['name', 'category']
	list_filter = ('category', 'address')

class SeriesAdmin(admin.ModelAdmin):
	list_display = ('name', 'content_type', 'number_of_season', 'upload_date')
	list_display_links = ('name', 'content_type')
	search_fields = ['name', 'number_of_season']

class EpisodeAdmin(admin.ModelAdmin):
	list_display = ('name', 'series', 'season_no', 'episode_no', 'size')
	list_display_links = ('name', 'series', 'size')
	search_fields = ['name', 'series']


admin.site.register(ServerAddress, ServerAdmin)
admin.site.register(ContentURL, ContentAdmin)
admin.site.register(Movie)
admin.site.register(Series, SeriesAdmin)
admin.site.register(Episode, EpisodeAdmin)