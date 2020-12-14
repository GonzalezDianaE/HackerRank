function gemstones (arr) {
    let roca = arr[0];
    var gemas = [];
    for (let i=0; i<roca.length; i++){
        var letra = roca.charAt(i);
        var j = 1;
        let isgema = true;
        while (j<arr.length && isgema){
            if (!arr[j].includes(letra)){
                isgema =false;
            }
            j++;
        }
        if (isgema == true && !gemas.includes(letra)) {
            gemas.push(letra)
        }
    }
    console.log(gemas.length);
}

gemstones([
    'ayayrnhxvfbxzodsycpjqlrbwbmrmoaeunllzjrtdcmdbcmbdefglycboqxkagyderwkpdpewsjgkqdhcsixxhsrolrfnbkilw',
    'wgfvoecyrmvjefplndcdrozkpkoxnigzpcgzzeitwddxtqrhfqsukchfxqycacmoiknbiwhxxmbpljqhkahjt',
    'rbharxcldxthzuqrmofxcomdvjewxvwpsyhdnyamglki',
    'hjtcaklozqfqdhegxprswinviyumb',
    'tkpypsgvxridahechuimlgzbszkwjqofikegrfnc',
    'bpxujjbamtbayygucpdubwjqchiixesgaxfsoyveixdudaimkmbjpsvqhjjhdzdmpctwqfvpnydsrphinuwlnxns',
    'dhqdtxtqmjpljdcvsbbxycjgvjgdwuawifiarpovyvuegjunrfwkiezevniawwj',
    'iakgmjufocwzvckqgrblosihzoallnxpkfrddewuugbfcheepnssbodotlwmerspnrkutwjfpvjmyznyxahlemuosfxwwqcrpnil',
    'tuwrztdwcnixcmnthwfpqvobumirefolsyutfjsbcrymcnkguetxxpvqgnuupilfacg',
    'auwsniqazoujcwrhgmydxtqtdodeqxhjvdrwecllpgobpyhhmwzbxnjufhejvnrkbkcvgfrlnwcsvitkdeiwwvoyvu',
    'zqbrrwhredbkhpifuugdlsoctjqnmavivmxly',
    'vwfhdyvrpesrrzsbdzazfelvkoxkjmbpuchrlukfpyuiwltpgyijoxlhuqffyabnzcgjpcnrwxhjbpgduaqeicdfu',
    'jmxunyoixyqkwqzcjvapzualqsfxsdejrvwsdnrlyzcagcjmskntpscosnkuzhbpnodrdyvccfjfzkmcutbianzmgrgqde',
    'pemtwacnulonrfqivxsuqvjtydvzkhbgbx',
    'wssqhzlgzqiolfyfrmslcsemodxmfonzekuenqkhnpfhmcssojhkbpantwvedakogcqohsuyl',
    'tvhfdoltzrarjgwcmhfxtihgcnoniovktrzrastgacyztobfwmpibkotkoqbgjdfuyenveabpbhap',
    'qfezrjtualblytkmiiynkssgiawedxobpzhcmwvf',
    'kunvirnaxglbzvwdigzonasnmlefufxthlvmjmwcvyquuopqy',
    'srxexnbcafbyzfpookleaqmouctszcqinvrmyomfaivahwqitdpkhcgxgvhqiqqbynmljgjeqyvxbmbnxrqjmau',
    'ammqkvpptlborkerralkzxoacygliubggvumelrxtinbsufwahekgcfvwttpqqqxzwspcjrde',
    'prhefnqfgzrojyedwpaampontkyghlweicuxlbqfvuars',
    'qtihdwshwpnojovcrunasdkjjvgxqmgzwmqmpgrcakfjylwextpobkkntxxceiupzubuoiaqecis',
    'rkfenjmobutlqwqsdgpiapchyxvzl',
    'ihjrfqtgzcynaszvdseeaddvylhyneypqpungdddzretiavlaykfykjoyxoxlqjymwgjxedrldb',
    'usakrhosijzciglpgvtmqqrnfdunzqntbtkoeopwxlsegsmodiqaferxyro',
    'pcdqugnvbrtaikyjeonmyekssxutoidhyldzzwjf',
    'hpcdtwwocixiastzqvqvbwfkvfktgchdajoyxrbxfmexudaiwjskrufbbasbmjufxqjvejauklafpkcivunxy',
    'qkqcialfsqhkzmgqssiiehvxiwoyenaghnndoqhlmuodobgpgrgpolrzmzmtuqhwhkdkjwfpauqxxbdwwanv',
    'tahbfoqjhhyjwociqvptkuifrlmziiqktsdnpilgdexazmkbxm',
    'cujhiwsvsptysoybzlipcgiwqtcvvyvvobxohdlpkujzqtdnqemgxocfpazxrhqcnldy',
    'ionolubaqmqyuhvsktigmetfnghjdcgvywziqpgmtutmxjbrnyiqhh',
    'hpeouucdzrvjovhzrtykwdgzbvxgextswhxvvwufqrxdlrdomiznfarqslmqciqaywlzckotdq',
    'divdoncdlkcgihpuurbicfybfkzkdszdyhqwncmvyozqqjprhloosredxymvldubqdndmwtvggrcat',
    'suhrpnpuipcbgtrbilowodsvfzutflcvzpesimcianxefaqsnohhlmbdjdnfdxgwkfzgijyqzkw',
    'admcwveyqdgrluiswaawfqmsngulzoonvcrjzvhikxebntrkjjhpzauogkt',
    'dvnvpiugvvusjahtsrecuylbamkvmfhjouznqvvawxmv',
    'awvlucnhyozgqpjltdiobrxfkemsftppa',
    'cmfgtxqowqzczmbltkznsldmxzthnlvkazeiiqfbcjvopysaeru',
    'qxhoigvvlhbdpetzzpccxptobeuafbynmszkjjjfayndarswkrscmp',
    'ecdevhmdikfyujafjzhyzkrqvferrmjwytmofcitwpjsqvjwicokbdpclzgzsnlrbfgabdoxbsvoqwanmmmypjizo',
    'yfndihlzocgmxabsktupjevhzwrwq',
    'rejqymhqvqfwajqtsqvtoiqnctmbbxsbkntqcaewkzakhmfrsxhlpzzqiruynfxusojuygggiefzstikmcbhhzvxtudf',
    'zytvjztzyjwrzvuscxaishplniotuorbjukrhpjsxgdhmmgsecwqpinqbffpbdhknocexidozrvqtmiocwhq',
    'vhhycyncgxodfmiingnlgqzrukxukzdtaczallisxzsjqialdahofsltgbhpdvejwcmzigncctwtje',
    'flzvgpaotyboifihguidmtkxewctgvnwkjnxhvseerleydprmqeli',
    'ojdtqdcrxisufnbyjegqmskzdqiyrdaefsbalhvjmacnunzgmilobmhsgypitihijmpkguwxeaicvcpsvgzyzflqyognu',
    'fclepxngurybwngiyzojoxvxihotoipmvkxfsdaq',
    'wioxghynzskvacpqlmfbdujretrm',
    'fmjbvnjgjqrmdexjdfbjirqiftypgpvlmcngolrfngiqrwtpsanzybkcvhhabuahb',
    'mymbfrbvrjtykklvtnkhaydgnlbuwktiemikrpxsoqskkgmatiqgyggbjlfrfynewzzedaxqgtphxsnjcwiyzyfyyrdjfxmxuc',
    'eczouynjkfjiqrhaaivrrglycxeltuokqgfgjdltvpsavldsysnfbvwqdbhwusgtvwamtrvxeygxwbgsducp',
    'ulyycfnoamjsowhechzuxrelkicqntcvwgwmkbdpitdxwvlezz',
    'levddpeaxchbgsyqkrcbgboonujdefquepnlgpucrydonwxuautsufnmaeeadyshphbwbipzkmraqbubbnkc',
    'rcqbfyzfkahyjwrireqewpzxhweusejetvvyqmvndrimpzrxwbhmyjiyplakgbscpeoqkmrr',
    'caqgmzrdvbtxdfmjotanbgaxrzqxboyiyhknypiiwaxealqzjevyalllcmjjuqfxnwjpmdlwxpaymipveljjsomdzq',
    'fzthexjxlsllqkusjqyrprhydeinadikssuvapqxuzjcetmlvsyfgnxonwrvgkipotxyevtojekpb',
    'hgmtzdbfarlwdlwsnyfcqsxtbmjbozelmnrvjngvpititekus',
    'zwzxqcemdkwfaoiraesaviyvpbjsldypobvailcebanhttqevtgwrbbdonubt',
    'dtiugjxdjlkbamfuldyhroknssoyycsmbmikbvuhwqhiflizzoeuyxrfptrgjfwmyv',
    'gzimamdjltbnoureicxhowvsfmqypksu',
    'fpgxbeqaiztkyfobrjvvmvpwdhsqclngezmu',
    'hougsdjedjacxbzytfcvcolevfoiktnxebupiwdupscjeekeaqrtgdbemodkl',
    'xwmksibzqymctvtcwbskgdhwtlcwhliqmbeioppxguqfansrxojveznizs',
    'hbzkivbrnuawesnofxudjqpkocbmlgbatmy',
    'quggkllvdcuspwqxisuofsezmtqjaximafykbchqztnrfbyonzs',
    'xygkfpedqvzztovaazinximtksophnaqrtrfhgkxlcoizkdjolowjgzqytuelbhcrbbtliwbejhploaksif',
    'pqxkjufpwhphsqylipdegncaquoukbolwhoqafyahnrxrfwnymozzayooljozkvtwaofnunangqjiqjjruxzznfzmilusftuz',
    'fbhbvrnqtojnymfyrargfdccwuoyicqlatasneagomvnihxkgjwknijwtwmvufhpcauvtjyhikcqdez',
    'lklrbthlticrsiiqluepdbthzoggmshmffowxvskaamtxeinuxlwxrrendozdyfrdfjecojooom',
    'fvtxcsvtsifwcvoavqzubugourmhopkwzgmqbebtfnuvtjylodfcpwuooddvfaclcqmiazfmypkodprep',
    'drscbotgyolpkjamfwbeuznceriqxvhmp',
    'ktipdxlvdzywgajuoggehwdrmcaayclfbsqn',
    'xqucshkwdlqlehebzewdufhbhsycwkrlltljyjhnwpyjnlgwbnfrubaaesyalcvaldfqieodiwqxjpvgjqshnlpmzdgomj',
    'wwdcvolnnymnobvjcotgcrsddouufvaeiyqfplomwedxqhlrfmpedhvqsitoefrjrkgxneysztige',
    'ltovwgcpjvpjiqgqtjxgbsjtptqzattomgfrbjrzbwycnbwgeebgnexmuhiouuhegyplcivzehdakahsofuerqkhhhri',
    'hfbsgpxkqjqrmekvdufmziaoylrctwqmon',
    'ovkjpgdnabqzwsqihzieifgiptgwyxrldtpudvczaqmpbjbhiravlfzeyteudggovdh',
    'lmczweoqihgxnjuoyvrbqaxupzwkvdscythgf',
    'cndcarmcjuixhrexjqvwubeymfavkvswelipckpnuskgopbsrwiuzdzvpddrnmljizbtvt',
    'vydxiuusmfkdgtrwcrublnwopzxfbrojhqgaee',
    'zwxpsvcqplkemgeoenjrihtubydabchof',
    'uzrpzgdqgkmwfxojfuwjgmidjykvtcarhhlniensmcqsxskxobtlasv',
    'omqxlzqrinyfkatnieawkbjggzuhkdiaspopkjojyfcfipmwtv',
    'sgeqpsdfzjbswsfqpicrxirakyhbvwxprrozunqmazhhsbtzal',
    'igqvlwmihxyvdbpfzsjarueonjfrtxck',
    'mqyainlpyerftcovkowzgkdjbxuhstsz',
    'tsyrbgefdzpvvcahnjkowxsilsumq',
    'fxtmkchbaqqeluzzkmrvoxpjpxyiaszxjttxnrdwbexascetg',
    'eyefdbvkfvrpbhwpjmvmoiqkzrixhsmjkhizmnmlaoqpprowcmtzwtgzhryjulasfdltukiyymnpbdyuyugvoodtaczetlibwz',
    'hcjfxskbeblhmlzqmzvbrutfacwondphbgyjtnwwjupwcqjbebtpfsmvkiqigwzxbxxpx',
    'fgmqplrbaspwcukthavxqnzsyijoqed',
    'tkgahgslsqujjwhnpdnxkextirpvbhplqzpcpgniqucjwdfcudifwjzohravosjiamgvyldmfsabykh',
    'jgepcfqnfhtevprhnaoskimcgyauvghuelyodqzidfjxfhmlcvtcmqbxikrofalmujorlwpoheucwmrvc',
    'dxighozubetqxvludodjrzgfgzqogwecptbwoynpascqowjlhzzwvmaiuvkzblifv',
    'rpjybciaklwgxzoeuvmjqhtndsf',
    'wgsdxqcsmlzjhrigzhnkkamevanvchhgokpgiyqtbadydylkqvgmwltxfussuuywi',
    'tnulqhbfwiojdwzmazgekltmxrkrnysivcqbph',
    'jjefgnsxmbizjsialnymigtzbqhyojpyqpgyokinxjyhpyidsfrtjqczbmplqacmyenuwxuvzzreajezgfrgv',
    'yihzylpgwsfnbehtmdsktjjmoruaqszftcvxlg',
    'pjykfhmmgpdwjsihqwoocbjxiumrzjotyeeafnevlpk'
])