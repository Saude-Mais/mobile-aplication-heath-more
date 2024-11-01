# mobile-aplication-heath-more
Aplicativo mobile feito em react-native


## Estrutura de pastas
```
nome-do-projeto/
├── assets/              # Arquivos de mídia (imagens, fontes, etc.)
│   ├── images/          # Imagens da aplicação
│   ├── fonts/           # Fontes personalizadas
│   └── icons/           # Ícones específicos do app
│
├── src/                 # Código-fonte do aplicativo
│   ├── components/      # Componentes reutilizáveis
│   │   └── Button.js
│   │   └── Card.js
│   │
│   ├── navigation/
│   │   └── AppNavigator.js
│   │
│   ├── screens/ 
│   │   └── HomeScreen.js
│   │   └── DetailsScreen.js
│   │
│   ├── hooks/
│   │   └── useAuth.js
│   │
│   ├── context/ 
│   │   └── AuthContext.js
│   │
│   ├── services/ 
│   │   └── api.js
│   │
│   ├── utils/
│   │   └── formatDate.js
│   │
│   ├── config/ 
│   │   └── colors.js 
│   │
│   └── App.js
│
├── .gitignore  
├── app.json             # Configurações do Expo
├── package.json         # Dependências e scripts do projeto
└── README.md            # Documentação do projeto

```