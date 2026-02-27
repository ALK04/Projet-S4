import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { mainStyles } from '../styles';

export default function RecipeCard({ recette, onPress }) {
    return (
        <TouchableOpacity style={mainStyles.card} onPress={onPress}>
            {recette.imageUrl && <Image source={{ uri: recette.imageUrl }} style={mainStyles.recipeImage} />}
            <View style={mainStyles.cardContent}>
                <Text style={mainStyles.recipeTitle}>{recette.titre}</Text>
                <Text style={mainStyles.recipeDesc}>
                    {recette.description.length > 100 ? recette.description.substring(0, 100) + '...' : recette.description}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
