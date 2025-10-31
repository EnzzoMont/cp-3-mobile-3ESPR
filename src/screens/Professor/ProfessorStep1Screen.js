import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfessorStep1Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Professor - Passo 1 (Dados Pessoais)</Text>
      
      {/* Botão de navegação temporário */}
      <Button 
        title="Próximo" 
        onPress={() => navigation.navigate('ProfessorStep2')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 }
});

export default ProfessorStep1Screen;