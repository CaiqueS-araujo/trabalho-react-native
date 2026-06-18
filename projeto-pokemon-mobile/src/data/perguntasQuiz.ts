import { ImageSourcePropType } from 'react-native';

export type Pergunta = {
  id: number;
  imagem: ImageSourcePropType | null;
  correta: string;
  opcoes: string[];
};

export type Resposta = {
  correta: string;
  escolhida: string | null;
  acertou: boolean;
};

const perguntasQuiz: Pergunta[] = [
  {
    id: 1,
    imagem: null,
    correta: 'Pikachu',
    opcoes: ['Pikachu', 'Raichu', 'Pichu', 'Eevee'],
  },
  {
    id: 2,
    imagem: null,
    correta: 'Charmander',
    opcoes: ['Squirtle', 'Charmander', 'Bulbasaur', 'Caterpie'],
  },
  {
    id: 3,
    imagem: null,
    correta: 'Jigglypuff',
    opcoes: ['Clefairy', 'Jigglypuff', 'Meowth', 'Psyduck'],
  },
  {
    id: 4,
    imagem: null,
    correta: 'Gengar',
    opcoes: ['Gastly', 'Haunter', 'Gengar', 'Koffing'],
  },
  {
    id: 5,
    imagem: null,
    correta: 'Snorlax',
    opcoes: ['Snorlax', 'Slowpoke', 'Drowzee', 'Kabuto'],
  },
  {
    id: 6,
    imagem: null,
    correta: 'Mewtwo',
    opcoes: ['Mew', 'Mewtwo', 'Alakazam', 'Gardevoir'],
  },
];

export default perguntasQuiz;
