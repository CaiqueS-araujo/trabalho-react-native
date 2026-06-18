import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, { useState, useEffect } from 'react';

import perguntasQuiz, { Resposta } from '../../data/perguntasQuiz';
import CabecalhoQuiz from '../../components/Quiz/CabecalhoQuiz';
import BotaoResposta from '../../components/Quiz/BotaoResposta';
import ItemResultado from '../../components/Quiz/ItemResultado';

const TEMPO_POR_PERGUNTA = 15;

export function Quiz() {
  const [nome, setNome] = useState('');
  const [iniciou, setIniciou] = useState(false);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respondido, setRespondido] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null);
  const [tempoRestante, setTempoRestante] = useState(TEMPO_POR_PERGUNTA);
  const [finalizado, setFinalizado] = useState(false);
  const [respostas, setRespostas] = useState<Resposta[]>([]);

  const perguntaAtual = perguntasQuiz[indiceAtual];

  function responder(opcaoEscolhida: string | null) {
    if (respondido) return;
    const acertou = opcaoEscolhida === perguntaAtual.correta;
    setRespondido(true);
    setOpcaoSelecionada(opcaoEscolhida);
    if (acertou) setPontuacao((pontos) => pontos + 10);
    setRespostas((lista) => [
      ...lista,
      { correta: perguntaAtual.correta, escolhida: opcaoEscolhida, acertou },
    ]);
  }

  function proximaPergunta() {
    if (indiceAtual + 1 < perguntasQuiz.length) {
      setIndiceAtual((indice) => indice + 1);
    } else {
      setFinalizado(true);
    }
  }

  function jogarDeNovo() {
    setIndiceAtual(0);
    setPontuacao(0);
    setRespostas([]);
    setFinalizado(false);
    setRespondido(false);
    setOpcaoSelecionada(null);
  }

  useEffect(() => {
    setTempoRestante(TEMPO_POR_PERGUNTA);
    setRespondido(false);
    setOpcaoSelecionada(null);
  }, [indiceAtual]);

  useEffect(() => {
    if (!iniciou || finalizado || respondido) return;
    if (tempoRestante <= 0) {
      responder(null);
      return;
    }
    const id = setInterval(() => {
      setTempoRestante((tempo) => tempo - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [tempoRestante, respondido, iniciou, finalizado]);

  // TELA 1 — intro
  if (!iniciou) {
    return (
      <SafeAreaView style={styles.tela}>
        <View style={styles.header}>
          <Text style={styles.headerTitulo}>QUIZ POKÉMON</Text>
        </View>
        <View style={styles.containerIntro}>
          <Text style={styles.titulo}>Quem é esse Pokémon?</Text>
          <Text style={styles.subtitulo}>
            Responda {perguntasQuiz.length} perguntas antes que o tempo acabe!
          </Text>
          <Text style={styles.label}>Qual é o seu nome, treinador(a)?</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#A89B7D"
            value={nome}
            onChangeText={setNome}
          />
          <TouchableOpacity
            style={styles.botaoPrimario}
            onPress={() => setIniciou(true)}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotaoPrimario}>Começar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // TELA 3 — resultado
  if (finalizado) {
    const acertos = respostas.filter((r) => r.acertou).length;
    return (
      <SafeAreaView style={styles.tela}>
        <View style={styles.header}>
          <Text style={styles.headerTitulo}>QUIZ POKÉMON</Text>
        </View>
        <View style={styles.containerResultado}>
          <Text style={styles.titulo}>Parabéns, {nome || 'treinador(a)'}!</Text>
          <Text style={styles.pontuacaoFinal}>
            Você fez {pontuacao} pontos ({acertos} de {perguntasQuiz.length} certas)
          </Text>
          <FlatList
            style={styles.lista}
            data={respostas}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => <ItemResultado item={item} />}
          />
          <TouchableOpacity
            style={styles.botaoPrimario}
            onPress={jogarDeNovo}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotaoPrimario}>Jogar de novo</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // TELA 2 — pergunta
  return (
    <SafeAreaView style={styles.tela}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>QUIZ POKÉMON</Text>
      </View>
      <View style={styles.containerQuiz}>
        <CabecalhoQuiz
          numeroAtual={indiceAtual + 1}
          total={perguntasQuiz.length}
          pontos={pontuacao}
        />
        <Text style={styles.tempo}>⏱ {tempoRestante}s</Text>
        <View style={styles.imagemPlaceholder}>
          {perguntaAtual.imagem ? (
            <Image
              source={perguntaAtual.imagem}
              style={styles.imagem}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.imagemTexto}>?</Text>
          )}
        </View>
        <Text style={styles.pergunta}>Quem é esse Pokémon?</Text>
        <View style={styles.opcoes}>
          {perguntaAtual.opcoes.map((opcao) => (
            <BotaoResposta
              key={opcao}
              texto={opcao}
              ehCorreta={opcao === perguntaAtual.correta}
              selecionada={opcao === opcaoSelecionada}
              respondido={respondido}
              onPress={() => responder(opcao)}
            />
          ))}
        </View>
        {respondido && (
          <TouchableOpacity
            style={styles.botaoPrimario}
            onPress={proximaPergunta}
            activeOpacity={0.8}
          >
            <Text style={styles.textoBotaoPrimario}>
              {indiceAtual + 1 < perguntasQuiz.length ? 'Próxima pergunta' : 'Ver resultado'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFFCF7',
  },
  header: {
    backgroundColor: '#2A75BB',
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#ffcb05',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 1,
  },
  containerIntro: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  containerQuiz: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  containerResultado: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#262626',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#6B6B6B',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#262626',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D9D0BC',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  botaoPrimario: {
    backgroundColor: '#E3350D',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  textoBotaoPrimario: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  tempo: {
    textAlign: 'center',
    fontSize: 14,
    color: '#A83232',
    marginBottom: 12,
  },
  imagemPlaceholder: {
    height: 160,
    backgroundColor: '#F6F1E8',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  imagem: {
    width: '80%',
    height: '80%',
  },
  imagemTexto: {
    fontSize: 48,
    color: '#C9BBA0',
    fontWeight: '700',
  },
  pergunta: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
    color: '#262626',
  },
  opcoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  pontuacaoFinal: {
    fontSize: 15,
    color: '#6B6B6B',
    textAlign: 'center',
    marginBottom: 16,
  },
  lista: {
    flex: 1,
    marginBottom: 16,
  },
});
