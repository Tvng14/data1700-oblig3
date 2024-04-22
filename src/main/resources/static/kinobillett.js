alleBilletter = [];
$(function(){
    hentAlle();
})
const regexEpost = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
const regexTlf = /^(4[0-9]{7}|9[0-9]{7})$/;

function bestillBillett() {
    const film = $("#velgFilm option:selected").text();
    const antall = $("#antallBilletter").val();
    const fornavn = $("#innFornavn").val();
    const etternavn = $("#innEtternavn").val();
    const telefonnr = $("#innTlf").val();
    const epost = $("#innEpost").val();

    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    }

    // Input-validering
    if (antall.trim() === "") {
        $("#feilAntall").text("Vennligst velg antall billetter");
    } else {
        $("#feilAntall").text("");
    }
    if (fornavn.trim() === "") {
        $("#feilFornavn").text("Vennligst fyll ut fornavn");
    } else {
        $("#feilFornavn").text("");
    }
    if (etternavn.trim() === "") {
        $("#feilEtternavn").text("Vennligst fyll ut etternavn");
    } else {
        $("#feilEtternavn").text("");
    }
    if (telefonnr.trim() === "") {
        $("#feilTlf").text("Vennligst fyll ut telefonnummer");
    } else if (!regexTlf.test(telefonnr)) {
        $("#feilTlf").text("Ugyldig telefonnummer");
    } else {
        $("#feilTlf").text("");
    }
    if (epost.trim() === "") {
        $("#feilEpost").text("Vennligst fyll ut e-post");
    } else if (!regexEpost.test(epost)) {
        $("#feilEpost").text("Ugyldig e-post");
    } else {
        $("#feilEpost").text("");
    }

    if (antall !== "" && fornavn.trim() !== "" && etternavn.trim() !== "" &&
        telefonnr.trim() !== "" && regexTlf.test(telefonnr) && epost.trim() !== "" && regexEpost.test(epost)) {
        alleBilletter.push(billett);
        //tømmer input-feltene etter at en billett er ferdig registrert
        $("#antallBilletter").val("");
        $("#innFornavn").val("");
        $("#innEtternavn").val("");
        $("#innTlf").val("");
        $("#innEpost").val("");

        skrivUt(alleBilletter);
    }

    $.post("/addBillett", billett, function (){
        hentAlle();
    });
}
function skrivUt(billetter){
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>E-post</th>" +
        "</tr>";
    for(let i of billetter){
        ut+="<tr><td>"+i.film+"</td><td>"+i.antall+"</td><td>"+i.fornavn+"</td><td>"
            +i.etternavn+"</td><td>"+i.telefonnr+"</td><td>"+i.epost+"</td></tr>"
    }
    ut+="</table>";

    $("#visBilletter").html(ut);
}
function hentAlle(){
    $.get('/getBillett',function(data){
        skrivUt(data);
    });
};
function slettBilletter() {
    alleBilletter = [];
    let tømListe = document.getElementById("visBilletter");
    tømListe.innerHTML = "";
    $.get('/slettBilletter',function (){
        hentAlle();
    });
}
