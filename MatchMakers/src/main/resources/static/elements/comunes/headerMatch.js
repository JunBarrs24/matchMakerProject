Polymer({
	is : 'header-matchmaker',

	properties : {
		activeuser : {
			type : Object
		}
	},
	
	activeSearchBar: function (ev) {
		$('#search-field-wrapper').addClass('search-active');
	},
	
	deActiveSearchBar: function (ev) {
		$('#search-field-wrapper').removeClass('search-active');
	},
	keypressHandler: function(event, detail, sender) {
		if(event.code == 'Enter') {
			let textToSearch = $('#input-search-field-global')[0].value;
			textToSearch = textToSearch.replace(/ /g, '%20');
			window.location.href = "#/search/?query="+textToSearch;
		}
    }
});


