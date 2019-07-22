var map;

// Create map function: activateMapSearch.
function activateMapSearch() {
    var options = {
        center: { lat: 43.3878549, lng: 5.960352 },
        zoom: 9,
        disableDefaultUI: true
    };
    
    map = new google.maps.Map(document.getElementById('map'), options);
    
    // Create the search box and link it to the map.
    var input = /** @type {HTMLInputElement} */(document.getElementById('search'));
    
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var searchBox = new google.maps.places.SearchBox(/** @type {HTMLInputElement} */(input));

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
    });
}

// Call the function and display the map on the browser.
google.maps.event.addDomListener(window, 'load', activateMapSearch);