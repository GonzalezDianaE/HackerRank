// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    var mapS1 = new Map();
    var mapS2 = new Map();
    var cantEliminaciones = 0;
    for(var i = 0; i < s1.length; i++){
        var c = s1.charAt(i);
        var val = mapS1.get(c);
        if(val != null){
            var value = val + 1;
            mapS1.set(c, value);
        }else{
            mapS1.set(c,1);
        }
    }
    for(var i = 0; i < s2.length; i++){
        var c = s2.charAt(i);
        var val = mapS2.get(c);
        if(val != null){
            var value = val + 1;
            mapS2.set(c, value);
        }else{
            mapS2.set(c,1);
        }
    }
    console.log(mapS1);
    console.log(mapS2);
    for (var [key, value] of mapS1) { //recorre el mapa mostrando clave - valor
        if(!mapS2.has(key)){
            cantEliminaciones = cantEliminaciones + mapS1.get(key);
            mapS1.delete(key);
        }
        if(value > mapS2.get(key)){
            var eliminaciones = value - mapS2.get(key);
            cantEliminaciones = cantEliminaciones + eliminaciones;
            mapS1.set(key, value - eliminaciones);
        }
    }

    for (var [key, value] of mapS2) { //recorre el mapa mostrando clave - valor
        if(!mapS1.has(key)){
            cantEliminaciones = cantEliminaciones + mapS2.get(key);
            mapS2.delete(key);
        }
        if(value > mapS1.get(key)){
            var eliminaciones = value - mapS1.get(key);
            cantEliminaciones = cantEliminaciones + eliminaciones;
            mapS2.set(key, value - eliminaciones);
        }
    }
    return cantEliminaciones;
}

makingAnagrams("aasjjikkk","abcddf");
