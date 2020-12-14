/* Crear una funcion que dado un string como parametro imprima una frase describiendo la letra que mas se repite 
y la cantidad de repeticiones, de la forma más eficiente posible. 
Ejemplo: 
Entrada: "Hola, Mi nombre es Ariel, soy una Sirena, vivo bajo el mar."
Salida: "La letra que más se repite es A con 6 repeticiones."
*/ 

function contarLetra(s) {
    let mapS = new Map();
    // sanitizar el string para eliminar espacios, simbolos y llevar a minuscula
    s = s.replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '').toLowerCase();
    for(var i = 0; i < s.length; i++){
        var c = s.charAt(i);
        var val = mapS.get(c);
        if(val != null){
            var value = val + 1;
            mapS.set(c, value);
        }else{
            mapS.set(c,1);
        }
    }
    var letraMasRepetida;
    var numMasRepetido = 0;

    //.has() devuelve un booleano
    //.get(key) devuelve el valor asociado a la key
    //.set(key, valor) setea en la key el valor 'x'
    console.log(mapS);

    for (var [key, value] of mapS) {
        if(value > numMasRepetido) {
            numMasRepetido = value;
            letraMasRepetida = key;
        }
    }

    console.log("La letra que más se repite es " + letraMasRepetida.toUpperCase() +  " con " + numMasRepetido + " repeticiones.");
}

contarLetra('Hola, Mi nombre es Ariel, soy una Sirena, vivo bajo el mar.')