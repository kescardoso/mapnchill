// Google API:
// Create map function: activateMapSearch.
var map;
var coteAzur = {lat: 43.8691025, lng: 7.2054375};

function activateMapSearch() {

    var markers = [];
    var mapOptions = {
  		zoom: 10,
  		center: coteAzur,
  		mapTypeId: 'roadmap'
    }
    
    infowindow = new google.maps.InfoWindow();
    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
	
  	var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(43.52158150963843, 6.237267333984391),
      new google.maps.LatLng(44.214609002075285, 8.173607666015641));
    map.fitBounds(defaultBounds);
        
    // Create the search box and link it to the UI element.
    var input = /** @type {HTMLInputElement} */(
      document.getElementById('search'));
    map.controls[google.maps.ControlPosition.TOP].push(input);

    var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

    // [START region_getplaces]
    // Listen for the event fired: when user selects an item
    // from the search box, and retrieve matching places for that item on the map.
    google.maps.event.addListener(searchBox, 'places_changed', function() {
        var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }
            for (var i = 0, marker; marker = markers[i]; i++) {
                marker.setMap(null);
            }
    
    // For each place, get icon, name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });
  // [END region_getplaces]
  
  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
}

// Call the function and display the map on the browser.
google.maps.event.addDomListener(window, 'load', activateMapSearch);