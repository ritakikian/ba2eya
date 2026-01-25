import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FavoriteCard from '../../components/FavoriteCard';
export default function Browse() { 
    const [viewMode, setViewMode] = useState('map');

const data = [
    { id: '1', store: 'Dunkin Donuts', title: 'Donuts Combo Surprise Bag', rating: 4.4, distance: '700m', pickup: '04:30 PM - 05:00 PM', price: 8.0, originalPrice: 12.0, image: require('../../assets/images/store1.png'), left:5, },
    { id: '2', store: 'Starbucks', title: 'Coffee & Pastry Surprise Bag', rating: 4.7, distance: '1.2 km', pickup: '04:00 PM - 05:30 PM', price: 10.0, originalPrice: 15.0, image: require('../../assets/images/store2.png'), left:3, },
];

    return (
    <View style={styles.container}>
      {/* SEARCH BAR */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#999" />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="filter" size={20} color="#FE724D" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="location-outline" size={20} color="#FE724D" />
        </TouchableOpacity>
      </View>

      {/* TOGGLE */}
      <View style={styles.toggle}>
        <TouchableOpacity
          style={[
            styles.toggleBtn,
            viewMode === 'list' && styles.activeToggle,
          ]}
          onPress={() => setViewMode('list')}
        >
          <Text
            style={[
              styles.toggleText,
              viewMode === 'list' && styles.activeText,
            ]}
          >
            List
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleBtn,
            viewMode === 'map' && styles.activeToggle,
          ]}
          onPress={() => setViewMode('map')}
        >
          <Text
            style={[
              styles.toggleText,
              viewMode === 'map' && styles.activeText,
            ]}
          >
            Map
          </Text>
        </TouchableOpacity>
      </View>

      {/* CONTENT */}
      {viewMode === 'map' ? (
        <MapPlaceholder />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => (
            <FavoriteCard item={item} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F3F3F3',
        borderRadius: 12,
        paddingHorizontal: 12,
        height: 40,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
    },
    iconBtn: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        justifyContent: 'center',
    },toggle: {
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    borderRadius: 12,
    marginBottom: 12,
    padding: 4,
  },

  toggleBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },

  activeToggle: {
    backgroundColor: '#FE724D',
  },

  toggleText: {
    fontSize: 14,
    color: '#777',
    fontWeight: '600',
  },

  activeText: {
    color: '#fff',
  },

  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#EDEDED',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mapText: {
    fontSize: 18,
    color: '#999',
  },
});