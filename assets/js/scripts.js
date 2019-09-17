// DATA: yoga and massage businesses to be added to map.
// Code from: https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0

var features = [

  //YOGA BUSINESSES:
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.kescardoso.com">KES CARDOSO<br/>Yoga & Sound</a></h6> <p><strong>Yoga:</strong> Yin-Yang Balanced Flow, Hatha, Kundalini, Yin/Restorative.<br/><strong>Sound Therapy:</strong> Sound Healing Therapy and Sonic Massage.</p> </div>',
    position: { lat: 43.71875279296885, lng: 7.2729331254959115 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.pepitayoga.com">Pepita Yoga</a></h6> <p>Hatha, Vinyasa, AcroYoga, HotYoga, PowerYoga, Yin/Restorative, Pilates.</p> </div>',
    position: { lat: 43.69852262776876, lng: 7.2591894865036 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://enso.fr/">Enso Yoga Massena</a></h6> <p>Hatha, Iyengar, Ashtanga, Vinyasa, Restorative, Pre-natal.</p> </div>',
    position: { lat: 43.69755689999653, lng: 7.2676920890808105 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://enso.fr/">Enso Yoga Valbonne</a></h6> <p>Hatha, Iyengar, Ashtanga, Vinyasa, Restorative, Pre-natal.</p> </div>',
    position: { lat: 43.62272781889663, lng: 7.04847514629364 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.rivierayoga.fr">Riviera Yoga</a></h6> <p>Hatha, Ashtanga, Vinyasa, Restorative, Pre/Post-natal.</p> </div>',
    position: { lat: 43.69970552613459, lng: 7.2816047072410575 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://www.facebook.com/peaceyoganice/">Thousand Bridges (La Passarelle)</a></h6> <p>Bikram, Kundalini, Yin/Restorative, Sound Healing, Nature Immersion and Retreats.</p> </div>',
    position: { lat: 44.077041901917, lng: 7.121543884277344 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://www.mauna-meditation.com">Mauna Practice Center</a></h6> <p>Meditation, Hatha, Kundalini, Vinyasa, Gasquet, Hormonal Yoga, Sivananda, Kids Yoga, Pilates, Chinese Mouvement</p> </div>',
    position: { lat: 43.60019467439821, lng: 7.093745470046997 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://tigre-yoga.com/en/capsule/le-tigre-monte-carlo/">Le Tigre Monte Carlo</a></h6> <p>Hatha, Vinyasa, Kundalini, Yin/Restorative, Pilates.</p> </div>',
    position: { lat: 43.75085032982795, lng: 7.444299459457397 }
  },

  //MASSAGE BUSINESSES:
  {
    icon: 'massage',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.bodywork.com">BodyWork by Andrea Daumas</a></h6> <p>Relaxing Massage, Reenergising/Detox Massage, Deep Tissue Massage, Thai Massage, Foot Reflexology.</p> </div>',
    position: { lat: 43.69720008098092, lng: 7.257483601570129 }
  },
  {
    icon: 'massage',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://rivieramassage.com/">Riviera Massage by Shona Marrs</a></h6> <p>Deep Tissue, Body Sculpting, Swedish, Sports, Acupressure, Thai, Skin rolling and manual kneading, Passive joint and sensory repatterning.</p> </div>',
    position: { lat: 43.58102233159652, lng: 7.122316360473633 }
  },

  //SOUND THERAPY
  {
    icon: 'soundtherapy',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.kescardoso.com">KES CARDOSO<br/>Yoga & Sound</a></h6> <p><strong>Yoga:</strong> Yin-Yang Balanced Flow, Hatha, Kundalini, Yin/Restorative.<br/><strong>Sound Therapy:</strong> Sound Healing Therapy and Sonic Massage.</p> </div>',
    position: { lat: 43.71873146899887, lng: 7.272777557373047 }
  },

  //OSTEOPATHY
  {
    icon: 'osteopathy',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://lemedecin.fr/osteopathe/le-cannet/johanna-benzaquen/114-boulevard-sadi-carnot/rdv/new/"><p>Johanna Benzaquen (Cannes)</a></h6> <p>114 blvd Sadi Carnot 06110 - LE CANNET <br/>06 61 96 56 54</p> </div>',
    position: { lat: 43.56541224689357, lng: 7.016299366950988 }
  },
  {
    icon: 'osteopathy',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://www.doctolib.fr/osteopathe/nice/johanna-benzaquen">Johanna Benzaquen (Nice)</a></h6> <p>Johanna Benzaquen (Nice)</a></h6> <p>10 rue Alphonse Karr 06000 - Nice <br/>06 61 96 56 54</p> </div>',
    position: { lat: 43.699100505623726, lng: 7.26568579673767 }
  }

];



// GLOBAL SETTINGS
// Define variables.
var google;
var map;

// Define custom map options.
// Tutorial from: https://developers.google.com/maps/documentation/javascript/controls
// Tutorial from: https://developers.google.com/maps/documentation/javascript/controls#Adding_Controls_to_the_Map
var coteAzur = { lat: 43.8416215, lng: 7.2062602 };
var mapOptions = {
  zoom: 11,
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
// Code from: https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0
var icons = {
  yoga: {
    icon: 'assets/images/icon-yoga.png'
  },
  massage: {
    icon: 'assets/images/icon-massage.png'
  },
  soundtherapy: {
    icon: 'assets/images/icon-sound.png'
  },
  osteopathy: {
    icon: 'assets/images/icon-osteo.png'
  },
  pilates: {
    icon: 'assets/images/icon-pilates.png'
  },
  acupuncture: {
    icon: 'assets/images/icon-acupu.png'
  }
};



// GOOGLE MAPS API INSTALLATION.
// Create map.
function activateMap() {

  // Load Map.
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Add markers and display infowindows on mouseover.
  // Code from: https://codepen.io/olivertaylor/pen/BWWNeb?editors=0010#0
  var InfoWindows = new google.maps.InfoWindow({
    maxWidth: 280
  });

  features.forEach(function(business) {
    var marker = new google.maps.Marker({
      position: { lat: business.position.lat, lng: business.position.lng },
      map: map,
      icon: icons[business.icon].icon,
      title: business.title
    });
    marker.addListener('click', function() {
      InfoWindows.open(map, this);
      InfoWindows.setContent(business.content);
    });
  });

  // Add search and link it to the UI element using the Google Place Autocomplete feature:
  // people can enter geographical searches, and the search box will return a
  // pick list containing a mix of places and predicted search terms.
  // Tutorial from: https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
  var input = document.getElementById('search');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];

  // Listen for the event fired when the user selects a prediction and retrieve more details for that place.
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

      // Converting MarkerImage objects to type Icon
      var icon = {
        url: place.icon,
        scaledSize: new google.maps.Size(24, 24),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location,
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      }
      else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

}

// Call the function and display the map on the browser.
google.maps.event.addDomListener(window, 'load', activateMap);
