Polymer({
	is : 'list-element-matchmaker',

	properties : {
		userslist : {
			type : Array
		},
		filtros : {
			type: Array
		}
	},

    clickOnIcon: function (ev) {
    },
    
    ready: function() {
    	this.filtros = [{
    		nombre: "Filtro 1",
    		campo: "field 1"},
    		{
        		nombre: "Filtro 2",
        		campo: "field 2"},
        		{
            		nombre: "Filtro 3",
            		campo: "field 3"},
    		
    	];
    	console.log(this.filtros.length);
    	$('.collapsible').collapsible();
    }
});