import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NativeBaseProvider } from 'native-base';

const Modulo4Screen: React.FC<any> = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sustentabilidade e o Futuro da Energia</Text>
        <Text style={styles.content}>
          Saiba como a sustentabilidade está moldando o futuro da energia. Descubra inovações tecnológicas e
          soluções que promovem um consumo mais consciente e sustentável.
        </Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388e3c',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 30,
    textAlign: 'justify',
  },
  backButton: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default Modulo4Screen;
