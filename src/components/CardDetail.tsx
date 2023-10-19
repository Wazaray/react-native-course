import React from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface CardDetailProps {
  title: string
  subTitle: string
  image: ImageSourcePropType
}

const CardDetail: React.FC<CardDetailProps> = ({ title, subTitle, image }) => (
  <View style={styles.container}>
    <Image source={image} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    color: 'gray',
  },
})

export default CardDetail
