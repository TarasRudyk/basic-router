Router.route('AboutUs', {
	action: function () {
		console.log('ACTION');
		this.render();
	},
	onBeforeAction: function() {
		console.log('BEFORE');
		this.next();
	}, 

	onAfterAction: function() {
		console.log('AFTER');
}, 
});