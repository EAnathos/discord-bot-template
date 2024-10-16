# Présentation

## Comment utiliser cette template

1. Cloner ce repository ou appuyez sur "Use this template"
2. Installez les dépendances avec `npm install`
3. Créez un fichier `.env` à la racine de votre projet avec les informations suivantes:
```.env
#.env
TOKEN=//le_token_de_votre_bot_discord//
CLIENT_ID=//uuid_de_votre_client_discord//
```
4. Lancez le build du bot avec `npm build`
5. Lancez le bot avec `npm run start`

### Précisions

Lors du build, il est executé :
    * npm run format
    * npm run lint
    * npm run doc
    * npm run test

Il est possibile d'utiliser ces commandes indépendemments si vous le souhaitez.

## Technologies utilisées

- [Discord.js](https://discord.js.org/#/) - La librairie pour interagir avec l'API Discord
- [Node.js](https://nodejs.org/en/) - L'environnement d'exécution JavaScript
- [TypeScript](https://www.typescriptlang.org/) - Le langage de programmation utilisé
- [dotenv](https://www.npmjs.com/package/dotenv) - Pour gérer les variables d'environnement
- [typeDoc](https://typedoc.org/) - Pour générer la documentation du code

## Contribution

Les contributions au code seront analysées, n'hésitez pas à faire des pull requests (vers dev) si vous avez la moindre suggestion ou fix de bugs.

## License

Ce projet est sous la licence MIT License - regardez le fichier [LICENSE](LICENSE) pour plus de détails.
