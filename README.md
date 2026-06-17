# 🎮 Pokémon Team RN

> Aplicativo mobile de montagem de time e batalha de Pokémon, feito em **React Native + Expo**. Monte seu time a partir da PokeAPI e enfrente adversários em combates por turnos.

<p align="left">
  <img alt="Expo" src="https://img.shields.io/badge/Expo-SDK%2054-000020?style=flat&logo=expo&logoColor=white" />
  <img alt="React Native" src="https://img.shields.io/badge/React%20Native-0.81-61DAFB?style=flat&logo=react&logoColor=black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white" />
  <img alt="React Navigation" src="https://img.shields.io/badge/React%20Navigation-7-6B52AE?style=flat&logo=react&logoColor=white" />
</p>

---

## 📑 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Telas](#-telas)
- [Tecnologias](#-tecnologias)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Pré-requisitos](#-pré-requisitos)
- [Como executar](#-como-executar)
- [Como usar o app](#-como-usar-o-app)
- [Fluxo de Git e Pull Requests](#-fluxo-de-git-e-pull-requests)
- [Requisitos do trabalho atendidos](#-requisitos-do-trabalho-atendidos)
- [Equipe](#-equipe)

---

## 📖 Sobre o projeto

Aplicativo desenvolvido para a disciplina **Desenvolvimento de Aplicação Multiplataforma**. É a versão mobile de um projeto que originalmente foi feito em React para web, agora reescrito em **React Native com TypeScript**.

O usuário navega por um menu lateral (**Drawer**), monta um time consultando o catálogo completo da [PokeAPI](https://pokeapi.co/) e parte para a batalha contra inimigos gerados aleatoriamente, em um sistema de combate por turnos com cálculo de dano baseado nos atributos de cada Pokémon.

A identidade visual segue a paleta oficial de Pokémon, com a fonte pixelada **Press Start 2P** para dar a cara de jogo retrô.

---

## ✨ Funcionalidades

- 🔍 **Catálogo completo** — busca Pokémon das gerações I a V direto da PokeAPI
- 🔎 **Busca por nome** — campo de texto para encontrar um Pokémon específico
- 🎚️ **Filtro por geração** — alterne entre as gerações I, II, III, IV e V
- 👥 **Montagem de time** — selecione até 6 Pokémon para o seu time
- ⚔️ **Batalha por turnos** — escolha 3 do seu time e enfrente 3 inimigos aleatórios
- ❤️ **Barras de HP e log de batalha** — acompanhe o dano e os acontecimentos em tempo real
- 🔄 **Troca automática** — quando um Pokémon desmaia, o próximo entra em campo
- 🏆 **Vitória e derrota** — a batalha termina quando um dos times é totalmente derrotado
- 🧭 **Navegação por Drawer** — menu lateral para circular entre as telas

---

## 📱 Telas

O app possui 4 telas, acessíveis pelo menu lateral:

| Tela | Descrição |
|------|-----------|
| **🏠 Home** | Tela inicial com apresentação e atalhos para as principais seções. Passa um parâmetro para a tela Sobre (comunicação entre telas via props). |
| **👥 Meu Time** | Catálogo de Pokémon com busca e filtro por geração. Aqui você monta o seu time. |
| **🥊 Batalha** | Seleção de 3 Pokémon e o combate por turnos contra inimigos aleatórios. |
| **ℹ️ Sobre** | Informações sobre o app e a equipe. Recebe dados da Home por parâmetro de navegação. |

<!-- 
  💡 DICA: adicione prints reais do app aqui para deixar o README mais completo.
  Tire os screenshots pelo Expo Go, salve em uma pasta (ex: ./screenshots) e referencie assim:

  <p align="center">
    <img src="./screenshots/home.png" width="240" />
    <img src="./screenshots/meu-time.png" width="240" />
    <img src="./screenshots/batalha.png" width="240" />
  </p>
-->

---

## 🛠️ Tecnologias

- **[Expo](https://expo.dev/)** (SDK 54) — plataforma e ferramentas para apps React Native
- **[React Native](https://reactnative.dev/)** 0.81 — framework mobile
- **[React](https://react.dev/)** 19 — biblioteca base
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática
- **[React Navigation](https://reactnavigation.org/)** 7 — navegação (Drawer)
- **[Axios](https://axios-http.com/)** — requisições HTTP à PokeAPI
- **[PokeAPI](https://pokeapi.co/)** — dados dos Pokémon (stats, tipos, sprites)
- **Context API** — compartilhamento do time entre telas
- **[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)** — fonte pixelada (via `@expo-google-fonts`)

---

## 📂 Estrutura de pastas

```
trabalho-react-native/
├── App.tsx                      # Ponto de entrada: fontes, providers e navegação
├── app.json                     # Configuração do Expo
├── babel.config.js              # Babel + plugin de worklets (Reanimated)
├── index.ts                     # Registro do app
│
├── assets/                      # Ícones e splash screen
│
└── src/
    ├── context/
    │   └── TeamContext.tsx       # Estado global do time (Context API)
    │
    ├── routes/
    │   └── DrawerRoutes.tsx      # Configuração do menu lateral (Drawer)
    │
    ├── pages/                    # Telas do app
    │   ├── Home/
    │   ├── MeuTime/              # ⭐ Tela de montagem de time
    │   ├── Batalha/              # ⭐ Tela de batalha por turnos
    │   └── Sobre/
    │
    ├── components/               # Componentes reutilizáveis
    │   ├── CustomDrawer/         # Conteúdo do menu lateral
    │   ├── PokemonGrid.tsx       # Grade de Pokémon (FlatList)
    │   ├── PokemonCard.tsx       # Card individual de Pokémon
    │   ├── TeamSlots.tsx         # Slots do time montado
    │   ├── BattleArena.tsx       # Arena de batalha
    │   ├── HpBar.tsx             # Barra de vida
    │   ├── BattleLog.tsx         # Log de batalha
    │   └── AttackButtons.tsx     # Botões de ataque
    │
    ├── services/
    │   └── pokeApi.ts            # Funções de acesso à PokeAPI
    │
    ├── utils/
    │   ├── constants.ts          # Cores, fonte, gerações e constantes
    │   ├── calcDmg.ts            # Cálculo de dano da batalha
    │   └── sprites.ts            # URLs dos sprites dos Pokémon
    │
    └── types/
        └── index.ts             # Tipagens (Pokemon, BattleMon)
```

---

## ✅ Pré-requisitos

Antes de começar, você vai precisar de:

- **[Node.js](https://nodejs.org/)** versão LTS (18 ou 20) — confira com `node -v`
- App **Expo Go** instalado no celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779))
- Celular e computador na **mesma rede Wi-Fi**

> Não é necessário emulador: o app roda no seu próprio celular através do Expo Go.

---

## 🚀 Como executar

```bash
# 1. Clone o repositório
git clone https://github.com/CaiqueS-araujo/trabalho-react-native.git

# 2. Entre na pasta
cd trabalho-react-native

# 3. Instale as dependências
npm install

# 4. Inicie o projeto (com cache limpo)
npx expo start -c
```

Vai aparecer um **QR Code** no terminal. Abra o **Expo Go** no celular e escaneie — o app abre automaticamente.

> Se aparecer algum aviso de versão de pacote, rode `npx expo install --fix` para alinhar as versões ao SDK.

---

## 🎯 Como usar o app

1. O app abre na tela **Home**.
2. Abra o **menu lateral** — arraste da esquerda para a direita ou toque no ícone ☰ no topo.
3. Vá em **Meu Time**, busque Pokémon (por nome ou geração) e toque para adicioná-los ao time.
4. Com pelo menos **3 Pokémon** no time, vá em **Batalha**.
5. Selecione **3 Pokémon**, toque em batalhar e escolha os ataques. Vença derrotando todos os inimigos! 🏆

---

## 🌿 Fluxo de Git e Pull Requests

O projeto segue o padrão de **branches por funcionalidade** integradas via **Pull Requests**:

```bash
# Crie uma branch para a sua funcionalidade
git checkout -b feature/tela-meu-time

# Faça os commits das alterações
git add .
git commit -m "feat: implementa tela de montagem de time"

# Envie a branch para o repositório
git push -u origin feature/tela-meu-time
```

Depois, abra um **Pull Request** da branch para a `main` no GitHub. A integração na `main` é feita **somente por PR**, mantendo o histórico organizado.

Exemplos de branches do projeto: `feature/tela-home`, `feature/tela-meu-time`, `feature/tela-batalha`, `feature/navegacao-drawer`.

---

## 📋 Requisitos do trabalho atendidos

| Requisito | Status | Onde |
|-----------|:------:|------|
| 3 ou mais telas diferentes | ✅ | Home, Meu Time, Batalha, Sobre |
| Comunicação entre telas via props | ✅ | Home → Sobre (parâmetro de navegação) e props nos componentes |
| Navegação (React Navigation) | ✅ | Drawer (`src/routes/DrawerRoutes.tsx`) |
| Uso de `useState` e `useEffect` | ✅ | Em todas as telas e na lógica de batalha |
| Componentes nativos | ✅ | `FlatList`, `ScrollView`, `TextInput`, `TouchableOpacity` |
| GitHub com branches e Pull Requests | ✅ | Fluxo descrito acima |
| Interface agradável | ✅ | Tema Pokémon com fonte pixelada e cores oficiais |

---

## 👥 Equipe

Projeto desenvolvido em equipe para a disciplina **Desenvolvimento de Aplicação Multiplataforma**.

| Integrante | Responsabilidade |
|------------|------------------|
| **Caique Araújo** | ⭐ Telas **Meu Time** e **Batalha** (catálogo, montagem de time e sistema de combate) |
| _A definir_ | _Tela Home_ |
| _A definir_ | _Tela Sobre_ |
| _A definir_ | _Navegação / integração_ |

> ✏️ Preencha a tabela com os nomes e as responsabilidades de cada integrante da equipe.

---

<p align="center">
  Feito com 💛 usando React Native e a PokeAPI
</p>
#   t r a b a l h o - r e a c t - n a t i v e  
 