import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DesafioReduzirConsumo: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafio: Reduza o Consumo de Energia</Text>
      <Text style={styles.description}>
        Complete tarefas diárias para economizar energia e alcançar sua meta!
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
    backgroundColor: '#fafad2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8b0000',
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
    backgroundColor: '#8b0000',
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

export default DesafioReduzirConsumo;
