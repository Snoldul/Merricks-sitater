function main() {
    tilfeldigBakgrunn();
    tilfeldigSitat();
    innlasting();
    skriftStoerrelseSitat();
    skriftStoerrelseHvem();
    knapper();
    fargeknapp();
    søkebar();
    klarForStriperTilKryss();
    navigasjonsmeny();
    stilleMus();
    nyeMenyer();
}

//Funksjon som angir tilfeldig bakgrunn.
function tilfeldigBakgrunn() {
    var bilder = [
        'https://images.unsplash.com/photo-1478361000558-6f397482ffbd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=2a3c24afddfa5a6183d3bc3cbb85c0a2',
        'https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=e32c5d5b5ea606e27bf29c40b4b3bb4f',
        'https://images.unsplash.com/photo-1451955545619-8036c05af226?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=5b2df82d20188f89780b698e3ccaa210',
        'https://images.unsplash.com/photo-1476523264665-31c474b08985?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=aae877f275f699ef93249484717a1ba4',
        'https://images.unsplash.com/photo-1435777940218-be0b632d06db?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=b93501837ea66a12878870203e999e8c',
        'https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=85b20a9d7fcdedde1f58583a188186ae',
        'https://images.unsplash.com/photo-1463974754954-98e32d1c52eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=950803516f8cf467c63f2f8971e2e054',
        'https://images.unsplash.com/photo-1472419551702-dc4862cad8f9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=2538d6dac7043c03fbfd434cb6e53e6e',
        'https://images.unsplash.com/photo-1449100840062-49e9aca7c8ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=fb443f087d4f92f51b980805a93eca1e',
        'https://images.unsplash.com/photo-1477997805383-1ff8e5f381ed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=90fc87e155c63a6962106db31fb4f700',
        'https://images.unsplash.com/photo-1477450212318-03b50f6a8904?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=050b47b97fc34fefbec888f23ede3f91',
        'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d8845b16936230417b5a8c5b3ac7e495',
        'https://images.unsplash.com/photo-1476681133757-d20293a9f2de?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=cf7f07389383e49de8bf6139a66198c8',
        'https://images.unsplash.com/photo-1476689381644-d8595d7cb8e1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=ead143ff851096649abc9dc7c69a73eb',
        'https://images.unsplash.com/photo-1476433449480-bee06f97b7d6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=7eb0e5fb5958928b30b632b1668d83b1',
        'https://images.unsplash.com/photo-1450566841345-741bf07d3278?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=1ab393e0de3fa8e5ea742eb1660632cb',
        'https://images.unsplash.com/photo-1424643251207-ddb7094d2f10?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=202fd720d68cd3c570c78fb851273031',
        'https://source.unsplash.com/BNHcxk1CDdw/1600x900',
        'https://source.unsplash.com/tl0beaTF8DU/1600x900',
        'https://source.unsplash.com/wpMQWrjwPLs/1600x900',
        'https://source.unsplash.com/M5L2CQmOG2Q/1600x900',
        'https://source.unsplash.com/8UHwkHXQWc4/1600x900',
        'https://source.unsplash.com/6cbl8B6vMLw/1600x900',
        'https://source.unsplash.com/PjQDxAixxc0/1600x900',
        'https://source.unsplash.com/K34IjJiklZY/1600x900',
        'https://source.unsplash.com/cFplR9ZGnAk/1600x900',
        'https://source.unsplash.com/HYA9Ak06qR8/1600x900',
        'https://source.unsplash.com/V45KavKyf1s/1600x900',
        'https://source.unsplash.com/vot1mpfUwZA/1600x900',
        'https://source.unsplash.com/0A_b9G-Rm6w/1600x900',
        'https://source.unsplash.com/J2XRnn9X6SA/1600x900',
        'https://source.unsplash.com/fHXP17AxOEk/1600x900',
        'https://source.unsplash.com/RF5sv5dv1Zc/1600x900',
        'https://source.unsplash.com/a2ntpw5HJgg/1600x900',
        'https://source.unsplash.com/lXNOq4jVgGw/1600x900',
        'https://source.unsplash.com/8aO4SR7gMWk/1600x900',
        'https://source.unsplash.com/pQS0ETF3KTI/1600x900',
        'https://source.unsplash.com/5ODLVoFyf-o/1600x900',
        'https://source.unsplash.com/NsojRZoIOx0/1600x900',
        'https://source.unsplash.com/K3hc_kI8rAQ/1600x900',
        'https://source.unsplash.com/-SID3IDjfJ4/1600x900',
        'https://source.unsplash.com/_q5H19c-VwU/1600x900',
        'https://source.unsplash.com/1donzv5a_NA/1600x900',
        'https://source.unsplash.com/aaLDZKTh4pY/1600x900',
        'https://source.unsplash.com/IHKBF23A_iw/1600x900',
        'https://source.unsplash.com/in9-n0JwgZ0/1600x900',
        'https://source.unsplash.com/TvJCAnQ8nnQ/1600x900',
        'https://source.unsplash.com/emZus7dBLIw/1600x900',
        'https://source.unsplash.com/I8eMPkbcHfs/1600x900',
        'https://source.unsplash.com/jwAkA8JUpZY/1600x900',
        'https://source.unsplash.com/yI6t53h9lZA/1600x900',
        'https://source.unsplash.com/uz_O6R7ifgQ/1600x900',
        'https://source.unsplash.com/piG9Ye_oHrI/1600x900',
        'https://source.unsplash.com/sxMePtMnSc4/1600x900',
        'https://source.unsplash.com/az_5TBomLCc/1600x900',
        'https://source.unsplash.com/r0q06hjTgOc/1600x900',
        'https://source.unsplash.com/n7a2OJDSZns/1600x900',
        'https://source.unsplash.com/Wj76BhHrGG0/1600x900',
        'https://source.unsplash.com/jwIk4Z3Msi4/1600x900',
        'https://source.unsplash.com/Mc8h1jPrfrM/1600x900',
        'https://source.unsplash.com/2zBbCk0DDBM/1600x900',
        'https://source.unsplash.com/DgEA7saT8FQ/1600x900',
        'https://source.unsplash.com/eITpeuznJIc/1600x900',
        'https://source.unsplash.com/-icmOdYWXuQ/1600x900',
        'https://source.unsplash.com/4dpAqfTbvKA/1600x900',
        'https://source.unsplash.com/uOi3lg8fGl4/1600x900',
        'https://source.unsplash.com/1JHzqk5oTy8/1600x900',
        'https://source.unsplash.com/vpHCfunwDrQ/1600x900',
        'https://source.unsplash.com/AekHfFqOtgU/1600x900',
        'https://source.unsplash.com/jIdKrtJF8Uk/1600x900',
        'https://source.unsplash.com/_LuLiJc1cdo/1600x900',
        'https://source.unsplash.com/Frjr1uH0qRM/1600x900',
        'https://source.unsplash.com/ktb9fOxQSts/1600x900',
        'https://source.unsplash.com/I-VGG0HJ6c4/1600x900',
        'https://source.unsplash.com/iSYYLt2rKac/1600x900',
        'https://source.unsplash.com/5sxQH0ugTaA/1600x900',
        'https://source.unsplash.com/IrhXxv0g29I/1600x900',
        'https://source.unsplash.com/ZJSe0tL8ZWk/1600x900',
        'https://source.unsplash.com/BeEsqyOEato/1600x900',
        'https://source.unsplash.com/19aBHDuqJIY/1600x900',
        'https://source.unsplash.com/TNMneEQOl3Q/1600x900',
        'https://source.unsplash.com/whDrFMucHkc/1600x900',
        'https://source.unsplash.com/-hI5dX2ObAs/1600x900',
        'https://source.unsplash.com/rTZW4f02zY8/1600x900',
        'https://source.unsplash.com/V4ZksNimxLk/1600x900',
        'https://source.unsplash.com/WKT3TE5AQu0/1600x900',
        'https://source.unsplash.com/5477L9Z5eqI/1600x900',
        'https://source.unsplash.com/kDsNr-vu7ms/1600x900',
        'https://source.unsplash.com/E7q00J_8N7A/1600x900',
        'https://source.unsplash.com/Q1p7bh3SHj8/1600x900',
        'https://source.unsplash.com/6-jTZysYY_U/1600x900',
        'https://source.unsplash.com/fDSqEWLRNFE/1600x900',
        'https://source.unsplash.com/vltMzn0jqsA/1600x900',
        'https://source.unsplash.com/CzigtQ8gPi4/1600x900',
        'https://source.unsplash.com/pd4lo70LdbI/1600x900',
        'https://source.unsplash.com/_4Ib-a8g9aA/1600x900',
        'https://source.unsplash.com/ocwmWiNAWGs/1600x900',
        'https://source.unsplash.com/lLZhM6ljp40/1600x900',
        'https://source.unsplash.com/u_nsiSvPEak/1600x900',
        'https://source.unsplash.com/QVwNPOAu1sk/1600x900',
        'https://source.unsplash.com/giZjTtp9Jbg/1600x900',
        'https://source.unsplash.com/C3pPmtdSVpo/1600x900',
        'https://source.unsplash.com/vkRhTw0iA9k/1600x900',
        'https://source.unsplash.com/2neTvY_R68o/1600x900',
        'https://source.unsplash.com/hPN4PY9abNQ/1600x900',
        'https://source.unsplash.com/IEHPDNk2-8w/1600x900',
        'https://source.unsplash.com/cOwlYKo_fhM/1600x900',
        'https://source.unsplash.com/SHP1t8EduMY/1600x900',
        'https://source.unsplash.com/CaQ_KITtnVY/1600x900',
        'https://source.unsplash.com/-g7axSVst6Y/1600x900',
        'https://source.unsplash.com/1k5Qq4YQM0g/1600x900',
        'https://source.unsplash.com/p3OzJuT_Dks/1600x900',
        'https://source.unsplash.com/mSnfSWBaP_8/1600x900',
        'https://source.unsplash.com/wL18o553Msc/1600x900',
        'https://source.unsplash.com/hkdYTy3jCyY/1600x900',
        'https://source.unsplash.com/OIzy-UubqrE/1600x900',
        'https://source.unsplash.com/o-zOatT4kQw/1600x900',
        'https://source.unsplash.com/igybelIPn4s/1600x900',
        'https://source.unsplash.com/O2OEy0UuX7o/1600x900',
        'https://source.unsplash.com/lpvxZekHOMA/1600x900',
        'https://source.unsplash.com/x_0itqMc7WU/1600x900',
        'https://source.unsplash.com/h4_Dq9CYugM/1600x900',
        'https://source.unsplash.com/WZhmACxksAs/1600x900',
        'https://source.unsplash.com/zNxlvCZhHNA/1600x900',
        'https://source.unsplash.com/sfgH9dXcMRw/1600x900',
        'https://source.unsplash.com/8yyTB07_At4/1600x900',
        'https://source.unsplash.com/usPwtf-VXbM/1600x900',
        'https://source.unsplash.com/m13KmTqkNyc/1600x900',
        'https://source.unsplash.com/rLm4Wq96h_0/1600x900',
        'https://source.unsplash.com/8z9pi6GgOo4/1600x900',
        'https://source.unsplash.com/z8Cr7UW4nfs/1600x900',
        'https://source.unsplash.com/TfTD_XzREt4/1600x900',
        'https://source.unsplash.com/pbAFImBPulw/1600x900',
        'https://source.unsplash.com/p8agT_xpzsI/1600x900',
        'https://source.unsplash.com/jEkZsXVco_Q/1600x900',
        'https://source.unsplash.com/t-Mgnzd7jag/1600x900',
        'https://source.unsplash.com/bJBXvZ--uyc/1600x900',
        'https://source.unsplash.com/OQWymBdj0Go/1600x900',
        'https://source.unsplash.com/2TynMehlqIU/1600x900',
        'https://source.unsplash.com/3vSr1Oy61MA/1600x900',
        'https://source.unsplash.com/bk4HoBc4k60/1600x900',
        'https://source.unsplash.com/9RqA6tnT0gA/1600x900',
        'https://source.unsplash.com/7gZEY7tY9C4/1600x900',
        'https://source.unsplash.com/eHpYD4U5830/1600x900',
        'https://source.unsplash.com/Bkci_8qcdvQ/1600x900',
        'https://source.unsplash.com/5xLw0En4Y9w/1600x900',
        'https://source.unsplash.com/VfMgiZscSXE/1600x900',
        'https://source.unsplash.com/7E_tlqKZMrE/1600x900',
        'https://source.unsplash.com/dRQhhIdaCBU/1600x900',
        'https://source.unsplash.com/6UvCwtfv-lg/1600x900',
        'https://source.unsplash.com/03YJ4PT6uKM/1600x900',
        'https://source.unsplash.com/bB_ndHf9W9s/1600x900',
        'https://source.unsplash.com/ipkBKVWSoBY/1600x900',
        'https://source.unsplash.com/H7WijH3lleI/1600x900',
        'https://source.unsplash.com/vMwcWBEB-Pg/1600x900',
        'https://source.unsplash.com/4miBe6zg5r0/1600x900',
        'https://source.unsplash.com/HkTMcmlMOUQ/1600x900',
        'https://source.unsplash.com/CgGu2C3RjDc/1600x900',
        'https://source.unsplash.com/N-aTikX-b00/1600x900',
        'https://source.unsplash.com/1YZ2i6xeCHs/1600x900',
        'https://source.unsplash.com/nwn47m1BnA0/1600x900',
        'https://source.unsplash.com/ZmvLRnJK8C0/1600x900',
        'https://source.unsplash.com/ZTddS6GK98U/1600x900',
        'https://source.unsplash.com/1uSpahZY434/1600x900',
        'https://source.unsplash.com/AnsiT6Qic6E/1600x900',
        'https://source.unsplash.com/IA7nYNqfyc8/1600x900',
        'https://source.unsplash.com/7wQsXq_HKJo/1600x900',
        'https://source.unsplash.com/Uszp5Gkg0AI/1600x900',
        'https://source.unsplash.com/YjVITlFtEtc/1600x900',
        'https://source.unsplash.com/01ZeHnK3F_4/1600x900',
        'https://source.unsplash.com/TPv9dh822VA/1600x900'
    ];
    var tilfeldigTall = Math.floor(Math.random() * bilder.length);
    $('.heleSkjermen').css('background-image', 'url(' + bilder[tilfeldigTall] + ')');
}

