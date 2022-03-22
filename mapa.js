var map = L.map('map').setView([18.885008051996117, -70.27896098193399], 9);

var oms = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
oms.addTo(map);

var asaltos = [];
datos = localStorage.getItem('registro');
if(datos != null){
    asaltos = JSON.parse(datos);
}

for(i = 0; i<asaltos.length; i++){
    eval = asaltos[i][6];
    
    if(eval != ''){
        var coorde = eval.toString().split(',');

        x = parseFloat(coorde[0].toString());
        y = parseFloat(coorde[1].toString());



        L.marker([x,y]).addTo(map)
        .bindPopup("Asalto No. "+asaltos[i][0])
        .openPopup();
    }

}

    

