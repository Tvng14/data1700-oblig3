package data1700.oblig3;

import java.util.List;

public class Billett {
    private String filmTittel;
    private int antall;
    private String fornavn;
    private String etternavn;
    private int telefonnr;
    private String epost;

    public Billett() {
    }
    public Billett(String film, int antall, String fornavn, String etternavn, int telefonnr, String epost){
        this.filmTittel= film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
    }

    public String getFilm() {
        return filmTittel;
    }

    public void setFilm(String filmTittel) {
        this.filmTittel = filmTittel;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public int getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(int telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }
}