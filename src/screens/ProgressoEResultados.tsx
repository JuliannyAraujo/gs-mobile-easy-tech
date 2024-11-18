import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProgressoScreen: React.FC<any> = ({ navigation }) => {
  // Dados fictícios de progresso
  const progresso = {
    pontos: 85, // Pontos acumulados
    desafiosConcluidos: 5, // Quantidade de desafios concluídos
    jogosCompletados: 2, // Quantidade de jogos completados
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Progresso e Resultados</Text>
      <Text style={styles.subtitle}>Aqui você pode acompanhar o seu progresso em desafios, jogos e seu impacto na economia de energia!</Text>

      {/* Seção de Pontos */}
      <View style={styles.statContainer}>
        <Text style={styles.statTitle}>Pontos Acumulados</Text>
        <Text style={styles.statValue}>{progresso.pontos} Pontos</Text>
      </View>

      {/* Seção de Desafios Concluídos */}
      <View style={styles.statContainer}>
        <Text style={styles.statTitle}>Desafios Concluídos</Text>
        <Text style={styles.statValue}>{progresso.desafiosConcluidos} Desafios</Text>
      </View>

      {/* Seção de Jogos Completados */}
      <View style={styles.statContainer}>
        <Text style={styles.statTitle}>Jogos Completados</Text>
        <Text style={styles.statValue}>{progresso.jogosCompletados} Jogos</Text>
      </View>

      {/* Gráfico ou Visualização de Progresso (Apenas um exemplo visual) */}
      <View style={styles.graphContainer}>
        <Text style={styles.graphTitle}>Gráfico de Progresso</Text>
        {/* Aqui pode-se colocar um gráfico de progresso real */}
        <View style={styles.graphMock}>
          <Text style={styles.graphMockText}>[Gráfico de progresso aqui]</Text>
        </View>
      </View>

      {/* Botão Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f1f8e9', // Cor de fundo clara, com tons verdes suaves
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#388e3c', // Verde sustentável
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#004d40', // Verde mais escuro
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  statContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 8,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  statTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#388e3c',
    marginBottom: 10,
  },
  statValue: {
    fontSize: 20,
    color: '#004d40',
    fontWeight: '600',
  },
  graphContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 30,
    borderRadius: 8,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  graphTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#388e3c',
    marginBottom: 10,
  },
  graphMock: {
    backgroundColor: '#00796b', // Cor de fundo do mock do gráfico
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  graphMockText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProgressoScreen;
