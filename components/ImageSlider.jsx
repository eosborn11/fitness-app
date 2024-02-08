import { Text } from 'react-native'
import React from 'react'
import Carousel, {ParallaxImage} from 'react-native-snap-carousel'
import {sliderImages} from '../constants/index'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


export default function ImageSlider() {
  return (
   <Carousel
    data={sliderImages}
    loop={true}
    autoplay={true}
    renderItem={ItemCard}
    hasParallaxImages={true}
    sliderWidth={wp('100')-70}
    firstItem={1}
    autoplayInterval={4000}
    itemWidth={wp('100')-70}
    slideStyle={{display: 'flex', alignItems: 'center'}}
   />
  )
}
const ItemCard = (item, index) => {
  return(
  <Text>Slide </Text>
  )
}