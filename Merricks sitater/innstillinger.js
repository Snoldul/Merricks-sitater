//Funksjon som legger til nye sider.
function leggTilSide() {
    var nySide = document.getElementById('nySide').value;
    var nyNettadresse = 'http://' + document.getElementById('nyNettadresse').value;
    var nyttSidesymbol = document.getElementById('nyttSidesymbol').value;
    var nyHvor = document.getElementById('hvorSidenPlasseres').value;
    if ((nySide == '') || (nyNettadresse == 'http://') || (nyttSidesymbol == '')) {
        var status = document.getElementById('leggTilSideStatus');
        status.textContent = 'Alle feltene må fylles ut';
        setTimeout(function() {
            status.textContent = '';
        }, 2000);
    } else {
        var nySideListe = [nySide, nyttSidesymbol, nyNettadresse, nyHvor];
        var nySideOrdbok = {};
        nySideOrdbok[nySide] = nySideListe;
        document.getElementById('nySide').value = '';
        document.getElementById('nyNettadresse').value = '';
        document.getElementById('nyttSidesymbol').value = '';
        chrome.storage.sync.set(nySideOrdbok, function() {
            var status = document.getElementById('leggTilSideStatus');
            status.textContent = 'Ny side lagt til';
            setTimeout(function() {
                status.textContent = '';
            }, 2000);
        });
    }
}
document.getElementById('leggTilSideKnapp').addEventListener('click', leggTilSide);

//Funksjon som legger til nye menyer.
function leggTilMeny() {
    var nyMeny = document.getElementById('nyMeny').value;
    var nyttMenysymbol = document.getElementById('nyttMenysymbol').value;
    if ((nyMeny == '') || (nyttMenysymbol == '')) {
        var status = document.getElementById('leggTilMenyStatus');
        status.textContent = 'Begge feltene må fylles ut';
        setTimeout(function() {
            status.textContent = '';
        }, 2000);
    } else {
        var nyMenyListe = [nyMeny, nyttMenysymbol];
        var nyMenyOrdbok = {};
        nyMenyOrdbok[nyMeny] = nyMenyListe;
        document.getElementById('nyMeny').value = '';
        document.getElementById('nyttMenysymbol').value = '';
        chrome.storage.sync.set(nyMenyOrdbok, function() {
            var status = document.getElementById('leggTilMenyStatus');
            status.textContent = 'Ny meny lagt til';
            setTimeout(function() {
                status.textContent = '';
            }, 2000);
        });
    }
}
document.getElementById('leggTilMenyKnapp').addEventListener('click', leggTilMeny);

//Funksjon som fjerner sider og menyer.
function fjern() {
    var fjernSide = document.getElementById('fjernSide').value;
    if (fjernSide == '') {
        var status = document.getElementById('fjernStatus');
        status.textContent = 'Du må angi elementets navn';
        setTimeout(function() {
            status.textContent = '';
        }, 2000);
    } else {
        document.getElementById('fjernSide').value = '';
        chrome.storage.sync.remove(fjernSide, function() {
            var status = document.getElementById('fjernStatus');
            status.textContent = 'Side fjernet';
            setTimeout(function() {
                status.textContent = '';
            }, 2000);
        });
    }
}
document.getElementById('fjernKnapp').addEventListener('click', fjern);

//Funksjon som fjerner alle elementene.
function fjernAlt() {
    var fjernEllerIkke = document.getElementById('fjernStatus');
    fjernEllerIkke.textContent = 'Er du sikker?';
    var nbsp = document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0');
    document.getElementById('fjernStatus').appendChild(nbsp);
    var knapp = document.createElement('BUTTON');
    var tekst = document.createTextNode('OK');
    knapp.appendChild(tekst);
    document.getElementById('fjernStatus').appendChild(knapp);
    knapp.id = 'erDuSikker';
    document.getElementById('erDuSikker').addEventListener('click', function() {
        chrome.storage.sync.clear(function() {
            var status = document.getElementById('fjernStatus');
            status.textContent = 'Alle sider fjernet';
            setTimeout(function() {
                status.textContent = '';
            }, 2000);
        });
    });
}
document.getElementById('fjernAltKnapp').addEventListener('click', fjernAlt);

//Funksjon som laster inn innstillingene.
function lastInnEgneInnstillinger() {
    chrome.storage.sync.get(null, function(items) {
        var alleNøkler = Object.keys(items);
        alleNøkler.forEach(function(nøkkel) {
            var verdi = items[nøkkel];
            if (verdi.length < 4) {
                var option = document.createElement('OPTION');
                var tekst = verdi[0];
                option.text = tekst;
                option.value = tekst;
                document.getElementById('hvorSidenPlasseres').add(option);
            }
        })
    })
}
window.onload = lastInnEgneInnstillinger();