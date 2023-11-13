import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Layout = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const colors = [
    'rgb(255, 0, 0)', // Đỏ
    'rgb(0, 255, 0)', // Xanh lá cây
    'rgb(0, 0, 155)', // Xanh dương
    'rgb(255, 255, 0)', // Vàng
    'rgb(255, 0, 255)', // Màu hồng
  ];

  const handleSliderChange = (value) => {
    const percent = (value / 255) * 100;

    // const maxValue = Math.max(...colors.map((color) => {
    //   const [r, g, b] = color.match(/\d+/g);
    //   const maxChannelValue = Math.max(r, g, b);
    //   const channelValue = Math.abs(maxChannelValue - percent);
    //   return Math.min(channelValue, maxChannelValue);
    // }));
    // const colorValue = Math.min(maxValue, 255);
    setSliderValue(value);
  };

  const calculateColor = (index) => {
    if (sliderValue === 0) {
      return colors[index];
    } else {
      const [r, g, b] = colors[index].match(/\d+/g);
      const percent = Math.abs(sliderValue)/ 255;
      const newR = Math.round(r * percent);
      const newG = Math.round(g * percent);
      const newB = Math.round(b * percent);
      return `rgb(${newR}, ${newG}, ${newB})`;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.column}>
          <View style={[styles.rectangle, { backgroundColor: calculateColor(0) }]} />
          <View style={[styles.rectangle, { backgroundColor: calculateColor(1) }]} />
        </View>
        <View style={styles.column}>
          <View style={[styles.rectangle1, { backgroundColor: calculateColor(2) }]} />
          <View style={[styles.rectangle1, { backgroundColor: calculateColor(3) }]} />
          <View style={[styles.rectangle1, { backgroundColor: calculateColor(4) }]} />
        </View>
      </View>
      <View style={styles.row2}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          value={sliderValue}
          onValueChange={handleSliderChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row1: {
    flex: 2,
    flexDirection: 'row',
  },
  row2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flex: 1,
  },
  rectangle: {
    height: ((2 / 3) * windowHeight) / 2,
    width: '99%',
    marginBottom: 10,
  },
  rectangle1: {
    height: ((2 / 3) * windowHeight) / 3,
    width: '99%',
    marginBottom: 5,
  },
  slider: {
    width: '80%',
    marginBottom: 10,
  },
});

export default Layout;