//Assign global variables
var google;
var map;
var coteAzur = {lat: 43.8691025, lng: 7.2054375};
var mapOptions = {
	zoom: 10,
	center: coteAzur,
	mapTypeId: 'roadmap'
};
// Define custom map markers
var icons = {
  yogaIcon: {
    icon: 'assets/images/yoga-icon.png'
  },
  massageIcon: {
    icon: 'assets/images/massage-icon.png'
  }
};


// Create map
function activateMap() {
  
  // // Load GeoJson data from map.json
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
    
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
  
// // Call the function and display the map on the browser.
google.maps.event.addDomListener(window, 'load', activateMap);