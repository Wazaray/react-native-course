import React from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export type CardProps = {
  id: number
  title: string
  subTitle: string
  image: ImageSourcePropType
}

const Card: React.FC<CardProps> = ({ id, title, subTitle, image }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.cardImage} />
    <View style={styles.cardText}>
      <Text style={styles.cardTitle}>
        {title} {id}
      </Text>
      <Text style={styles.cardSubtitle}>{subTitle}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardText: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  cardSubtitle: {
    fontSize: 16,
    color: 'gray',
  },
})

export default Card
