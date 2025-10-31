import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { cores } from '../../styles/cores';
import { AlunoFormContext } from '../../context/AlunoFormContext'; 

export default function AlunoStep1Screen({ navigation }) {
  const { alunoData, setAlunoData } = useContext(AlunoFormContext);

  const proximoPasso = () => {
    if (!alunoData.nome || !alunoData.rm) {
      Alert.alert("Atenção", "Preencha o Nome e o RM para continuar.");
      return;
    }
    navigation.navigate('AlunoStep2'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Passo 1: Dados Pessoais</Text>

      <CustomInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        value={alunoData.nome}
        onChangeText={(text) => setAlunoData({ ...alunoData, nome: text })}
      />
      <CustomInput
        label="RM"
        placeholder="Digite seu RM (Ex: 551234)"
        value={alunoData.rm}
        onChangeText={(text) => setAlunoData({ ...alunoData, rm: text })}
        keyboardType="numeric"
        maxLength={6}
      />

      <CustomButton title="Próximo" mode="primary" onPress={proximoPasso} />
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