//Alle sitatene og tilhørende navn er samlet her.
var sitat1 = ['Jeg har best superteknikk!'];
var sitat2 = ['Det ser feil ut selv om han gjør det riktig.', 'Merrick kommenterer teknikken til en kar på treningssenteret.'];
var sitat3 = ['Det er jo bare vann!', 'Lean Bean peker undrende på bicepsen sin.'];
var sitat4 = ['Jeg må se litt på meg selv.', 'Når Merrick er på treningsstudioet er det ingen tid som går til spille. I pausene mellom settene velger han som regel å vise muskler foran speilet.'];
var sitat5 = ['Vi har ikke vikeplikt for noen!', 'Å sykle med T-rexen hjem fra trening kan i blant bli skummelt med en slik oppfatning av trafikkreglene.'];
var sitat6 = ['Nå synes jeg det ble veldig Hillary vs Trumpf-stemning her!'];
var sitat7 = ['Hvordan faen kan det være tomt for kniver?! ... Jeg tror jeg har en kniv på rommet...'];
var sitat8 = ['Hysj, hysj, du lyver.'];
var sitat9 = ['Det er gutta som vil dra hjem tidlig ass! Nå kommer jeg bare til å dra hjem, også kommer jeg til å ha nach for meg selv...'];
var sitat10 = ['Jeg blir ikke full av sprit, jeg blir bare full av øl.'];
var sitat11 = ['Jeg kan jo ikke banke på sånn som det her! Jeg må ha på meg slåbrok!', 'Merrick har akkurat kommet hjem fra byen, og vil gjerne invitere jentene under på nach. Klærne han hadde på byen er imidlertid ikke fine nok når han skal banke på hos jentene.'];
var sitat12 = ['Når jeg lukker øynene så går det bakover.', 'Kort oppsummert hvordan en T-rex føler seg etter en hard natt på byen.'];
var sitat13 = ['Jeg kan jo ikke underholde jentene alene.', 'Lean Bean er fortvilet over at det bare er han som er klar for å be jentene under på nach.'];
var sitat14 = ['Jeg må ha på meg slåbrok på nachet!', 'Er det én ting T-rexen vet, så er det at man ikke kan ha på seg de samme klærne man hadde på byen når man skal på nach.'];
var sitat15 = ['Det er ikke noen neste gang! Vi må bli kjent med folk nå!', 'Når Merikstad vil arrangere nach, godtas ikke et nei og et løfte om at det blir nach neste gang.'];
var sitat16 = ['Jeg har lyst til å thumbse down og faen meg drepe han!', 'Når T-rexen er på Jodel går det hardt for seg.'];
var sitat17 = ['Kødder du med fitta mi eller?!'];
var sitat18 = ['Selv om din sykkel har medvind betyr ikke det at min sykkel har medvind.', 'Merrick forklarer sin manglende fart på sykkelen på sin egen måte.'];
var sitat19 = ['Kom deg inn på rommet, din grevling!', 'Merrick jager Jørge mot sistnevntes rom med en pizzaskjærer og kommer samtidig med dette verbale utbruddet.'];
var sitat20 = ['Treff meg på rumpa, sa jeg!'];
var sitat21 = ['Let\'s disagree to agree.'];
var sitat22 = ['Blande-forholdet er 2 : 2.'];
var sitat23 = ['Jeg får lyst til å pisse på deg!'];
var sitat24 = ['God natt, skal du ha en pille?'];
var sitat25 = ['Faen, jeg rev i stykker løsningsforslaget!', 'Merrick leser på de to pappbitene som utgjorde fiskepakken, og viser samtidig hvorfor han skal bli ingeniør og ikke kokk.'];
var sitat26 = ['Hvis du legger klærne i en haug, så er de tørre etter en uke.'];
var sitat27 = ['Jeg vet ikke om jeg skal ha en babe eller en fisk.', 'Merrick vurderer å gå til innkjøp av plakat til å ha over senga.'];
var sitat28 = ['Tør du virkelig å lure meg når jeg har en kniv i hånda?'];
var sitat29 = ['Det er så grevling det der ass!'];
var sitat30 = ['Nå fikk jeg lyst til å stjele mat fra andre!'];
var sitat31 = ['I morgen kommer til å bli den desidert verste dagen i mitt liv!'];
var sitat32 = ['Jeg tenkte plutselig på noe jeg gjorde for sånn 15 år sia!', 'Merrick begynner plutselig å le mens vi gamer, og blir spurt om årsaken til den plutselige latteren.'];
var sitat33 = ['Du vet USAs metric system?'];
var sitat34 = ['De kaller meg ikke Merrick for ingenting!'];
var sitat35 = ['Kom hit a Jørge, så flekser vi!'];
var sitat36 = ['Jeg ser bare mye feitere ut etter at jeg har trent.'];
var sitat37 = ['Se på han a! Ser jo ut som du kommer rett fra Auschwitz!'];
var sitat38 = ['Den nyfødte kalven må ha gains før den kan gå.', 'Lean Bean ser på Farmen, og lar seg fascinere av at den nyfødte kalven går rett for gains (melk) før den tar sine første steg.'];
var sitat39 = ['600 kg?! Man tipper jo kuer!'];
var sitat40 = ['Tiden flyr så mye veit du.'];
var sitat41 = ['Jeg vil bare komme meg til toppen av fjellet, så jeg kan kaste meg ut og dø.'];
var sitat42 = ['Jeg blir depressiv av å se på deg.'];
var sitat43 = ['Hvis spillet ender sånn her så dreper jeg meg selv ass.'];
var sitat44 = ['Vi må ikke gi skyld på hverandre.', 'Merikstad gjør det som alltid på sin egen måte.'];
var sitat45 = ['Nei, det har jeg allerede.', 'Merrick blir spurt om han tar knebøy for å få fin rumpe.'];
var sitat46 = ['Jeg puster ikke så mye mellom settene.', 'Når T-rexen trener skal det gå raskt og effektivt. Da blir det ikke tid til mye pusting mellom settene. Problemet er bare at mangelen på oksygen kan gjøre det vanskelig å skille mellom hva som er sett og hva som er repetisjoner.'];
var sitat47 = ['Høyhælte hæler', 'Merrick foretrekker kvinner som har sko med ekstra høye hæler.'];
var sitat48 = ['Jeg kan ikke kaste opp, da mister jeg gains.'];
var sitat49 = ['Da går jeg inn på rommet mitt og gnomer mens dere spiller FIFA.'];
var sitat50 = ['For en dårlig versjon av sangen, jeg faen meg griner inni meg.'];
var sitat51 = ['Hvem faen velger Mario på Superkart?!'];
var sitat52 = ['Jeg må ha med nøkkel. Det er jævlig viktig faktisk, når jeg plukker opp alle babesa!'];
var sitat53 = ['Tårene bare renner ut av trynet mitt når jeg møter vinden!', 'Når Lean Bean sykler ned bakkene til sentrum er, går det så fort at tårene renner.'];
var sitat54 = ['Det er jo faen ikke vanskelig da, når du er så feit.', 'Ei dame på TV forteller stolt om å ha gått ned fire kg, men blir som seg hør og bør raskt kritisert av The Leanest Bean.'];
var sitat55 = ['Sett gir i ræva!'];
var sitat56 = ['Det var tilbud, og jeg var jævlig sukkersyk.', 'Merikstad blir spurt om hvorfor han gikk til innkjøp av en stor sjokoladeplate, for deretter å pløye gjennom hele rett etter å ha kommet innenfor døra.'];
var sitat57 = ['Når jeg har rett, så har jeg rett.'];
var sitat58 = ['Egentlig vil jeg være skalla.'];
var sitat59 = ['Jeg har bendelorm, det er derfor jeg spiser så sykt mye.'];
var sitat60 = ['I am the strongest sperm!'];
var sitat61 = ['Det er 20 % sjanse for å bli gravid når man har sex... men det er ganske sjelden man har sex da.'];
var sitat62 = ['Klokka 11 er det nye 12.'];
var sitat63 = ['Dette her er jo ikke et sånt treningssenter der folk løfter mye da. Det er bare meg liksom.'];
var sitat64 = ['Hvorfor gjør du sånn med øynene dine. Er du spedalsk eller?'];
var sitat65 = ['Husk meg på det, Jørge!'];
var sitat66 = ['Jeg trur jeg stikker ned på apoteket og kjøper meg litt insulin.', 'T-rexen har lest at insulin er viktig for gainsing, og gjør tiltak deretter.'];
var sitat67 = ['Du må faen meg se mer filmer ass! Ikke for å bli smartere eller for underholdning, bare så folk ikke tror du bor i en jævla hule.'];
var sitat68 = ['Jeg tror vi skal leke den leken her litt til jeg.'];
var sitat69 = ['Jeg skal gi deg den barndommen du egentlig fortjener.'];
var sitat70 = ['Jeg skal legge meg nå, skal kanskje bare styrte en tunfiskboks først.'];
var sitat71 = ['Du kan så lite, stakkars deg!'];
var sitat72 = ['Det er bare jeg som kan fikse det der.'];
var sitat73 = ['Du vet at du bare skal gå til legen for én konsultasjon, ikke sant? Jeg bare lar det samles opp, jeg.'];
var sitat74 = ['Les om hummere, da!'];
var sitat75 = ['Vi faen meg klatra opp i trær og spilte pokémon!'];
var sitat76 = ['Jeg var jævlig dårlig i IT på skolen, fikk bare 3 eller 4 eller no. Ypperlig ... nei, ynkelig mener jeg.'];
var sitat77 = ['Faen, vi skulle hatt en løve her ass. Jeg hadde digga den så jævlig.'];
var sitat78 = ['Hun hadde sykt store tits ass, det er de løvene tiltrekkes av.'];
var sitat79 = ['En gang gikk jeg nesten et helt år uten å pusse tennene.'];
var sitat80 = ['Faen, da må jeg legge meg først da. Savner å ikke ha Røvde her.'];
var sitat81 = ['Det her er frokost!', 'Merrick er lei av havregryn, og kommer gående inn på kjøkkenet med en proteinshake og en pille. '];
var sitat82 = ['Jeg har gjort alt i baklengsland.'];
var sitat83 = ['Jeg hater hele tiden, jeg.'];
var sitat84 = ['De vektene her er så tunge at jeg får vondt i sjelen.'];
var sitat85 = ['Og hvis det ikke går må du gjøre det fort!'];
var sitat86 = ['Dette er jo trening med Tangerudbakken.', 'T-rexen er ikke alltid like imponert over Jørges innsats og teknikk på treningssenteret.'];
var sitat87 = ['Klærne må av!', 'Etter en lang og hard natt på byen er det bare ett plagg som gjelder, nemlig den sagnomsuste slåbroken.'];
var sitat88 = ['Du får spørre grisen.', 'Det sies at dumme spørsmål får dumme svar. Kanskje ikke så rart da at Merikstad svarer som han gjør på spørsmål fra Hattiho om han tror rumpa til kyllingen smaker godt.'];
var sitat89 = ['Hva skal man med mandlene? De har ingen funksjon, akkurat som jomfruhinnen og blindtarmen!'];
var sitat90 = ['Nei, vi er bare oppvokst for å se forskjell på hvite.', 'Hattiho spør om Merrick virkelig ikke klarer å se forskjell på svarte mennesker.'];
var sitat91 = ['Du må ikke drikke seks øl på vors... du kan også drikke en halv vodka. Da blir du mye mindre full og mye mer glad.'];
var sitat92 = ['Må jeg ha på meg bukse?', 'Et vanlig spørsmål fra T-rexen når det er tid for å dra på byen.'];
var sitat93 = ['Jeg elsker å ødelegge ting.'];
var sitat94 = ['Vi er tre stykker, det er to for mye.'];
var sitat95 = ['Jeg har mye større rumpe enn deg. Jeg har faen meg fem ganger større rumpe enn deg. Du er så jævla heldig.'];
var sitat96 = ['Dere kan få skalle meg. Jeg har alltid hatt lyst til å være skalla.'];
var sitat97 = ['En T-rex skal jo ha det varmt, gjerne tropisk.', 'Røvde påpeker hvor varmt det er på rommet til Merrick, og får et passende svar tilbake.'];
var sitat98 = ['Nevada tror jeg er et fint land ass.'];
var sitat99 = ['Se på dem! De aner ingen fred og fare!'];
var sitat100 = ['Jeg elsker filmer med sånn lucky ending.'];
var sitat101 = ['Det finnes ikke dårlig vær, bare dårlig klær ... og dårlig fly.'];
var sitat102 = ['Snart får jeg så store brystmuskler at jeg kan leke med meg selv, så jeg ikke trenger chicks.'];
var sitat103 = ['Akkurat nå vil jeg heller krige for Taliban enn å dra på cavasøndag.'];
var sitat104 = ['Det er faen meg ikke noe god morgen!', 'Klokka 07.15 sitter Røvde og spiser frokost, da T-rexen akkurat har våknet og kommer ut fra hula si. Røvde sier "God morgen!", og får kjapt svar tilbake.'];
var sitat105 = ['Jeg har kjøpt ørepropper, så du kan bråke så mye du faen meg vil.', 'Med to timers innsovningstid må Lean Bean finne måter å stenge ut Jørges bråk seint på kvelden.'];
var sitat106 = ['Vekkerklokka mi ringer høyere enn brannalarmen, det skal jeg love deg.'];
var sitat107 = ['Jeg er litt redd for at jeg ikke kommer til å våkne av vekkerklokka. Det kan bli et problem for dere.'];
var sitat108 = ['Ok, ta deg en kjapp en da.', 'Jørge sier til Merrick at han må en tur på do før de to skal på trening.'];
var sitat109 = ['Ikke ta deg god tid og les faen meg Donald og sånn.', 'Jørge sier til Merrick at han må en tur på do før de to skal på trening.'];
var sitat110 = ['Agnostikere - motsatte muskler.'];
var sitat111 = ['Det er som om du ikke kjenner deg selv.'];
var sitat112 = ['Det føles ut som jeg har ALS i høyrearmen i dag.'];
var sitat113 = ['Jeg gidder ikke å bruke nødvendige krefter ... nei.'];
var sitat114 = ['Jeg håper Trump vinner og at han gjennomfører alt det han sa, og at USA går i krig ... men bare mot seg selv da.'];
var sitat115 = ['Bedre med en idiot enn en kriminell!', 'T-rexen har sine meninger om det amerikanske presidentvalget.'];
var sitat116 = ['Jeg håper USA mister sin eksistans ... eksistens, og at alt det fæle i verden blir borte. Slik som Apple og sånt.'];
var sitat117 = ['Make America disappear again.', 'Lean Bean for president!'];
var sitat118 = ['Hattestad! Vekkerklokken din ringte i natt! Hvorfor lå ikke den i kjøleskapet?'];
var sitat119 = ['Det er ikke sånn man løser det problemet. Du må slå til den, rive ut batteriene og faen meg pælme den i søpla!', 'Alarmen til Hattiho har ligget på kjøkkenet en natt, og i et forsøk på å skru den av trykte Jørge på snooze-knappen. Merrick er ikke videre imponert, når dette medfører at han våkner tidligere enn planlagt.'];
var sitat120 = ['Ikke ødelegg settet mitt! Det kommer du til å angre på!', 'En skjebne verre en døden venter den som forstyrrer treningen til The Leanest Bean.'];
var sitat121 = ['Det oser så mye autist av deg at det er helt sykt.'];
var sitat122 = ['De fleste fokuserer på antall reps når de trener, men det er feil. Man burde heller fokusere på det negative.'];
var sitat123 = ['Fy faen nå er du bitchboy ass, Jørge. Skikkelige Røvde-tendenser.'];
var sitat124 = ['Han skal jo gjøre America great again. Da kan han ikke fokusere på de svake.'];
var sitat125 = ['Aprikos, det er jo bare tørka fersken.'];
var sitat126 = ['Jeg har hånda inni ræva. Vil du virkelig ta high-five med meg?'];
var sitat127 = ['Nei, det er ingen som stjeler fra meg.', 'Merrick blir spurt om han faktisk ikke låser skapet sitt på treningssenteret.'];
var sitat128 = ['Det eneste jeg har blitt frastjålet er en sykkel, og den kom tyvene tilbake med da de fant ut at den var min.'];
var sitat129 = ['Jeg har ikke gainset på tre år. Jeg har bare hatt motgang bortsett fra små perioder med oppgang.'];
var sitat130 = ['Her er det noen som har løka! Noen personer skulle vært skutt!'];
var sitat131 = ['Hvorfor faen bryr du deg? Du lever jo de gode dager!'];
var sitat132 = ['Skjønner ikke hvorfor jeg er venn med deg ass!'];
var sitat133 = ['Jeg får egentlig veldig fort venner ... eller ofte fiender.'];
var sitat134 = ['Jeg har faktisk en venn som også er venn med Røvde. Det er litt kult, for da kan vi ha en gjeng ... selv om jeg hater Røvde da.'];
var sitat135 = ['Ikke bli vant til det.', 'Jørge påpeker at det er hyggelig at Merrick for en gangs skyld har ventet på han mens han har kledd på seg etter trening.'];
var sitat136 = ['Det er ikke gasskammer, det er OCD-kammer.'];
var sitat137 = ['Det er dobbeltmoral ass, jævla kvinnfolk!'];
var sitat138 = ['Jørge, sett deg ned! ... Men ikke ved siden av meg!'];
var sitat139 = ['Gjem deg bak gaffatrucken!'];
var sitat140 = ['Der måtte jeg bare raske meg på.'];
var sitat141 = ['Too hot to be true.'];
var sitat142 = ['Jeg kan sykle med livet som innsats.'];
var sitat143 = ['Ikke skriv ned det!'];
var sitat144 = ['Hattestad! Sett deg ned ved siden av meg! Jeg må ha to stykker ved siden av meg før jeg begynner å spise.'];
var sitat145 = ['Hva skjer med dårlige transaksjoner i filmen?'];
var sitat146 = ['Vi har altfor mange 97 i klassen ass. Man kan jo ikke være imøtekommende med de, for man vil jo ikke ha mange 97-venner. De er jo så barnslige.'];
var sitat147 = ['Nå har jeg kjøpt nye ørepropper som tar 35 desibel, så nå kan du bråke så mye du faen meg vil, Jørge!'];
var sitat148 = ['Stresse for eksamen? Er du en jævla jente eller?'];
var sitat149 = ['Nå har du for mye østrogen i kroppen ass, Hattestad, når du tenker på sånne ting.'];
var sitat150 = ['Kom ikke du hjem i stad? *** Glemte du noe?', 'Nei..?'];
var sitat151 = ['Man merker om man sover sånn dyp søvn eller sånn lett bikkjesøvn.'];
var sitat152 = ['Nei, jeg skal sove. Du kommer til å angre i morgen.', 'Jørge prøver å komme inn på rommet til Merrick for å gi en beskjed. Det nytter ikke når Lean Bean allerede har begynt den to timer lange innsovningsfasen.'];
var sitat153 = ['Sooov tryyygt...'];
var sitat154 = ['Skje', 'Jørge har skje. Merrick har kniv. Jørge sier ironisk "Ok, nå er det kniv mot skje her. Hvem tror du vinner den fighten?"'];
var sitat155 = ['Har du sett han som går rundt og dreper en annen person med en skje? Han bare slår han sånn sjukt mange ganger.'];
var sitat156 = ['Fem', 'Lean Bean blir spurt hvor mange slag han tror han trenger for å drepe en person med en skje.'];
var sitat157 = ['Skaff deg slåbrok a!'];
var sitat158 = ['Du marger som faen! Se som du marger a, Jørge! Se på deg a!'];
var sitat159 = ['Vanskelig å si... men det er nok henne. Hun har jo så mye olje og piss inni der.', 'T-rexen blir spurt hvem han tror har størst rumpe av han og Nicki Minaj.'];
var sitat160 = ['Du vet jeg har riktig. *** Det er feil.', 'Ja, jeg veit jo at alt du sier er riktig.'];
var sitat161 = ['Du får spørre reven.', 'Lean Bean blir spurt hvordan det føles at ingenting av det han sier gir mening.'];
var sitat162 = ['Tater, hva slags vær er det ute?'];
var sitat163 = ['Du må legge deg tidlig, så kanskje du hører bedre i morgen.'];
var sitat164 = ['Du burde spørre deg selv hvorfor du hører så dårlig. *** Jeg kan ikke spørre meg selv om det, jeg må spørre legen.', 'Nei, du burde spørre deg selv hvorfor du puster så rart.'];
var sitat165 = ['Det er frakk ... og ikke regnjakke som i går, for å si det sånn.', 'Jørge spør Merrick hva dagens værmelding er.'];
var sitat166 = ['Fittefisken, hvor er du?'];
var sitat167 = ['Jeg er hasj ... harsh.', 'Jørge sier følgende: "Fy faen, du er grusom ass!"'];
var sitat168 = ['Jeg hater det grønnsaktrynet ass!'];
var sitat169 = ['Gå og skift før jeg flår deg!', 'Det gjelder å være rask når man skal være med Lean Bean på trening.'];
var sitat170 = ['Fy faen, det lukter leverpostei i den gangen her ass!'];
var sitat171 = ['Jeg har litt mindre fettprosent i den ene armen enn den andre ... det har vært sånn hele livet.'];
var sitat172 = ['Den øvelsen her hadde vært umulig å lære bort til Hattestad.'];
var sitat173 = ['Det er faktisk litt sant, det er mange som er redd for meg på skolen.', 'Jørge sier følgende: "Du er som en honeybadger ass, Merrick. En mannevond jævel som ingen tør å komme i nærheten av."'];
var sitat174 = ['Har du skohorn? Du ser så jævlig ut som typen som har med skohorn.', 'Jørge svarer nei, og får kjapt svar tilbake.'];
var sitat175 = ['Kuknissen er offline.'];
var sitat176 = ['Det gikk ikke. DET GIKK IKKE!!!'];
var sitat177 = ['Jeg vet ikke, spør mor!', 'Jørge og Merrick er på butikken, og førstnevnte spør Lean Bean hvorfor han ikke har skjært opp brødet sitt.'];
var sitat178 = ['Bli med på butikken a, Jørge. Det er mørkt og skummelt, og jeg tør ikke.'];
var sitat179 = ['Hei, jeg går på de beina der!'];
var sitat180 = ['Istedenfor å skrive opp alt jeg sier, hva med å skrive opp alt du sier.'];
var sitat181 = ['Hvorfor tar du mine epler?!', 'Røvde sjonglerer med sine egne klementiner på kjøkkenet, når T-rexen kommer brasende ut av rommet sitt.'];
var sitat182 = ['Nå må jeg ikke drite lenger, jeg skremte bæsjen inne.'];
var sitat183 = ['Hvor ble det av kreftegget?', 'Merrick har kjøpt egg, men er litt skeptisk til det ene som atpåtil har blitt borte.'];
var sitat184 = ['Time kills. Time will kill every living thing.'];
var sitat185 = ['Happy keel day! *** Ja, det er kål på engelsk!', 'Keel?'];
var sitat186 = ['Jo mer lyd man lager når man spiser og drikker, jo bedre smaker maten og drikken.'];
var sitat187 = ['Fuck the war when you can parkour.'];
var sitat188 = ['Typisk sånn svensk, østeuropeisk fitte.'];
var sitat189 = ['Det er jo ikke synd på han! Han er fra Finnland, han kan jo drepe seg selv!', 'Jørge og T-rexen spiller COD, og Jørge begynner å synes synd på Robert_Fin som Merrick trashtalker så kraftig til.'];
var sitat190 = ['Ord skader stakkars individer som spiller COD.'];
var sitat191 = ['De flipper jo spawnet oftere enn oldefar kan telle til 19.'];
var sitat192 = ['Om jeg hadde hatt større kjeft, hadde jeg vært et dyr. Hadde jeg ikke det?'];
var sitat193 = ['Næ næ næ, fitte, hold kjeft.'];
var sitat194 = ['Hva er det for noe i oldefars fitte?!'];
var sitat195 = ['Det er håp... Nei, det er ikke det jeg mener! Det er ikke håp!'];
var sitat196 = ['Jeg sikter som faen meg en høne.'];
var sitat197 = ['Redd meg! Fort, fort, fort! Fortere enn svinet!'];
var sitat198 = ['I don\'t have all the answers, but I certainly have the most.'];
var sitat199 = ['Jeg er necessary douche.'];
var sitat200 = ['Jeg lurer på når biografien min kommer, og hvem som skal skrive den.'];
var sitat201 = ['Har du mista manndommen din enda, eller har du lånt den bort.'];
var sitat202 = ['Jeg hater mennesker!'];
var sitat203 = ['Der ja, bit deg selv.'];
var sitat204 = ['Hvor ofte biter du deg selv?'];
var sitat205 = ['Jeg hater meg selv.'];
var sitat206 = ['Gå til legen, før jeg gjør det.'];
var sitat207 = ['Det er for tidlig for meg å trene ass. Nervesystemet mitt har ikke våkna.'];
var sitat208 = ['Du må spinne vektene når du løfter, det ser mye kulere ut ... også virker ikke tyngdekraften. True story.'];
var sitat209 = ['Jeg pleier å flekse til naboene, så de har noe å se på mens de lager mat.'];
var sitat210 = ['Har du gått helt fra skaftet?'];
var sitat211 = ['Jaså, spiser du kanelsnurr til lunsj?', 'Hattestad sitter og spiser pizzasnurrer til middag, idet Merrick plutselig kommer inn.'];
var sitat212 = ['Kan jeg vinne med null lodd?'];
var sitat213 = ['Nå er det fire for mye på kjøkkenet.', 'Merrick, Røvde, Hattiho og Jørge er alle på kjøkkenet, når Lean Bean plutselig synes det begynner å bli litt overbefolket.'];
var sitat214 = ['Jørge, la meg låne armuret eller lommeklokken din.', 'Lean Bean vil følge med på tida under eksamen, og kommer på at han ikke kan ta med seg mobiltelefon.'];
var sitat215 = ['Veit a faen. Fordi det ser kult ut.', 'Jørge spør Merrick hvorfor han tar to glass i stedet for ett.'];
var sitat216 = ['Du vet at mennesket er sånn to og en halv hestekreft?'];
var sitat217 = ['Hva står du og venter på? Matlysten din?'];
var sitat218 = ['Er det ikke din Dolmio-dag?'];
var sitat219 = ['Kødder du med kuken min eller?'];
var sitat220 = ['Sitter du på dass lenge nok så kommer det.'];
var sitat221 = ['Du sier til meg at det er teit at jeg kjøper ørepropper, også har du ørepropper selv. Fy faen, du er hypokonder... nei, hypocrit!'];
var sitat222 = ['Hvorfor står du på rommet mitt?', 'Jørge står i gangen når Merrick kommer inn ytterdøra.'];
var sitat223 = ['Hver gang jeg tryner, så klarer jeg å hente meg inn.'];
var sitat224 = ['Jeg må ha sjokoladen din, jeg er jævlig kvalm!'];
var sitat225 = ['Du stod opp tidlig for å skjøpe mat? *** Det var jo det jeg sa!', 'Skjøpe ja?'];
var sitat226 = ['Ikke forstyrr meg når jeg ser på porno!'];
var sitat227 = ['Don\'t play the game, Jørge.'];
var sitat228 = ['Drikker du juice om kvelden? Du er så jævlig nightman om dagen og dayman om natten. Drikke juice om kvelden, hvem faen gjør det?'];
var sitat229 = ['Du drikker juice både om morgenen og til kvelds, også klager du alltid over at du har så svake tenner.'];
var sitat230 = ['Du trykker jo tregere enn bestemor.'];
var sitat231 = ['Hattestad, du har glemt å pusse tenner. Du må komme ned igjen.'];
var sitat232 = ['Har du aldri sovet sånn halvveis, sånn lett bikkjesøvn?'];
var sitat233 = ['Nå synes jeg du er vanskelig å hamsles med.'];
var sitat234 = ['Kan du ikke gå på rommet ditt da, og vente på døden.'];
var sitat235 = ['Hvorfor går du med klokke inne?'];
var sitat236 = ['Den som tar den ... den tar den.', 'Lean Bean har lagd brødskiver med pølse som pålegg. Det har blitt igjen en liten snabb som ligger igjen på brødfjøla, og T-rexen sier dette før han forsvinner inn i hula.'];
var sitat237 = ['Det var trætten dusin!'];
var sitat238 = ['Frozen er bare dritt! Det er bare sånn som feminister og Hattestad liker!'];
var sitat239 = ['Neste gang jeg er hos tannlegen tror jeg kanskje jeg skal knabbe en sånn hakke.'];
var sitat240 = ['Jeg har null respekt for tannleger ass. De har sånn 5-6 års utdannelse for å lære å pirke i tenna på folk liksom. Hva faen?'];
var sitat241 = ['Tre kjøttdeiger er 1000 kg.'];
var sitat242 = ['Vil du synge? Gå i kloster.'];
var sitat243 = ['Du spiller farlig.'];
var sitat244 = ['Det var en forhistorisk kondom da aka krokodillebæsj.'];
var sitat245 = ['Egypterne var de første til å lage kondom av krokodilleekskrement ... og det viste seg å ikke fungere.'];
var sitat246 = ['Hva er bæsj og rimer med ist? ... nei.'];
var sitat247 = ['Sokker og slippers', 'Hattiho spør Merrick hva som fungerer best som prevensjon.'];
var sitat248 = ['Fy faen, du er jo ikke skapt for å overleve!'];
var sitat249 = ['Fordi jeg puster.', 'Lean Bean begynner plutselig å lukte på håret til Jørge, og sistnevnte spør hvorfor.'];
var sitat250 = ['Hvorfor har du ikke sko du kan hoppe inn i? Jeg skjønner det ikke... du taper så mye tid!'];
var sitat251 = ['Nå skal jeg gå ned i vekt. Er det én ting jeg kan, så er det å gå ned i vekt!'];
var sitat252 = ['Nytt sett, nye muligheter!', 'The Leanest Bean er alltid like positiv på trening.'];
var sitat253 = ['Mitt navn er Hattestad. Jeg drikker buljong.'];
var sitat254 = ['Er det noen som putter dusjhodet i rumpa? Nei...? Så hvorfor er det brunt da?!'];
var sitat255 = ['Spis de ordene. Spis dem!'];
var sitat256 = ['Jeg er sånn som gud skapte meg, klar til å drepe.'];
var sitat257 = ['Påsken er seint hvert år. Den er faen meg alltid i midten eller slutten av april. Snart er den sikkert i mai!'];
var sitat258 = ['Jeg har ikke sett Theo én gang her i Trondheim. Jeg vet ikke om han er død eller studerer.'];
var sitat259 = ['Hadde det vært for mange hundre år siden, hadde jeg drept alle.'];
var sitat260 = ['Jeg tror det beste er å spy ass. Jeg tror jeg bare spyr litt. Nå bare hikker jeg liksom.'];
var sitat261 = ['En dag skal jeg snitte halsen til noen med den tåa her!', 'Lean Bean viser stolt fram den usannsynlig lange stortåneglen sin.'];
var sitat262 = ['Du spoiler jo alt bare ved å være her.', 'Jørge synes T-rexen ødelegger, og sier følgende: "Hvorfor skal du spoile all moroa, Merrick?"'];
var sitat263 = ['Jeg tok et bilde! Sug meg a!', 'Bekken har fått seg polaroidkamera med dyr film, og Merrick klarer selvfølgelig ubevisst å ta et helt ubrukelig bilde.'];
var sitat264 = ['Er det så farlig? Du har faen meg kamera fra 1800-tallet, jo!', 'Merrick blir konfrontert med det ubrukelige bildet han tok med den dyre filmen til Bekkens polaroidkamera.'];
var sitat265 = ['Er det lenge til du er i rute?'];
var sitat266 = ['Hvem faen sier grass? Det er så jævlig forhistorisk!', 'Lean Bean er ikke imponert over Jørges dialekt.'];
var sitat267 = ['Jeg vedder hele arven min på at det var en jente som kjørte.'];
var sitat268 = ['Fem tonn ... er fem tonn liter.'];
var sitat269 = ['Kunne du levd under en kvinnelig konge?'];
var sitat270 = ['Jeg var verdensmester i pullups hele ungdomsskolen, men så slutta jeg å trene mage.'];
var sitat271 = ['Ta bilde av meg mens jeg roper "The red biceps!"'];
var sitat272 = ['Se så jævlig underarmene mine peaker. Som en gresk gud.'];
var sitat273 = ['Angrer på at jeg trente markløft. Har fått så brede hofter.'];
var sitat274 = ['Det er den enste grunnen til at jeg har hund. For at den kan spise opp tacoen min.'];
var sitat275 = ['Hørte du han som lo da jeg sa den vitsen om termostaten, også lo han helt tragisk? Han kommer til å dø i felt.'];
var sitat276 = ['I morgen er det badevakt, så da kan jeg vise frem kroppen min.'];
var sitat277 = ['Jeg ble litt feitere enn det jeg alltid har vært, så jeg strakk bicepsen min.'];
var sitat278 = ['Jeg så på bicepsen mine, og bare hva faen? Så jeg dro rett hjem og spiste som en ku.'];
var sitat279 = ['Jeg skal bli Forrest Gump mens jeg er her.'];
var sitat280 = ['Det er for mye å sette seg inn i, derfor gidder jeg ikke begynne med steroider.'];
var sitat281 = ['Jeg må ta det pisset her, så må jeg ringe mor. Jævla mor. Så mye stress!'];
var sitat282 = ['Erlend, hvitt pulver er aldri farlig.'];
var sitat283 = ['Faen, alle rundt meg får sixpack, utenom meg.'];
var sitat284 = ['Jeg tenkte meg ikke om før jeg sa det.'];
var sitat285 = ['Faen ass, penislo er det verste i verden ass.'];
var sitat286 = ['What? Han må jo ha et rart navn, sånn Trygve, Bjørnebær, eller Bert.'];
var sitat287 = ['Hold kjeft, ellers så kapper jeg over pulsåra di med tåneglen min.'];
var sitat288 = ['Jeg skulle bare lukte på hodebunnen din. Bare la meg gjøre det da.'];
var sitat289 = ['Faen sett deg ved siden av meg. Trenger folk på begge sider for å kunne spise.'];
var sitat290 = ['Hvis du trener for mye utholdenhet, så blir tissen din rød og ubrukelig.'];
var sitat291 = ['Å fy faen, lukt a! Det lukter så jævlig snø som smelter!'];
var sitat292 = ['Faen! Jeg har fått aids!'];
var sitat293 = ['Jeg kommer aldri med hode under vann lenger.'];
var sitat294 = ['Har kongen i Mexico bursdag?', 'Det serveres tex-mex i messa.'];
var sitat295 = ['Og protein-pulver', 'Skomedal: "Det beste du kan spise er brokkoli, valnøtter og bønner."'];
var sitat296 = ['Før trodde jeg ølbriller var noe man brukte for å ikke få ølsprut i øyet.'];
var sitat297 = ['Jeg sier til vanlig "Faen så stygge briller", for det kan bety hva som helst.'];
var sitat298 = ['Faen, denne appelsinjuicen her er mer vannet ut enn vann.'];
var sitat299 = ['Man kan gjøre hva man vil med Hetland, han har så tynt hode.'];
var sitat300 = ['Jeg dreper han. Jeg har gjort det før!'];
var sitat301 = ['Han har fått Bratlisyke.', 'Også kalt brakkesyke.'];
var sitat302 = ['Jeg skal slå Wold så hardt at han våkner!'];
var sitat303 = ['De tre verste tingene ved en jente er emo, sånn kvinnekjemper og vegetarianer. Butt, face og ass.','Hva er de tre beste?'];
var sitat304 = ['Du bare legger den i skrittet. Ingen kan ta deg for det.', 'Hvordan smugle ut en banan fra messa.'];
var sitat305 = ['Du trenger ikke vaske nettingen, den er selvvaskende!'];
var sitat306 = ['Velg dine jævla ord!', 'Du har så små biceps.'];
var sitat307 = ['Jeg glemte å runke i permen...'];
var sitat308 = ['De fungerer som shorts.', 'Merrick går i forsvarsbokseren.'];
var sitat309 = ['Du er feit for å være tynn.'];
var sitat310 = ['Jeg har en venn som har store ører. Det er den eneste grunnen til at jeg er venn med han.'];
var sitat311 = ['Han er så sykt drittsekk. Det er derfor jeg liker han.'];
var sitat312 = ['Jeg skal gjøre moren din sjalu med hva jeg skal gjøre med faren din.'];

