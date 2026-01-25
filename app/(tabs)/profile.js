import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            < View style={styles.header}>
                <Text style={styles.headerText}>Your Profile</Text>

                <TouchableOpacity onPress={() => router.push('/settings')}>
                    <Ionicons name="settings-outline" size={22} color="#FE724D" />
                </TouchableOpacity>
            </View>

            <View style={styles.empty}>
                <View style={styles.iconCircle}>
                    <Ionicons name="bag-outline" size={36} color="#FE724D" />
                </View>
                <Text style={styles.emptyTitle}>You have no orders yet</Text>
                <Text style={styles.emptyText}>
                    There’s good food just waiting to be rescued!
                </Text>
                <Text style={styles.link}>Find a Surprise Bag</Text>
            </View>

            <View style={styles.card}>
            <View style={styles.moneyIcon}>
                <Text style={styles.moneySign}>$</Text>
            </View>

            <Text style={styles.cardTitle}>Money Saved</Text>
            <Text style={styles.amount}>0</Text>
            <Text style={styles.currency}>USD</Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },

    header: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
    },

    empty: {
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 40,
    },

    iconCircle: {
        width: 72,
        height: 72,
        borderRadius: 36,
        borderWidth: 2,
        borderColor: '#FE724D',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    }, 

    emptyTitle: {
        fontSize: 13,
        color: '#777',
        marginBottom: 12,
    },

    link: {
        fontSize: 14,
        color: '#FE724D',
        fontWeight: '600',
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EEE',
    },

    moneyIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FE724D',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },

    moneySign: {
        color: '#FE724D',
        fontSize: 22,
        fontWeight: '700',
    },

    cardTitle: {
        fontSize: 14,
        color: '#777',
        marginBottom: 8,
    },

    amount: {
        fontSize: 12, 
        color: '#777',
    },

});