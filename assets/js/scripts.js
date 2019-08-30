// Google API



// Create map
function activateMap() {
  
  var map;
  var coteAzur = {lat: 43.8691025, lng: 7.2054375};
  var mapOptions = {
		zoom: 10,
		center: coteAzur,
		mapTypeId: 'roadmap'
  }
  
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
  
// // Call the function and display the map on the browser.
google.maps.event.addDomListener(window, 'load', activateMap);