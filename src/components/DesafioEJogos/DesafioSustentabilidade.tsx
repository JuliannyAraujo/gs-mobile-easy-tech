import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DesafioSustentabilidade: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafio: Rumo à Sustentabilidade</Text>
      <Text style={styles.description}>
        Responda perguntas e complete missões para se tornar um herói da sustentabilidade!
      </Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fffa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f4f4f',
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#2f4f4f',
    padding: 12,
    borderRadius: 8,
    width: '70%',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DesafioSustentabilidade;
