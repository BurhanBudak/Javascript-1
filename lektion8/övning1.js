function Kurser(kursnamn,lärare,poäng,betyg,avklarad){
    this.kursnamn = kursnamn;
    this.lärare = lärare;
    this.poäng = poäng;
    this.betyg = betyg;
    this.avklarad = avklarad;
}

    let k1 = new Kurser('Intro-Metodik','Per Söderberg',20,'VG',true);
    let k2 = new Kurser('JavaScript-1','Mahmoud Al Hakim',35,null,false);
    let k3 = new Kurser('HTML/CSS','Mahmoud Al Hakim',35,null,false);

    let fend18 = [k1,k2,k3];
    console.log(fend18);

function Mat(titel,instruktion,){
    this.titel = titel;
    this.instruktion = instruktion;
    this.ingredienser = [];
}

    let mat1 = new Mat(
    'Kokosbollar',
    `1) Rör ihop smör och socker.
    2) Rör i kakao, vaniljsocker, vatten och havregryn.
    3)Forma runda bollar och rulla dem i kokos, mandel eller sesamfrön. 
    4)Förvara i kylen eller frysen`, );

mat1.ingredienser.push('150 gram Smör ','1½ dl strösocker',
'3 msk kakao',
'1 tsk vaniljsocker',
'2 msk vatten eller kallt kaffe',
'4 dl havregryn');

//console.log(mat1);

let mat2 = new Mat(
'Lasagne',
`Sätt ugnen på 225°.
Skala och hacka lök och vitlök. Fräs dem mjuka i smör i en stekpanna.
Lägg i köttfärsen och stek den under omrörning så att den smular sig.
Tillsätt krossade tomater, tomatpuré, oregano, peppar och buljongtärning. Låt såsen koka ca 5 min.
Vispa ut mjölet i hälften av mjölken i en kastrull.
Häll i resten av mjölken och låt det koka upp under vispning. Låt såsen koka ca 3 min.
Rör ner 2 1/2 dl av osten och smaksätt med salt.
Varva köttfärssås, ostsås och lasagneplattor i en smord ugnssäker form. Avsluta med sås. Strö över resten av osten.
Grädda i nedre delen av ugnen ca 30 min.
`,);

mat2.ingredienser.push( '400 g krossade tomater',
    '2 msk tomatpuré',
    '2 tsk torkad oregano',
    '1 krm svartpeppar',
    '1 tärning grönsaksbuljong',
    '9 lasagneplattor','500 gram smör',' 400 g köttfärs',
    '2 gula lökar',
    '2 vitlöksklyftor');


let recept = [mat1,mat2];

console.log(recept);