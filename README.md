# TechTime

The Information and Communication Technology sector in Nigeria has seen significant growth and development in recent years. The National Bureau of Statistics revealed that the sector contributed 18.44 per cent to the nation's GDP in the second quarter of 2022. The number of startups in Nigeria was estimated to have exceeded 3,360 in 2022, the highest number in Africa. To follow, Kenya and South Africa counted approximately 1,000 and over 660 startups in the same year, respectively.
with the ever growing tech industry, more Nigerians will be looking to get into the tech industry and will that will need good guidance on the path to take that best suits them. techtime is the perfect school for nigerians or humans at large to start their tech carriers.

The goal of the landing page is to promote the various courses to be offered by techtime also give users and potential students detailed information about the school.

### Libraries

- [NextJS](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [tailwindcss 3](https://tailwindcss.com/)
  - [tailwindcss forms plugin](https://tailwindcss-forms.vercel.app/)
- [TypeScript 4.9.5](https://www.typescriptlang.org/)

### Tools

- [commitlint 17](https://commitlint.js.org)
- [Conventional Commits 1](https://www.conventionalcommits.org)
- [editorconfig](https://editorconfig.org/)
- [eslint 8](https://eslint.org/)
- [husky 8](https://typicode.github.io/husky/#/)
- [Prettier 2](https://prettier.io/)
- [VS Code settings](https://code.visualstudio.com/)

## Getting started

1. clone the repo

```
git clone https://github.com/todak2000/techTime.git
```

2. Intall dependencies and associated libraries

```
cd techTime
yarn install
```

3. Run the Start the App locally

```
yarn dev
```

4. Dockerise the App

```
docker build -t techtime:v1 .
```

5. Confirm the app is dockized by viewing/listing all images- newly created containers should be at the top

```
docker image ls
```

6. Publish Run the dockerized app

```
docker run --publish 3000:3000 tecthtime:v1
```
