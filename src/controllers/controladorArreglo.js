let nombres=["juan","yasuri","hector","tito","ivy"]

//Escribir un ciclo que repita una accion
/*for(let i=0; i<5; i++){
    console.log(nombres[2])/*
}

//Forma de reescribir un ciclo for con js

 nombres.forEach(function(nombre){
    console.log(nombre)
 })*/

 /*let numeros=[1,2,3,0,5,6,7,8,9,]

 numeros.forEach(function(numero) {
    console.log(numero+10)
 })*/
 
 let calificaciones=[3.2,4,2,1.5,3]
 let suma=0
 calificaciones.forEach(function(calificacion){
    suma=suma+calificacion
    
 })
 console.log(suma/calificaciones.length)