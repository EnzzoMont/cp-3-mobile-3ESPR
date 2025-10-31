import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AlunoStep2Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aluno - Passo 2 (Contato)</Text>
      
      <Button 
        title="Próximo" 
        onPress={() => navigation.navigate('AlunoStep3')} 
      />
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

export default AlunoStep2Screen;