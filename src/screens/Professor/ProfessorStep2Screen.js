import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfessorStep2Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Professor - Passo 2 (Contato e Disciplina)</Text>
      
      <Button 
        title="Próximo" 
        onPress={() => navigation.navigate('ProfessorStep3')} 
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

export default ProfessorStep2Screen;