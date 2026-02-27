// app/components/AuthCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    title?: string;
    children?: React.ReactNode;
}

const AuthCard: React.FC<Props> = ({ title, children }) => {
    return (
        <View style={styles.card}>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            {children}
        </View>
    );
};

export default AuthCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#9ac8eb',
        borderRadius: 20,
        padding: 20,
        width: '85%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 12,
        color: '#102030',
    },
});