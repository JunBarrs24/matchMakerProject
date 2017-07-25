Polymer({
	is : 'drawer-matchmaker',

	properties : {
		activeuser : {
			type : Object
		},
		menuoptions : {
			type : Array
		}
	},

	_toggleMenuOption : function(event) {
		const category = event.target.dataset.item;
		// getting all the values
		for ( var i in this.menuoptions) {
			if (this.menuoptions[i].categoria == category) {
				const element = document
						.getElementById(this.menuoptions[i].name);
				if (element.style.display == "flex") {
					element.style.display = "none";
				} else {
					element.style.display = "flex";
				}
			}
		}
	}
});