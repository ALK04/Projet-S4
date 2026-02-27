// app/components/AuthInput.tsx
import React from 'react';
import { TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

interface AuthInputProps {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;

}

const AuthInput: React.FC<AuthInputProps> = ({
                                                 placeholder,
                                                 value,
                                                 onChangeText,
                                                 secureTextEntry = false,
                                                 keyboardType = 'default' as KeyboardTypeOptions,
                                             }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="#555"
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize="none"
        />
    );
};

export default AuthInput;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fdfdcc',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginVertical: 8,
        width: '90%',
        alignSelf: 'center',
        fontSize: 16,
        color: '#1A1A1A',
    },
});
