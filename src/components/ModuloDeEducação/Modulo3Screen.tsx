import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Para ícones

const Modulo3Screen: React.FC<any> = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Título */}
        <Text style={styles.title}>Dicas de Economia de Energia em Casa</Text>

        {/* Introdução */}
        <Text style={styles.content}>
          Existem várias maneiras de reduzir o consumo de energia em casa. Aqui estão algumas dicas simples e eficazes
          para economizar energia no seu dia a dia.
        </Text>

        {/* Seção: Trocar para lâmpadas LED */}
        <View style={styles.section}>
          <Ionicons name="bulb" size={30} color="#fbc02d" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Troque para Lâmpadas LED</Text>
            <Text style={styles.sectionContent}>
              As lâmpadas LED consomem até 85% menos energia do que as lâmpadas incandescentes e duram muito mais tempo,
              proporcionando uma economia considerável na sua conta de luz.
            </Text>
          </View>
        </View>

        {/* Seção: Desligue aparelhos em stand-by */}
        <View style={styles.section}>
          <Ionicons name="power" size={30} color="#1976d2" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Desligue Aparelhos em Stand-By</Text>
            <Text style={styles.sectionContent}>
              Desligar completamente os aparelhos quando não estão em uso pode reduzir bastante o consumo de energia,
              especialmente de televisores, computadores e outros dispositivos eletrônicos.
            </Text>
          </View>
        </View>

        {/* Seção: Utilize eletrodomésticos de maneira eficiente */}
        <View style={styles.section}>
          <Ionicons name="home" size={30} color="#388e3c" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Use Eletrodomésticos de Forma Eficiente</Text>
            <Text style={styles.sectionContent}>
              Use eletrodomésticos como a geladeira e o ar-condicionado de forma eficiente, regulando a temperatura corretamente
              e realizando a manutenção periódica dos aparelhos.
            </Text>
          </View>
        </View>

        {/* Seção: Aproveite a luz natural */}
        <View style={styles.section}>
          <Ionicons name="sunny" size={30} color="#ffeb3b" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Aproveite a Luz Natural</Text>
            <Text style={styles.sectionContent}>
              Sempre que possível, abra as janelas e aproveite a luz natural para iluminar os ambientes. Isso reduz a necessidade
              de acender lâmpadas durante o dia.
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
    backgroundColor: '#e0f7fa', // Azul claro
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

export default Modulo3Screen;
