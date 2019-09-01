//Assign global variables.
var google;
var map;
var coteAzur = {lat: 43.8691025, lng: 7.2054375};
var mapOptions = {
	zoom: 10,
	center: coteAzur,
	mapTypeId: 'roadmap'
};

// Define custom icons for map markers.
var icons = { 
  yoga: { 
    icon: 'http://www.kescardoso.com/wp-content/uploads/2019/09/yoga-icon-32px.png'
  },
  massage:
  {
    icon: 'http://www.kescardoso.com/wp-content/uploads/2019/09/massage-icon-32px.png'
  }
};

//DATA: Add yoga and massage businesses to map.
var businesses = [
  {
    type: 'yoga',
    icon: 'yoga',
    title: 'Kes Cardoso',
    content: 'http://www.kescardoso.com',
    position: 
    {
      lat: 43.7186366,
      lng: 7.2706853
    }
  }, 
  {
    type: 'yoga',
    icon: 'yoga',
    title: 'Eva Luna',
    content: 'http://facebook.com',
    position: 
    {
      lat: 43.6227815,
      lng: 7.0463002
    }
  },
  {
    type: 'yoga',
    icon: 'yoga',
    title: 'PepitaYoga',
    content: 'http://www.pepitayoga.com',
    position:
    {
      lat: 43.6984938,
      lng: 7.2571126
    }
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
  
  //Load Map.
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  //Add markers and display infowindows on mouseover.
  var InfoWindows = new google.maps.InfoWindow({});
	
	businesses.forEach(function(business) {	
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
	
	// Create the search box and link it to the UI element.
	// Add search box to map, using the Google Place Autocomplete feature:
	// People can enter geographical searches, and the search box will return a
  // pick list containing a mix of places and predicted search terms.

  var input = document.getElementById('search');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP].push(input);
  
  

}
  
// // Call the function and display the map on the browser.
google.maps.event.addDomListener(window, 'load', activateMap);