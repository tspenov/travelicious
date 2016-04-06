$(function(){
	var lat =  41.9027835,
        lng = 12.4963655;

	var mapOptions = {           
            center: new google.maps.LatLng(lat, lng),

            zoom: 1,           
            mapTypeId: google.maps.MapTypeId.ROADMAP         
    };

	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

	var input = document.getElementById('search');         
    var autocomplete = new google.maps.places.Autocomplete(input, {
        types: ["geocode"]
    });

    //autocomplete.bindTo('bounds', map);
});
