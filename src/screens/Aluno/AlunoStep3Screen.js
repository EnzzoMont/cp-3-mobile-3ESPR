import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AlunoStep3Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aluno - Passo 3 (Curso)</Text>
      <Text>Aqui estarão os campos Turma e Estágio</Text>
      <Text>E o botão CADASTRAR final.</Text>
      
      <Button 
        title="Voltar" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 }
});

export default AlunoStep3Screen;