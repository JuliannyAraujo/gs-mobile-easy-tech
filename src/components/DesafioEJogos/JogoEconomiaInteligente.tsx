import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const JogoEconomiaInteligente: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo: Economia Inteligente</Text>
      <Text style={styles.description}>
        Gerencie recursos de forma eficiente para economizar energia e dinheiro!
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
    backgroundColor: '#ffe4e1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#b22222',
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
    backgroundColor: '#b22222',
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

export default JogoEconomiaInteligente;
