import React from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import data from './data';
import { ScrollView } from 'react-native-gesture-handler';

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
//   const { width, height } = Dimensions.get('window');
  const videoSource = 'https://www.youtube.com/watch?v=loksPQ7Q8tM&pp=ygUIZGVtZW50aWE%3D';  
  const videoId = 'https://www.youtube.com/watch?v=loksPQ7Q8tM&pp=ygUIZGVtZW50aWE%3D'; // Replace with your YouTube video ID

  return (
    <ScrollView>
    <View style={styles.carouselContainer}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 20,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  videoContainer: {
    width: 200,
    height: 300,
    marginTop: 20,
  },
  video: {
    flex: 1,
  },
});

export default CarouselCards;
