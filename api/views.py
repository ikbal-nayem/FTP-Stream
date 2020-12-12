from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import ContentURL
from api.ftp_action import ScrapFTP
from api.insertDB import insertTVS



@api_view()
def GrabTVS(request):
	contents = ContentURL.objects.get(name='TV Series')
	ftp = ScrapFTP(contents.address.address)
	series_list = ftp.getList(contents.url)[:5]
	for i, series in enumerate(series_list):
		thumb = []
		seasons = []
		episode_list = []
		season_list = ftp.getList(series['url'])
		for season_i, season in enumerate(season_list):
			if season['name'].endswith('.jpg') or season['name'].endswith('.png') or season['name'].endswith('.jpeg'):
				thumb.append(season['url'])
			else:
				seasons.append(season)
				get_episode_list = ftp.getList(season['url'])
				for epi_i, epi in enumerate(get_episode_list):
					get_episode_list[epi_i]['episode_no'] = epi_i + 1
					get_episode_list[epi_i]['season_no'] = season_i + 1
					episode_list.append(get_episode_list[epi_i])

		series_list[i]['number_of_season'] = len(seasons)
		series_list[i]['thumbnail'] = thumb
		series_list[i]['episode_list'] = episode_list

		insertTVS(series_list[i])


	return Response({"message": series_list})