//Funksjon som angir tilfeldig sitat og tilhørende beskrivelse eller tilfeldig navn.
function tilfeldigSitat() {
    var sitater = [
        sitat1, sitat2, sitat3, sitat4, sitat5, sitat6, sitat7, sitat8, sitat9, sitat10, sitat11, sitat12, sitat13, sitat14, sitat15, sitat16, sitat17, sitat18, sitat19, sitat20, sitat21, sitat22, sitat23, sitat24, sitat25, sitat26, sitat27, sitat28, sitat29, sitat30, sitat31, sitat32, sitat33, sitat34, sitat35, sitat36, sitat37, sitat38, sitat39, sitat40, sitat41, sitat42, sitat43, sitat44, sitat45, sitat46, sitat47, sitat48, sitat49, sitat50, sitat51, sitat52, sitat53, sitat54, sitat55, sitat56, sitat57, sitat58, sitat59, sitat60, sitat61, sitat62, sitat63, sitat64, sitat65, sitat66, sitat67, sitat68, sitat69, sitat70, sitat71, sitat72, sitat73, sitat74, sitat75, sitat76, sitat77, sitat78, sitat79, sitat80, sitat81, sitat82, sitat83, sitat84, sitat85, sitat86, sitat87, sitat88, sitat89, sitat90, sitat91, sitat92, sitat93, sitat94, sitat95, sitat96, sitat97, sitat98, sitat99, sitat100, sitat101, sitat102, sitat103, sitat104, sitat105, sitat106, sitat107, sitat108, sitat109, sitat110, sitat111, sitat112, sitat113, sitat114, sitat115, sitat116, sitat117, sitat118, sitat119, sitat120, sitat121, sitat122, sitat123, sitat124, sitat125, sitat126, sitat127, sitat128, sitat129, sitat130, sitat131, sitat132, sitat133, sitat134, sitat135, sitat136, sitat137, sitat138, sitat139, sitat140, sitat141, sitat142, sitat143, sitat144, sitat145, sitat146, sitat147, sitat148, sitat149, sitat150, sitat151, sitat152, sitat153, sitat154, sitat155, sitat156, sitat157, sitat158, sitat159, sitat160, sitat161, sitat162, sitat163, sitat164, sitat165, sitat166, sitat167, sitat168, sitat169, sitat170, sitat171, sitat172, sitat173, sitat174, sitat175, sitat176, sitat177, sitat178, sitat179, sitat180, sitat181, sitat182, sitat183, sitat184, sitat185, sitat186, sitat187, sitat188, sitat189, sitat190, sitat191, sitat192, sitat193, sitat194, sitat195, sitat196, sitat197, sitat198, sitat199, sitat200, sitat201, sitat202, sitat203, sitat204, sitat205, sitat206, sitat207, sitat208, sitat209, sitat210, sitat211, sitat212, sitat213, sitat214, sitat215, sitat216, sitat217, sitat218, sitat219, sitat220, sitat221, sitat222, sitat223, sitat224, sitat225, sitat226, sitat227, sitat228, sitat229, sitat230, sitat231, sitat232, sitat233, sitat234, sitat235, sitat236, sitat237, sitat238, sitat239, sitat240, sitat241, sitat242, sitat243, sitat244, sitat245, sitat246, sitat247, sitat248, sitat249, sitat250, sitat251, sitat252, sitat253, sitat254, sitat255, sitat256, sitat257, sitat258, sitat259, sitat260, sitat261, sitat262, sitat263, sitat264, sitat265, sitat266, sitat267, sitat268, sitat269, sitat270, sitat271, sitat272, sitat273, sitat274, sitat275, sitat276, sitat277, sitat278, sitat279, sitat280, sitat281, sitat282, sitat283, sitat284, sitat285, sitat286, sitat287, sitat288, sitat289, sitat290, sitat291, sitat292, sitat293, sitat294, sitat295, sitat296, sitat297, sitat298, sitat299, sitat300, sitat301, sitat302, sitat303, sitat304, sitat305, sitat306, sitat307, sitat308, sitat309, sitat310, sitat311, sitat312
    ];
    var tilfeldigTall = Math.floor(Math.random() * sitater.length);
    $('.sitat').text(sitater[tilfeldigTall][0]);
    if (sitater[tilfeldigTall].length > 1) {
        $('.hvaOgHvem').text(sitater[tilfeldigTall][1]);
        $('.hvaOgHvem').css('padding', '15% 2% 25% 77%');
    } else {
        tilfeldigNavn();
    }
}

