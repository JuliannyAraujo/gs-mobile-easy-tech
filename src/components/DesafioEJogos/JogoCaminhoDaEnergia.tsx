import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const JogoCaminhoDaEnergia: React.FC<any> = ({ navigation }) => {
  const [gameStep, setGameStep] = useState(1); // Passo do jogo
  const [score, setScore] = useState(0); // Placar do jogo

  const handleChoice = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      Alert.alert('Boa escolha!', 'Você escolheu uma fonte de energia limpa!');
    } else {
      Alert.alert('Ops!', 'Essa não é uma fonte sustentável. Tente novamente.');
    }

    // Avançar para o próximo passo
    if (gameStep < 6) {
      setGameStep(gameStep + 1);
    } else {
      Alert.alert('Fim do Jogo', `Você terminou o jogo com ${score} pontos!`);
      setGameStep(1); // Resetar para o início após o fim do jogo
      setScore(0); // Resetar o placar
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo: O Caminho da Energia</Text>

      <Text style={styles.description}>
        Ajude a energia a chegar até sua casa de forma limpa e sustentável! Escolha as fontes de energia certas em cada etapa.
      </Text>

      {/* Tela do Jogo */}
      <ScrollView contentContainerStyle={styles.gameContainer}>
        {gameStep === 1 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa 1: Qual fonte de energia você escolhe para começar?</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(true)} // Solar é a resposta correta
            >
              <Text style={styles.optionText}>Energia Solar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(false)} // Carbono não é a opção certa
            >
              <Text style={styles.optionText}>Energia a partir do Carvão</Text>
            </TouchableOpacity>
          </View>
        )}

        {gameStep === 2 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa 2: Qual a próxima escolha para continuar o caminho da energia?</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(true)} // Eólica é a escolha correta
            >
              <Text style={styles.optionText}>Energia Eólica</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(false)} // Nuclear não é a opção mais sustentável
            >
              <Text style={styles.optionText}>Energia Nuclear</Text>
            </TouchableOpacity>
          </View>
        )}

        {gameStep === 3 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa 3: Para finalizar o caminho, qual fonte de energia você escolhe?</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(true)} // Hidrelétrica é uma opção sustentável
            >
              <Text style={styles.optionText}>Energia Hidrelétrica</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(false)} // Gás Natural não é a melhor opção
            >
              <Text style={styles.optionText}>Gás Natural</Text>
            </TouchableOpacity>
          </View>
        )}

        {gameStep === 4 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa 4: O que você escolhe para reduzir o impacto ambiental?</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(true)} // Reciclagem é uma boa prática sustentável
            >
              <Text style={styles.optionText}>Reciclagem</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(false)} // Descartar em aterros não é sustentável
            >
              <Text style={styles.optionText}>Descartar em aterros</Text>
            </TouchableOpacity>
          </View>
        )}

        {gameStep === 5 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa 5: Qual medida você escolhe para economizar energia em casa?</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(true)} // Trocar lâmpadas por LED é a escolha sustentável
            >
              <Text style={styles.optionText}>Trocar lâmpadas por LED</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(false)} // Deixar lâmpadas acesas desnecessariamente não é sustentável
            >
              <Text style={styles.optionText}>Deixar lâmpadas acesas</Text>
            </TouchableOpacity>
          </View>
        )}

        {gameStep === 6 && (
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>Etapa 6: O que você faz para reduzir o desperdício de água?</Text>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(true)} // Usar economizadores de água é a escolha sustentável
            >
              <Text style={styles.optionText}>Instalar economizadores de água</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleChoice(false)} // Deixar a torneira aberta não é sustentável
            >
              <Text style={styles.optionText}>Deixar a torneira aberta</Text>
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
    backgroundColor: '#e0ffff',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4682b4',
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
    borderColor: '#4682b4',
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
    backgroundColor: '#4682b4',
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

export default JogoCaminhoDaEnergia;
