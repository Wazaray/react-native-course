import React from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const WelcomeScreen: React.FC = () => (
  <ImageBackground
    source={require('../../assets/background.jpg')}
    style={styles.background}
    blurRadius={5}
  >
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo-red.png')}
      />
      <Text>Sell what you don t need</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.roundedButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.buttonSpacing} />
      <TouchableOpacity style={[styles.roundedButton, styles.greenButton]}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },

  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  roundedButton: {
    backgroundColor: '#fc5c65',
    borderRadius: 25,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  greenButton: {
    backgroundColor: '#4ECDC4',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSpacing: {
    height: 10,
  },
})

export default WelcomeScreen