//Funksjon som angir tilfeldig navn.
function tilfeldigNavn() {
    var navn = [
        'Merrick',
        'Lean Bean',
        'The Leanest Bean',
        'Merikstad',
        'T-rex',
        'Bean',
        'Merrick - black of hair',
        'Pett',
        'Johan Pettersen'
    ];
    var tilfeldigTall = Math.floor(Math.random() * navn.length);
    $('.hvaOgHvem').text(navn[tilfeldigTall]);
}

//Funksjon som fader inn sitatene og navnene.
function innlasting() {
        $('.sitat').fadeIn(2000);
        $('.hvaOgHvem').fadeIn(2000);
}

var stoerrelseSitat = 500;

//Funksjon som tilpasser skriftstørrelsen til sitatene.
function skriftStoerrelseSitat() {
    $('.sitat').css('font-size', stoerrelseSitat + 'px');
    while ($('.sitat')[0].scrollHeight > 1500) {
        stoerrelseSitat -= 1;
        skriftStoerrelseSitat();
    }
}

var stoerrelseHvem = 100;

//Funksjon som tilpasser skriftstørrelsen til navnene.
function skriftStoerrelseHvem() {
    $('.hvaOgHvem').css('font-size', stoerrelseHvem + 'px');
    while ($('.hvaOgHvem')[0].scrollHeight > 1750) {
        stoerrelseHvem -= 1;
        skriftStoerrelseHvem();
    }
}

