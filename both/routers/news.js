Router.route('news', {
	path: /^\/news\/?(\d{1,32})?/,
	template: 'Home',
	data: function() {
	var	news = [{
			dateTime: 'decmber 19, 2014',
			text: 'December Devshop SF: Advances in MonogoDB scalability'
		}, {
			dateTime: 'december 10, 2014',
			text: ' Meteor day Recap'
		}, {
			dateTime: 'December 9, 2014',
			text: 'Meteror 1.0.1 security fix for allow/deny rules'
		},{
			dateTime: 'Octobre 28, 2014',
			text: 'Meteor 1.0'
		}];
		return {
			news: news.slice(0, this.params[0])
		};
	}
});