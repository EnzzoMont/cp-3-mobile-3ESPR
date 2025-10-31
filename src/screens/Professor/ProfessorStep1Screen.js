import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { cores } from '../../styles/cores';
import { ProfessorFormContext } from '../../context/ProfessorFormContext'; 

export default function ProfessorStep1Screen({ navigation }) {
  const { professorData, setProfessorData } = useContext(ProfessorFormContext);

  const proximoPasso = () => {
    if (!professorData.nome || !professorData.rp) {
      Alert.alert("Atenção", "Preencha o Nome e o RP para continuar.");
      return;
    }
    navigation.navigate('ProfessorStep2'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Passo 1: Dados Pessoais</Text>
      
      <CustomInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        value={professorData.nome}
        onChangeText={(text) => setProfessorData({ ...professorData, nome: text })}
      />
      <CustomInput
        label="RP"
        placeholder="Digite seu RP (Ex: 12345)"
        value={professorData.rp}
        onChangeText={(text) => setProfessorData({ ...professorData, rp: text })}
        keyboardType="numeric"
        maxLength={5}
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