import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pokémon_logo.svg/2560px-International_Pokémon_logo.svg.png' }}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 300,
        marginRight: 10,
    }
});

export default Title;
