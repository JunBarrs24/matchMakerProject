Polymer({
	is : 'search-results',

	properties : {
		activeuser : {
			type : Object
		},
		activated: {
            type: Boolean,
            observer: '_activationChanged'
        }
	},
	
	_activationChanged: function(newval, oldval) {
        if (newval) { 
            console.log("just activated dashboard");
        }
    },
});
