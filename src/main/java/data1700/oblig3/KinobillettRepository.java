package data1700.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KinobillettRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett innBillett){
        String sql= "INSERT INTO Billett (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilm(), innBillett.getAntall(), innBillett.getFornavn(),
                innBillett.getEtternavn(), innBillett.getTelefonnr(), innBillett.getEpost());
    }
    public List<Billett> hentAlle(){
        String sql = "SELECT * FROM Billett ORDER BY etternavn ASC";
        // Nye billetter som legges til sorteres etter etternavn under "Alle Billetter"
        List<Billett> alleBilletter = db.query(sql,new BeanPropertyRowMapper<>(Billett.class));
        return alleBilletter;
    }

    public void slettBilletter(){
        String sqlSlettBilletter = "DELETE FROM Billett";
        String sqlResetID = "ALTER TABLE Billett ALTER COLUMN id RESTART WITH 1";
        // Når alle billetter slettes starter id på 1 istedenfor å telle videre fra forrige billetter som ble slettet
        db.update(sqlSlettBilletter);
        db.update(sqlResetID);
    }
}
