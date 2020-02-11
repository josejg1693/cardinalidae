ol.proj.get("EPSG:4326").setExtent([-157.243370, -58.117752, 4.046280, 34.933969]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});

        var lyr_BingMap_0 = new ol.layer.Tile({
            'title': 'BingMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });var lyr_RAMDONFOREST_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "RAMDON FOREST",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RAMDONFOREST_1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [-125.000000, -56.000000, -32.000000, 40.000000]
                            })
                        });var format_LatinAmerica_2 = new ol.format.GeoJSON();
var features_LatinAmerica_2 = format_LatinAmerica_2.readFeatures(json_LatinAmerica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LatinAmerica_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LatinAmerica_2.addFeatures(features_LatinAmerica_2);var lyr_LatinAmerica_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LatinAmerica_2, 
                style: style_LatinAmerica_2,
                title: '<img src="styles/legend/LatinAmerica_2.png" /> LatinAmerica'
            });var lyr_MODELOLINEAL_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "MODELO LINEAL",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MODELOLINEAL_3.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [-125.000000, -56.000000, -32.000000, 40.000000]
                            })
                        });var format_cardinalidae_datos_4 = new ol.format.GeoJSON();
var features_cardinalidae_datos_4 = format_cardinalidae_datos_4.readFeatures(json_cardinalidae_datos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cardinalidae_datos_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cardinalidae_datos_4.addFeatures(features_cardinalidae_datos_4);var lyr_cardinalidae_datos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cardinalidae_datos_4, 
                style: style_cardinalidae_datos_4,
                title: '<img src="styles/legend/cardinalidae_datos_4.png" /> cardinalidae_datos'
            });var format_cardinalidae_presencia_5 = new ol.format.GeoJSON();
var features_cardinalidae_presencia_5 = format_cardinalidae_presencia_5.readFeatures(json_cardinalidae_presencia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cardinalidae_presencia_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cardinalidae_presencia_5.addFeatures(features_cardinalidae_presencia_5);var lyr_cardinalidae_presencia_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cardinalidae_presencia_5, 
                style: style_cardinalidae_presencia_5,
                title: '<img src="styles/legend/cardinalidae_presencia_5.png" /> cardinalidae_presencia'
            });

