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

//Funksjon som avgjør om sider eller undermenyer skal fjernes.
function fjern() {
    var sideTilFjerning = document.getElementById('sideTilFjerning').value;
    var undermenyTilFjerning = document.getElementById('undermenyTilFjerning').value;
    if ((sideTilFjerning == '') && (undermenyTilFjerning == '')) {
        var status = document.getElementById('fjernStatus');
        status.textContent = 'Du må angi en side eller undermeny som skal fjernes';
        setTimeout(function() {
            status.textContent = '';
        }, 2000);
    } else if ((sideTilFjerning != '') && (undermenyTilFjerning != '')) {
        var status = document.getElementById('fjernStatus');
        status.textContent = 'Du kan ikke fjerne både en side og undermeny samtidig';
        setTimeout(function() {
            status.textContent = '';
        }, 2000);
    } else if (sideTilFjerning != '') {
        fjernSide();
    } else if (undermenyTilFjerning != '') {
        fjernUndermeny();
    }
}
document.getElementById('fjernKnapp').addEventListener('click', fjern);

//Funksjon som fjerner sider.
function fjernSide() {
    var sideTilFjerning = document.getElementById('sideTilFjerning').value;
    document.getElementById('sideTilFjerning').value = '';
    chrome.storage.sync.remove(sideTilFjerning, function() {
        var status = document.getElementById('fjernStatus');
        status.textContent = 'Side fjernet';
        setTimeout(function() {
            status.textContent = '';
        }, 2000);
    });
}

//Funksjon som fjerner undermenyer.
function fjernUndermeny() {
    var undermenyTilFjerning = document.getElementById('undermenyTilFjerning').value;
    document.getElementById('undermenyTilFjerning').value = '';
    chrome.storage.sync.remove(undermenyTilFjerning, function() {
        var status = document.getElementById('fjernStatus');
        status.textContent = 'Undermeny fjernet';
        setTimeout(function() {
            status.textContent = '';
        }, 2000);
    });
    chrome.storage.sync.get(null, function(items) {
        var alleNøkler = Object.keys(items);
        alleNøkler.forEach(function(nøkkel) {
            var verdi = items[nøkkel];
            if (verdi.length > 2) {
                if (verdi[3] == undermenyTilFjerning) {
                    chrome.storage.sync.remove(verdi);
                }
            }
        });
    });
}

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
            status.textContent = 'Alle elementer fjernet';
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
            if (verdi.length > 2) {
                var fjernSideValg = document.createElement('OPTION');
                var tekst = verdi[0];
                fjernSideValg.text = tekst;
                fjernSideValg.value = tekst;
                document.getElementById('sideTilFjerning').add(fjernSideValg);
            } if (verdi.length < 4) {
                var plasseringValg = document.createElement('OPTION');
                var tekst = verdi[0];
                plasseringValg.text = tekst;
                plasseringValg.value = tekst;
                document.getElementById('hvorSidenPlasseres').add(plasseringValg);
                var fjernUndermenyValg = document.createElement('OPTION');
                var tekst = verdi[0];
                fjernUndermenyValg.text = tekst;
                fjernUndermenyValg.value = tekst;
                document.getElementById('undermenyTilFjerning').add(fjernUndermenyValg);
            }
        });
    });
}
window.onload = lastInnEgneInnstillinger();