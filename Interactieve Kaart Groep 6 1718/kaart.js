$(document).ready(function() {
  var mapOptions = {
    zoomControl: true,
    zoom: 10,
    center: [51.88, 5.2]
  };
  var kaart = L.map("kaart", mapOptions, {
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: 'topleft'
    }
  });
  var Legend = new L.Control.Legend({
    position: 'topleft',
    collapsed: true,
    controlButton: {
      title: "Legend"
    }
  });
  kaart.addControl(Legend);
  $(".legend-container").append($("#legend"));
  $(".legend-toggle").append("<i class='legend-toggle-icon fa fa-info fa-2x' style='color: #000'></i>");
  var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
  });
  kaart.addLayer(Esri_WorldGrayCanvas);
  var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
  });
  var dlmbokIcon = new L.Icon({
    iconUrl: 'img/Icons/DLMBok_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var dlmhaanIcon = new L.Icon({
    iconUrl: 'img/Icons/DLMHaan_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var schuurIcon = new L.Icon({
    iconUrl: 'img/Icons/boerderij_50px.png'
  })
  var dlmstierIcon = new L.Icon({
    iconUrl: 'img/Icons/DLMStier_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var dlmtruckIcon = new L.Icon({
    iconUrl: 'img/Icons/dlmtruck_50px.png',
    iconSize: [78, 41],
    iconAnchor: [38, 41],
    popupAnchor: [4, -44]
  });
  var dlmkantoorIcon = new L.Icon({
    iconUrl: 'img/Icons/Kantoor_1_75px.png',
    iconAnchor: [30, 76],
    popupAnchor: [20, -77]
  });
  var wijnIcon = new L.Icon({
    iconUrl: 'img/Icons/WBS_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var slagerIcon = new L.Icon({
    iconUrl: 'img/Icons/Keurslager_75px.png',
    shadowUrl: '',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var bokIcon = new L.Icon({
    iconUrl: 'img/Icons/Bok_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var haanIcon = new L.Icon({
    iconUrl: 'img/Icons/Haan_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var stierIcon = new L.Icon({
    iconUrl: 'img/Icons/Stier_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var consumptieIcon = new L.Icon({
    iconUrl: 'img/Icons/consumptie_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var gangbaarslachterijIcon = new L.Icon({
    iconUrl: 'img/Icons/Slager_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var dlmlogoIcon = new L.Icon({
    iconUrl: 'img/Icons/DLM Logo_75px.png'
  });
  var truckdlmIcon = new L.Icon({
    iconUrl: 'img/Icons/truck_40px.png',
    iconSize: [66, 31],
    iconAnchor: [33, 15],
    popupAnchor: [0, -16]
  });
  var truckIcon = new L.Icon({
    iconUrl: 'img/Icons/truck_40px.png',
    iconSize: [46, 21],
    iconAnchor: [23, 11],
    popupAnchor: [0, -12]
  });
  var dierentuinIcon = new L.Icon({
    iconUrl: 'img/Icons/Dierentuin_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var bokmesterijIcon = new L.Icon({
    iconUrl: 'img/Icons/Mesterij_bok_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var paliIcon = new L.Icon({
    iconUrl: 'img/Icons/pali_50px.png',
    iconAnchor: [61, 51],
    popupAnchor: [6, -51]
  });
  var stiermesterijIcon = new L.Icon({
    iconUrl: 'img/Icons/Mesterij_stier_75px.png',
    iconAnchor: [26, 76],
    popupAnchor: [4, -76]
  });
  var frankrijk = [
      [51.704144, 5.283808],
      [45.020557, 4.888366]
    ],
    frankrijk2 = [
      [45.020557, 4.888366],
      [40.318877, -3.659859]
    ],
    spanje = [
      [40.318877, -3.659859],
      [38.899754, -8.775783]
    ],
    italie = [
      [45.020557, 4.888366],
      [43.900704, 10.967577]
    ],
    italie2 = [
      [43.900704, 10.967577],
      [40.853909, 15.530314]
    ],
    italie3 = [
      [45.020557, 4.888366],
      [45.488611, 12.256275]
    ];
  var frankrijkMarker = L.Marker.movingMarker(frankrijk, [8000], {
      icon: truckIcon,
      autostart: true,
      loop: true
    }),
    frankrijkMarker2 = L.Marker.movingMarker(frankrijk2, [8000], {
      icon: truckIcon,
      autostart: true,
      loop: true
    }),
    spanjeMarker = L.Marker.movingMarker(spanje, [8000], {
      icon: truckIcon,
      autostart: true,
      loop: true
    }),
    italieMarker = L.Marker.movingMarker(italie, [8000], {
      icon: truckIcon,
      autostart: true,
      loop: true
    }),
    italieMarker2 = L.Marker.movingMarker(italie2, [8000], {
      icon: truckIcon,
      autostart: true,
      loop: true
    }),
    italieMarker3 = L.Marker.movingMarker(italie3, [8000], {
      icon: truckIcon,
      autostart: true,
      loop: true
    });
  var dlmLijn = [
    [51.695344, 5.300568],
    [51.696132, 5.298815]
  ];
  var cateringroute = [
    [51.695344, 5.300568],
    [51.696700, 5.302518],
    [51.700227, 5.304198],
    [51.702129, 5.303876],
    [51.702375, 5.292215],
    [51.695851, 5.286858],
    [51.701781, 5.273191],
    [51.692090, 5.260843],
    [51.691569, 5.262964],
    [51.687564, 5.269805],
    [51.686013, 5.278414],
    [51.682800, 5.289757],
    [51.685285, 5.300342],
    [51.684216, 5.302649],
    [51.685710, 5.314404],
    [51.688098, 5.316721],
    [51.688583, 5.314742],
    [51.694162, 5.321483],
    [51.701634, 5.318937],
    [51.701046, 5.314087],
    [51.702129, 5.303876]
  ];
  kaart.fitBounds(cateringroute);
  var cateringtruck = L.Marker.movingMarker(cateringroute, [2000, 3000, 2000, 4000, 3000, 3000, 5000, 500, 500, 2000, 4000, 4000, 4000, 600, 6000, 500, 600, 6000, 5000, 5000, 4000, 4000], {
    icon: dlmtruckIcon,
    autostart: true,
    loop: true
  });
  cateringtruck.once('click', function() {
    cateringtruck.start();
    cateringtruck.closePopup();
    cateringtruck.unbindPopup();
    cateringtruck.on('click', function() {
      if (cateringtruck.isRunning()) {
        cateringtruck.pause();
      } else {
        cateringtruck.start();
      }
    });
    setTimeout(function() {
      cateringtruck.bindPopup('<h3>De Lekkere Man Catering</h3><b>Wij brengen onze mannen naar je toe ! Dit doen wij met eigen gemaakte vleesproducten en recepten.</b>').openPopup()
    });
  });
  cateringtruck.bindPopup('<b>Click me to start !</b>', {
    closeOnClick: false
  });
  cateringtruck.openPopup();
  var Leveranciers = new L.GeoJSON(mijnJSON, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h2> ' + feature.properties.Naam + ' </h2><b> ' + feature.properties.Beschrijving + ' </b> <p></p> <dl><dt>Producten van DLM</dt><dd> ' + feature.properties.Product1 + ' </dd><dd> ' + feature.properties.Product2 + ' </dd><dd> ' + feature.properties.Product3 + ' </dd><p>Meer weten? klik <a href =' + feature.properties.Website + ' diagramm=" +nr+"\""+" target=\"_blank\">hier</a>.</p>');
    },
    pointToLayer: function(feature, latLng) {
      if (feature.properties.soort == "bok_dlm") {
        return new L.Marker(latLng, {
          icon: dlmbokIcon
        });
      }
      if (feature.properties.soort == "haan_dlm") {
        return new L.Marker(latLng, {
          icon: dlmhaanIcon
        });
      }
      if (feature.properties.soort == "stier_dlm") {
        return new L.Marker(latLng, {
          icon: dlmstierIcon
        });
      }
      if (feature.properties.Naam == "Schuurkip") {
        return new L.Marker(latLng, {
          icon: schuurIcon
        })
      }
      if (feature.properties.Naam == "Schuurbok") {
        return new L.Marker(latLng, {
          icon: schuurIcon
        })
      }
      if (feature.properties.Naam == "Schuurstier") {
        return new L.Marker(latLng, {
          icon: schuurIcon
        })
      }
    }
  });
  var dlmLaag = new L.GeoJSON(mijnJSON, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h2> ' + feature.properties.Naam + ' </h2><b> ' + feature.properties.Beschrijving + ' </b><p>Meer weten? klik <a href =' + feature.properties.Website + ' diagramm=" +nr+"\""+" target=\"_blank\">hier</a>.</p>');
    },
    pointToLayer: function(feature, latLng) {
      if (feature.properties.soort == "wijnbijstijn") {
        return new L.Marker(latLng, {
          icon: wijnIcon
        });
      }
      if (feature.properties.soort == "DLM kantoor") {
        return new L.Marker(latLng, {
          icon: dlmkantoorIcon
        });
      }
      if (feature.properties.soort == "DLM slager") {
        return new L.Marker(latLng, {
          icon: slagerIcon
        });
      }
    }
  });
  var gangbaar = new L.GeoJSON(mijnJSON, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup('<h2> ' + feature.properties.Naam + ' </h2><b> ' + feature.properties.Beschrijving + ' </b>');
    },
    pointToLayer: function(feature, latLng) {
      if (feature.properties.soort == "bok") {
        return new L.Marker(latLng, {
          icon: bokIcon
        })
      }
      if (feature.properties.soort == "haan") {
        return new L.Marker(latLng, {
          icon: haanIcon
        })
      }
      if (feature.properties.soort == "stier") {
        return new L.Marker(latLng, {
          icon: stierIcon
        })
      }
      if (feature.properties.Naam == "Slachterij Paligroup") {
        return new L.Marker(latLng, {
          icon: paliIcon
        })
      }
      if (feature.properties.soort == "Dierentuin") {
        return new L.Marker(latLng, {
          icon: dierentuinIcon
        })
      }
      if (feature.properties.soort == "meststier") {
        return new L.Marker(latLng, {
          icon: stiermesterijIcon
        })
      }
      if (feature.properties.soort == "mestbok") {
        return new L.Marker(latLng, {
          icon: bokmesterijIcon
        })
      }
      if (feature.properties.soort == "stiertransport") {
        return new L.Marker(latLng, {
          icon: gangbaarslachterijIcon
        })
      }
    }
  });
  var dlmkorteLijn = L.polyline(dlmLijn, {
    className: 'catering_polyline'
  });
  var frankrijkLijn = L.polyline(frankrijk, {
    className: 'gang_polyline'
  });
  var frankrijkLijn2 = L.polyline(frankrijk2, {
    className: 'gang_polyline'
  });
  var spanjeLijn = L.polyline(spanje, {
    className: 'gang_polyline'
  });
  var italieLijn = L.polyline(italie, {
    className: 'gang_polyline'
  });
  var italieLijn2 = L.polyline(italie2, {
    className: 'gang_polyline'
  });
  var italieLijn3 = L.polyline(italie3, {
    className: 'gang_polyline'
  });
  var dlmrouteLijn = L.polyline(cateringroute, {
    className: 'catering_polyline'
  });
  var lekkeremanLaag = L.layerGroup([Leveranciers, dlmLaag, cateringtruck, dlmrouteLijn, dlmkorteLijn]);
  kaart.addLayer(lekkeremanLaag);
  var gangbaarLaag = L.layerGroup([gangbaar, frankrijkMarker, frankrijkMarker2, frankrijkLijn, frankrijkLijn2, spanjeMarker, spanjeLijn, italieMarker, italieMarker2, italieMarker3, italieLijn, italieLijn2, italieLijn3]);
  var achtergronden = {
    'Zwart Wit': Esri_WorldGrayCanvas,
    'Straten': Esri_WorldStreetMap
  };
  var overlayLagen = {
    'De Lekkere Man': lekkeremanLaag,
    'De Gangbare Keten': gangbaarLaag
  };
  var lagenSwitcher = new L.Control.Layers(achtergronden, overlayLagen);
  kaart.addControl(lagenSwitcher);
});
$(".legend-container").append($("#legend"));
