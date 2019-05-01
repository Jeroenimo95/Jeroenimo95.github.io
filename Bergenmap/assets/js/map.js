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

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: '#2B0F73',
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
      color: '#436877',
    });
  }

  function zoomToFeature(e) {
    map.flyToBounds(e.target.getBounds());
  }

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  }

  //Styles
  var routeStyle = {
    "color": "#436877",
    "weight": 4,
    "opacity": 0.9
  };

  var highlightstyle = {
    "color": '#2B0F73',
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

  var a320icon = new L.Icon({
    iconUrl: 'assets/icons/sas.png',
    iconSize: [55, 74],
    iconAnchor: [27, 37]
  });

  var a320linksicon = new L.Icon({
    iconUrl: 'assets/icons/saslinks.png',
    iconSize: [74, 55],
    iconAnchor: [37, 27]
  });

  var mapOptions = {
    minZoom: 3,
    maxZoom: 24,
    zoomControl: false,
  };

  var map = L.map("map", mapOptions).setView([60.3736, 5.3367], 11).on('click', function() {
    sidebar.close();
  });

  //Maps
  var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 18
  });

  var Thunderforest_Outdoors = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: 'c5d432b20da2466caedd226d7e2cf400',
    minZoom:11,
    maxZoom: 18
  }).addTo(map);

  var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    minZoom:0,
    maxZoom: 12
  }).addTo(map);

  var Thunderforest_Transport = L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: 'c5d432b20da2466caedd226d7e2cf400',
    minZoom:12,
    maxZoom: 18
  });

  var vlucht1 = [
    [52.30365040861058, 4.7756195068359375],
    [52.255339294085786, 4.640007019042969],
    [52.232005085482086, 4.43572998046875],
    [52.32358963210519, 4.30938720703125],
    [52.48696169336169, 4.290161132812499],
    [52.7728625816634, 4.4439697265625],
    [53.15335906512407, 4.9163818359375],
    [54.36775852406841, 5.9765625],
    [55.665193184436035, 6.61376953125],
    [57.38578314962142, 8.06396484375],
    [58.52812515905843, 9.7119140625],
    [59.26307320436287, 10.42877197265625],
    [59.81168490365651, 10.7830810546875],
    [60.06484046010452, 11.00555419921875],
    [60.18472072976749, 11.073875427246093],
    [60.20929260522097, 11.087779998779295],
  ];

  var vlucht2 = [
    [60.18011145467136, 11.110610961914062],
    [60.21696754379138, 11.128463745117187],
    [60.27591932315661, 11.1016845703125],
    [60.32898722274035, 10.976715087890623],
    [60.326947742998414, 7.6025390625],
    [60.133299237518216, 5.718383789062499],
    [60.16952474447549, 5.423126220703125],
    [60.23844781827411, 5.240306854248047],
    [60.28008963247837, 5.222797393798827],
    [60.30022091453318, 5.215780735015869]
  ];

  var amsOsl = L.Marker.movingMarker(vlucht1,
    [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000], {
      icon: a320icon,
      autostart: true,
      loop: true
    }).addTo(map);
  L.polyline(vlucht1, {
    color: 'steelblue',
    dashArray: "25 15",
  }).addTo(map);

  amsOsl.on('end', function() {
    amsOsl.bindPopup('<b>On My Way to Vikinghunting!</b>', {
        closeOnClick: false
      })
      .openPopup();
  });

  var oslBrg = L.Marker.movingMarker(vlucht2,
    [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000], {
      icon: a320linksicon,
      autostart: true,
      loop: true
    }).addTo(map);
  L.polyline(vlucht2, {
    color: 'steelblue',
    dashArray: "25 10",
  }).addTo(map);

  oslBrg.on('end', function() {
    oslBrg.bindPopup('<b>On Our Way to Fjordenhunting!</b>', {
        closeOnClick: false
      })
      .openPopup();
  });

  /*//Custom info
  var geojson;

  var info = L.control();

  info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };

  // method that we will use to update the control based on feature properties passed
  info.update = function(props) {
    this._div.innerHTML = '<h4>Marker info</h4>' + (props ?
      '<b>' + props.Name + '</b><br />' + props.Date + ' people / mi<sup>2</sup>' :
      'Hover over een Marker');
  };

  info.addTo(map);

  function highlightFeature1(e) {
    info.update(layer.feature.properties);
  }

  function resetHighlight1(e) {
    info.update();
  }

  function onEachFeature1(feature, layer) {
    layer.on({
      mouseover: highlightFeature1,
      mouseout: resetHighlight1,
      click: zoomToFeature
    });
  }

  geojson = new L.geoJson(locatieData, {
    onEachFeature: onEachFeature1
  }).addTo(map);
  */
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

  var routes = new L.geoJSON(json_routes, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h3> ' + feature.properties.Name + ' </h3><b> ' + feature.properties.Date + ' </b>');
      layer.on('mouseover', function() {
        layer.openPopup();
      });
      layer.on('mouseout', function() {
        layer.closePopup();
      });
      layer.on('click', function(e) {
        map.flyTo(e.latlng, 13, {
          duration: 1.1
        });
      });
      layer.on({
        click: function populate() {
          document.getElementById('roadtripdiv').innerHTML = "<h3>" + feature.properties.Name + "</h3><br>" + feature.properties.Date + "<br /><b>" + feature.properties.foto1 + "<br /><b>" + feature.properties.foto2 + "<br /><b>" + feature.properties.foto3;
        }
      });
      layer.on('click', function(e) {
        sidebar.open('roadtrip');
      });
    },
    pointToLayer: function(feature, latLng) {
      if (feature.properties.Categorie == "Routes") {
        return new L.Marker(latLng, {
          icon: routeMarker
        });
      }
    }
  }).addTo(map);

  var brake = new L.geoJSON(json_brake, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h3> ' + feature.properties.Name + ' </h3><b> ' + feature.properties.Date + ' </b>');
      layer.on('mouseover', function() {
        layer.openPopup();
      });
      layer.on('mouseout', function() {
        layer.closePopup();
      });
      layer.on('click', function(e) {
        map.flyTo(e.latlng, 13, {
          duration: 1.1
        });
      });
      layer.on({
        click: function populate() {
          document.getElementById('brakediv').innerHTML = "<h3>" + feature.properties.Name + "</h3><br>" + feature.properties.Date + "<br />" + feature.properties.foto1;
        }
      });
      layer.on('click', function(e) {
        sidebar.open('brake');
      });
    },
    pointToLayer: function(feature, latLng) {
      if (feature.properties.Categorie == "Brake") {
        return new L.Marker(latLng, {
          icon: brakeMarker
        });
      }
    }
  }).addTo(map);

  var transport = new L.geoJSON(json_routes, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h3> ' + feature.properties.Name + ' </h3><b> ' + feature.properties.Date + ' </b>');
      layer.on('mouseover', function() {
        layer.openPopup();
      });
      layer.on('mouseout', function() {
        layer.closePopup();
      });
      layer.on('click', function(e) {
        map.flyTo(e.latlng, 13, {
          duration: 1.1
        });
      });
      layer.on({
        click: function populate() {
          document.getElementById('transportdiv').innerHTML = "<h3>" + feature.properties.Name + "</h3><br>" + feature.properties.Date + "<br />" + feature.properties.foto1;
        }
      });
      layer.on('click', function(e) {
        sidebar.open('transport');
      });
    },
    pointToLayer: function(feature, latLng) {
      if (feature.properties.Categorie == "Transport") {
        return new L.Marker(latLng, {
          icon: transportMarker
        });
      }
    }
  }).addTo(map);

  var hiking = new L.geoJSON(json_hiking, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h3> ' + feature.properties.Name + ' </h3><b> ' + feature.properties.Date + ' </b>');
      layer.on('mouseover', function() {
        layer.openPopup();
      });
      layer.on('mouseout', function() {
        layer.closePopup();
      });
      layer.on('click', function(e) {
        map.flyTo(e.latlng, 13, {
          duration: 1.1
        });
      });
      layer.on({
        click: function populate() {
          document.getElementById('hikingdiv').innerHTML = "<h3>" + feature.properties.Name + "</h3><b>" + feature.properties.Date + "<br /><b>" + feature.properties.foto1 + "<br /><b>" + feature.properties.foto2 + "<br /><b>" + feature.properties.foto3;
        }
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

  var siteseeing = new L.geoJSON(json_siteseeing, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h3> ' + feature.properties.Name + ' </h3><b> ' + feature.properties.Date + ' </b>');
      layer.on('mouseover', function() {
        layer.openPopup();
      });
      layer.on('mouseout', function() {
        layer.closePopup();
      });
      layer.on({
        click: function populate() {
          document.getElementById('siteseeingdiv').innerHTML = "<h3>" + feature.properties.Name + "</h3><br>" + feature.properties.Date + "<br />" + feature.properties.foto1;
        }
      });
      layer.on('click', function(e) {
        map.flyTo(e.latlng, 13, {
          duration: 1.1
        });
      });
      layer.on('click', function(e) {
        sidebar.open('siteseeing');
      });
    },
    pointToLayer: function(feature, latLng) {
      if (feature.properties.Categorie == "Siteseeing") {
        return new L.Marker(latLng, {
          icon: siteMarker
        });
      }
    }
  }).addTo(map);

  var monumenten = new L.geoJSON(json_monumenten, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h3> ' + feature.properties.Name + ' </h3><b> ' + feature.properties.Date + ' </b>');
      layer.on('mouseover', function() {
        layer.openPopup();
      });
      layer.on('mouseout', function() {
        layer.closePopup();
      });
      layer.on({
        click: function populate() {
          document.getElementById('monumentdiv').innerHTML = "<h3>" + feature.properties.Name + "</h3><br>" + feature.properties.Date + "<br />" + feature.properties.foto1;
        }
      });
      layer.on('click', function(e) {
        map.flyTo(e.latlng, 13, {
          duration: 1.1
        });
      });
      layer.on('click', function(e) {
        sidebar.open('monument');
      });
    },
    pointToLayer: function(feature, latLng) {
      if (feature.properties.Categorie == "Monument") {
        return new L.Marker(latLng, {
          icon: monumentMarker
        });
      }
    }
  }).addTo(map);

  var fossen = new L.geoJSON(json_fossen, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h3> ' + feature.properties.Name + ' </h3><b> ' + feature.properties.Date + ' </b>');
      layer.on('mouseover', function() {
        layer.openPopup();
      });
      layer.on('mouseout', function() {
        layer.closePopup();
      });
      layer.on({
        click: function populate() {
          document.getElementById('fossendiv').innerHTML = "<h3>" + feature.properties.Name + "</h3><br>" + feature.properties.Date + "<br />" + feature.properties.foto1;
        }
      });
      layer.on('click', function(e) {
        map.flyTo(e.latlng, 13, {
          duration: 1.1
        });
      });
      layer.on('click', function(e) {
        sidebar.open('fossen');
      });
    },
    pointToLayer: function(feature, latLng) {
      if (feature.properties.Categorie == "Fossen") {
        return new L.Marker(latLng, {
          icon: fossenMarker
        });
      }
    }
  }).addTo(map);

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

  Herdla.on('click', function() {
    sidebar.open('roadtrip');
  });

  //Controls
  L.control.scale({
    position: 'bottomright'
  }).addTo(map);

  var sidebar = L.control.sidebar({
      autopan: true, // whether to maintain the centered map point when opening the sidebar
      closeButton: true, // whether t add a close button to the panes
      container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
      position: 'left', // left or right
    }).addTo(map)
    .close();

  var zoom_bar = new L.Control.ZoomBar({
    position: 'bottomright',
  }).addTo(map);

});
