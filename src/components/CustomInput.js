import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { cores } from '../styles/cores';

export const CustomInput = ({ label, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={cores.placeholder}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%', 
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: cores.textoSecundario,
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: cores.branco,
    borderColor: cores.bordaInput,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: cores.textoPrincipal,
  },
});