//Funksjon som fader inn og ut de tre knappene.
function knapper() {
    $('body').hover(function() {
        $('.trestripeknapp').stop(true, true);
        $('.nyttSitat').stop(true, true);
        $('.googlesøk').stop(true, true);
        if (!($('.mørkSkjerm').is(':hover')) && !($('.søk').is(':hover')) && !($('#søkeTekst').is(':hover'))) {
            $('.trestripeknapp').fadeIn(500);
            $('.nyttSitat').fadeIn(500);
            $('.googlesøk').fadeIn(500);
        }
    }, function() {
        if (!($('.jaTilKnapp').length)) {
            $('.trestripeknapp').fadeOut(500);
            $('.nyttSitat').fadeOut(500);
            $('.googlesøk').fadeOut(500);
        }
    })
}

//Funksjon som endrer farge på navigasjonsbarknappen.
function fargeknapp() {
    $('.trestripeknapp').hover(function() {
        $('.stripe1').css('background-color', '#444');
        $('.stripe2').css('background-color', '#444');
        $('.stripe3').css('background-color', '#444');
    }, function() {
        $('.stripe1').css('background-color', '#ddd');
        $('.stripe2').css('background-color', '#ddd');
        $('.stripe3').css('background-color', '#ddd');
    })
}

//Funksjon som endrer utseende på navigasjonsbarknappen fra striper til kryss og omvendt.
function striperTilKryss() {
    document.getElementById('trestripeknapp').classList.toggle('endring');
}

