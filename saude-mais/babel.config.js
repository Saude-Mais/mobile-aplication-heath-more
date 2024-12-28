module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env', // Nome do módulo usado para importar variáveis
          path: '.env',       // Caminho para o arquivo .env
        },
      ],
    ],
  };
  