package data1700.oblig3;

public class Billett {
    public String film;
    public String antall;
    public String fornavn;
    public String etternavn;
    public String telefonnr;
    public String epost;

    public Billett(String film, String antall, String fornavn, String etternavn, String telefonnr, String epost) {
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }
}
