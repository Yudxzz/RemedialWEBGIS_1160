
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "Positron_0": {
            "type": "raster",
            "tiles": ["https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "JangkauanArea_1": {
            "type": "geojson",
            "data": json_JangkauanArea_1
        }
                    ,
        "JaringanJalanKotaSurabaya_2": {
            "type": "geojson",
            "data": json_JaringanJalanKotaSurabaya_2
        }
                    ,
        "HalteSuroboyoBus_3": {
            "type": "geojson",
            "data": json_HalteSuroboyoBus_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_Positron_0_0",
            "type": "raster",
            "source": "Positron_0"
        },
        {
            "id": "lyr_JangkauanArea_1_0",
            "type": "fill",
            "source": "JangkauanArea_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'cost_level'], 400], 1.0, ['==', ['get', 'cost_level'], 800], 1.0, ['==', ['get', 'cost_level'], 1200], 1.0, 1.0], 'fill-color': ['case', ['==', ['get', 'cost_level'], 400], '#2b83ba', ['==', ['get', 'cost_level'], 800], '#c7e8ad', ['==', ['get', 'cost_level'], 1200], '#fec980', '#d7191c']}
        }
,
        {
            "id": "lyr_JaringanJalanKotaSurabaya_2_0",
            "type": "line",
            "source": "JaringanJalanKotaSurabaya_2",
            "layout": {},
            "paint": {'line-width': 0.35714285714285715, 'line-opacity': 1.0, 'line-color': '#f7fcf5'}
        }
,
        {
            "id": "lyr_HalteSuroboyoBus_3_0",
            "type": "circle",
            "source": "HalteSuroboyoBus_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#cf5d50', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}