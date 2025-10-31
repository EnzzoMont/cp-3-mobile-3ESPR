import React, { useContext } from 'react';
import { Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { cores } from '../../styles/cores';
import { ProfessorFormContext } from '../../context/ProfessorFormContext';

export default function ProfessorStep2Screen({ navigation }) {
  const { professorData, setProfessorData } = useContext(ProfessorFormContext);

  const proximoPasso = () => {
    if (!professorData.telefone || !professorData.email) {
      Alert.alert("Atenção", "Preencha todos os campos de contato.");
      return;
    }
    navigation.navigate('ProfessorStep3');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Passo 2: Contato</Text>

      <CustomInput
        label="Telefone"
        placeholder="(11) 99999-9999"
        value={professorData.telefone}
        onChangeText={(text) => setProfessorData({ ...professorData, telefone: text })}
        keyboardType="phone-pad"
      />
      <CustomInput
        label="Email"
        placeholder="seu.email@fiap.com.br"
        value={professorData.email}
        onChangeText={(text) => setProfessorData({ ...professorData, email: text })}
        keyboardType="email-address"
        autoCapitalize="none"
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