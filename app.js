
var asaltos = [];

function construir(){

    datos = localStorage.getItem('registro');
    if(datos != null){
        asaltos = JSON.parse(datos);
        mostrarDatos();
    }
    // cargarEstadistica();
}

function mostrarDatos(){
    destino = document.getElementById('tabla-asaltos');
    destino.innerHTML= "";

    for(i=0; i < asaltos.length; i++){
        tr = _dce('tr');
        asalto = asaltos[i];
        for(a = 0; a < asalto.length; a++){
            dato = asalto[a];
            td = _dce('td');
            td.innerHTML = dato;
            td.setAttribute('onclick','getRow('+i+')');
            tr.appendChild(td);
        }

        td = _dce('td');
        borrar = _dce('button');
        borrar.innerHTML = 'borrar';
        borrar.setAttribute('onclick','borrarRow(this,'+i+')');
        borrar.setAttribute('class', 'btn btn-danger');
        td.appendChild(borrar);
        tr.appendChild(td);

        destino.appendChild(tr);

    }
}

function agregar(){
    asalto = [];
    if(asaltos.length != 0){
        id = asaltos[asaltos.length - 1][0];
    }else{
        id = -1;
    }

    if(document.getElementById('txtTitulo').value != ''){

        asalto.push(id+1);
        asalto.push(document.getElementById('txtTitulo').value);
        asalto.push(document.getElementById('txtTipo').value);
        asalto.push(document.getElementById('txtDescripcion').value);
        asalto.push(document.getElementById('txtLink').value);
        asalto.push(document.getElementById('txtLugar').value);
        asalto.push(document.getElementById('txtCoords').value);
        asalto.push(document.getElementById('txtMuertos').value);
        asalto.push(document.getElementById('txtHeridos').value);
        asalto.push(document.getElementById('txtCosto').value);

        asaltos.push(asalto);

        datos = JSON.stringify(asaltos);
        localStorage.setItem('registro', datos);

        mostrarDatos();
        limpiar();
    }else{
        alert('Mi loco pero ute ni titulo le puso');
    }

}

function actualizar(){

    indice = document.getElementById('id').innerHTML;


    if(indice != ''){
        asaltos[indice][1] = document.getElementById('txtTitulo').value;
        asaltos[indice][2] = document.getElementById('txtTipo').value;
        asaltos[indice][3] = document.getElementById('txtDescripcion').value;
        asaltos[indice][4] = document.getElementById('txtLink').value;
        asaltos[indice][5] = document.getElementById('txtLugar').value;
        asaltos[indice][6] = document.getElementById('txtCoords').value;
        asaltos[indice][7] = document.getElementById('txtMuertos').value;
        asaltos[indice][8] = document.getElementById('txtHeridos').value;
        asaltos[indice][9] = document.getElementById('txtCosto').value;

        datos = JSON.stringify(asaltos);
        localStorage.setItem('registro', datos);
        mostrarDatos();
        limpiar();
    
    }else{
        alert('No hay ningun asalto seleccionado')    
    }

}

function _dce(obj){
    return document.createElement(obj);
}
//crea un input
function textInput(nombre, tipo){
    obj = _dce('input');
    obj.setAttribute('name', nombre);
    obj.setAttribute('class', 'form-control');
    obj.setAttribute('type', tipo);
    return obj;
}

function borrarRow(obj, indice){
    padre = obj.parentNode.parentNode;
    padre.parentNode.removeChild(padre);
    asaltos.splice(indice, 1);

    datos = JSON.stringify(asaltos);
    localStorage.setItem('registro', datos);
    mostrarDatos();
    
}

function getRow(indice){

    document.getElementById('id').innerHTML = asaltos[indice][0];
    document.getElementById('txtTitulo').value = asaltos[indice][1];
    document.getElementById('txtTipo').value = asaltos[indice][2];
    document.getElementById('txtDescripcion').value = asaltos[indice][3];
    document.getElementById('txtLink').value = asaltos[indice][4];
    document.getElementById('txtLugar').value = asaltos[indice][5];
    document.getElementById('txtCoords').value = asaltos[indice][6];
    document.getElementById('txtMuertos').value = asaltos[indice][7];
    document.getElementById('txtHeridos').value = asaltos[indice][8];
    document.getElementById('txtCosto').value = asaltos[indice][9];
    
}

function limpiar(){
    document.getElementById('id').innerHTML = '';
    document.getElementById('txtTitulo').value  = '';
    document.getElementById('txtTipo').value = 'Robo';
    document.getElementById('txtDescripcion').value = '';
    document.getElementById('txtLink').value = '';
    document.getElementById('txtLugar').value = '';
    document.getElementById('txtCoords').value = '';
    document.getElementById('txtMuertos').value = '';
    document.getElementById('txtHeridos').value = '';
    document.getElementById('txtCosto').value = 'Bajo';
}



