$(document).ready(function () {
    //Handy website
    //https://labs.easyblog.it/maps/
    //https://fontawesome.bootstrapcheatsheets.com/

    //Styles
    var LijnStyle = {
        "color": "#8bba9f",
        "weight": 5,
        "opacity": 0.6
    };

    var ProvStyle = {
        "opacity": 1,
        "color": 'rgba(56,128,54,1.0)',
        "dashArray": '',
        "lineCap": 'butt',
        "lineJoin": 'miter',
        "weight": 2.0,
        "fill": true,
        "fillOpacity": 0.4,
        "fillColor": 'rgba(178,223,138,1.0)',
    };

    var mapOptions = {
        minZoom: 11,
        maxZoom: 24,
        zoomControl: false,
    };

    var map = L.map("map", mapOptions).setView([51.6050, 5.4128], 11);

    //Controls
    /*var sidebar = L.control.sidebar({
            container: 'sidebar'
        })
        .addTo(map)
        .open('info');

    L.control.scale({
        position: 'bottomright'
    }).addTo(map);*/

    map.addControl(new L.Control.Search({
        url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
        collapsed: false,
        textPlaceholder: 'Locatie Zoeken',
        jsonpParam: 'json_callback',
        propertyName: 'display_name',
        propertyLoc: ['lat', 'lon'],
        marker: false,
        autoCollapse: true,
        autoType: false,
        zoom: 14,
        minLength: 2
    }));

    //MAPS
    /*var osmUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
    var stratenUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';

    var osmAttrib = '&copy; <a href="https://www.openstreetkaart.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
    var stratenAttrib = 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012';
    */

    var osm = new L.tileLayer.provider('CartoDB.Positron');
    
    var straten = L.tileLayer.provider('CartoDB.Voyager');

    var OpenStreetMap_HOT = L.tileLayer.provider('OpenStreetMap.HOT');

    var Esri_WorldImagery = L.tileLayer.provider('Esri.WorldImagery');

    var Thunderforest_OpenCycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}', {
        attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        apikey: 'c5d432b20da2466caedd226d7e2cf400',
        maxZoom: 22
    });
    
    var minis = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetkaart.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    });

    map.addLayer(osm);

    //Icons
    var oorlogIcon = new L.Icon({
        iconUrl: 'img/oorlog.svg',
        iconSize: [25, 25],
        iconAnchor: [12.5, 25],
        popupAnchor: [0, -25]
    });
    var gebouwenIcon = new L.Icon({
        iconUrl: 'img/gebouwen.svg',
        iconSize: [25, 25],
        iconAnchor: [12.5, 25],
        popupAnchor: [0, -25]
    });
    var nieuwIcon = new L.Icon({
        iconUrl: 'img/Nieuw_ locatie.png',
        iconSize: [25, 35],
        iconAnchor: [12.5, 30],
        popupAnchor: [0, -30]
    });

    //Layers
    var bounds_group = new L.featureGroup([]);
    var img_WineryHerbsplattegrond = 'img/Plattegrond_WH.png';
    var img_bounds_WineryHerbsplattegrond = [
            [51.60438656606835, 5.4099610135234615],
            [51.60609895231536, 5.414622058159905]
        ];
    var layer_WineryHerbsplattegrond = new L.imageOverlay(img_WineryHerbsplattegrond, img_bounds_WineryHerbsplattegrond);
    bounds_group.addLayer(layer_WineryHerbsplattegrond);

    var oorlogLaag = new L.GeoJSON(json_oorlog, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<h2> ' + feature.properties.Titel + ' </h2><b> ' + feature.properties.html_exp + ' </b><p>' + feature.properties.Ond_titel + '</p>' + ' </b><p>Meer weten? klik <a href' + feature.properties.url + ' </a>.</p>');
            },
            pointToLayer: function (feature, latLng) {
                return new L.Marker(latLng, {
                    icon: oorlogIcon
                });
            }
        })
        .addTo(map);

    /*
    var oorlogLaag = new L.GeoJSON(json_oorlog, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<h2> ' + feature.properties.Titel + ' </h2><b> ' + feature.properties.html_exp + ' </b><p>' + feature.properties.Ond_titel + '</p>' + ' </b><p>Meer weten? klik <a href' + feature.properties.url + ' </a>.</p>');
            },
            pointToLayer: function (feature, latLng) {
                return new L.Marker(latLng, {
                        icon: oorlogIcon
                    });
                }
            })
        .addTo(map); 
        */

    var gebouwLaag = new L.GeoJSON(json_gebouw, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<h2> ' + feature.properties.Titel + ' </h2><b> ' + feature.properties.html_exp + ' </b><p>' + feature.properties.Ond_titel + '</p>' + ' </b><p>Meer weten? klik <a href' + feature.properties.url + ' </a>.</p>');
            },
            pointToLayer: function (feature, latLng) {
                return new L.Marker(latLng, {
                    icon: gebouwenIcon
                });
            }
        })
        .addTo(map);

    var lijnenLaag = new L.GeoJSON(json_Lijnen, {
        style: LijnStyle,
    });
    map.addLayer(lijnenLaag);

    var provincieLaag = new L.GeoJSON(json_provincies_0, {
        style: ProvStyle,
    });
    map.addLayer(provincieLaag);

    function clickZoom(e) {
        map.setView(e.target.getLatLng(), 15);
    }

    // Draw control
    var featureGroup = new L.FeatureGroup().addTo(map);
    //map.addLayer(drawnItems);

    var miniMap = new L.Control.MiniMap(minis, {
        toggleDisplay: true,
        width: 150,
        height: 150,
        zoomLevelOffset: -4.5
    }).addTo(map);

    var drawControl = new L.Control.Draw({
        position: 'topright',
        draw: {
            polygon: false,
            polyline: false,
            circle: false,
            rectangle: false,
            marker: {
                icon: nieuwIcon
            },
        },
        edit: {
            featureGroup: featureGroup,
        }
    });
    map.addControl(drawControl);

    map.on('draw:created', function (e) {
        var coords = e.layer._latlng;
        console.log(coords);
        var tempMarker = featureGroup.addLayer(e.layer);
        tempMarker.bindPopup("Locatie Nieuw Verhaal", {
            keepInView: true,
            closeButton: false
        }).openPopup();
    });

    //Custom functions upon 'edit'
    /*map.on('draw:created', function (e) {
        var coords = e.layer._latlng;
        console.log(coords);
        var tempMarker = featureGroup.addLayer(e.layer);
        var popupContent = '<form role="form" id="form" enctype="multipart/form-data" class = "form-horizontal" onsubmit="addMarker()">' +
            '<div class="form-group">' +
            '<label class="control-label col-sm-5"><strong>Datum: </strong></label>' +
            '<input type="date" placeholder="Required" id="date" name="date" class="form-control"/>' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="control-label col-sm-5"><strong>Thema: </strong></label>' +
            '<select class="form-control" id="Thema" name="Thema">' +
            '<option value="Cultuuhistorie">Cultuuhistorie</option>' +
            '<option value="Kunst">Kunst</option>' +
            '<option value="Erfgoed">Erfgoed</option>' +
            '<option value="Toekomst">Toekomst</option>' +
            '<option value="Oorlogs">Oorlogs</option>' +
            '<option value="Streek">Streek</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="control-label col-sm-5"><strong>Titel: </strong></label>' +
            '<input type="text" class="form-control" id="Titel" name="Titel">' +
            '</div>' +
            //...
            '<div class="form-group">' +
            '<label class="control-label col-sm-5"><strong>Korte Beschrijving: </strong></label>' +
            '<textarea class="form-control" rows="6" id="descrip" name="descript">...</textarea>' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="control-label col-sm-5"><strong>Kies meerdere bestanden om te uploaden</strong></label>' +
            '<input type="file" id="avatar" name="avatar" accept="image/*, audio/*, video/*">' +
            '</div>' +
            '<input style="display: none;" type="text" id="lat" name="lat" value="' + coords.lat.toFixed(6) + '" />' +
            '<input style="display: none;" type="text" id="lng" name="lng" value="' + coords.lng.toFixed(6) + '" />' +
            '<div class="form-group">' +
            '<div style="text-align:center;" class="col-xs-4 col-xs-offset-2"><button type="button" class="btn">Cancel</button></div>' +
            '<div style="text-align:center;" class="col-xs-4"><button type="submit" value="submit" class="btn btn-primary trigger-submit">Verstuur</button></div>' +
            '</div>' +
            '</form>';
        tempMarker.bindPopup(popupContent, {
            keepInView: true,
            closeButton: false
        }).openPopup();

        $("#form").submit(function (e) {
            e.preventDefault();
            console.log("niet aangeleverd");
            var date = $("#date").val();
            console.log(date);

        });
    });*/

    var zoom_bar = new L.Control.ZoomBar({
        position: 'topright',
    }).addTo(map);

    var lc = L.control.locate({
        position: 'topright',
        icon: 'fa fa-dot-circle-o',
        strings: {
            title: "Laat mijn huidige locatie zien!"
        }
    }).addTo(map);

    /* Oude versie
    Layer control
    var achtergronden = {
        'Zwart Wit': osm,
        'Straten': straten
    };
    var overlayLagen = {
        'Verhalen': verhalenLaag,
        'Lijnen': lijnenLaag,
        'Plattegrond W&H': layer_WineryHerbsplattegrond,
    };

    var lagenSwitcher = new L.Control.Layers(achtergronden, overlayLagen, {
        position: 'topright',

    });
    map.addControl(lagenSwitcher);
	
	var baseMaps = {
    'Zwart Wit': osm,
        'Straten': straten
    };

    var groupedOverlays = {                                                              
    "<b style=color:rgb(220,31,37);>Lagen</b> <br>": {
		"Oorlog 	<img src='img/oorlog.svg' height=25  style= 'margin-left: 32px'> ": oorlogLaag,
		"Gebouwen 	<img src='img/gebouwen.svg' height=25  style= 'margin-left: 12px'> ": gebouwLaag,
		"Lijnen		<img src='http://krishnahospitalhaldwani.com/wp-content/uploads/2016/06/hostel-Icon.png' height=25 style= 'margin-left: 32px'> ":   lijnenLaag,
		}	  
	};
	
	var sidebar = L.control.sidebar('sidebar').addTo(map);
	sidebar.open('layers');
	   var panel= L.control.groupedLayers(baseMaps,groupedOverlays,{collapsed:false}).addTo(map);
		var htmlObject = panel.getContainer();
		  var a = document.getElementById('lagenlegend')
		  function setParent(el, newParent){
			newParent.appendChild(el);
		  }
		  setParent(htmlObject, a);
	
	map.on('click', function(e) {
    $('#latInput').val(e.latlng.lat);
    $('#lngInput').val(e.latlng.lng);
    updateMarker(e.latlng.lat, e.latlng.lng);
	});  
            
    var updateMarkerByInputs = function() {
	return updateMarker( $('#latInput').val() , $('#lngInput').val());
	}
	$('#latInput').on('input', updateMarkerByInputs);
	$('#lngInput').on('input', updateMarkerByInputs);
    */
	

    var baseMaps = [
        {
            groupName: "Base Maps",
            expanded: true,
            layers: {
                "Satellite":    Esri_WorldImagery,
                "Wegenkaart":   straten,
                "Fietskaart":   Thunderforest_OpenCycleMap,
                "Basiskaart":   osm,
                "Stamen":       stamen
            }
					}
        /*, {
        						groupName : "Verhalen",
                                expanded : true,
        						layers    : {
        							"Wereldoorlogen" :  oorlogLaag,
        							"Cultuurhistorie"  :  gebouwLaag,
        						}
        					}, {
        						groupName : "Bing Base Maps",
        						layers    : {
        							"Satellite" : bing1,
        							"Road"      : bing2
        						}
        					} */
	];

    var overlays = [
        {
            groupName: "Verhalen",
            expanded: true,
            layers: {
                "Wereldoorlogen <img src='img/oorlog.svg' height=26  style= 'margin-left: 12px'>": oorlogLaag,
                "Cultuurhistorie <img src='img/gebouwen.svg' height=26  style= 'margin-left: 20px'>": gebouwLaag,
            }
					 }
        /*, {
        						groupName : "Rio de Janeiro",
        						expanded  : true,
        						layers    : { 
        							"Bean Plant"     : bean_rj,
        							"Corn Plant" 	 : corn_rj,
        							"Rice Plant"	 : rice_rj		
        						}	
        					 }, {
        						groupName : "Belo Horizonte",
        						layers    : { 
        							"Sugar Cane Plant"	: sugar_bh,
        							"Corn Plant" 	 	: corn_bh		
        						}	
        					 } */
	];

    // configure StyledLayerControl options for the layer soybeans_sp
    oorlogLaag.StyledLayerControl = {
        removable: false,
        visible: false
    }

    // configure the visible attribute with true to corn_bh
    gebouwLaag.StyledLayerControl = {
        removable: false,
        visible: false
    }

    var options = {
        container_width: "300px",
        group_maxHeight: "80px",
        //container_maxHeight : "350px", 
        //exclusive: false,
        //collapsed: false,
        //position: 'topright'
    };
    
    var sidebar = L.control.sidebar('sidebar').addTo(map);
	sidebar.open('layers');

    var control = L.Control.styledLayerControl(baseMaps, overlays, options);
    map.addControl(control);
    
    var htmlObject = control.getContainer();
		  var a = document.getElementById('lagenlegend')
		  function setParent(el, newParent){
			newParent.appendChild(el);
		  }
		  setParent(htmlObject, a);

    map.on('click', function(e) {
    $('#latInput').val(e.latlng.lat);
    $('#lngInput').val(e.latlng.lng);
    updateMarker(e.latlng.lat, e.latlng.lng);
	});  
            
    var updateMarkerByInputs = function() {
	return updateMarker( $('#latInput').val() , $('#lngInput').val());
	}
	$('#latInput').on('input', updateMarkerByInputs);
	$('#lngInput').on('input', updateMarkerByInputs);
    
});
