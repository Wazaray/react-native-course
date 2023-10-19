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
  image: ImageSourcePropType // Utilisez le type approprié pour l'image
}

const CardDetail: React.FC<CardDetailProps> = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      {/* Ajoutez d'autres éléments pour afficher plus de détails si nécessaire */}
    </View>
  )
}

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
