var mapOptions = {
    center: [-23.568388764595273, -46.70006857671443],
    zoom: 12
 }

var map = new L.map('map', mapOptions);  

//#### BASE MAPS ####

var baseMap1 = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
mapLink = '<a href="http://www.esri.com/">Esri</a>';
   wholink = 'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

var baseMap2 = L.tileLayer(
    'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; '+mapLink+', '+wholink,
    maxZoom: 18,
    }).addTo(map);

var baseMap3 = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});


//#### ICONS ####

var homerchu = L.icon({
    iconUrl: 	'https://i.imgur.com/8UhQwVX.png',
    iconSize:     [50, 50], 
    iconAnchor:   [25, 25], 
    popupAnchor:  [0, -25] 
});

var doleta = L.icon({
    iconUrl: 'https://i.pinimg.com/originals/be/ca/c3/becac3a96af3cc02a2e3fcfa94575e75.png',
    iconSize: 		[100,100],
    iconAnchor: 	[50,50],
    popupAnchor: 	[0,-25],
    shadowSize: 	[200,200],
    shadowAnchor: 	[100,100] 
});

var li = L.icon({
    iconUrl: 'https://storage.googleapis.com/esfbrasil-website1/2020/05/457774ce-ligia.png',
    iconSize: 		[100,100],
    iconAnchor: 	[50,50],
    popupAnchor: 	[0,-25],
    shadowSize: 	[200,200],
    shadowAnchor: 	[100,100] 
});

var nat = L.icon({
    iconUrl: 'https://waycarbon.com/wp-content/uploads/2019/04/Natalia-Dalessandro_site.jpg',
    iconSize: 		[100,100],
    iconAnchor: 	[50,50],
    popupAnchor: 	[0,-25],
    shadowSize: 	[200,200],
    shadowAnchor: 	[100,100]
});

var gmt = L.icon({
    iconUrl: 'https://img1.gratispng.com/20180629/xwq/kisspng-cichla-ocellaris-peacock-bass-fly-fishing-clip-art-peixe-5b368da6d39d11.8894542315303018628668.jpg',
    iconSize: 		[80,80],
    iconAnchor: 	[50,50],
    popupAnchor: 	[0,-25],
    shadowSize: 	[200,200],
    shadowAnchor: 	[100,100]
})

//#### MARKERS ####

marker1 = L.marker([-23.62, -46.48]).bindPopup('-23.62, -46.48');
marker2 = L.marker([-23.55, -46.15]).bindPopup('-23.62, -46.48');
doleta1 = L.marker([-10.55, -42.15], {icon: doleta}).bindPopup('eu sou o doleta 1');
doleta2 = L.marker([-15.55, -54.15], {icon: doleta}).bindPopup('i am doleta 2');
homerchu1 = L.marker([-8.50, -40.58], {icon: homerchu}).bindPopup('homerchu 1');
homerchu2 = L.marker([-28.56, -57.78], {icon: homerchu}).bindPopup('homerchu 2');
homerchu3 = L.marker([-23.72, -46.58], {icon: homerchu}).bindPopup('homerchu 3');
homerchu4 = L.marker([-5.62, -38.32], {icon: homerchu}).bindPopup('homerchu 4');
homerchu5 = L.marker([-2.30, -46.90], {icon: homerchu}).bindPopup('homerchu 5');
homerchu6 = L.marker([-18.66, -60.80], {icon: homerchu}).bindPopup('homerchu 6');
li = L.marker([-23.559921361091526, -46.663860654539775], {icon: li}).bindPopup('ligiones');
nat = L.marker([-23.63436264785898, -46.75499023716657], {icon: nat}).bindPopup('natalínea');
gmt = L.marker([-23.579921361091526, -46.643860654539775], {icon: gmt}).bindPopup('nação tucunaration');

//#### MARKER GROUPS ####

var markerGroup1 = L.layerGroup([marker1, marker2]).addTo(map);
var markerGroup2 = L.layerGroup([homerchu1, homerchu2,homerchu3, homerchu4, homerchu5, homerchu6]).addTo(map);
var markerGroup3 = L.layerGroup([doleta1, doleta2]).addTo(map);
var markerGroup4 = L.layerGroup([li, nat, gmt]).addTo(map);

//#### LAYERS WMS ####

var etes = L.tileLayer.wms("http://ec2-3-135-187-150.us-east-2.compute.amazonaws.com:8080/geoserver/aws_rds_teste1/wms/", {
layers: 'aws_rds_teste1:ANA_ETEs',
format: 'image/png',
transparent: true,
interactive: true
    })//.addTo(map)//;

var ufs = L.tileLayer.wms("http://ec2-3-135-187-150.us-east-2.compute.amazonaws.com:8080/geoserver/aws_rds_teste1/wms/", {
layers: 'aws_rds_teste1:BRUFE250GC_SIR',
format: 'image/png',
transparent: true,
interactive: true
    }).addTo(map);

var mun = L.tileLayer.wms("http://ec2-3-135-187-150.us-east-2.compute.amazonaws.com:8080/geoserver/aws_rds_teste1/wms/", {
layers: 'aws_rds_teste1:mun',
format: 'image/png',
transparent: true,
interactive: true
    })//.addTo(map)//;

