import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

// Definimos o tipo para a propriedade navigation
type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

const CadastroScreen: React.FC<Props> = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !confirmarSenha || !cpf || !bairro || !rua) {
      setError('Todos os campos são obrigatórios!');
      return;
    }

    if (senha !== confirmarSenha) {
      setError('As senhas não coincidem!');
      return;
    }

    if (!validateEmail(email)) {
      setError('E-mail inválido!');
      return;
    }

    if (!validateCPF(cpf)) {
      setError('CPF inválido!');
      return;
    }

    if (senha.length < 6) {
      setError('A senha precisa ter pelo menos 6 caracteres!');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha, cpf, bairro, rua }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar, tente novamente.');
      }

      const data = await response.json();
      const token = data.token;

      await AsyncStorage.setItem('token', token);
      setSuccessMessage('Cadastro realizado com sucesso!');
      setTimeout(() => {
        navigation.navigate('Login'); // Redireciona para a tela de login
      }, 2000); // Delay para exibir a mensagem de sucesso
    } catch (error) {
      setError(error.message || 'Erro ao cadastrar');
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validateCPF = (cpf: string) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      {error && <Text style={styles.errorText}>{error}</Text>}
      {successMessage && <Text style={styles.successText}>{successMessage}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
      />
      <TextInput
        style={styles.input}
        placeholder="Rua"
        value={rua}
        onChangeText={setRua}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Cadastrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e0f7fa', // Azul claro, remete à natureza e energia limpa
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#388e3c', // Verde escuro, associado à sustentabilidade e ao meio ambiente
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderColor: '#388e3c', // Borda verde, remetendo à natureza e sustentabilidade
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#388e3c', // Verde que remete à energia renovável
    padding: 16,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  successText: {
    color: 'green',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  linkText: {
    fontSize: 16,
    color: '#388e3c', // Cor verde para o link de cadastro
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default CadastroScreen;