//Funksjon som endrer utseende på navigasjonsbarknappen fra kryss til striper.
function kryssTilStriper() {
    document.getElementById('trestripeknapp').classList.remove('endring');
}

//Funksjon som klargjør funksjonen striperTilKryss.
function klarForStriperTilKryss() {
    document.getElementById('trestripeknapp').addEventListener('click', striperTilKryss);
    document.getElementById('gjennomsiktigSkjerm').addEventListener('click', kryssTilStriper);
}

//Funksjon som fader inn og ut søkebaren.
function søkebar() {
    $('.googlesøk').click(function() {
        $('.søkebar').fadeIn(250);
        $('.mørkSkjerm').fadeIn(250);
        $('.trestripeknapp').fadeOut(500);
        $('.nyttSitat').fadeOut(500);
        $('.googlesøk').fadeOut(500);
        $('#søkeTekst').focus();
        $('.mørkSkjerm').click(function() {
            $('.søkebar').fadeOut(250);
            $('.mørkSkjerm').fadeOut(250);
            $('.trestripeknapp').fadeIn(500);
            $('.nyttSitat').fadeIn(500);
            $('.googlesøk').fadeIn(500);
        })
    })
}

//Funksjon som sørger for at navigasjonsmenyen opptar mest mulig plass på skjermen.
function merPlass() {
    var skjermhøyde = parseInt(($('.heleSkjermen').css('height')).slice(0, -2));
    var ledigPlass = skjermhøyde - 100;
    var utgangshøyde = 48;
    var listehøyde = Math.floor(ledigPlass / utgangshøyde) * 48;
    return String(listehøyde) + 'px';
}

