package pe.idat.ZodiacoChino.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ZodiacoController {
    @GetMapping("/")
    public String mostrarFormulario() {
        return "index"; // Muestra la página principal en el puerto 9090
    }

    @PostMapping("/calcular")
    public String calcularSigno(
            @RequestParam("anio") int anio,
            Model model
    ) {
        if (anio < 1900 || anio > 2100) {
            model.addAttribute("error", "Año inválido");
            return "index";
        }
        String signo = calcularSignoChino(anio);
        model.addAttribute("signo", signo);
        model.addAttribute("anio", anio);
        return "resultado"; // Muestra el resultado
    }

    private String calcularSignoChino(int anio) {
        String[] signos = {
                "Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey",
                "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra"
        };
        return signos[anio % 12]; // Cálculo del signo
    }
}
