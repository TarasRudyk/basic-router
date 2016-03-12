Router.route('homePage', {
	path: '/',
	template: 'Home',
	action: function() {
		this.redirect('/news/')
	}
})