import { Compass, Heart, MapPin, Search, User } from 'lucide-react-native';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const STORES = [
    {id: '1',
        name: 'Dunkin Donuts - Bliss Street, Hamra...',
        image: require('../../assets/images/store1.png'),
        rating: '4.4',
        distance: '1.6 km',
        time: '04:30 PM - 05:00 PM',
        originalPrice: '$12.00',
        price: '$8.00',
        left: '5+ left'
    },
    {id: '2',
        name: 'Dunkin Donuts - Bliss Street, Hamra...',
        image: require('../../assets/images/store1.png'),
        rating: '4.4',
        distance: '1.6 km',
        time: '04:30 PM - 05:00 PM',
        originalPrice: '$12.00',
        price: '$8.00',
        left: '5+ left'
    },
];

const StoreCard = ({item}) => (
    <TouchableOpacity style={styles.card}>
        <View>
            <Image source={{uri: item.image}} style={styles.cardImage} />
            <View style={styles.badgeLeft}><Text style={styles.badgeText}>{item.left}</Text></View>
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingText}>⭐ {item.rating}</Text>
      </View>
    </View>
    <View style={styles.cardContent}>
      <View style={styles.titleRow}>
        <Text numberOfLines={1} style={styles.cardTitle}>{item.name}</Text>
        <Heart size={20} color="#666" />
      </View>
      <Text style={styles.cardSub}>Pick up today: {item.time} | {item.distance}</Text>
      
      <View style={styles.priceDivider} />
      
      <View style={styles.priceRow}>
        <Text style={styles.dynamicPrice}>✨ Dynamic price</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.oldPrice}>{item.originalPrice}</Text>
          <Text style={styles.newPrice}>{item.price}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const SmallCard = ({item}) => (
    <TouchableOpacity style={styles.smallCard}>
        <View style={styles.smallCardImageContainer}>
            <Image source={item.image} style={styles.smallCardImage} />
        <View style={styles.smallLogoCircle}>
            <Image source={item.logo} style={styles.smallBrandLogo} />
        </View>
    </View>
    <Text style={styles.smallCardTitle}>{item.name}</Text>
    <Text style={styles.smallCardSub}>{item.distance}</Text>
  </TouchableOpacity>
);

export default function Discover() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.locationContainer}>
          <MapPin size={18} color="#FF7F50" fill="#FF7F50" />
          <Text style={styles.locationLabel}> Chosen location </Text>
          <Text numberOfLines={1} style={styles.locationText}>Bliss Street, Rue 202, Beirut, ...</Text>
          <Text> ⌄ </Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended for you</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={STORES}
          renderItem={({ item }) => <StoreCard item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingLeft: 16 }}
        />

        <View style={[styles.sectionHeader, { marginTop: 24 }]}>
          <Text style={styles.sectionTitle}>Save before it's too late</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[...STORES].reverse()}
          renderItem={({ item }) => <StoreCard item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingLeft: 16 }}
        />
      </ScrollView>

      <View style={styles.bottomTab}>
        <View style={styles.tabItem}>
          <Compass size={24} color="#FF7F50" />
          <Text style={[styles.tabText, { color: '#FF7F50' }]}>Discover</Text>
        </View>
        <View style={styles.tabItem}>
          <Search size={24} color="#999" />
          <Text style={styles.tabText}>Browse</Text>
        </View>
        <View style={styles.tabItem}>
          <Heart size={24} color="#999" />
          <Text style={styles.tabText}>Favorites</Text>
        </View>
        <View style={styles.tabItem}>
          <User size={24} color="#999" />
          <Text style={styles.tabText}>Profile</Text>
        </View>
      </View>
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