//Esse só abre da minha máquina, já que está no Geosever no localhost//
var mun_local = L.tileLayer.wms("http://localhost:8080/geoserver/ws1/wms/", {
layers: 'ws1:mun_local',
format: 'image/png',
transparent: true
    })//.addTo(map)//;

var ictem = L.tileLayer.wms('http://datageo.ambiente.sp.gov.br/geoserver/datageo/ows?SERVICE=WMS', {
    layers: 'VWM_ICTEM_CETESB_2017_POL',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true
        })//.addTo(map)//;

var a_cont = L.tileLayer.wms('http://datageo.ambiente.sp.gov.br/geoserver/datageowms/ows?SERVICE=WMS', {
    layers: 'VWM_AREA_CONTAMINADA_CETESB_2018_PTO',
    tiled: true,
    format: 'image/png',
    transparent: true,
    maxZoom: 14,
    minZoom: 0,
    continuousWorld: true
        })//.addTo(map)//;

/* #### LAYERS WFS ####

Aqui deixei como comentário porque não está funcionando. Basicamente a ideia é puxar algum layer do Geoserver via WFS, e
não WMS. O Geoserver está instalado numa máquina virtual (VM) Linux no EC2 da AWS (ec2-3-135-187-150.us-east-2.compute.amazonaws.com), 
e os layers estão no BD (RDS) também na AWS. Na mesma VM instalei também Apache Tomcat9, já que, pelo que vi, precisa de um servidor web Java/container de servlets.

Configurei a VM para que fosse possível acesso ao Geosever por qualquer pessoa (o que, obviamente, não é seguro):

- http://ec2-3-135-187-150.us-east-2.compute.amazonaws.com:8080/geoserver/
- login: admin
- senha: geoserver

O código abaixo está OK aparentemente, e não sei por que não está funcionando. De acordo com o que li, duas coisas podem estar rolando:

    1. Opção de permitir formato JSONP não está habilitada no Geoserver. Já entrei lá e tentei alterar a variável do sistema, mas não sei se funcionou. Reiniciei o Geoserver e o Tomcat depois disso, mas não sei verificar se a variável foi alterada. Link: https://gis.stackexchange.com/questions/57494/geoserver-2-3-how-to-enable-jsonp

    2. Problema com o CORS (cross-origin resource sharing): uma brisa que tem a ver com a porta utilizada (o Geoserver está na porta 8080), e tem coisa de proxy e nem sei o que é direito. Não sei se é o caso, porque não dá problema com WMS, mas se bem que nos fóruns o pessoal tem problema com o WFS mesmo. Links: https://docs.geoserver.org/latest/en/user/production/container.html; https://stackoverflow.com/questions/22363192/cors-tomcat-geoserver

    3. Não estou chamando o Ajax/JQuery antes de utilizar. Eu não tenho noção do que é exatamente o código, e por ter várias outras merdas. Fui pegando vários tecos
    de códigos que achei em fóruns e montando essa merda aí.

    #########################

    /*var defaultParameters = {
    
        service: 'WFS',
        version: '2.0',
        request: 'GetFeature',
        typeName: 'aws_rds_teste1:mun',
        maxFeatures: 500,
        outputFormat: 'text/javascript',
        format_options: 'callback: getJson',
        SrsName:'EPSG:4674'
    };

    var owsrootUrl = 'http://ec2-3-135-187-150.us-east-2.compute.amazonaws.com:8080/geoserver/aws_rds_teste1/ows';
    var parameters = L.Util.extend(defaultParameters);
    var URL = owsrootUrl + L.Util.getParamString(parameters);
        
    var wfs = new L.GeoJSON();
    
    function getJson(data){
        wfs.addGeoJSON(data);
    }						

     $.ajax({
       type: 'GET', 
        jsonp: false,
        async: false,
       url: URL,
       dataType: 'jsonp',
       jsonpCallback: getJson,
       success: getJson
    });

    function handleJson(data) {
    L.geoJson(data, {
    style: function (feature) {
        return {color: 'black',
            fillColor: '#ff0000',
            fillOpacity: 0.10};
        }
    }).addTo(map);
    }; 
*/

//#### LAYER CONTROL ####

var baseMaps = {
    "ESRI": baseMap2,
    "OSM": baseMap1,
    "Google": baseMap3,
};

var overlayMaps = {
    //"RMSP": rmsp,
    "Vocês": markerGroup4,
    "UFs (aws+geoserver)": ufs,
    "Mun (aws+geoserver)": mun,
    "Mun (localhost)": mun_local,
    "ETEs (aws+geoserver)": etes,
    //"ETEs WFS (aws+geoserver)": etes_wfs, 
    "ICTEM (wms datageo)": ictem,
    "Áreas contaminadas (wms datageo)": a_cont,
    "Marcadores (html)": markerGroup1,
    "Homerchus (html)": markerGroup2,
    "Doletas (html)": markerGroup3
};

L.control.layers(baseMaps, overlayMaps).addTo(map);	
    