import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Símbolos possíveis para o slot
const symbols = ['🍒', '🍋', '🔔', '💎', '7️⃣'];

const SlotMachine = () => {
  const [slots, setSlots] = useState(['❔', '❔', '❔']);
  const [resultMessage, setResultMessage] = useState('');

  // Função para rodar os slots
  const spinSlots = () => {
    const newSlots = [
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
    ];
    setSlots(newSlots);

    // Verifica se todos os símbolos coincidem
    if (newSlots[0] === newSlots[1] && newSlots[1] === newSlots[2]) {
      setResultMessage('🎉 Você ganhou! 🎉');
    } else {
      setResultMessage('Tente novamente!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎰 Slot Machine 🎰</Text>
      
      <View style={styles.slotsContainer}>
        <Text style={styles.slot}>{slots[0]}</Text>
        <Text style={styles.slot}>{slots[1]}</Text>
        <Text style={styles.slot}>{slots[2]}</Text>
      </View>

      <Button title="Girar" onPress={spinSlots} />

      {resultMessage !== '' && (
        <Text style={styles.result}>{resultMessage}</Text>
      )}
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <SlotMachine />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  slotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  slot: {
    fontSize: 50,
    marginHorizontal: 10,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;

