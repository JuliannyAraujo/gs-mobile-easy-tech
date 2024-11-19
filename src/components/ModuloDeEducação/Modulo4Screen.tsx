import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Para ícones

const Modulo4Screen: React.FC<any> = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Título */}
        <Text style={styles.title}>Sustentabilidade e o Futuro da Energia</Text>

        {/* Introdução */}
        <Text style={styles.content}>
          A sustentabilidade tem se tornado uma prioridade crescente no setor energético. Inovações tecnológicas e soluções
          eficientes estão sendo desenvolvidas para garantir que a energia seja gerada, distribuída e consumida de forma
          mais responsável e ecológica. Explore como a sustentabilidade está moldando o futuro da energia.
        </Text>

        {/* Seção: Energias Renováveis como Solução */}
        <View style={styles.section}>
          <Ionicons name="leaf" size={30} color="#4caf50" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Energias Renováveis como Solução</Text>
            <Text style={styles.sectionContent}>
              O aumento do uso de energias renováveis como solar, eólica e biomassa está impulsionando uma mudança significativa
              na geração de energia. Essas fontes são mais limpas, reduzindo as emissões de gases poluentes e ajudando a combater
              as mudanças climáticas.
            </Text>
          </View>
        </View>

        {/* Seção: Inovações Tecnológicas */}
        <View style={styles.section}>
          <Ionicons name="flash" size={30} color="#ff9800" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Inovações Tecnológicas</Text>
            <Text style={styles.sectionContent}>
              Novas tecnologias estão sendo aplicadas para otimizar o consumo de energia, como a inteligência artificial
              para gerenciamento de redes elétricas, e a implementação de baterias de alta capacidade para armazenamento de
              energia solar e eólica.
            </Text>
          </View>
        </View>

        {/* Seção: Eficiência Energética e Economia */}
        <View style={styles.section}>
          <Ionicons name="business" size={30} color="#1976d2" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Eficiência Energética e Economia</Text>
            <Text style={styles.sectionContent}>
              A eficiência energética está diretamente ligada à redução de custos e à preservação ambiental. Usar energia de
              forma mais eficiente não só reduz os impactos ambientais, como também contribui para a diminuição das despesas
              com eletricidade.
            </Text>
          </View>
        </View>

        {/* Botão de Voltar */}
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
    padding: 20,
    backgroundColor: '#e0f7fa', // Azul claro para ambiente de energia limpa
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#388e3c',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  content: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 30,
    textAlign: 'justify',
    fontFamily: 'Roboto-Regular',
    paddingHorizontal: 20,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#388e3c',
    fontFamily: 'Roboto-Bold',
  },
  sectionContent: {
    fontSize: 16,
    color: '#004d40',
    textAlign: 'justify',
    fontFamily: 'Roboto-Regular',
    marginTop: 10,
  },
  backButton: {
    backgroundColor: '#388e3c',
    padding: 14,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 30,
    elevation: 4,
  },
  backButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Modulo4Screen;
