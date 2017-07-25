Polymer({
	is : 'user-information',

	properties : {
		user : {
			type : Object
		}
	}
});

$(document).ready(function(){
  $('.slider').slider();
  $('ul.tabs').tabs();
  $('ul.tabs').tabs.swipeable = true;
});