// // Google API:

// var map;
// var service;
// var infowindow;

// // Create map function: activateMapSearch.
// function activateMapSearch() {
    
//     var coteAzur = new google.maps.LatLng(43.5587661,6.354539);
//     var markers = [];
    
//     infowindow = new google.maps.InfoWindow();
    
//     map = new google.maps.Map(document.getElementById('map'),
//         {center: coteAzur, zoom: 9, disableDefaultUI: true}
//     );
    
//     // Display yoga services with markers on the map.    
//     var request = {
//         location: center,
//         radius: 10000,
//         types: ['yoga']
//     };
    
//     var service = new google.maps.places.PlacesService(map);
    
//     service.nearbySearch(request, callback);
// }

// // Callback function: returns good results avoiding errors.
// function callback(results, status) {
//     if(status == google.maps.places.PlacesServicesStatus.OK){
//         for (var i = 0; i < results.length; i++){
//             createMarker(results[i]);
//         }
//     }
// }

// // createMarker function: display markers on the map for yoga servcies.
// function createMarker(place) {
//     var placeLoc = place.geometry.location;
//     var marker = new google.maps.Marker({
//         map: map,
//         position: place.geometry.location
//     });
// }

// // Call the function and display the map on the browser.
// google.maps.event.addDomListener(window, 'load', activateMapSearch);


// Escapes HTML characters in a template literal string, to prevent XSS.
// See https://www.owasp.org/index.php/XSS_%28Cross_Site_Scripting%29_Prevention_Cheat_Sheet#RULE_.231_-_HTML_Escape_Before_Inserting_Untrusted_Data_into_HTML_Element_Content
function sanitizeHTML(strings) {
  const entities = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};
  let result = strings[0];
  for (let i = 1; i < arguments.length; i++) {
    result += String(arguments[i]).replace(/[&<>'"]/g, (char) => {
      return entities[char];
    });
    result += strings[i];
  }
  return result;
}

function activateMapSearch() {

  // Create the map.
  const map = new google.maps.Map(document.getElementsByClassName('map')[0], {
    zoom: 9,
    center: {lat: 43.5587661, lng: 6.354539},
  });

  // Load the GeoJSON data onto the map.
  map.data.loadGeoJson('assets/json/yoga-mass.json');
  
  // Define the custom marker icons, using the store's "category".
  map.data.setStyle(feature => {
    return {
      icon: {
        url: `img/icon_${feature.getProperty('category')}.png`,
        scaledSize: new google.maps.Size(64, 64)
      }
    };
  });
  
  const apiKey = 'AIzaSyBmNn5vKRp_5ZR_NBvqMtN-IWyVJeCafTk';
  const infoWindow = new google.maps.InfoWindow();
  infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});

  // Show the information for a store when its marker is clicked.
  map.data.addListener('click', event => {

    const category = event.feature.getProperty('category');
    const name = event.feature.getProperty('name');
    const services = event.feature.getProperty('services');
    const address = event.feature.getProperty('address');
    const website = event.feature.getProperty('website');
    const position = event.feature.getGeometry().get();
    const content = sanitizeHTML`
      <img style="float:left; width:200px; margin-top:30px" src="img/logo_${category}.png">
      <div style="margin-left:220px; margin-bottom:20px;">
        <h2>${name}</h2><p>${address}</p>
        <p><b>Available services:</b> ${services}<br/></p>
        <p><b>Website:</b> ${website}<br/></p>
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
    `;

    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.open(map);
  });

}