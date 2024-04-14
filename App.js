import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import SearchBar from './components/Searchbar';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
