package data1700.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
public class KinobillettController {
    @Autowired
    KinobillettRepository rep;
    @PostMapping("/addBillett")
    public void addbillett(Billett billett) {
        System.out.println("Billettene er lagt til");
        rep.lagreBillett(billett);
    }
    @GetMapping ("/getBillett")
    public List<Billett> hentAlle() {
        return rep.hentAlle();
    }
    @GetMapping("/slettBilletter")
    public void slettBilletter() {
        System.out.println("Billettene er slettet");
        rep.slettBilletter();
    }
}