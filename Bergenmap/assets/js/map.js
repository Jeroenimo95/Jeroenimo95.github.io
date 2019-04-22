$(document).ready(function() {
  //Handy website
  //https://labs.easyblog.it/maps/
  //https://fontawesome.bootstrapcheatsheets.com/

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  //Controls
  var routeStyle = {
    "color": "#7ca5b6",
    "weight": 4,
    "opacity": 0.9
  };

  var highlightstyle = {
    "color": '#436877',
    "weight": 5,
  };

  // Creates a red marker with the coffee icon
  var wandelMarker = L.AwesomeMarkers.icon({
    icon: 'hiking',
    prefix: 'fa',
    markerColor: 'darkred',
    iconColor: 'white'
  });

  var monumentMarker = L.AwesomeMarkers.icon({
    icon: 'university',
    prefix: 'fa',
    markerColor: 'darkred',
    iconColor: 'white'
  });

  var siteMarker = L.AwesomeMarkers.icon({
    icon: 'binoculars',
    prefix: 'fa',
    markerColor: 'darkred',
    iconColor: 'white'
  });

  var homeMarker = L.AwesomeMarkers.icon({
    icon: 'home',
    prefix: 'fa',
    markerColor: 'darkred',
    iconColor: 'white'
  });

  var transportMarker = L.AwesomeMarkers.icon({
    icon: 'ship',
    prefix: 'fa',
    markerColor: 'darkred',
    iconColor: 'white'
  });

  var brakeMarker = L.AwesomeMarkers.icon({
    icon: 'parking',
    prefix: 'fa',
    markerColor: 'darkred',
    iconColor: 'white'
  });

  var fossenMarker = L.AwesomeMarkers.icon({
    icon: 'water',
    prefix: 'fa',
    markerColor: 'darkred',
    iconColor: 'white'
  });

  var routeMarker = L.AwesomeMarkers.icon({
    icon: 'route',
    prefix: 'fa',
    markerColor: 'darkred',
    iconColor: 'white'
  });

  var mapOptions = {
    minZoom: 8,
    maxZoom: 24,
    zoomControl: false,
  };

  var map = L.map("map", mapOptions).setView([60.3736, 5.3367], 11);

  var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 18
  }).addTo(map);

  map.on('click', function() {
    sidebar.close();
  });

  var sidebar = L.control.sidebar({
      autopan: true, // whether to maintain the centered map point when opening the sidebar
      closeButton: true, // whether t add a close button to the panes
      container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
      position: 'left', // left or right
    }).addTo(map)
    .open('home');

  L.control.scale({
    position: 'bottomright'
  }).addTo(map);

  var zoom_bar = new L.Control.ZoomBar({
    position: 'bottomright',
  }).addTo(map);

  /*var locations = new L.geoJSON(json_locaties, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h2> ' + feature.properties.Name + ' </h2><b> ' + feature.properties.Date + ' </b>');
      layer.on('mouseover', function() {
        layer.openPopup();
      });
      layer.on('mouseout', function() {
        layer.closePopup();
      });
      layer.on({
        click: function populate() {
          document.getElementById('externaldiv').innerHTML = "<h1>" + feature.properties.Name + "</h1><br>" + feature.properties.Date + "<br />" + feature.properties.foto1;
        }
      });
      layer.on('click', function(e) {
        map.flyTo(e.latlng, 13, {
          duration: 1.1
        });
      });
      layer.on('click', function(e) {
        sidebar.open('hiking');
      });
    },
    pointToLayer: function(feature, latLng) {
      if (feature.properties.Categorie == "Wandeling") {
        return new L.Marker(latLng, {
          icon: wandelMarker
        });

      }
      if (feature.properties.Categorie == "Monument") {
        return new L.Marker(latLng, {
          icon: monumentMarker
        });

      }
      if (feature.properties.Categorie == "Brake") {
        return new L.Marker(latLng, {
          icon: brakeMarker
        });

      }
      if (feature.properties.Categorie == "Siteseeing") {
        return new L.Marker(latLng, {
          icon: siteMarker
        });

      }
      if (feature.properties.Categorie == "Home") {
        return new L.Marker(latLng, {
          icon: homeMarker
        });

      }
      if (feature.properties.Categorie == "Fossen") {
        return new L.Marker(latLng, {
          icon: fossenMarker
        });

      }
      if (feature.properties.Categorie == "Transport") {
        return new L.Marker(latLng, {
          icon: transportMarker
        });

      }
      if (feature.properties.Categorie == "Scenic Route") {
        return new L.Marker(latLng, {
          icon: routeMarker
        });


      }
    }
  }).addTo(map);*/

  var hiking = new L.geoJSON(json_hiking, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h2> ' + feature.properties.Name + ' </h2><b> ' + feature.properties.Date + ' </b>');
      layer.on('mouseover', function() {
        layer.openPopup();
      });
      layer.on('mouseout', function() {
        layer.closePopup();
      });
      layer.on({
        click: function populate() {
          document.getElementById('hikingdiv').innerHTML = "<h1>" + feature.properties.Name + "</h1><br>" + feature.properties.Date + "<br />" + feature.properties.foto1;
        }
      });
      layer.on('click', function(e) {
        map.flyTo(e.latlng, 13, {
          duration: 1.1
        });
      });
      layer.on('click', function(e) {
        sidebar.open('hiking');
      });
    },
    pointToLayer: function(feature, latLng) {
      if (feature.properties.Categorie == "Wandeling") {
        return new L.Marker(latLng, {
          icon: wandelMarker
        });
      }
    }
  }).addTo(map);

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: '#436877',
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  function resetHighlight(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      opacity: 0.9,
      color: '#7ca5b6',
    });
  }

  function zoomToFeature(e) {
    map.flyToBounds(e.target.getBounds());
  }

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
    });
  }

  var Eidfjord = new L.geoJSON(json_eidfjord, {
    style: routeStyle,
    onEachFeature: onEachFeature
  }).addTo(map);

  var Rosendal = new L.geoJSON(json_rosendal, {
    style: routeStyle,
    onEachFeature: onEachFeature
  }).addTo(map);

  var Herdla = new L.geoJSON(json_herdla, {
    style: routeStyle,
    onEachFeature: onEachFeature
  }).addTo(map);

  var Gaulat = new L.geoJSON(json_gaulat, {
    style: routeStyle,
    onEachFeature: onEachFeature
  }).addTo(map);

  //var routeGroup = L.layerGroup([Eidfjord, Rosendal, Herdla, Gaulat]);

  //Controls
  /*var sidebar = L.control.sidebar({
    autopan: true, // whether to maintain the centered map point when opening the sidebar
    closeButton: true, // whether t add a close button to the panes
    container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
    position: 'left', // left or right
  }).addTo(map);
  sidebar
    .addPanel({
      id: 'js-api',
      tab: '<i class="fa fa-gear"></i>',
      title: 'JS API',
      pane: '<p>The Javascript API allows to dynamically create or modify the panel state.<p/><p><button onclick="sidebar.enablePanel(\'mail\')">enable mails panel</button><button onclick="sidebar.disablePanel(\'mail\')">disable mails panel</button></p><p><button onclick="addUser()">add user</button></b>',
    })*/



});
