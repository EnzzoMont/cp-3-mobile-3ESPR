import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert, Switch } from 'react-native';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { cores } from '../../styles/cores';
import { AlunoFormContext } from '../../context/AlunoFormContext';

export default function AlunoStep3Screen({ navigation }) {
  const { alunoData, setAlunoData } = useContext(AlunoFormContext);

  const finalizarCadastro = () => {
    if (!alunoData.turma) {
      Alert.alert("Atenção", "Preencha o campo Turma.");
      return;
    }
    
    console.log("DADOS FINAIS DO ALUNO:", alunoData);
    Alert.alert("Sucesso!", "Aluno cadastrado. (Verifique o Console)");
    
    navigation.popToTop(); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Passo 3: Curso</Text>

      <CustomInput
        label="Turma"
        placeholder="Digite sua turma (Ex: 2TDSPV)"
        value={alunoData.turma}
        onChangeText={(text) => setAlunoData({ ...alunoData, turma: text })}
        autoCapitalize="characters"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Estágio?</Text>
        <Switch
          trackColor={{ false: cores.bordaInput, true: cores.vermelhoFIAP }}
          thumbColor={cores.branco}
          onValueChange={(value) => setAlunoData({ ...alunoData, estagio: value })}
          value={alunoData.estagio}
        />
      </View>

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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: cores.branco,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderColor: cores.bordaInput,
    borderWidth: 1,
  },
  switchLabel: {
    fontSize: 16,
    color: cores.textoPrincipal,
  },
});