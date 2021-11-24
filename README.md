# 🚀 Welcome to your new awesome portfolio page!

## What is this?

Junior Dev Portfolio is a straightforward portfolio page for junior developers built using Bulma. The rest of the frontend stack consists of Webpack 5 (configured via webpack-cli/generators), React 17, and React Router 6. Checkout **package.json**, **webpack.config.js**, and **.babelrc** for more.


## Serving the site

I recommend using GitHub Pages to serve the site. It's free and easy.

## Usage

Fork the repo and follow GitHub's (or Bitbucket's, etc.) instructions on how to install it locally. Once installed, use either NPM or Yarn to install the necessary packages. Once the packages have been installed, open **package.json** and take a look at the available **scripts**.

To run the development server (webpack-dev-server), use either:

```sh
npm run serve
```

or

```sh
npx webpack serve
```

There are several options for building your project and serving from the build directory.

## The "Tools" Section and Tool Badges

The **tools.json** file, in the top level directory, contains a list of tool names and button colors. I used the popular Shields.io for tool badges (Github: https://github.com/badges and Site: https://shields.io/). Shields.io supports most of the technologies found on Simple Icons (Github: https://github.com/simple-icons/simple-icons/blob/develop/slugs.md and Site: https://simpleicons.org). You can also create your own badges. Read about that on Shields.io.

## The Octocat

Build your own custom Octocat at https://myoctocat.com/. If you're deploying your site via GitHub pages, a neat trick is to open an issue in your repo, post the Octocat image in the issue, and then use the image's source link in the Octocat.js component.