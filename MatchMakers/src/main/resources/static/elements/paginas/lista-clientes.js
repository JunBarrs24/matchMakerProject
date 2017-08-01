Polymer({
	is : 'lista-clientes',

	properties : {
		userslist : {
			type : Array
		},
		filtros : {
			type: Array
		},
		filtrosText: {
			type: String
		},
		orderMode: {
			type: String
		},
		orderOptions: {
			type: Array
		},
		activated: {
            type: Boolean,
            observer: '_activationChanged'
        },
        tipocliente: {
        	type: String,
        	observer: '_cambioTipoCliente'
        }
	},
	
	_activationChanged: function(newval, oldval) {
        if (newval) {
            console.log("just activated, el tipo es: " + this.tipocliente);
        }
    },
	
	_changeOrderMode: function (ev) {
		this.orderMode = ev.currentTarget.dataOption;
	},

    clickOnIcon: function (ev) {
      const filtroEliminado = ev.currentTarget.dataFiltro;
      var index = this.filtros.indexOf(filtroEliminado);
      if (index > -1) {
    	  this.filtros.splice(index, 1);
      }
      if (this.filtros.length > 0){
    	  this.filtrosText = "Filtros:";
      } else {
    	  this.filtrosText = "Sin filtros seleccionados";
      }
      
    },
    
    _hayFiltros: function() {
    	if (this.filtros) {
    	  return this.filtros.length > 0;
    	}
    	return false;
    },
    
    onFocus: function(event) {
        console.log("Esta madre cambio bish!, es clientes");
    },
    
    handleListOfUsersResponse: function (data) {
        console.log('Calling this data bish');
    },
    
    _cambioTipoCliente: function(newval, oldval) {
    	console.log('Cambio el tipo del cliente');
    	console.log(newval);
    	//Aqui con newval ejecutamos el query para traer a los clientes
    },
    
    ready: function() {

	  this.filtros = [ {
			nombre : "Filtro 1",
			campo : "field 1"
		}, {
			nombre : "Filtro 2",
			campo : "field 2"
		}, {
			nombre : "Filtro 3",
			campo : "field 2"
		},

		];
	   this.orderOptions = ["Nombre","Apellido","Edad","Encuentros"];
	   //The order is the first one by default
	   this.orderMode = this.orderOptions[0];
       this.filtrosText = "Sin filtros seleccionados";
       $('.collapsible').collapsible();       
    }
});