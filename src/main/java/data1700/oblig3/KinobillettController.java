package data1700.oblig3;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
public class KinobillettController {
    private final List<Billett> kinobilletter = new ArrayList<>();

    @PostMapping("/addBillett")
    public void addbillett(Billett billetter) {
        System.out.println("Billettene er lagt til");
        kinobilletter.add(billetter);
    }

    @GetMapping ("/getBillett")
    public List<Billett> getBilletter() {
        return kinobilletter;
    }
    @GetMapping("/slettBilletter")
    public void slettBilletter() {
        System.out.println("Billettene er slettet");
        kinobilletter.clear();
    }
}