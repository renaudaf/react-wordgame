# react-boilerplate

Simple react starter with the following config:

- React, ReactDOM
- Webpack 4
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

## Scripts

To start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```


### Download boilerplate to new project
```bash
cd ~/code/<github_username>

git git@github.com:renaudaf/My-React-Boilerplate.git project-name

cd project-name
```

### Destroy existing boilerplate git history, and start a new one
```bash
rm -rf .git

git init

git add .

git commit -m "initial commit with boilerplate"
```
### Create a GitHub repo, and push!
```bash
hub create

git push origin master
```
### Install the dependencies listed in the `package.json` file with:
```bash
yarn install
```
### Time to open Sublime Text and code.
```bash
code .
```
