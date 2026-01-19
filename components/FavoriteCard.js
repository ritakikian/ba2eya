import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function FavoriteCard({ item }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/store/${item.id}`)}
    >
      {/* IMAGE */}
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />

        <View style={styles.leftBadge}>
          <Text style={styles.leftText}>{item.left}+ left</Text>
        </View>

        <Ionicons
          name="heart"
          size={22}
          color="#FE724D"
          style={styles.heart}
        />
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.store}>{item.store}</Text>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.meta}>
          ⭐ {item.rating} • {item.distance}
        </Text>

        <Text style={styles.pickup}>
          Pick up today: {item.pickup}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.oldPrice}>
            ${item.originalPrice}
          </Text>
          <Text style={styles.price}>
            ${item.price.toFixed(2)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 16,

    },

    header: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 16,
        textAlign: 'center',
    },

    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
        elevation: 2,
    }, 
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 140,

    },
    leftBadge: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#FE724D',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    leftText: {
        color: '#FE724D',
        fontSize: 12,
        fontWeight: '600',
    },
    heart: {
        position: 'absolute',
        top: 8,
        right: 8, 
    },
    content: {
        padding: 12,
    },
    store: {
        fontSize: 12,
        color: '#777',
        marginBottom: 2,
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 4,
    },

    meta: {
        fontSize: 12,
        color: '#777',
        marginBottom: 4,
    },
    pickup: {
        fontSize: 12,
        color: '#777',
        marginBottom: 8,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    oldPrice: {
        fontSize: 12,
        color: '#999',
        textDecorationLine: 'line-through',
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FE724D',
    },
});