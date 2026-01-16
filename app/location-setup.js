import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PRIMARY = '#FE724D';

export default function LocationSetup() {
    const router = useRouter();
    const [distance, setDistance] = useState(6);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.appName}>Ba2eya</Text>
            </View>

        <Text style={styles.title}>
        Choose a location to see{'\n'}what’s available
      </Text>

        <View style={styles.mapPlaceholder}>
        <View style={styles.pin} />
      </View>

    <View style={styles.sheet}>
        <Text style={styles.sheetTitle}>Select a distance</Text>

        <View style={styles.sliderRow}>
          <View style={[styles.sliderFill, { width: `${(distance / 20) * 100}%` }]} />
        </View>

        <Text style={styles.distanceText}>{distance} km</Text>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Search for a location"
            style={styles.searchInput}
            placeholderTextColor="#AAA"
          />
        </View>

        <TouchableOpacity style={styles.currentLocation}>
          <Text style={styles.arrow}>↗</Text>
          <Text style={styles.currentText}>Use my current location</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cta}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.ctaText}>Choose this location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    height: 100,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },

  appName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 16,
  },

  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pin: {
    width: 48,
    height: 48,
    backgroundColor: PRIMARY,
    borderRadius: 24,
  },

  sheet: {
    padding: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#fff',
  },

  sheetTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },

  sliderRow: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },

  sliderFill: {
    height: '100%',
    backgroundColor: PRIMARY,
  },

  distanceText: {
    textAlign: 'right',
    color: '#333',
    marginBottom: 16,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
  },

  currentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  arrow: {
    color: PRIMARY,
    marginRight: 8,
  },

  currentText: {
    color: PRIMARY,
    fontWeight: '600',
  },

  cta: {
    backgroundColor: PRIMARY,
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
  },

  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
