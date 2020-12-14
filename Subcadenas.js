/* Dada una cadena s, obtener la subcadena más corta y la subcadena más larga compuesta por la combinación 
vocal-consonante. Tener en cuenta que el inicio de la cadena será con vocal y el final de la cadena con consonante.
Una subcadena podrá ser aeuiouc, pero nunca aguas.

Ejemplo:
Entrada: dvhdaagfaokuheeeegiosiiiiikjshagegiij
Salida: cadena corta = uh , cadena larga = iiiiik
*/

function SmallestandLargestSubstring(s) {

     esVocal = (s) => {
        if(s=='a' || s=='e' || s=='i' || s=='o' || s=='u'){
            return true;
        }else {
            return false;
        }
    }

    let corta = "";
    let larga = "";
    letra = "";
    letrasig = "";
    let i = 0;
    let final = i+1
    let inicial = 0;
    while(i < s.length-1){
        letra = s.charAt(i);
        letrasig = s.charAt(final)
        if(esVocal(letra) && esVocal(letrasig)){
            i++;
            final = i + 1;
        }
        if(esVocal(letra) && !esVocal(letrasig)){
            let cadena = s.substring(inicial, final+1);
            if(corta == '' && larga == ''){
                corta = cadena;
                larga = cadena;
            }
            if(cadena.length < corta.length){
                corta = cadena;
            }
            if(cadena.length > larga.length) {
                larga = cadena;
            }
            i = final + 1;
            inicial = i;
            final = i + 1;
        }
        if(!esVocal(letra) && !esVocal(letrasig)){
            i = i + 2;
            final = i + 1;
            inicial = i;
        }
        if(!esVocal(letra) && esVocal(letrasig)) {
            i++;
            final++;
            inicial = i;
        }
    }
    console.log(corta);
    console.log(larga);
}

SmallestandLargestSubstring('cbaabedaaabde');
