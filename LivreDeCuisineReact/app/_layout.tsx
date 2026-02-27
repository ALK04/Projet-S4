import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';

export default function Layout() {
    return (
        <>
            <StatusBar style="dark" />
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: '#F5FAFF' },
                }}
            >
                <Stack.Screen name="(recipes)/index" options={{ title: 'Livre de Recettes' }} />
            </Stack>
            <Toast />
        </>
    );
}