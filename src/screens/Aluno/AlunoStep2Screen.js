import React, { useContext } from 'react';
import { Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { cores } from '../../styles/cores';
import { AlunoFormContext } from '../../context/AlunoFormContext';

export default function AlunoStep2Screen({ navigation }) {
  const { alunoData, setAlunoData } = useContext(AlunoFormContext);

  const proximoPasso = () => {
    if (!alunoData.telefone || !alunoData.email || !alunoData.endereco) {
      Alert.alert("Atenção", "Preencha todos os campos de contato.");
      return;
    }
    navigation.navigate('AlunoStep3');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Passo 2: Contato</Text>

      <CustomInput
        label="Telefone"
        placeholder="(11) 99999-9999"
        value={alunoData.telefone}
        onChangeText={(text) => setAlunoData({ ...alunoData, telefone: text })}
        keyboardType="phone-pad"
      />
      <CustomInput
        label="Email"
        placeholder="seu.email@fiap.com.br"
        value={alunoData.email}
        onChangeText={(text) => setAlunoData({ ...alunoData, email: text })}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <CustomInput
        label="Endereço"
        placeholder="Rua, Número, Bairro, Cidade - SP"
        value={alunoData.endereco}
        onChangeText={(text) => setAlunoData({ ...alunoData, endereco: text })}
      />

      <CustomButton title="Próximo" mode="primary" onPress={proximoPasso} />
      <CustomButton title="Voltar" mode="secondary" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    alignItems: 'center',
    paddingTop: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: cores.textoPrincipal,
    marginBottom: 20,
  },
});