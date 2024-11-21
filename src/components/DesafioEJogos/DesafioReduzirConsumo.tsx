import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Para ícones

const DesafioReduzirConsumo: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafio: Reduza o Consumo de Energia</Text>
      <Text style={styles.description}>
        Complete tarefas diárias para economizar energia e alcançar sua meta! Veja abaixo algumas sugestões de ações que
        podem fazer a diferença no seu consumo diário.
      </Text>
      
      {/* Lista de Tarefas do Desafio */}
      <ScrollView contentContainerStyle={styles.taskContainer}>
        <View style={styles.task}>
          <Ionicons name="bulb" size={24} color="#8b0000" style={styles.icon} />
          <Text style={styles.taskText}>Troque as lâmpadas incandescentes por LEDs.</Text>
        </View>
        <View style={styles.task}>
          <Ionicons name="power" size={24} color="#8b0000" style={styles.icon} />
          <Text style={styles.taskText}>Desligue os aparelhos eletrônicos quando não estiverem em uso.</Text>
        </View>
        <View style={styles.task}>
          <Ionicons name="water" size={24} color="#8b0000" style={styles.icon} />
          <Text style={styles.taskText}>Reduza o tempo de uso de aquecedores e chuveiros elétricos.</Text>
        </View>
        <View style={styles.task}>
          <Ionicons name="car" size={24} color="#8b0000" style={styles.icon} />
          <Text style={styles.taskText}>Use transportes mais eficientes, como bicicletas ou transporte público.</Text>
        </View>
      </ScrollView>

      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fafad2',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8b0000',
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  description: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
    fontFamily: 'Roboto-Regular',
  },
  taskContainer: {
    width: '90%',
    marginBottom: 20,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Roboto-Regular',
    flex: 1,
  },
  backButton: {
    backgroundColor: '#8b0000',
    padding: 12,
    borderRadius: 8,
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DesafioReduzirConsumo;
