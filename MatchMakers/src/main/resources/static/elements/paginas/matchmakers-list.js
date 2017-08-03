Polymer({
	is : 'matchmakers-list',

	properties : {
		matchmakerslist : {
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
		}
	},
	
	attached: function () {
        this.matchmakerslist = [];
    },
	
	handleListResponse: function (e) {
		this.matchmakerslist = e.detail.response;
	    console.log('Te chingas, '+e.detail.response);
	},
});