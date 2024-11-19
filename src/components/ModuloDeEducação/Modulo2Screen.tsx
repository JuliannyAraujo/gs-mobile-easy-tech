import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Para usar ícones

const Modulo2Screen: React.FC<any> = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Título */}
        <Text style={styles.title}>Energias Renováveis</Text>

        {/* Introdução */}
        <Text style={styles.content}>
          As energias renováveis são fontes de energia que não se esgotam e têm um impacto ambiental menor do que as fontes
          tradicionais, como petróleo e carvão. Neste módulo, vamos explorar as principais fontes de energia renovável e
          como elas podem ser usadas de forma sustentável no nosso cotidiano.
        </Text>

        {/* Seção: Energia Solar */}
        <View style={styles.section}>
          <Ionicons name="sunny" size={30} color="#fbc02d" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Energia Solar</Text>
            <Text style={styles.sectionContent}>
              A energia solar é gerada através da radiação solar. Pode ser convertida em eletricidade ou usada para aquecer
              ambientes e água. É uma das fontes mais limpas e eficientes, com baixo custo de manutenção.
            </Text>
          </View>
        </View>

        {/* Seção: Energia Eólica */}
        <View style={styles.section}>
          <Ionicons name="wind" size={30} color="#1976d2" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Energia Eólica</Text>
            <Text style={styles.sectionContent}>
              A energia eólica é gerada a partir do movimento dos ventos, utilizando aerogeradores para converter o movimento
              do ar em eletricidade. É uma das formas mais promissoras de geração de energia limpa.
            </Text>
          </View>
        </View>

        {/* Seção: Energia Hidrelétrica */}
        <View style={styles.section}>
          <Ionicons name="water" size={30} color="#0288d1" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Energia Hidrelétrica</Text>
            <Text style={styles.sectionContent}>
              As hidrelétricas utilizam a força da água para gerar eletricidade. Embora seja uma fonte renovável, é importante
              gerenciar seu impacto ambiental, especialmente em grandes barragens que podem afetar ecossistemas locais.
            </Text>
          </View>
        </View>

        {/* Seção: Outras Fontes Renováveis */}
        <View style={styles.section}>
          <Ionicons name="flash" size={30} color="#4caf50" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Outras Fontes Renováveis</Text>
            <Text style={styles.sectionContent}>
              Existem outras fontes de energia renovável, como a biomassa, a energia das marés e a geotérmica, que também
              têm um grande potencial para transformar a matriz energética mundial de forma mais sustentável.
            </Text>
          </View>
        </View>

        {/* Conclusão */}
        <Text style={styles.conclusionText}>
          A transição para energias renováveis é fundamental para a preservação do meio ambiente e o combate às mudanças
          climáticas. Ao adotar essas fontes em nossa vida cotidiana, podemos contribuir para um futuro mais sustentável.
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
    backgroundColor: '#e0f7fa', // Azul claro
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
    alignItems: 'flex-start', // Alinhar os itens à esquerda
  },
  icon: {
    marginRight: 15, // Espaço entre o ícone e o texto
  },
  textContainer: {
    flex: 1, // Permite que o texto ocupe o restante do espaço disponível
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
  conclusionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#388e3c',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Roboto-Regular',
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

export default Modulo2Screen;
