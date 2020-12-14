/* Dada una matriz de cadenas, elimine cada cadena que sea un anagrama de una cadena anterior, 
luego devuelva la matriz restante en orden.

Ejemplo
str = ['code', 'doce', 'ecod', 'framer', 'frame']

code y doce son anagramas. Eliminar docede la matriz y mantener la primera aparición codeen la matriz.
code y ecods on anagramas. Eliminar ecodde la matriz y mantener la primera aparición codeen la matriz.
code y framer no son anagramas. Mantenga ambas cadenas en la matriz.
framery  framen o son anagramas debido al extra ren framer. Mantenga ambas cadenas en la matriz.
Ordenar los strings restantes en orden ascendente: ['code','frame','framer'].
 */

function funWithAnagrams(arr) {

    sonAnagramas = (s1, s2) => {
        if(s1.length != s2.length){
            return false;
        }
        let mapS1 = new Map();
        let mapS2 = new Map();

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
        //.has() devuelve un booleano
        //.get(key) devuelve el valor asociado a la key
        //.set(key, valor) setea en la key el valor 'x'
        for (var [key, value] of mapS1) {
            if(!mapS2.has(key)){
                return false;
            }
            if(value != mapS2.get(key)){
                return false;
            }
        }
        return true;
    }

    let result = [];
    let i = 0;
    let j = 1;

    while(j < arr.length) {
        arr.sort();
        if(!sonAnagramas(arr[i], arr[j]) && !result.includes(arr[i])){
            result.push(arr[i]);
            i++;
        }
        if (sonAnagramas(arr[i], arr[j]) && !result.includes(arr[i])) {
            result.push(arr[i]);
        }
        if (!sonAnagramas(arr[i], arr[j]) && !result.includes(arr[j])) {
            i = j;
            result.push(arr[j]);
        }
        if(sonAnagramas(arr[i], arr[j] && result.includes(arr[j]))){
            result.push(arr[i]);
        }
        j++;
    }
    
    console.log(result);

    


}

funWithAnagrams(['code', 'aaagmnrs', 'anagrams', 'doce']);
funWithAnagrams(['code', 'doce', 'ecod', 'framer', 'frame']);
funWithAnagrams(['poke', 'pkoe', 'okpe', 'ekop']);
funWithAnagrams(["fqwltvzkqt", "volphckcyufdqmlglimklfzktgygdttnhcvpfdfbrp", "lkvshwywshtdgmbqbkkxcvgumo",
  "mwvytbytnuqhmfjaqtgngcwkuzyamnerphfmwevh", "lezohyeehbrcewjxvceziftiqtntfsrptugtiznorvonzjfea",
  "gamayapwlmbzitzszhzkosvnknber", "ltlkggdgpljfisyltmmfvhybljvk", "pcflsaqevcijcyrgmqirzniax",
  "kholawoydvchveigttxwpukzjfh", "brtspfttotafsngqvoijxuvq", "ztvaalsehzxbshnrvbykjqlrzzfm",
  "vyoshiktodnsjjpqplciklzqrxloqxrudygjty", "leizmeainxslwhhjwslqendjvx", "yghrveuvphknqtsdtwxcktmwwwsdthzmlmbh",
  "kmouhpbqur", "fxgqlojmwsomowsjvpvhznbsilhhdkbdxqgrgedpzch", "gefeukmcowoeznwhpiiduxdnnlbnmyjyssbsococdzcu",
  "nkrfduvouaghhcyvmlkza", "jpfpyljtyjjpyntsefxiswjuten", "ycpbcnmhfuqmmidmvknyxmywegmtunodvuzygvguxtrdsdf",
  "fssmeluodjgdgzfmrazvndtaur", "kugs", "dpawxitivdubbqeonycaegxfjkkl", "fkraoheucsvpiteqrs",
  "gkaaaohxxzhqjtkqaqhkwbe", "bpmglbjipnujywogwc", "lkyrdejaqufowbigrsnjniegvd",
  "otugocedktcbbufnxorixibbdfrzuqsyrfqghoyqevcuanuu", "szitaoaowsxyglafbwzddoznrvjqeyqignpi",
  "ruijvyllsibobjltusrypanvybsfrxtlfmpdidtyozoolz", "lgdgowijatklvjzscizrkupmsoxftumyxifyunxucubvk", "ctkqlr",
  "qgzjvjwzizppvso", "flvioemycnphf", "tbnwedtubynsbirepgcxfgsfomhvpmymkdoh", "ttyyc", "ibbeaxniwjkfvabnrll",
  "maglythkgla", "zgkeulyrpaeurdvexqlwgakdtbihmfrjijanxkhrqdllecy", "pcflsaqevcijcyrgmqixnzira", "klqrct",
  "ibbeaxniwjkfvanrbll", "vyoshiktodnsjjpqplciklzqrxloqxrudyyjtg",
  "ycpbcnmhfuqmmidmvknyxmywegmtunodvuzygvgxddftsru", "yyctt", "yghrveuvphknqtsdtwxcktmwwwsdtlhbhmmz",
  "vyoshiktodnsjjpqplciklzqrxloqxrugyytjd", "cttyy", "brtspfttotafsngqvoiqxuvj", "lkyrdejaqufowbigrsnjvedgin",
  "volphckcyufdqmlglimklfzktgygdttnhcvpfdrbpf", "qgzjvjwzizpsovp"
]);