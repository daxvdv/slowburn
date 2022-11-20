import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("Type a title and press 'enter' ");
  const [books, setBooks] = React.useState([]);

  function bookInput(text){
    onChangeText(enteredText);
  }

  function addBook() {
    setBooks(book => [...books, text]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.narratorText}>Welcome to SlowBurn! Ready?</Text>
      <Text style={styles.narratorText}>Build Your Book List Below!</Text>
      <TextInput
        style={styles.titleInput}
        onChangeText={onChangeText}
        value={text}
        onSubmitEditing={addBook}
      />
      {books.map((booktitle) => <Text>{booktitle}</Text>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3B492',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleInput: {
    clearTextOnFocus: true,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius:10,
    padding: 10,
  },
  narratorText: {
    fontFamily: 'Gill Sans',
    color: '#9B7D62',
    fontSize: 40,
    textAlign: 'center',
  },
  headingText: {
    fontFamily: 'Gill Sans',
    color: '#000000',
    fontSize: 25,
  },
  protagText: {
    fontFamily: 'Gill Sans',
    color: '#000000',
    fontSize: 12
  }
});
