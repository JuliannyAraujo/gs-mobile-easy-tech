import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Modulo1Screen: React.FC<any> = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Título e Introdução */}
        <Text style={styles.title}>Introdução à Economia de Energia</Text>

        {/* Descrição do conteúdo */}
        <Text style={styles.content}>
          A economia de energia é um dos pilares para o futuro sustentável do nosso planeta. Ao entender como
          funciona o consumo de energia e adotar práticas eficientes, conseguimos reduzir os impactos ambientais e
          os custos de energia. Neste módulo, você aprenderá como a energia é utilizada, onde é possível economizar
          e como aplicar essas práticas em sua vida cotidiana para um mundo mais sustentável.
        </Text>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>O que é Economia de Energia?</Text>
          <Text style={styles.sectionContent}>
            A economia de energia envolve o uso responsável dos recursos energéticos, reduzindo o desperdício e
            maximizando o aproveitamento dos recursos. É uma prática essencial tanto para consumidores domésticos
            quanto para empresas, pois ajuda a diminuir a pegada de carbono e preservar os recursos naturais.
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Por que Economizar Energia?</Text>
          <Text style={styles.sectionContent}>
            - **Preservação Ambiental**: Menor consumo de energia significa menor impacto no meio ambiente.{"\n"}
            - **Redução de Custos**: Economizar energia reflete diretamente na redução das suas contas de luz.{"\n"}
            - **Conscientização Social**: Tornando-se um exemplo de responsabilidade, você incentiva outras pessoas a
            também adotar práticas sustentáveis.
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Como Economizar Energia?</Text>
          <Text style={styles.sectionContent}>
            Algumas dicas simples podem fazer uma grande diferença no seu consumo de energia:
            {"\n"}1. **Desligue aparelhos** quando não estiverem em uso, como TV, computador e luzes.{"\n"}
            2. **Use lâmpadas de LED**, que consomem muito menos energia do que as tradicionais.{"\n"}
            3. **Ajuste a temperatura** do ar-condicionado para uma faixa mais eficiente e confortável.{"\n"}
            4. **Aproveite a luz natural** durante o dia e evite o uso de luz artificial sempre que possível.{"\n"}
            5. **Escolha eletrodomésticos eficientes**, com a classificação energética mais alta.
          </Text>
        </View>

        <Text style={styles.conclusionText}>
          A economia de energia não depende de ações complexas. Com pequenas mudanças no seu dia a dia, você pode
          contribuir significativamente para um futuro mais sustentável e com menor impacto ambiental.
        </Text>

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
    backgroundColor: '#e0f7fa', // Azul claro, associado à energia limpa
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#388e3c', // Verde sustentável
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
  },
  content: {
    fontSize: 16,
    color: '#004d40', // Verde escuro
    marginBottom: 30,
    textAlign: 'justify',
    fontFamily: 'Roboto-Regular',
    paddingHorizontal: 20,
  },
  sectionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#388e3c',
    marginBottom: 10,
    fontFamily: 'Roboto-Bold',
  },
  sectionContent: {
    fontSize: 16,
    color: '#004d40',
    textAlign: 'justify',
    fontFamily: 'Roboto-Regular',
  },
  conclusionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#388e3c',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Roboto-Regular',
  },
  backButton: {
    backgroundColor: '#388e3c', // Verde forte para o botão de voltar
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

export default Modulo1Screen;