//Funksjon som fader inn og ut navigasjonsmenyen samt knappene.
function navigasjonsmeny() {
    $('.trestripeknapp').click(function() {
        menyFram();
    })
}

//Funksjon som fader navigasjonsmenyen inn og knappene ut.
function menyFram() {
    var listehøyde = merPlass();
    $('.navigasjonsmenytopp').stop(true, true);
    $('.nyttSitat').stop(true, true);
    $('.googlesøk').stop(true, true);
    $('.navigasjonsmenytopp').fadeIn(500);
    $('.liste').css('max-height', listehøyde);
    $('.liste').css('transition', 'max-height 0.5s ease-out 0.5s');
    $('.over').css('max-height', '1000px');
    $('.over').css('transition', 'max-height 10s ease-out 0.5s');
    $('.nyttSitat').fadeOut(500);
    $('.googlesøk').fadeOut(500);
    setTimeout(function() {
        $('.trestripeknapp').addClass('jaTilKnapp');
        $('.nyttSitat').addClass('neiTilKnapp');
        $('.googlesøk').addClass('neiTilKnapp');
    }, 500)
    $('.trestripeknapp').one('click', menyVekk);
    $('.gjennomsiktigSkjerm').one('click', menyVekk);
}

//Funksjon som fader navigasjonsmenyen ut og knappene inn.
function menyVekk() {
    $('.navigasjonsmenytopp').stop(true, true);
    $('.nyttSitat').stop(true, true);
    $('.googlesøk').stop(true, true);
    $('.navigasjonsmenytopp').delay(500).fadeOut(500);
    $('.liste').css('max-height', '0');
    $('.liste').css('transition', 'max-height 5s ease-out');
    $('.over').css('max-height', '0');
    $('.over').css('transition', 'max-height 0.5s ease-out');
    $('.nyttSitat').fadeIn(500);
    $('.googlesøk').fadeIn(500);
    setTimeout(function() {
        $('.trestripeknapp').removeClass('jaTilKnapp');
        $('.nyttSitat').removeClass('neiTilKnapp');
        $('.googlesøk').removeClass('neiTilKnapp');
    }, 500)
    $('.trestripeknapp').one('click', menyFram);
}