lyr_BingMap_0.setVisible(true);lyr_RAMDONFOREST_1.setVisible(true);lyr_LatinAmerica_2.setVisible(true);lyr_MODELOLINEAL_3.setVisible(true);lyr_cardinalidae_datos_4.setVisible(true);lyr_cardinalidae_presencia_5.setVisible(true);
var layersList = [baseLayer,lyr_BingMap_0,lyr_RAMDONFOREST_1,lyr_LatinAmerica_2,lyr_MODELOLINEAL_3,lyr_cardinalidae_datos_4,lyr_cardinalidae_presencia_5];
lyr_LatinAmerica_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'ISO_2DIGIT': 'ISO_2DIGIT', 'ISO_3DIGIT': 'ISO_3DIGIT', 'ISO_NUM': 'ISO_NUM', 'CNTRY_NAME': 'CNTRY_NAME', 'LONG_NAME': 'LONG_NAME', 'ISOSHRTNAM': 'ISOSHRTNAM', 'UNSHRTNAM': 'UNSHRTNAM', 'LOCSHRTNAM': 'LOCSHRTNAM', 'LOCLNGNAM': 'LOCLNGNAM', 'STATUS': 'STATUS', 'POP_CNTRY': 'POP_CNTRY', 'SQKM': 'SQKM', 'SQMI': 'SQMI', 'COLORMAP': 'COLORMAP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_cardinalidae_datos_4.set('fieldAliases', {'OBJECTID__': 'OBJECTID__', 'Shape__': 'Shape__', 'family': 'family', 'lon': 'lon', 'lan': 'lan', 'pb': 'pb', 'bio1': 'bio1', 'bio5': 'bio5', 'bio6': 'bio6', 'bio7': 'bio7', 'bio8': 'bio8', 'bio12': 'bio12', 'bio16': 'bio16', 'bio17': 'bio17', 'biome': 'biome', });
lyr_cardinalidae_presencia_5.set('fieldAliases', {'OBJECTID__': 'OBJECTID__', 'Shape__': 'Shape__', 'family': 'family', 'lon': 'lon', 'lan': 'lan', 'pb': 'pb', 'bio1': 'bio1', 'bio5': 'bio5', 'bio6': 'bio6', 'bio7': 'bio7', 'bio8': 'bio8', 'bio12': 'bio12', 'bio16': 'bio16', 'bio17': 'bio17', 'biome': 'biome', });
lyr_LatinAmerica_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'FIPS_CNTRY': 'TextEdit', 'GMI_CNTRY': 'TextEdit', 'ISO_2DIGIT': 'TextEdit', 'ISO_3DIGIT': 'TextEdit', 'ISO_NUM': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'LONG_NAME': 'TextEdit', 'ISOSHRTNAM': 'TextEdit', 'UNSHRTNAM': 'TextEdit', 'LOCSHRTNAM': 'TextEdit', 'LOCLNGNAM': 'TextEdit', 'STATUS': 'TextEdit', 'POP_CNTRY': 'TextEdit', 'SQKM': 'TextEdit', 'SQMI': 'TextEdit', 'COLORMAP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_cardinalidae_datos_4.set('fieldImages', {'OBJECTID__': 'TextEdit', 'Shape__': 'TextEdit', 'family': 'TextEdit', 'lon': 'TextEdit', 'lan': 'TextEdit', 'pb': 'TextEdit', 'bio1': 'TextEdit', 'bio5': 'TextEdit', 'bio6': 'TextEdit', 'bio7': 'TextEdit', 'bio8': 'TextEdit', 'bio12': 'TextEdit', 'bio16': 'TextEdit', 'bio17': 'TextEdit', 'biome': 'TextEdit', });
lyr_cardinalidae_presencia_5.set('fieldImages', {'OBJECTID__': 'TextEdit', 'Shape__': 'TextEdit', 'family': 'TextEdit', 'lon': 'TextEdit', 'lan': 'TextEdit', 'pb': 'TextEdit', 'bio1': 'TextEdit', 'bio5': 'TextEdit', 'bio6': 'TextEdit', 'bio7': 'TextEdit', 'bio8': 'TextEdit', 'bio12': 'TextEdit', 'bio16': 'TextEdit', 'bio17': 'TextEdit', 'biome': 'TextEdit', });
lyr_LatinAmerica_2.set('fieldLabels', {'OBJECTID': 'no label', 'FIPS_CNTRY': 'no label', 'GMI_CNTRY': 'no label', 'ISO_2DIGIT': 'no label', 'ISO_3DIGIT': 'no label', 'ISO_NUM': 'no label', 'CNTRY_NAME': 'no label', 'LONG_NAME': 'no label', 'ISOSHRTNAM': 'no label', 'UNSHRTNAM': 'no label', 'LOCSHRTNAM': 'no label', 'LOCLNGNAM': 'no label', 'STATUS': 'no label', 'POP_CNTRY': 'no label', 'SQKM': 'no label', 'SQMI': 'no label', 'COLORMAP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_cardinalidae_datos_4.set('fieldLabels', {'OBJECTID__': 'no label', 'Shape__': 'no label', 'family': 'no label', 'lon': 'no label', 'lan': 'no label', 'pb': 'no label', 'bio1': 'no label', 'bio5': 'no label', 'bio6': 'no label', 'bio7': 'no label', 'bio8': 'no label', 'bio12': 'no label', 'bio16': 'no label', 'bio17': 'no label', 'biome': 'no label', });
lyr_cardinalidae_presencia_5.set('fieldLabels', {'OBJECTID__': 'no label', 'Shape__': 'no label', 'family': 'no label', 'lon': 'no label', 'lan': 'no label', 'pb': 'no label', 'bio1': 'no label', 'bio5': 'no label', 'bio6': 'no label', 'bio7': 'no label', 'bio8': 'no label', 'bio12': 'no label', 'bio16': 'no label', 'bio17': 'no label', 'biome': 'no label', });
lyr_cardinalidae_presencia_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});