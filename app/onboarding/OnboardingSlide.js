import { Image, StyleSheet, Text, View } from 'react-native';

export default function OnboardingSlide({item}) {
    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.image} resizeMode="contain"/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contained: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    image: {
        width: '100%',
        height: 260,
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
        textAlign: 'center',
        marginBottom: 12,
    },
    description: {
        fontSize: 14, 
        color: '#777',
        textAlign: 'center',
        lineHeight: 20,
    },
});