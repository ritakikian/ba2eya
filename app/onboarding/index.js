import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import OnboardingSlide from './OnboardingSlide';

const {width} = Dimensions.get=('window');

const slides = [
{
    id: '1',
    title: 'Save Good Food',
    description: 'Every day, perfectly good food goes unsold. We help rescue it instead of wasting it.',
    image: require('../../assets/onboarding/onboardscreenimg1.png'),
},
{
    id: '2',
    title: 'Discover Nearby Surplus',
    description: 'Find bakeries and restaurants near you offering surplus food at lower prices.',
    image: require('../../assets/onboarding/onboardscreenimg2.png'),
},
{
    id: '3',
    title: 'Reserve. Pick Up. Enjoy.',
    description: 'Reserve a surprise bag, pick it up on time, and enjoy great food while saving money.',
    image: require('../../assets/onboarding/onboardscreenimg3.png'),
},
]


export default function Onboarding() {
    const flatListRef = useRef(null);
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current.scrollToIndex({index: currentIndex + 1, animated: true,});
        } else {
            router.replace('/login');    //need to navigate to login screen after onboarding is done
        }
    };

    const handleSkip = () => {
        router.replace('/login');   
    }

    return (
        <View style={styles.container}>
            {currentIndex < slides.length - 1 && (
                <TouchableOpacity onPress={handleSkip} style={styles.skip}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            )}
            <FlatList
                ref={flatListRef}
                data={slides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <OnboardingSlide item={item} />}
                onMomentumScrollEnd={(e) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
            }}

        />
        <View style={styles.dotsContainer}>
            {slides.map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.dot,
                        index === currentIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
      
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>
          {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
        </Text>
        </TouchableOpacity>
        </View>
    ) ;
}


        const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
    },
    skip: {
        position: 'absolute',
        top: 50,
        right: 24,
        zIndex: 10,
    },
    skipText: {
    color: '#B0B0B0',
    fontSize: 14,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FE724D',
  },
  button: {
    backgroundColor: '#FE724D',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});