package org.recettes.api.controller;

import org.recettes.api.model.LoginRequest;
import org.recettes.api.model.Utilisateur;
import org.recettes.api.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Utilisateur user) {
        if (utilisateurRepository.findByAdresseElectronique(user.getAdresseElectronique()).isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("success", false, "message", "Cet email est déjà utilisé."));
        }

        user.setMotDePasse(passwordEncoder.encode(user.getMotDePasse()));
        utilisateurRepository.save(user);

        return ResponseEntity
                .ok(Map.of("success", true, "message", "Utilisateur enregistré avec succès !"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        System.out.println("=== Requête reçue ===");
        System.out.println("Email: " + request.getAdresseElectronique());
        System.out.println("Mot de passe: " + request.getMotDePasse());

        Optional<Utilisateur> user = utilisateurRepository.findByAdresseElectronique(request.getAdresseElectronique());

        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Utilisateur inconnu"));
        }

        if (!passwordEncoder.matches(request.getMotDePasse(), user.get().getMotDePasse())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Mot de passe incorrect"));
        }

        // ✅ Retourne les infos de l'utilisateur (par ex. pour ton React)
        return ResponseEntity.ok(Map.of(
                "idUtilisateur", user.get().getIdUtilisateur(),
                "nomUtilisateur", user.get().getNomUtilisateur(),
                "message", "Connexion réussie"
        ));
    }

}
