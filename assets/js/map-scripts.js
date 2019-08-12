// Google API:

var map;
var service;
var infowindow;

// Create map function: activateMapSearch.
function activateMapSearch() {
    
    var coteAzur = new google.maps.LatLng(43.5587661,6.354539);
    var markers = [];
    
    infowindow = new google.maps.InfoWindow();
    
    map = new google.maps.Map(document.getElementById('map'),
        {center: coteAzur, zoom: 9, disableDefaultUI: true}
    );
    
    // Display yoga services with markers on the map.    
    var request = {
        location: center,
        radius: 10000,
        types: ['yoga']
    };
    
    var service = new google.maps.places.PlacesService(map);
    
    service.nearbySearch(request, callback);
}

// Callback function: returns good results avoiding errors.
function callback(results, status) {
    if(status == google.maps.places.PlacesServicesStatus.OK){
        for (var i = 0; i < results.length; i++){
            createMarker(results[i]);
        }
    }
}

// createMarker function: display markers on the map for yoga servcies.
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
}

// Call the function and display the map on the browser.
google.maps.event.addDomListener(window, 'load', activateMapSearch);