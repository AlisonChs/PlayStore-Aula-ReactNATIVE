import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Botao from './src/components/Botao';
import Jogo from './src/components/Jogo';
import Dados from './src/Dados';

export default function App() {
  return (

    <View> 
      <View style={styles.container}>
        <Cabecalho />

        <Botao 
          Logo= "md-game-controller"
          texto="Jogos"
          cor="black"
        />

        <FlatList
          horizontal={true}
          data = {Dados}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

          <Jogo
            titulo ={item.nome}
            imagem ={item.imagem}
            valor ={item.valor}
          />

          )}

          />

      </View>

      <View style={styles.container}>

        <Botao
            Logo="md-wallet"
            texto="Menor preço"
            cor="green"
          />

        <FlatList
          horizontal={true}
          data = {Dados}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

          <Jogo
            titulo ={item.nome}
            imagem ={item.imagem}
            valor ={item.valor}
          />

          )}

          />

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'space-between',
    justifyContent: 'center',
    marginBottom: 100
  },
});

