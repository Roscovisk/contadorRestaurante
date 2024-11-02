import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App: React.FC = () => {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(prev => prev + 1);
  };

  const diminuirContador = () => {
    if (contador > 0) {
      setContador(prev => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de Pessoas</Text>
      <Text style={styles.contador}>{contador}</Text>
      <View style={styles.containerBotoes}>
        <TouchableOpacity style={styles.botao} onPress={aumentarContador}>
          <Text style={styles.textoBotao}>Entrou</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={diminuirContador}>
          <Text style={styles.textoBotao}>Saiu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  contador: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#3b5998',
    marginBottom: 40,
  },
  containerBotoes: {
    flexDirection: 'row',
  },
  botao: {
    backgroundColor: '#3b5998',
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
