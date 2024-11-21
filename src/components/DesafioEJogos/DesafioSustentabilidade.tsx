import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DesafioSustentabilidade: React.FC<any> = ({ navigation }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); // Armazenar a resposta selecionada

  const questions = [
    {
      question: "Qual é a principal fonte de energia renovável?",
      options: ["Carvão", "Solar", "Nuclear", "Gás Natural"],
      correctAnswer: 1, // Índice da resposta correta
    },
    {
      question: "Qual desses itens pode ser reciclado?",
      options: ["Vidro", "Plástico", "Papel", "Todos os itens acima"],
      correctAnswer: 3,
    },
    {
      question: "Como podemos economizar água?",
      options: ["Desligando a torneira enquanto escovamos os dentes", "Usando mais água", "Deixando a torneira aberta", "Nenhuma das alternativas"],
      correctAnswer: 0,
    },
  ];

  const handleAnswerSelection = (answerIndex: number, questionIndex: number) => {
    setSelectedAnswer(answerIndex);
    const correctAnswer = questions[questionIndex].correctAnswer;

    if (answerIndex === correctAnswer) {
      Alert.alert('Parabéns!', 'Resposta correta! Continue com o desafio.');
    } else {
      Alert.alert('Ops!', 'Resposta incorreta. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafio: Rumo à Sustentabilidade</Text>
      <Text style={styles.description}>
        Responda perguntas e complete missões para se tornar um herói da sustentabilidade!
      </Text>

      <ScrollView contentContainerStyle={styles.missionContainer}>
        {/* Perguntas de Múltipla Escolha */}
        {questions.map((item, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.questionText}>{item.question}</Text>
            {item.options.map((option, optionIndex) => (
              <TouchableOpacity
                key={optionIndex}
                style={[
                  styles.optionButton,
                  selectedAnswer === optionIndex && styles.selectedOption,
                ]}
                onPress={() => handleAnswerSelection(optionIndex, index)}>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Botões de Navegação */}
      <TouchableOpacity style={styles.completeButton} onPress={() => alert('Parabéns! Você completou a missão!')}>
        <Text style={styles.completeButtonText}>Complete a Missão</Text>
      </TouchableOpacity>

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
    backgroundColor: '#f5fffa',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f4f4f',
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
  missionContainer: {
    width: '90%',
    marginBottom: 20,
  },
  questionContainer: {
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
  questionText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: 'Roboto-Regular',
  },
  optionButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2f4f4f',
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
  selectedOption: {
    backgroundColor: '#32cd32',
  },
  completeButton: {
    backgroundColor: '#32cd32',
    padding: 12,
    borderRadius: 8,
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#2f4f4f',
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

export default DesafioSustentabilidade;
