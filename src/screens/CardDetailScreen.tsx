import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

interface CardDetailProps {
  id: number
  title: string
  subTitle: string
  image: any
  onClose: () => void // Callback pour fermer la modal
}

const CardDetailScreen: React.FC<CardDetailProps> = ({
  id,
  title,
  subTitle,
  image,
  onClose,
}) => (
  <View style={styles.container}>
    <Image source={image} style={styles.image} />
    <Text style={styles.title}>
      {title} {id}
    </Text>
    <Text style={styles.subTitle}>{subTitle}</Text>
    <Button title="Fermer" onPress={onClose} />
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

export default CardDetailScreen
