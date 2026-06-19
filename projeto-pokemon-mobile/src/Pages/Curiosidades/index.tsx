import { Image } from 'react-native';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export function Curiosidades() {
  return (
    <ScrollView>
      <View style ={styles.tela1}>
        <View style ={styles.tela2}>
          <Text style={styles.header}>CURIOSIDADES</Text>
        </View>

        <View style={styles.telaCuriosidades}>
          <Text style={styles.tituloCuriosidades}>Evolução - Crescimento biológioc acelerado.</Text>
          <Text style={styles.textoCuriosidades}>A evolução dos Pokémons é algo natural de suas espécies, porém esse processo pode ser desencadedo por diferentes processos:</Text>
          <Text style={styles.textoCuriosidades}>Fontes de energia externas: Essas fontes são as Pedras Evolutivas, são pequenas fontes de energia que casuam uma mudança instantânea no corpo do Pokémon.</Text>
          <Text style={styles.textoCuriosidades}>Relacionamento com o treinador: Essa mudança ocorre quando o Pokémon possui um bom relacionamento com o seu treinador, essas emoções causam mudanças na biología do Pokémon. Somente algumas espécies são capazes disso, como: Pichu --- Pikachu, Eevee --- Espeon/Umbreon, Cleffa --- Clefairy.</Text>
          <Text style={styles.textoCuriosidades}>Troca de Pokémons: Mudanças que ocorrem quando dois treinadores fazem uma troca de Pokémons. Teorias dizem que essa troca gera um estimulo desconhecido no Pokémon e acaba causando essa mudança. Somente algumas espécies são capazes disso, como: Graveler --- Golem, Haunter --- Gengar, Kadabra --- Alakazam.</Text>
          <Image source={require('../../assets/Squirtle-Evolucao.jpg')}
          style={{width: 200, height: 100}}
          />
        </View>

        <View style={styles.telaCuriosidades}>
          <Text style={styles.tituloCuriosidades}>Mega-Evolução - A evolução que transcende a evolução.</Text>
          <Text style={styles.textoCuriosidades}>São necessários dois items:</Text>
          <Text style={styles.textoCuriosidades}>Mega Stones: Pedras capazes de mega evoluir um Pokémon específico.</Text>
          <Text style={styles.textoCuriosidades}>Key Stones: Pedras que ligam o Treinador ao seu Pokémon, que o ajuda a Mega Evoluir.</Text>
          <Text style={styles.textoCuriosidades}>A origem dessa forma está ligada à duas teorias:
            A primeria é sobre a criação da "Arma Suprema" pelo antigo rei da região de Kalos, AZ.
            Ele criou a arma para poder reviver seu Pokemon querido que faleceu durante uma guerra na região, porém, no fim, ela acabou sendo usada para aniquilar os dois lados do conflito.
            Essa arma usa a energia vital de outros Pokémons como combustivel e também o poder dos Pokémons lendários Xerneas e Yveltal.
            Quando o raio da arma foi disparado a sua radiação criou as Mega Stones e as Key Stones.
            </Text>
            <Text style={styles.textoCuriosidades}>A segunda fala sobre um meteorito que caiu na terra a milhares de anos na região de Hoenn.
            A energia emanada desse meteorito teria criado as Mega Stones e as Key Stones.
            </Text>
          <Image source={require('../../assets/Charizard X-Y.jpg')}
          style={{width: 200, height: 100}}
          />
        </View>

        <View style={styles.telaCuriosidades}>
          <Text style={styles.tituloCuriosidades}>Gigantamax - A sentelha de Eternatus</Text>
          <Text style={styles.textoCuriosidades}>Existem duas formas de gigantificação:
          Dynamax: O Pokémon fica em uma forma gigante.
          Gigantamax: O Pokémon não só fica gigante como também ganha uma mudança de aparência e um ataque novo, o G-Max Move.
          </Text>
          <Text style={styles.textoCuriosidades}>Para que o Pokémon atinga essas formas ele deve ter:
          Compatibilidade: O Pokémon deve ser de uma espécie compatível, assim ele é capaz de se torna um Dynamax.
          Porém nem todo Pokémon pode se tornar um Gigantamax, para atingir a forma de Gigantamax ele deve ter:
          Genética: O Pokémon deve ter o Fator Gigantamax, um fator genético que somente alguns de uma espécie compatível possuem.
          </Text>
          <Text style={styles.textoCuriosidades}>A origem dessa forma vem de um evento que aconteceu à milhares de anos na região de Galar, quando o Pokémon Eternatus caiu como um meteoro, que acabou espalhando sua energia pela região.
          Com a sua energia espalhada, o Pokémon pode absorvê-la e quando um treinador usa a sua "Pulseira Dinamax",
          uma ferramenta científica criada para controlar essa energia, ela faz o Pokémon absorver essa energia e então atingir a sua forma Dinamax ou sua forma Gigantamax.
          Lembrando que essa forma somente é possivel na região de Galar.
          </Text>
          <Image source={require('../../assets/Pikachu-Gigantamax.jpg')}
          style={{width: 190, height: 180}}
          />
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
    flex:1,
    backgroundColor: "rgb(44, 94, 183)",
    paddingHorizontal: 110,
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
  },
  tela1:{
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: 'center',
  },
  tela2:{
    flexDirection:'row',
  },
  telaCuriosidades:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgb(255, 202, 0)",
    padding: 10,
    margin: 70,
    gap: 30,
    borderRadius:10,
  },
  tituloCuriosidades:{
    padding: 5,
    fontSize:18,
    color: "#c71f1f"
  },
  textoCuriosidades:{
    margin: -10,
    padding: 8,
    fontSize:15,
    color: "#c71f1f"
  },
})
