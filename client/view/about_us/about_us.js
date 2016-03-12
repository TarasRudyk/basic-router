Template.AboutUs.events({
	'click a#home-page-link': function(e, tmpl) {
		e.preventDefault();
		Router.go('homePage');
	}
});