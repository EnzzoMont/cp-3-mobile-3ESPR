import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { cores } from '../styles/cores';

export const CustomButton = ({ title, onPress, mode = 'primary' }) => {
  
  const buttonStyle = mode === 'primary' ? styles.botaoPrimario : styles.botaoSecundario;
  const textStyle = mode === 'primary' ? styles.textoPrimario : styles.textoSecundario;

  return (
    <TouchableOpacity style={[styles.botaoBase, buttonStyle]} onPress={onPress}>
      <Text style={[styles.textoBase, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaoBase: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
    width: '90%',
  },
  textoBase: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  botaoPrimario: {
    backgroundColor: cores.botaoPrimario,
  },
  textoPrimario: {
    color: cores.branco,
  },

  botaoSecundario: {
    backgroundColor: 'transparent',
    borderColor: cores.botaoSecundario,
    borderWidth: 1,
  },
  textoSecundario: {
    color: cores.botaoSecundario,
  },
});