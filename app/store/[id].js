import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function StoreDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const store = {
    name: 'Dunkin Donuts - Bliss Street, Hamra',
    price: 8.0,
    originalPrice: 12.0,
    rating: 4.4,
    reviews: 188,
    distance: '1.6 km',
    pickup: '04:30 PM - 05:00 PM',
    left: 3,
    image: require('../../assets/images/store1.png'),
  };

  return (
    <View style={styles.container}>
      {/* HEADER IMAGE */}
      <View style={styles.imageContainer}>
        <Image source={store.image} style={styles.image} />

        <TouchableOpacity
          style={styles.back}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.actions}>
          <Ionicons name="share-outline" size={22} color="#fff" />
          <Ionicons name="heart-outline" size={22} color="#fff" />
        </View>
      </View>

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{store.name}</Text>

        <View style={styles.row}>
          <Text style={styles.tag}>Surprise Bag</Text>
          <Text style={styles.oldPrice}>${store.originalPrice}</Text>
          <Text style={styles.price}>${store.price.toFixed(2)}</Text>
        </View>

        <Text style={styles.meta}>
          ⭐ {store.rating} ({store.reviews}) • Pick up {store.pickup} •{' '}
          {store.distance}
        </Text>

        <Text style={styles.sectionTitle}>What you could get</Text>
        <Text style={styles.text}>Fresh donuts and bagels.</Text>

        <Text style={styles.sectionTitle}>Reminder</Text>
        <Text style={styles.text}>
          The contents of your surprise bag depend on which items haven’t sold
          that day.
        </Text>

        <View style={styles.leftBadge}>
          <Text style={styles.leftText}>{store.left} left</Text>
        </View>

        <Text style={styles.sectionTitle}>
          What other people are saying
        </Text>
        <Text style={styles.ratingBig}>
          ⭐ {store.rating} / 5.0
        </Text>
        <Text style={styles.subText}>
          Based on {store.reviews} ratings over the past 6 months
        </Text>
      </ScrollView>

      {/* RESERVE BUTTON */}
      <TouchableOpacity style={styles.reserve}>
        <Text style={styles.reserveText}>Reserve</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  imageContainer: { height: 220 },
  image: { width: '100%', height: '100%' },

  back: {
    position: 'absolute',
    top: 50,
    left: 16,
  },

  actions: {
    position: 'absolute',
    top: 50,
    right: 16,
    flexDirection: 'row',
    gap: 16,
  },

  content: { padding: 20 },

  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },

  tag: {
    backgroundColor: '#FFE5DA',
    color: '#FE724D',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
  },

  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FE724D',
  },

  meta: { color: '#666', marginBottom: 16 },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 6,
  },

  text: { color: '#555', lineHeight: 20 },

  leftBadge: {
    backgroundColor: '#FFEDE6',
    padding: 8,
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 16,
  },

  leftText: {
    color: '#FE724D',
    fontWeight: '600',
  },

  ratingBig: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8,
  },

  subText: {
    color: '#777',
    fontSize: 12,
  },

  reserve: {
    backgroundColor: '#FE724D',
    padding: 18,
    alignItems: 'center',
  },

  reserveText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
