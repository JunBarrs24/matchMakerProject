Polymer({
	is : 'search-results',
 
	properties : {
		querysearch: {
        	type: String,
        	observer: '_cambioSearchQuery'
        },
        textoABuscar: String
	},
	
	_cambioSearchQuery: function(newval, oldval) {
		if (newval.startsWith('?query=')) {
		  // Quitando el parametro que no necesitamos
	      this.textoABuscar = newval.replace('?query=','');
	      // Agregando los espacios
	      this.textoABuscar = this.textoABuscar.replace(/%20/g, ' ');
	      console.log('El search query es: ' + this.textoABuscar);
		}
    }
});
