import React, { useState } from 'react'
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import Card from '../components/Card'
import CardDetailScreen from './CardDetailScreen'

interface CardData {
  id: number
  title: string
  subTitle: string
  image: any
}

const ViewCardScreen: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null)

  const cardsData: CardData[] = [
    {
      id: 1,
      title: 'Card',
      subTitle: 'Sous-titre 1',
      image: require('../../assets/tristan.png'),
    },
    {
      id: 2,
      title: 'Card',
      subTitle: 'Sous-titre 2',
      image: require('../../assets/jacket.jpg'),
    },
    {
      id: 3,
      title: 'Card',
      subTitle: 'Sous-titre 3',
      image: require('../../assets/chair.jpg'),
    },
    {
      id: 4,
      title: 'Card',
      subTitle: 'Sous-titre 4',
      image: require('../../assets/couch.jpg'),
    },
    {
      id: 5,
      title: 'Card',
      subTitle: 'Sous-titre 5',
      image: require('../../assets/splash.png'),
    },
    {
      id: 6,
      title: 'Card',
      subTitle: 'Sous-titre 6',
      image: require('../../assets/adaptive-icon.png'),
    },
  ]

  const handleCardPress = (card: CardData) => {
    setSelectedCard(card)
  }

  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {cardsData.map(card => (
          <TouchableOpacity
            key={`${card.id}`}
            onPress={() => handleCardPress(card)}
          >
            <Card
              id={card.id}
              title={card.title}
              subTitle={card.subTitle}
              image={card.image}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal visible={selectedCard !== null} animationType="slide">
        {selectedCard && (
          <CardDetailScreen
            id={selectedCard.id}
            title={selectedCard.title}
            subTitle={selectedCard.subTitle}
            image={selectedCard.image}
            onClose={handleCloseModal}
          />
        )}
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
})

export default ViewCardScreen
