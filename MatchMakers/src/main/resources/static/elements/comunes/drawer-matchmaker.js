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
		const categoria = event.target.dataset.item;
		for (var i in this.menuoptions) {
		  if (this.menuoptions[i].categoria == categoria) {
		      if (this.menuoptions[i].seleccionado) {
		    	  this.menuoptions[i].seleccionado =
		    		  !this.menuoptions[i].seleccionado;
		      } else  {
		    	  this.menuoptions[i].seleccionado = true;
		      }
		  }
		}
	}
});