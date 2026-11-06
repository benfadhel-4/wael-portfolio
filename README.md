# Wael Benfadhel — Portfolio

Portfolio personnel bilingue (français / anglais) construit avec Next.js, React et CSS.

## Prérequis

- Node.js 20.9 ou version ultérieure
- npm
- Un éditeur comme Visual Studio Code

## 1. Installer le projet

Décompressez le ZIP, ouvrez le dossier `wael-portfolio` dans VS Code puis ouvrez un terminal dans ce dossier.

```bash
npm install
npm run dev
```

Ouvrez ensuite http://localhost:3000.

## 2. Personnaliser les informations avant publication

Dans `app/page.jsx`, recherchez et remplacez :

- `your.email@example.com` par votre adresse e-mail réelle.
- `https://www.linkedin.com/` par l'URL complète de votre profil LinkedIn.
- `https://github.com/` par l'URL complète de votre profil GitHub.
- Les niveaux de langue « Professionnel — à préciser » par vos niveaux réels.
- Les descriptions de projets par des projets que vous pouvez présenter publiquement.

Le portfolio présente certains projets comme des domaines de travail, pas comme des dépôts publics. Ne publiez pas de code, captures d'écran ou données confidentielles de votre employeur.

## 3. Ajouter le CV PDF

Copiez votre CV PDF dans le dossier `public` et nommez-le :

`wael-benfadhel-cv.pdf`

Créez le dossier `public` s'il n'existe pas. Le bouton de téléchargement pointe déjà vers ce chemin.

## 4. Vérifier la production

```bash
npm run build
npm start
```

Corrigez les informations de contact et vérifiez le rendu mobile avant de publier.

## 5. Publier sur Vercel

1. Créez un dépôt GitHub et envoyez-y le code du projet.
2. Connectez-vous à Vercel et choisissez **Add New → Project**.
3. Importez le dépôt GitHub.
4. Gardez les paramètres Next.js détectés automatiquement et cliquez sur **Deploy**.
5. Une fois le déploiement terminé, testez le lien public et les deux langues.

## Notes

- Le formulaire de contact n'est pas inclus : les liens e-mail ouvrent le logiciel de messagerie du visiteur.
- `metadataBase` dans `app/layout.jsx` utilise `https://example.com` comme valeur temporaire. Remplacez-la par votre URL Vercel ou votre domaine après publication.
- La police Google Fonts nécessite une connexion réseau. Le site conserve des polices de secours.
