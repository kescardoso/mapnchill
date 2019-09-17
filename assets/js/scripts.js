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
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.yogayoganice.fr">Yoga Yoga Nice</a></h6> <p>Hatha, Vinyasa, Ashtanga, Nidra, Yoga for seniors, Meditation</p> </div>',
    position: { lat: 43.70842722671067, lng: 7.261120676994324 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.yogabikramnice.com">Yoga Bikram Nice</a></h6> <p>Bikram</p> </div>',
    position: { lat: 43.6951173015327, lng: 7.2870227694511405 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.yoganice.fr">Yoganice</a></h6> <p>Hatha Yoga</p> </div>',
    position: { lat: 43.7186366, lng: 7.272874 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.learnpoweryoga.com/">Bertas Yoga by the Sea</a></h6> <p>Open Air Power Yoga</p> </div>',
    position: { lat: 43.694725560257744, lng: 7.280743718147279 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://yoga-mala-english-speaking-yoga-nice-french-riviera.business.site/">Yuko & Nick</a></h6> <p>All levels and Sports Yoga, group, private and outdoor classes</p> </div>',
    position: { lat: 43.69934484156495, lng: 7.279102206230164 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://yogalogy.fr">Yogalogy</a></h6> <p>Hatha Yoga</p> </div>',
    position: { lat: 43.700329931926724, lng: 7.286800146102905 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://yoga-nice.com">Art Yoga</a></h6> <p>Hatha, Yin, Dharma Flow, Kids Yoga, Vinyasa, Alignment</p> </div>',
    position: { lat: 43.70201114128295, lng: 7.276626527309417 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://futureform.fr">Future Form</a></h6> <p>Ashtanga, Vinyasa, Aerial Yoga, Pilates, Ballet</p> </div>',
    position: { lat: 43.6978361481798, lng: 7.268046140670776 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://pranayoga-nice.com/">Atelier des Souffles</a></h6> <p>Yoga and Ayurveda</p> </div>',
    position: { lat: 43.7029244428666, lng: 7.276256382465362 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.anuttara.com//">Yoga Iyengar Nice</a></h6> <p>Iyengar</p> </div>',
    position: { lat: 43.70355851030545, lng: 7.291386723518371 }
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
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://www.vinyasayogastudio.com/">Vinyasa Yoga Studio</a></h6> <p>Hatha and Vinyasa</p> </div>',
    position: { lat: 43.552859838633005, lng: 7.018096446990967 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://calmyoga.fr/">Calm Yoga</a></h6> <p>Ashtanga, Mysore, Vinyasa, Yin/Restorative</p> </div>',
    position: { lat: 43.55510500302328, lng: 7.037148177623749 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://ashtangayogaantibes.com/">Ashtanga Yoga Antibes</a></h6> <p>Ashtanga, Mysore, Vinyasa, Yin, Pranayama, Meditation</p> </div>',
    position: { lat: 43.60153878219934, lng: 7.0611512660980225 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://samasthitihouseofyoga.com/">Samasthiti House Of Yoga</a></h6> <p>Hatha, Vinyasa, Yin, Chi Gong, Ashtanga, Power Yoga</p> </div>',
    position: { lat: 43.57992841668282, lng: 7.125339210033417 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://yoga-antibes.fr/">Yam Yoga</a></h6> <p>Hatha, Vinyasa, Yin, Ashtanga, Mysore</p> </div>',
    position: { lat: 43.58262722230181, lng: 7.116302847862244 }
  },
  {
    icon: 'yoga',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://www.chival.fr/">Chival: Yoga, Permaculture, Animaux</a></h6> <p>Hatha, Yin, Yoga of Sound</p> </div>',
    position: { lat: 43.9372096, lng: 7.083968 }
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
  {
    icon: 'massage',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://californianmassage.com/">Californian Massage with Loris Castagnoli</a></h6> </div>',
    position: { lat: 43.700137956925175, lng: 7.282092869281768 }
  },
  {
    icon: 'massage',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://keitaonozaki.com/">Massage Zen with Keita Onozaki</a></h6> <p>Japanese Shiatsu and Thai Traditional Massage</p></div>',
    position: { lat: 43.69658339963281, lng: 7.291351854801178 }
  },
  {
    icon: 'massage',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://ayurveda-nice.com/">Rinascita Ayurveda Center</a></h6> <p>Ayurvedic Massage</p></div>',
    position: { lat: 43.699404955810564, lng: 7.253664135932922 }
  },
  {
    icon: 'massage',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://ayurveda-nice.com/">Rinascita Ayurveda Center</a></h6> <p>Ayurvedic Massage</p></div>',
    position: { lat: 43.699404955810564, lng: 7.253664135932922 }
  },
  {
    icon: 'massage',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.ayurvedanice.com/">Ayurveda Nice - Fabio di Giovanni</a></h6> <p>Ayurvedic Massage and Treatments</p></div>',
    position: { lat: 43.710253620469004, lng: 7.26249396800995 }
  },

  //SOUND THERAPY
  {
    icon: 'soundtherapy',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.kescardoso.com">KES CARDOSO<br/>Yoga & Sound</a></h6> <p><strong>Yoga:</strong> Yin-Yang Balanced Flow, Hatha, Kundalini, Yin/Restorative.<br/><strong>Sound Therapy:</strong> Sound Healing Therapy and Sonic Massage.</p> </div>',
    position: { lat: 43.71873146899887, lng: 7.272777557373047 }
  },
  {
    icon: 'soundtherapy',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://www.vibrationssonores.com/">La Mètis</a></h6> <p>Sound Healing and Naturopathy</p> </div>',
    position: { lat: 43.7009737223943, lng: 7.289299964904785 }
  },
  {
    icon: 'soundtherapy',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.lametisnice.com">Aleksandra Sarnowska</a></h6> <p>Sonology and Sound Therapy</p> </div>',
    position: { lat: 43.69528214239333, lng: 7.254275679588318 }
  },

  //OSTEOPATHY
  {
    icon: 'osteopathy',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://osteopathebutet.fr"><p>Camille Butet</a></h6> <p>5 Cours Saleya, 06000 Nice, France<br/>+33 6 08 01 77 96</p> </div>',
    position: { lat: 43.695712665798, lng: 7.275564372539521 }
  },
  {
    icon: 'osteopathy',
    content: '<div id="info-content"> <h6><a target="_blank" href="http://www.osteo-massage-nice.com/"><p>Nicolas Eisen</a></h6> <p>4 Rue Adolphe de Rothschild, 06000 Nice, France<br/>+33 7 87 98 97 03</p> </div>',
    position: { lat: 43.703292862072416, lng: 7.273710966110229 }
  },
  {
    icon: 'osteopathy',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://cabinet-osteopathie-nice.com/"><p>Chloé Le Brenn Robin</a></h6> <p>1 Avenue Comba, 06000 Nice, France<br/>+33 4 93 84 04 69</p> </div>',
    position: { lat: 43.700678975809275, lng: 7.2556972503662 }
  },
  {
    icon: 'osteopathy',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://lemedecin.fr/osteopathe/le-cannet/johanna-benzaquen/114-boulevard-sadi-carnot/rdv/new/"><p>Johanna Benzaquen (Cannes)</a></h6> <p>114 blvd Sadi Carnot 06110 - LE CANNET <br/>+33 6 61 96 56 54</p> </div>',
    position: { lat: 43.56541224689357, lng: 7.016299366950988 }
  },
  {
    icon: 'osteopathy',
    content: '<div id="info-content"> <h6><a target="_blank" href="https://www.doctolib.fr/osteopathe/nice/johanna-benzaquen">Johanna Benzaquen (Nice)</a></h6> <p>Johanna Benzaquen (Nice)</a></h6> <p>10 rue Alphonse Karr 06000 - Nice <br/>+33 6 61 96 56 54</p> </div>',
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
