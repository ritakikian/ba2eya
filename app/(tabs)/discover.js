import { Heart } from 'lucide-react-native';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useRouter } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../lib/firebase';

const StoreCard = ({ item }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/store/${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />

      <View style={styles.badgeLeft}>
        <Text style={styles.badgeText}>{item.quantityLeft} left</Text>
      </View>

      <View style={styles.ratingBadge}>
        <Text style={styles.ratingText}>⭐ {item.rating}</Text>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.titleRow}>
          <Text numberOfLines={1} style={styles.cardTitle}>
            {item.storeName}
          </Text>
          <Heart size={20} color="#666" />
        </View>

        <Text style={styles.cardSub}>
          Pick up today: {item.pickupStart} – {item.pickupEnd}
        </Text>

        <View style={styles.priceDivider} />

        <View style={styles.priceRow}>
          <Text style={styles.dynamicPrice}>✨ Dynamic price</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.oldPrice}>${item.originalPrice}</Text>
            <Text style={styles.newPrice}>${item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Discover() {
  const [bags, setBags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, 'surpriseBags'),
          where('isAvailable', '==', true)
        );

        const snapshot = await getDocs(q);
        const results = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBags(results);
      } catch (error) {
        console.error('Error fetching bags:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: 'center', marginTop: 40 }}>
          Loading...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended for you</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={bags}
          renderItem={({ item }) => <StoreCard item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingLeft: 16 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 16 },
  locationContainer: { flexDirection: 'row', alignItems: 'center' },
  locationLabel: { fontWeight: 'bold', fontSize: 14 },
  locationText: { color: '#666', flex: 1, fontSize: 14 },
  
  sectionHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 16, 
    marginBottom: 12 
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  seeAll: { color: '#FF7F50', fontWeight: '600' },

  card: {
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden',
  },
  cardImage: { width: '100%', height: 160 },
  badgeLeft: {
    position: 'absolute', top: 10, left: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12
  },
  badgeText: { fontSize: 12, fontWeight: 'bold' },
  ratingBadge: {
    position: 'absolute', top: 10, right: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12
  },
  ratingText: { fontSize: 12, fontWeight: 'bold' },
  
  cardContent: { padding: 12 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: 16, fontWeight: 'bold', width: '85%' },
  cardSub: { color: '#666', fontSize: 12, marginTop: 4 },
  
  priceDivider: { height: 1, backgroundColor: '#eee', marginVertical: 10, borderStyle: 'dashed' },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  dynamicPrice: { color: '#666', fontSize: 12 },
  priceContainer: { flexDirection: 'row', alignItems: 'center' },
  oldPrice: { textDecorationLine: 'line-through', color: '#999', marginRight: 8 },
  newPrice: { fontWeight: 'bold', fontSize: 16 },

  smallCard: { width: 150, marginRight: 12, alignItems: 'center', backgroundColor: '#fff', padding: 10, borderRadius: 12, borderWidth: 1, borderColor: '#eee' },
  smallCardImageContainer: { width: '100%', height: 100, marginBottom: 25 },
  smallCardImage: { width: '100%', height: 80, borderRadius: 8 },
  smallLogoCircle: { position: 'absolute', bottom: 0, alignSelf: 'center', backgroundColor: '#fff', padding: 4, borderRadius: 25, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 2 },
  smallBrandLogo: { width: 40, height: 40, borderRadius: 20 },
  smallCardTitle: { fontWeight: 'bold', fontSize: 14 },
  smallCardSub: { color: '#666', fontSize: 12, marginTop: 2 },

  bottomTab: { flexDirection: 'row', borderTopWidth: 1, borderColor: '#eee', paddingVertical: 10, justifyContent: 'space-around' },
  tabItem: { alignItems: 'center' },
  tabText: { fontSize: 11, marginTop: 4, color: '#999' }
});