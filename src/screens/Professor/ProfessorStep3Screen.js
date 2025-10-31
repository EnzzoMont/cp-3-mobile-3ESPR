import React, { useContext } from 'react';
import { Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { cores } from '../../styles/cores';
import { ProfessorFormContext } from '../../context/ProfessorFormContext';

export default function ProfessorStep3Screen({ navigation }) {
  const { professorData, setProfessorData } = useContext(ProfessorFormContext);

  const finalizarCadastro = () => {
    if (!professorData.disciplina || !professorData.unidade || !professorData.tipoAvaliacao) {
      Alert.alert("Atenção", "Preencha todos os campos acadêmicos.");
      return;
    }
    
    console.log("DADOS FINAIS DO PROFESSOR:", professorData);
    Alert.alert("Sucesso!", "Professor cadastrado. (Verifique o Console)");
    
    navigation.popToTop(); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Passo 3: Acadêmico</Text>

      <CustomInput
        label="Disciplina"
        placeholder="Ex: Desenvolvimento Mobile"
        value={professorData.disciplina}
        onChangeText={(text) => setProfessorData({ ...professorData, disciplina: text })}
      />
      <CustomInput
        label="Unidade"
        placeholder="Ex: Aclimação"
        value={professorData.unidade}
        onChangeText={(text) => setProfessorData({ ...professorData, unidade: text })}
      />
      <CustomInput
        label="Tipo de Avaliação"
        placeholder="Ex: Prova, Atividade Prática"
        value={professorData.tipoAvaliacao}
        onChangeText={(text) => setProfessorData({ ...professorData, tipoAvaliacao: text })}
      />

      <CustomButton title="CADASTRAR" mode="primary" onPress={finalizarCadastro} />
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