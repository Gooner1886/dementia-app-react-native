import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import CarouselPopWindow from './CarouselPopWindow';

const { width: windowWidth } = Dimensions.get('window');
export const SLIDER_WIDTH = windowWidth;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {


  const [showPopup, setShowPopup] = useState(false);

  const handlePress = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <View style={styles.container} key={index}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
        />
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </TouchableOpacity>
      <CarouselPopWindow item={item} visible={showPopup} onClose={handleClosePopup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,

    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginHorizontal: 10, // Added margin to add spacing between items
  },
  image: {
    width: '100%',
    height: 200, // Adjusted height to make it more responsive
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  header: {
    color: '#222',
    fontSize: 24, // Reduced font size for better fit on smaller screens
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 16, // Reduced font size for better fit on smaller screens
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10, // Added padding top for better spacing
  },
});

export default CarouselCardItem;
