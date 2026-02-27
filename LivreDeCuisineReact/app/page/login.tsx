import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { loginStyles } from "../loginStyles";
import { loginUser } from '../api/authService';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from "@expo/vector-icons";

export default function LoginScreen() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    const handleLogin = async () => {
        if (!email || !motDePasse) {
            Toast.show({
                type: 'error',
                text1: 'Champs manquants',
                text2: 'Veuillez remplir tous les champs.',
                position: 'top',
            });
            return;
        }

        try {
            const res = await loginUser(email, motDePasse);

            if (res.idUtilisateur) {
                // ✅ On sauvegarde l'utilisateur
                await AsyncStorage.setItem("user", JSON.stringify(res));

                Toast.show({
                    type: 'success',
                    text1: 'Connexion réussie 🎉',
                    position: 'top',
                });

                setTimeout(() => router.push('/page/MonEspace'), 1500);
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Erreur de connexion',
                    text2: res.message || 'Email ou mot de passe incorrect.',
                    position: 'top',
                });
            }
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: 'Échec de la connexion',
                text2:
                    error.message === 'Utilisateur inconnu'
                        ? 'Aucun compte trouvé avec cet email.'
                        : error.message === 'Mot de passe incorrect'
                            ? 'Mot de passe incorrect.'
                            : 'Vérifiez votre connexion réseau.',
                position: 'top',
            });
        }
    };

    return (
        <View style={loginStyles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* 🔹 HEADER avec le bouton retour vers l'accueil */}
            <View style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 10,
                position: "absolute",
                top: 40,
                right: 10,
                zIndex: 10,
            }}>
                <TouchableOpacity onPress={() => router.push("/")}>
                    <FontAwesome name="home" size={28} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={loginStyles.card}>
                <Text style={loginStyles.title}>Se connecter</Text>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#555"
                    style={loginStyles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    placeholder="Mot de passe"
                    placeholderTextColor="#555"
                    style={loginStyles.input}
                    secureTextEntry
                    value={motDePasse}
                    onChangeText={setMotDePasse}
                />

                <TouchableOpacity onPress={() => router.push('/page/register')}>
                    <Text style={loginStyles.signupLink}>S'inscrire</Text>
                </TouchableOpacity>

                <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
                    <Text style={loginStyles.buttonText}>Valider</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
