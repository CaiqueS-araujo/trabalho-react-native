# 📱 Pokémon Mobile App

Aplicativo mobile temático de Pokémon desenvolvido com **React Native** e **Expo** como trabalho acadêmico. O app conta com três telas principais acessadas via Drawer Navigation: uma lista de Pokémons, um quiz interativo e uma vitrine de jogos clássicos da franquia.

---

## 🖼️ Telas

| Tela                  | Descrição                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| **Lista de Pokémons** | Grade visual com os Pokémons iniciais e seus elementos, com gradiente nas cores oficiais da franquia |
| **Quiz Pokémon**      | Jogo de perguntas "Quem é esse Pokémon?" com timer, pontuação e resultado final                      |
| **Jogos Clássicos**   | Vitrine dos jogos da saga com busca por nome ou console                                              |

---

## 🚀 Tecnologias

- [React Native](https://reactnative.dev/) `0.81.5`
- [Expo](https://expo.dev/) `~54.0.34`
- [TypeScript](https://www.typescriptlang.org/) `~5.9.2`
- [React Navigation (Drawer)](https://reactnavigation.org/) `^7.x`
- [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)
- [Expo Google Fonts](https://github.com/expo/google-fonts) — Bangers, Fredoka, Orbitron
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) `~4.1.1`
- [PokeAPI Sprites](https://github.com/PokeAPI/sprites) — imagens dos Pokémons

---

## 📂 Estrutura de Pastas

```
projeto-pokemon-mobile/
├── assets/
│   ├── images/          # Sprites locais dos Pokémons e ícones do app
│   └── music/           # Trilha sonora do Quiz
├── src/
│   ├── Pages/
│   │   ├── PokemonList/ # Tela com grade de Pokémons
│   │   ├── Quiz/        # Quiz interativo com timer
│   │   └── Games/       # Lista de jogos clássicos com busca
│   ├── Routes/
│   │   └── DrawRouter/  # Configuração do Drawer Navigator
│   ├── components/
│   │   ├── Card/            # Card individual de Pokémon
│   │   ├── PokemonsListCard/ # Grade de cards
│   │   ├── GameCard/        # Card de jogo
│   │   └── Quiz/            # Componentes do quiz (cabeçalho, botões, resultado)
│   └── data/
│       └── perguntasQuiz.ts # Banco de perguntas do quiz
├── App.tsx
├── app.json
└── package.json
```

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Aplicativo **Expo Go** no celular, ou emulador Android/iOS configurado

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/CaiqueS-araujo/trabalho-react-native.git
cd trabalho-react-native/projeto-pokemon-mobile

# 2. Instale as dependências
npm install

# 3. Inicie o projeto
npm start
```

Após iniciar, escaneie o QR Code com o app **Expo Go** (Android) ou pela câmera (iOS).

### Scripts disponíveis

| Comando           | Descrição                |
| ----------------- | ------------------------ |
| `npm start`       | Inicia o Metro Bundler   |
| `npm run android` | Abre no emulador Android |
| `npm run ios`     | Abre no simulador iOS    |
| `npm run web`     | Abre no navegador        |

---

## 🎮 Funcionalidades

### Lista de Pokémons

- Exibe uma grade com Pokémons iniciais da franquia
- Mostra imagem, nome e tipo de cada Pokémon
- Visual com gradiente nas cores amarelo e azul da Pokébola
- Fonte **Bangers** para o estilo arcade

### Quiz Pokémon

- Tela de boas-vindas com campo para inserir o nome do treinador
- 6 perguntas do tipo "Quem é esse Pokémon?"
- Timer de **15 segundos** por pergunta — resposta automática ao esgotar
- **10 pontos** por acerto
- Tela de resultado com pontuação final e revisão de todas as respostas
- Botão "Jogar de novo" para reiniciar

### Jogos Clássicos

- Vitrine dos jogos históricos Pokémon organizados por console
- Campo de busca com **filtro em tempo real** por nome do jogo ou console
- Layout escuro com destaque em azul e amarelo

---

## 🗂️ Navegação

O app utiliza **Drawer Navigator** (menu lateral deslizante) com três rotas:

- `PokemonList` → Lista de Pokémons
- `Quiz` → Quiz Pokémon
- `Games` → Jogos Clássicos

---

## 👤 Autor

**Caique S. Araújo**
**Abranches4434**
**DouglasCGJ**
**AscendedGabriel**

---

## 📄 Licença

Projeto acadêmico. Todos os nomes, imagens e elementos da franquia Pokémon são propriedade da **Nintendo / Game Freak / Creatures Inc.**