//Funksjon som fader ut de tre knappene dersom musen er stillestående.
function stilleMus() {
    var timer;
    $(document).mousemove(function() {
        if (timer) {
            clearTimeout(timer);
            timer = 0;
        }
        if (!($('.mørkSkjerm').is(':hover')) && !($('.søk').is(':hover')) && !($('#søkeTekst').is(':hover'))) {
            $('.trestripeknapp').fadeIn(500);
            $('.nyttSitat').fadeIn(500);
            $('.googlesøk').fadeIn(500);
        }
        if (!($('.jaTilKnapp').length)) {
            timer = setTimeout(function() {
                $('.trestripeknapp').fadeOut(500);
                $('.nyttSitat').fadeOut(500);
                $('.googlesøk').fadeOut(500);
            }, 2000)
    }
    })
}

// Funskjon som laster inn undermenyer i navigasjonsmenyen som er lagret av brukeren.
var menyer = [];
function lastInnMenyer(nyeMenyer) {
    chrome.storage.sync.get(null, function(items) {
        var alleNøkler = Object.keys(items);
        alleNøkler.forEach(function(nøkkel) {
            var verdi = items[nøkkel];
            if (verdi.length < 4) {
                var span = document.createElement('SPAN');
                var nav = document.createElement('NAV');
                var i = document.createElement('I');
                i.className = 'fa fa-' + verdi[1] + ' fa-fw fa-lg';
                span.appendChild(i);
                var nbsp = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0');
                var tekst = document.createTextNode(verdi[0]);
                span.appendChild(nbsp);
                span.appendChild(tekst);
                var navn = verdi[0];
                navn = navn.replace(/ /g, '_');
                var spanklasse = 'listeobjekt over ' + navn;
                span.className = spanklasse;
                span.id = navn;
                var navklasse = navn + 'liste';
                nav.className = navklasse;
                nav.id = navklasse;
                document.getElementById('samleobjekt').appendChild(span);
                document.getElementById('samleobjekt').appendChild(nav);
                $('.' + navklasse).css('max-height', '0');
                $('.' + navklasse).css('transition', 'max-height 0s');
                $('.' + navklasse).css('overflow-y', 'auto');
                $('.' + navklasse).css('background-color', 'white');
                menyer.push(navn);
            }
        })
    })
    lastInnSider();
    setTimeout(function() {
        nyeMenyer();
    }, 100);
}

// Funskjon som laster inn sider i navigasjonsmenyen som er lagret av brukeren.
function lastInnSider() {
    chrome.storage.sync.get(null, function(items) {
        var alleNøkler = Object.keys(items);
        alleNøkler.forEach(function(nøkkel) {
            var verdi = items[nøkkel];
            if (verdi.length > 2) {
                var a = document.createElement('A');
                var i = document.createElement('I');
                i.className = 'fa fa-' + verdi[1] + ' fa-fw fa-lg';
                a.appendChild(i);
                var nbsp = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0');
                var tekst = document.createTextNode(verdi[0]);
                a.appendChild(nbsp);
                a.appendChild(tekst);
                a.id = verdi[0];
                var navn = verdi[3];
                var navnet = verdi[3];
                navn = navn.replace(/ /g, '_');
                var navklasse = navn + 'liste';
                if (verdi[3] == 'hovedmeny') {
                    a.className = 'listeobjekt over';
                    document.getElementById('liste').appendChild(a);
                } else if (verdi[3] == navnet) {
                    var under = 'under' + navn;
                    a.className = 'listeobjekt ' + under;
                    document.getElementById(navklasse).appendChild(a);
                    $('.' + under).css('max-height', '0');
                    $('.' + under).css('transition', 'max-height 0s');
                    $('.' + under).css('overflow-y', 'hidden');
                }
                document.getElementById(verdi[0]).href = verdi[2];
            }
        })
    })
}

//Funksjon som sørger for at de nye menyene åpnes og lukkes i navigasjonsbaren.
function nyeMenyer() {
    lastInnMenyer(function() {
        for (i = 0; i < menyer.length; i++) {
            var navn = menyer[i];
            var navklasse = navn + 'liste';
            var under = 'under' + navn;
            menyanimasjoner(navn, navklasse, under);
        }
    });
}


function menyanimasjoner(navn, navklasse, under) {
    $('.' + navn).click(function() {
        $('.' + navn).css('color', 'white');
        $('.' + navn + ':hover').css('color', 'white');
        $('.' + navn).css('background-color', '#666');
        $('.' + navn + ':hover').css('background-color', '#666');
        $('.' + navklasse).css('max-height', '1000px');
        $('.' + navklasse).css('transition', 'max-height 0.5s ease-out');
        $('.' + under).css('max-height', '1000px');
        $('.' + under).css('transition', 'max-height 10s ease-out');
        $('.listeobjekt').click(function() {
            $('.' + navn).css('color', '');
            $('.' + navn + ':hover').css('color', '');
            $('.' + navn).css('background-color', '');
            $('.' + navn + ':hover').css('background-color', '');
            $('.' + navklasse).css('max-height', '0');
            $('.' + navklasse).css('transition', 'max-height 0.5s ease-out');
            $('.' + under).css('max-height', '0');
            $('.' + under).css('transition', 'max-height 0.5s ease-out');
            menyanimasjoner(navn, navklasse, under);
        })
        $('.trestripeknapp').click(function() {
            $('.' + navn).css('color', '');
            $('.' + navn + ':hover').css('color', '');
            $('.' + navn).css('background-color', '');
            $('.' + navn + ':hover').css('background-color', '');
            $('.' + navklasse).css('max-height', '0');
            $('.' + navklasse).css('transition', 'max-height 0.5s ease-out');
            $('.' + under).css('max-height', '0');
            $('.' + under).css('transition', 'max-height 0.5s ease-out');
            menyanimasjoner(navn, navklasse, under);
        })
        $('.gjennomsiktigSkjerm').click(function() {
            $('.' + navn).css('color', '');
            $('.' + navn + ':hover').css('color', '');
            $('.' + navn).css('background-color', '');
            $('.' + navn + ':hover').css('background-color', '');
            $('.' + navklasse).css('max-height', '0');
            $('.' + navklasse).css('transition', 'max-height 0.5s ease-out');
            $('.' + under).css('max-height', '0');
            $('.' + under).css('transition', 'max-height 0.5s ease-out');
            menyanimasjoner(navn, navklasse, under);
        })
    })
}


$(document).ready(main);
