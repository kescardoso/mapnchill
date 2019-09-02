// Assign global variables.
var google;
var map;
var coteAzur = {lat: 43.817309, lng: 7.1933086};
// Map Options and Map Controls.
// Code Source: https://developers.google.com/maps/documentation/javascript/controls
// https://developers.google.com/maps/documentation/javascript/controls#Adding_Controls_to_the_Map
var mapOptions = {
	zoom: 10,
	center: coteAzur,
	mapTypeId: 'roadmap',
	zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false
};

// Define custom icons for map markers.
// Code Source: https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0
var icons = { 
  yoga: { 
    icon: 'http://www.kescardoso.com/wp-content/uploads/2019/09/yoga-icon-32px.png'
  },
  massage:
  {
    icon: 'http://www.kescardoso.com/wp-content/uploads/2019/09/massage-icon-32px.png'
  }
};

// DATA: Add yoga and massage businesses to map.
// Code Source: https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0
var features = [
  {
    icon: 'yoga',
    content: '<div id="content"> <strong> <h6><a target="_blank" href="http://www.kescardoso.com">KES CARDOSO : Yoga & Sound</a></h6> <p>Yin-Yang Flow, Hatha Flow, Kundalini Yoga, Yin Yoga Restorative.<br/>Sound Healing Therapy, Sonic Massage.</p> </strong> </div>',
    position: { lat: 43.7186366, lng: 7.2706853 }
  }, 
  {
    icon: 'yoga',
    content: '<div id="content"> <strong> <h6><a target="_blank" href="http://www.pepitayoga.com">Pepita Yoga</a></h6> <p>Hatha Flow, Acro Yoga, Hot Yoga, Power Yoga, Yin Yoga, Pilates.</p> </strong> </div>',
    position: { lat: 43.6984938, lng: 7.2571126 }
  },
  {
    icon: 'yoga',
    content: '<div id="content"> <strong> <h6><a target="_blank" href="https://enso.fr/">Enso Yoga Massena</a></h6> <p>Hatha Yoga, Iyengar, Ashtanga, Vinyasa, Restorative, Pre-natal.</p> </strong> </div>',
    position: { lat: 43.6975126, lng: 7.2654138 }
  },
  {
    icon: 'yoga',
    content: '<div id="content"> <strong> <h6><a target="_blank" href="https://enso.fr/">Enso Yoga Valbonne</a></h6> <p>Hatha Yoga, Iyengar, Ashtanga, Vinyasa, Restorative, Pre-natal.</p> </strong> </div>',
    position: { lat: 43.6227815, lng: 7.0463002 }
  },
  {
    icon: 'yoga',
    content: '<div id="content"> <strong> <h6><a target="_blank" href="http://www.rivierayoga.fr">Riviera Yoga</a></h6> <p>Hatha Yoga, Ashtanga & Vinyasa Yoga, Restorative, Pre/Post-natal.</p> </strong> </div>',
    position: { lat: 43.6997179, lng: 7.2794096 }
  },
  {
    icon: 'yoga',
    content: '<div id="content"> <strong> <h6><a target="_blank" href="https://www.facebook.com/peaceyoganice/">Thousand Bridges</a></h6> <p>Bikram Yoga, Kundalini Yoga, Yin Yoga Restorative.<br/>Sound Healing, Nature Immersion and Retreats.</p> </strong> </div>',
    position: { lat: 44.05472, lng: 7.1189998 }
  },
  
  
  {
    icon: 'massage',
    content: '<div id="content"> <strong> <h6><a target="_blank" href="http://www.bodywork.com">BodyWork by Andrea Daumas</a></h6> <p>Relaxing Massage, Reenergising/Detox Massage, Deep Tissue Massage, Thai Massage, Foot Reflexology.</p> </strong> </div>',
    position: { lat: 43.697206, lng: 7.2552673 }
  },
  {
    icon: 'massage',
    content: '<div id="content"> <strong> <h6><a target="_blank" href="https://rivieramassage.com/">Riviera Massage by Shona Marrs</a></h6> <p>Deep Tissue, Body Sculpting, Swedish, Sports, Acupressure, Thai,<br/>Skin rolling and manual kneading, Passive joint and sensory repatterning.</p> </strong> </div>',
    position: { lat: 43.5810279, lng: 7.1201423 }
  },
];

// Create map.
function activateMap() {
  
  // // Load GeoJson data from map.json.
  // function loadJSON(callback) {   
  //   var xobj = new XMLHttpRequest();
  //       xobj.overrideMimeType("application/json");
  //   xobj.open('GET', 'assets/json/map.json', true);
  //   xobj.onreadystatechange = function () {
  //         if (xobj.readyState == 4 && xobj.status == "200") {
  //           callback(xobj.responseText);
  //         }
  //   };
  //   xobj.send(null); 
  // }
  // var loadedGeoJson;
  // loadJSON(function(response) {
  //   loadedGeoJson = JSON.parse(response);
  //     var geoJSON = JSON.parse(this.responseText);
  //     map.data.addGeoJson(geoJSON );
  //   });
  
  // Load Map.
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  //Add markers and display infowindows on mouseover.
  var InfoWindows = new google.maps.InfoWindow({});
	
	features.forEach(function(business) {	
		var marker = new google.maps.Marker({
		  position: { lat: business.position.lat, lng: business.position.lng },
		  map: map,
		  icon: icons[business.icon].icon,
		  title: business.title
		});
		marker.addListener('mouseover', function() {
		  InfoWindows.open(map, this);
		  InfoWindows.setContent(business.content);
		});
	});
	
	
	// Add search box to map, using the Google Place Autocomplete feature:
	// People can enter geographical searches, and the search box will return a
  // pick list containing a mix of places and predicted search terms.
  // [Code Tutotial from: https://developers.google.com/maps/documentation/javascript/examples/places-searchbox]
  
  // Create the search box and link it to the UI element.
  var input = document.getElementById('search');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP].push(input);
  
  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
  
  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    
    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];
    
    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      
      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

}
  
// Call the function and display the map on the browser.
google.maps.event.addDomListener(window, 'load', activateMap);