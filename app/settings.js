import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Settings() {
    const router = useRouter();

    const Item = ({ title, label, onPress }) => (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <View style={styles.itemLeft}>
                <Ionicons name={icon} size={20} color="#555" />
                <Text style={styles.itemText}>{label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
    );

    const Section = ({ title, children }) => (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {children}
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color="#FE724D" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Manage Account</Text>

                <View style={{ width: 24 }} /> 
            </View>

            <Section title="SETTINGS">
                <Item icon="person-outline" label="Account details" />
                <Item icon="card-outline" label="Payment Cards" />
                <Item icon="ticket-outline" label="Vouchers" />
                <Item icon="notifications-outline" label="Notifications" />
            </Section>

            <Section title="COMMUNITY">
                <Item icon="megaphone-outline" label="Recommend a store" />
                <Item icon="storefront-outline" label="Sign up your store" />
            </Section>

            <Section title="SUPPORT">
                <Item icon="help-circle-outline" label="Help with an order" />
                <Item icon="information-circle-outline" label="How Ba2eya works" />
                <Item icon="people-outline" label="Join Ba2eya" />
            </Section>
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
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
    },

    section: {
        marginTop: 24,
    },

    sectionTitle: {
        fontSize: 12,
        color: '#999',
        marginBottom: 8,
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    itemText: {
        fontSize: 15,
    },
});