alleBilletter = [];
const regexEpost = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
const regexTlf = /^(4[0-9]{7}|9[0-9]{7})$/;
function velgFilm(){
    valgtFilm = document.getElementById("velgFilm").value;
}
function bestillBillett() {
    const filmTittel = document.getElementById("velgFilm").value;
    const antall = document.getElementById("antallBilletter").value;
    const fornavn = document.getElementById("innFornavn").value;
    const etternavn = document.getElementById("innEtternavn").value;
    const telefonnr = document.getElementById("innTlf").value;
    const epost = document.getElementById("innEpost").value;

    const billett = {
        filmTittel: filmTittel,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    };
    let antallBilletter = document.getElementById("antallBilletter").value;
    let innFornavn = document.getElementById("innFornavn").value;
    let innEtternavn = document.getElementById("innEtternavn").value;
    let innTlf = document.getElementById("innTlf").value;
    let innEpost = document.getElementById("innEpost").value;

    var selectFilm = document.getElementById("velgFilm");
    var valgtFilm = selectFilm.value;
    if (valgtFilm === "") {
        document.getElementById("feilFilm").innerText = "Vennligst velg en film";
    } else {
        document.getElementById("feilFilm").innerText = "";
    }
    if (antallBilletter == "") {
        document.getElementById("feilAntall").innerText = "Vennligst velg antall billetter";
    } else {
        document.getElementById("feilAntall").innerText = "";
    }

    if (innFornavn.trim() == "") {
        document.getElementById("feilFornavn").innerText = "Vennligst fyll ut fornavn";
    } else {
        document.getElementById("feilFornavn").innerText = "";
    }

    if (innEtternavn.trim() == "") {
        document.getElementById("feilEtternavn").innerText = "Vennligst fyll ut etternavn";
    } else {
        document.getElementById("feilEtternavn").innerText = "";
    }

    if (innTlf.trim() == "") {
        document.getElementById("feilTlf").innerText = "Vennligst fyll ut telefonnummer";
    } else if (!regexTlf.test(innTlf)) {
        document.getElementById("feilTlf").innerText = "Ugyldig telefonnummer";
    } else {
        document.getElementById("feilTlf").innerText = "";
    }

    if (innEpost.trim() == "") {
        document.getElementById("feilEpost").innerText = "Vennligst fyll ut e-post";
    } else if (!regexEpost.test(innEpost)) {
        document.getElementById("feilEpost").innerText = "Ugyldig e-post";
    } else {
        document.getElementById("feilEpost").innerText = "";
    }

    if (filmTittel.trim() !== "" && antall !== "" && fornavn.trim() !== "" && etternavn.trim() !== "" &&
        telefonnr.trim() !== "" && regexTlf.test(innTlf) && epost.trim() !== "" && regexEpost.test(innEpost)) {
        alleBilletter.push(billett);
        document.getElementById("valgtFilm").value = "";
        document.getElementById("antallBilletter").value = "";
        document.getElementById("innFornavn").value = "";
        document.getElementById("innEtternavn").value = "";
        document.getElementById("innTlf").value = "";
        document.getElementById("innEpost").value = "";
    }
    $.post('/addBillett', billett, function (response) {
        console.log('Billett added:', response);

        $.get('/getBillett', function (kinobilletter) {
            console.log('Kinobilletter: ', kinobilletter)
        })
        let visBilletter = document.getElementById("visBilletter");
        const listeBilletter = alleBilletter.map(function (info) {

            return "<li>Film: " + info.filmTittel +
                "<br>Antall: " + info.antall +
                "<br>Fornavn: " + info.fornavn +
                "<br>Etternavn: " + info.etternavn +
                "<br>Telefonnr: " + info.telefonnr +
                "<br>E-post: " + info.epost + "</li><br>";
        });
        visBilletter.innerHTML = "<ul>" + listeBilletter.join("") + "</ul>";
    })
}
function slettBilletter() {
    alleBilletter = [];
    let tømListe = document.getElementById("visBilletter");
    tømListe.innerHTML = "";
    $.post('/slettBilletter');
    location.reload();
}