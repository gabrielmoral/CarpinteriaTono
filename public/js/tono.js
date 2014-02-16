$(document).ready(function () {
    displayMap();
    var $mapContainer = $("#map_container");
    $("#map_canvas").width($mapContainer.width()); 
    $(".swipebox").swipebox();      
});

function displayMap() {
	var mapElem = document.getElementById('map_canvas');
    mapElem.style.display="block";
    var center = new google.maps.LatLng(39.587947,-0.326351);

    var myOptions = {
        zoom: 15,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
  	}
	var map = new google.maps.Map(mapElem, myOptions);
	var marker = new google.maps.Marker({
		position : center		
	});

	marker.setMap(map);

	google.maps.event.addDomListener(window, "resize", function() {
		map.setCenter(center);
        $(mapElem).width($("#map_container").width());
	});
        
}
