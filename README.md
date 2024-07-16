# Portfolio sous forme de Webdocumentaire

Ce projet a pour objectif de présenter mes compétences en développement web de manière interactive et immersive, en utilisant les dernières technologies que j'ai apprise en autodidacte.

## Démarche

L'idée de ce projet est de créer un portfolio qui fait écho au monde du webdocumentaire. En effet, ma femme étant réalisatrice de films documentaires, je m'intéresse particulièrement à ce domaine riches d'histoires humaines. Je veux que l'utilisateur se promène dans mes archives, dans mon univers.

### Maquettage
Pour la conception des interfaces, j'utilise penpot un outil de prototypage gratuit et en ligne.
[images à venir]

## Outils Utilisés

- **React** : Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Next.js** : Un framework React qui permet de créer des applications web optimisées pour le référencement (SEO) et performantes grâce à la génération de pages statiques et de rendus côté serveur.
- **SASS** : Un préprocesseur CSS qui permet d'écrire des styles de manière plus efficace et modulaire, facilitant ainsi la gestion des styles dans le projet.
- **Vitest** : Un framework de tests unitaire pour JavaScript, conçu pour tester facilement les composants et les fonctionnalités de l'application.

## Structure du Projet

Voici l'organisation des fichiers dans le projet :
```
mon-portfolio/
│
├── src/ # Dossier contenant les fichiers sources
│ ├── app/ # Dossier des routes
│ └── _components/ # Dossier pour les composants UI
│
├── public/ # Dossier pour les fichiers publics (images, icônes, etc.)
│
├── package.json # Fichier de configuration du projet
├── next.config.js # Fichier de configuration de Next.js
├── vite.config.js # Fichier de configuration de Vitest
└── README.md # Ce fichier
```

## Installation

Pour démarrer le projet, suivez les étapes suivantes :

1. Clonez ce dépôt sur votre machine locale :
```bash
   git clone https://github.com/votre-utilisateur/mon-portfolio.git
```
Naviguez dans le dossier du projet :

``` bash
cd mon-portfolio
```

Installez les dépendances :

``` bash
npm install
```

Démarrez le serveur de développement :

```bash
    npm run dev
```
Votre application devrait être accessible à l'adresse http://localhost:3000.

## Tests

Pour exécuter les tests unitaires, utilisez la commande suivante :

```bash
npm run test
```
Cela lancera Vitest et exécutera tous les tests définis dans le projet.

# Contribution

Les contributions sont les bienvenues ! Si vous souhaitez apporter des améliorations ou signaler des problèmes, n'hésitez pas à ouvrir un issue ou à soumettre une pull request.
License

Ce projet est sous licence MIT.

