import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Busca tu pokemon..."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 5,
        width: '40%',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
});

export default SearchBar;
