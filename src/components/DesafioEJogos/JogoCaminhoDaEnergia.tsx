import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const JogoCaminhoDaEnergia: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo: O Caminho da Energia</Text>
      <Text style={styles.description}>
        Ajude a energia a chegar até sua casa de forma limpa e sustentável!
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
    backgroundColor: '#e0ffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4682b4',
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
    backgroundColor: '#4682b4',
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

export default JogoCaminhoDaEnergia;
