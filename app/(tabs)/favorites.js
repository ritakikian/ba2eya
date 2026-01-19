import { FlatList, Text, View } from 'react-native';
import FavoriteCard from '../../components/FavoriteCard';

export default function Favorites() {
    const favorites = [
        {
            id: '1',
            store: 'Dunkin Donuts',
            title: 'Donuts Combo Surprise Bag',
            rating: 4.4,
            distance: '700m',
            pickup: '04:30 PM - 05:00 PM',
            price: 8.0,
            originalPrice: 12.0,
            image: require('../../assets/images/store1.png'),
            left:5,
        },
        {
            id: '2',
            store: 'Starbucks',
            title: 'Coffee & Pastry Surprise Bag',
            rating: 4.7,
            distance: '1.2 km',
            pickup: '04:00 PM - 05:30 PM',
            price: 10.0,
            originalPrice: 15.0,
            image: require('../../assets/images/store2.png'),
            left:3,
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Favorites</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{paddingBottom: 24}}
                renderItem={({ item }) => <FavoriteCard item={item} />}
            />
        </View>
    );
}