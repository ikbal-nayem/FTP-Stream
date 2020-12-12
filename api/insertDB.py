from api.models import (ContentURL, Series, Episode)


def insertTVS(series_data):
	content = ContentURL.objects.get(name="TV Series")

	exists = len(Series.objects.filter(name=series_data['name'])) > 0
	if not exists:
		ser = Series(
			name=series_data['name'],
			url=series_data['url'],
			number_of_season=series_data['number_of_season'],
			content_type=content,
			upload_date=series_data['last_modified'],
			thumbnail=series_data['thumbnail'][0],
			thumbnail_1=series_data['thumbnail'][1] if len(series_data['thumbnail'])==2 else ''
		)
		ser.save()
		for epi in series_data['episode_list']:
			Episode.objects.create(
				name=epi['name'],
				url=epi['url'],
				season_no=epi['season_no'],
				episode_no=epi['episode_no'],
				size=epi['size'],
				upload_date=epi['last_modified'],
				series=ser
			)
	