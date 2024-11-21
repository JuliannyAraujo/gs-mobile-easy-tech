import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const JogoEconomiaInteligente: React.FC<any> = ({ navigation }) => {
  const [gameStep, setGameStep] = useState(1); // Etapa do jogo
  const [score, setScore] = useState(0); // Placar do jogo

  // Função para gerenciar a escolha do jogador e fornecer feedback
  const handleChoice = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      Alert.alert('Boa escolha!', 'Você fez uma escolha eficiente de economia!');
    } else {
      Alert.alert('Ops!', 'Essa escolha não é muito econômica. Tente novamente.');
    }

    if (gameStep < 5) {
      setGameStep(gameStep + 1);
    } else {
      Alert.alert('Fim do Jogo', `Você terminou o jogo com ${score} pontos!`);
      setGameStep(1); // Reiniciar o jogo
      setScore(0); // Resetar a pontuação
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo: Economia Inteligente</Text>
      <Text style={styles.description}>
        Gerencie recursos de forma eficiente para economizar energia e dinheiro!
      </Text>

      {/* Tela do Jogo */}
      <ScrollView contentContainerStyle={styles.gameContainer}>
        {gameStep === 1 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa 1: Como você economiza energia ao usar aparelhos eletrônicos?</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(true)} // Desligar aparelhos é a resposta correta
            >
              <Text style={styles.optionText}>Desligar aparelhos quando não estão em uso</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(false)} // Deixar os aparelhos ligados não é eficiente
            >
              <Text style={styles.optionText}>Deixar os aparelhos ligados o tempo todo</Text>
            </TouchableOpacity>
          </View>
        )}

        {gameStep === 2 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa 2: Qual tipo de lâmpada você escolhe para economizar energia?</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(true)} // LED é a resposta correta
            >
              <Text style={styles.optionText}>Lâmpada LED</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(false)} // Lâmpadas incandescentes consomem mais energia
            >
              <Text style={styles.optionText}>Lâmpada Incandescente</Text>
            </TouchableOpacity>
          </View>
        )}

        {gameStep === 3 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa 3: Qual a melhor prática para reduzir o consumo de água?</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(true)} // Usar redutores de vazão é a escolha certa
            >
              <Text style={styles.optionText}>Instalar redutores de vazão nas torneiras</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(false)} // Deixar a torneira aberta o tempo todo não é eficiente
            >
              <Text style={styles.optionText}>Deixar a torneira aberta enquanto escova os dentes</Text>
            </TouchableOpacity>
          </View>
        )}

        {gameStep === 4 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa 4: Como você pode melhorar a eficiência energética de sua casa?</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(true)} // Trocar para eletrodomésticos eficientes
            >
              <Text style={styles.optionText}>Trocar para eletrodomésticos eficientes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(false)} // Usar aparelhos antigos é menos eficiente
            >
              <Text style={styles.optionText}>Usar aparelhos antigos e ineficientes</Text>
            </TouchableOpacity>
          </View>
        )}

        {gameStep === 5 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa 5: O que você faz para economizar energia em casa?</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(true)} // Ajustar a temperatura do ar-condicionado é eficiente
            >
              <Text style={styles.optionText}>Ajustar a temperatura do ar-condicionado para 24°C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(false)} // Usar ar-condicionado em temperaturas extremas é menos eficiente
            >
              <Text style={styles.optionText}>Deixar o ar-condicionado no modo máximo</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* Placar do Jogo */}
      <Text style={styles.scoreText}>Pontuação: {score}</Text>

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
    backgroundColor: '#ffe4e1',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#b22222',
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
  gameContainer: {
    width: '90%',
    marginBottom: 20,
  },
  stepContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stepText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: 'Roboto-Regular',
  },
  optionButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#b22222',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Roboto-Regular',
  },
  scoreText: {
    fontSize: 20,
    color: '#32cd32',
    fontWeight: 'bold',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#b22222',
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

export default JogoEconomiaInteligente;
