var asaltos = [];
var contA = 0, contB = 0, contC = 0;
var contRobo = 0, contAtraco = 0, contHomicidio = 0;

function cargarEstadistica(){

    datos = localStorage.getItem('registro');
    if(datos != null){
        asaltos = JSON.parse(datos);
    }
    
    for(i = 0; i<asaltos.length; i++){
        eval = asaltos[i][9];
        eval2 = asaltos[i][2];

        switch(eval){
            case "Alto":
                contA++
                break;
            case "Medio":
                contB++
                break;
            case "Bajo":
                contC++
                break;     
            default:
                break
        }
        switch(eval2){
            case "Robo":
                contRobo++
                break;
            case "Atraco":
                contAtraco++
                break;
            case "Homicidio":
                contHomicidio++
                break;     
            default:
                break
        }
        console.log(eval);
        console.log(eval2);
    
    }
    
    
    
    var ctx2 = document.getElementById("mychart2").getContext("2d");
    var myBarChart2 = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels:['Alto', 'Medio', 'Bajo'],
            datasets:[{
                label: 'Asaltos por costos',
                data: [contA,contB, contC],
                backgroundColor:[
                    'rgb(250, 139, 122)',
                    'rgb(255, 212, 166)',
                    'rgb(255, 248, 166)'
  
                ]
            }]
        },
        options:{
            scales:{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                yAxes:[{
                    ticks:{
                        beginAtZero: true
                    }
                }]
            }
        }  
    });

    var ctx = document.getElementById("mychart").getContext("2d");
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:['Robo', 'Atraco', 'Homicidio'],
            datasets:[{
                label: 'Tipos de robos',
                data: [contRobo,contAtraco, contHomicidio],
                backgroundColor:[
                    'rgb(115, 107, 106)',
                    'rgb(161, 106, 100)',
                    'rgb(196, 85, 73)'
                    
                    
                ]
            }]
        },
        options:{
            scales:{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                yAxes:[{
                    ticks:{
                        beginAtZero: true
                    }
                }]
            }
        }  
    });

}