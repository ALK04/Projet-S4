import React, { JSX, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { registerUser } from '../api/authService';

import AuthCard from '../components/AuthCard';
import AuthInput from '../components/AuthInput';
import { loginStyles } from '../loginStyles';

export default function Register(): JSX.Element {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [nomPrenom, setNomPrenom] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [confirmerMdp, setConfirmerMdp] = useState('');

    // --- Regex ---
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    // --- Validation en temps réel avec suppression des toasts ---
    useEffect(() => {
        if (email === '') {
            Toast.hide();
            return;
        }

        if (!emailRegex.test(email)) {
            Toast.show({
                type: 'error',
                text1: 'Email invalide',
                text2: 'Veuillez inclure un "@" et un domaine valide.',
                position: 'top',
                autoHide: false,
            });
        } else {
            Toast.hide();
        }
    }, [email]);

    useEffect(() => {
        if (motDePasse === '') {
            Toast.hide();
            return;
        }

        if (!passwordRegex.test(motDePasse)) {
            Toast.show({
                type: 'info',
                text1: 'Mot de passe faible',
                text2: 'Min 6 caractères, 1 majuscule et 1 chiffre requis.',
                position: 'top',
                autoHide: false,
            });
        } else {
            Toast.hide();
        }
    }, [motDePasse]);

    useEffect(() => {
        if (confirmerMdp === '') {
            Toast.hide();
            return;
        }

        if (motDePasse !== confirmerMdp) {
            Toast.show({
                type: 'error',
                text1: 'Les mots de passe ne correspondent pas',
                position: 'top',
                autoHide: false,
            });
        } else {
            Toast.hide();
        }
    }, [confirmerMdp, motDePasse]);

    // --- Soumission finale ---
    const handleSubmit = async () => {
        if (!email || !nomPrenom || !motDePasse || !confirmerMdp) {
            Toast.show({ type: 'error', text1: 'Veuillez remplir tous les champs.' });
            return;
        }

        if (!emailRegex.test(email)) {
            Toast.show({ type: 'error', text1: 'Email invalide' });
            return;
        }

        if (!passwordRegex.test(motDePasse)) {
            Toast.show({ type: 'error', text1: 'Mot de passe faible' });
            return;
        }

        if (motDePasse !== confirmerMdp) {
            Toast.show({ type: 'error', text1: 'Les mots de passe ne correspondent pas.' });
            return;
        }

        const userData = {
            nomUtilisateur: nomPrenom,
            adresseElectronique: email,
            motDePasse: motDePasse
        };

        const res = await registerUser(userData);

        if (res.success) {
            Toast.show({ type: 'success', text1: res.message });
            setTimeout(() => router.push('/page/login'), 1500);
        } else {
            Toast.show({ type: 'error', text1: 'Erreur', text2: res.message });
        }
    };

    return (
        <View style={loginStyles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <TouchableOpacity style={loginStyles.backButton} onPress={() => router.back()}>
                <FontAwesome name="arrow-left" size={20} color="#000" />
            </TouchableOpacity>

            <AuthCard title="S’inscrire">
                <AuthInput placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
                <AuthInput placeholder="Nom Utilisateur" value={nomPrenom} onChangeText={setNomPrenom} />
                <AuthInput placeholder="Mot de passe" value={motDePasse} onChangeText={setMotDePasse} secureTextEntry />
                <AuthInput placeholder="Confirmer Mdp" value={confirmerMdp} onChangeText={setConfirmerMdp} secureTextEntry />

                <TouchableOpacity onPress={() => router.push('/page/login')}>
                    <Text style={loginStyles.signupLink}>Se connecter ?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={loginStyles.button} onPress={handleSubmit}>
                    <Text style={loginStyles.buttonText}>Valider</Text>
                </TouchableOpacity>
            </AuthCard>
        </View>
    );
}
