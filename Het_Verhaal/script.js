$(document).ready(function() {
  //Handy website
  //https://labs.easyblog.it/maps/
  //https://fontawesome.bootstrapcheatsheets.com/

  //Styles
  var LijnStyle = {
    "color": "#8bba9f",
    "weight": 5,
    "opacity": 0.6
  };

  var VerhaallijnStyle = {
    "color": "#7fad7f",
    "weight": 5,
    "opacity": 0.6
  };

  var FietsStyle = {
    "color": "#f59842",
    "weight": 2,
    "opacity": 1,
    "dashArray": '5',
  };

  var WandelStyle = {
    "color": "#1c1c1c",
    "weight": 2,
    "opacity": 1,
    "dashArray": '5',
  };

  var mapOptions = {
    minZoom: 11,
    maxZoom: 24,
    zoomControl: false,
  };

  var map = L.map("map", mapOptions).setView([51.631977, 5.519686], 14);

  //Controls
  map.on('click', function() {
    sidebar.close();
  });

  var sidebar = L.control.sidebar({
      container: 'sidebar'
    })
    .addTo(map)
    .open('home');

  //MAPS
  var osmUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
  var stratenUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';

  var osmAttrib = '&copy; <a href="https://www.openstreetkaart.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
  var stratenAttrib = 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012';

  var osm = new L.TileLayer(osmUrl, {
    attribution: osmAttrib
  });
  var straten = new L.TileLayer(stratenUrl, {
    attribution: stratenAttrib
  });

  var mapBox = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiamVyb2VuaW1vOTUiLCJhIjoiY2p3bHp5a3NiMGFhdzQzbXdxdHUyNzd2diJ9.K1M6k-RRvP49aTajfGxqMA'
  });

  map.addLayer(mapBox);

  //Layers
  var bounds_group = new L.featureGroup([]);
  var img_WineryHerbsplattegrond = 'img/Plattegrond_WH.png';
  var img_bounds_WineryHerbsplattegrond = [
    [51.60438656606835, 5.4099610135234615],
    [51.60609895231536, 5.414622058159905]
  ];
  var layer_WineryHerbsplattegrond = new L.imageOverlay(img_WineryHerbsplattegrond, img_bounds_WineryHerbsplattegrond);
  bounds_group.addLayer(layer_WineryHerbsplattegrond);

  map.on("zoomend", function(e) {
    /*if (map.getZoom() <= 18 && map.getZoom() >= 7) {
      map.addLayer(lijnenLaag);
    } else if (map.getZoom() > 16 || map.getZoom() < 7) {
      map.removeLayer(lijnenLaag);
    }*/
    if (map.getZoom() <= 24 && map.getZoom() >= 16) {
      map.addLayer(layer_WineryHerbsplattegrond);
    } else if (map.getZoom() > 19 || map.getZoom() < 16) {
      map.removeLayer(layer_WineryHerbsplattegrond);
    }
  });

  var verhaallijnen = new L.GeoJSON(json_verhaallijnen, {
    style: VerhaallijnStyle,
  });
  map.addLayer(verhaallijnen);

  var lijnenLaag = new L.GeoJSON(json_Lijnen, {
    style: LijnStyle,
  });

  var locatieLaag = new L.GeoJSON(json_locaties, {
    pointToLayer: function(feature, latlng) {
      var smallIcon = L.icon({
        iconSize: [27, 27],
        iconAnchor: [13, 27],
        popupAnchor: [1, -24],
        iconUrl: 'img/' + feature.properties.text + '.png'
      });

      return L.marker(latlng, {
        icon: smallIcon
      });
    },
    onEachFeature: function(feature, layer) {
      popupOptions = {
        maxWidth: 600
      };
      layer.bindPopup('<h4>' + feature.properties.Name + '</h4>');
    }
  }).addTo(map);

  var fietsLaag = new L.GeoJSON(json_fiets, {
    style: FietsStyle,
  });
  map.addLayer(fietsLaag);

  var wandelLaag = new L.GeoJSON(json_wandel, {
    style: WandelStyle,
  });
  map.addLayer(wandelLaag);

  var zoom_bar = new L.Control.ZoomBar({
    position: 'bottomright',
  }).addTo(map);

  var lc = L.control.locate({
    position: 'bottomright',
    icon: 'fa fa-dot-circle-o',
    strings: {
      title: "Laat mijn huidige locatie zien!"
    }
  }).addTo(map);

  //Layer control
  var achtergronden = {
    'Mapbox': mapBox,
    'Zwart Wit': osm,
    'Straten': straten
  };
  var overlayLagen = {
    'Fietsroute': fietsLaag,
    'Wandelroute': wandelLaag,
    'Locaties': locatieLaag,
    'Lijnen': verhaallijnen,
    'labyint Lijnen': lijnenLaag,
    'Plattegrond W&H': layer_WineryHerbsplattegrond
  };

  var lagenSwitcher = new L.Control.Layers(achtergronden, overlayLagen, {
    position: 'topright',

  });
  map.addControl(lagenSwitcher);


});
