from bs4 import BeautifulSoup as bs
import requests
import urllib.parse




class ScrapFTP:
	def __init__(self, domain):
		self.domain = domain


	def getTable(self, url):
		req = requests.get(urllib.parse.urljoin(self.domain, url))
		soup = bs(req.text, 'html.parser')
		table = soup.findAll('tr')
		return table



	def getList(self, url):
		series_list = []
		table = self.getTable(url)
		for tr in table[2:]:
			td = tr.findAll('td')
			series_list.append({
				'name': td[1].a.text,
				'url': td[1].a['href'],
				'last_modified': td[2].text,
				'size': td[3].text
			})
		return series_list