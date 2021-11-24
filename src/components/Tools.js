import React from 'react';
import ToolImage from './ToolImage';

const toolChain = [
    {
        theName: "Git", 
        buttonColor: "F05032"
    },
    {
        theName: "Yarn", 
        buttonColor: "117cad"
    },
    {
        theName: "NPM", 
        buttonColor: "CB3837"
    },
    {
        theName: "ESLint", 
        buttonColor: "4B3263"
    },
    {
        theName: "Prettier", 
        buttonColor: "F7B93E"
    },
    {
        theName: "Webpack", 
        buttonColor: "F05032"
    },
    {
        theName: "Heroku", 
        buttonColor: "F05032"
    },
    {
        theName: "Netlify", 
        buttonColor: "F05032"
    }

]

export default function Tools() {
    return (
        <section id="tools" class="section pt-6 pb-3">
            <h3 class="title is-size-5">Tools</h3>
            <p class="container">
                <span id="tool-chain">
                    {toolChain.map(tool => <ToolImage tool={tool} />)}
                </span>
                <span id="languages">
                    <img alt="JavaScript"
                        src="https://img.shields.io/badge/-JavaScript-fc0?style=flat-square&logo=javascript&logoColor=white" />
                    <img alt="html5"
                        src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
                    <img alt="CSS"
                        src="https://img.shields.io/badge/-CSS-CC6699?style=flat-square&logo=CSS&logoColor=white" />
                    <img alt="Sass"
                        src="https://img.shields.io/badge/-Sass-CB3837?style=flat-square&logo=sass&logoColor=white" />
                    <img alt="Styled Components"
                        src="https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white" />
                    <img alt="Bulma"
                        src="https://img.shields.io/badge/-Bulma-F7B93E?style=flat-square&logo=Bulma&logoColor=white" />
                    <img alt="Bootstrap"
                        src="https://img.shields.io/badge/-Bootstrap-8DD6F9?style=flat-square&logo=Bootstrap&logoColor=white" />
                </span>
                <span id="libraries-and-frameworks">
                    <img alt="Nodejs"
                        src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
                    <img alt="Express"
                        src="https://img.shields.io/badge/-Express-45b8d8?style=flat-square&logo=Express&logoColor=white" />
                    <img alt="React"
                        src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
                    <img alt="React Router"
                        src="https://img.shields.io/badge/-ReactRouter-8DD6F9?style=flat-square&logo=reactrouter&logoColor=white" />
                    <img alt="redux"
                        src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white" />
                    <img alt="GraphQL"
                        src="https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white" />
                    <img alt="Postman"
                        src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white" />
                </span>
                <span class="app-starters">
                    <img alt="Nextjs"
                        src="https://img.shields.io/badge/Next-black?style=flat-square&logo=next.js&logoColor=white" />
                    <img alt="Gatsby"
                        src="https://img.shields.io/badge/-Gatsby-542c85?style=flat-square&logo=Gatsby&logoColor=white" />
                    <img alt="Jekyll"
                        src="https://img.shields.io/badge/-Jekyll-fc0?style=flat-square&logo=Jekyll&logoColor=white" />
                </span>
                <span class="databases">
                    <img alt="MongoDB"
                        src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" />
                    <img alt="SQLite"
                        src="https://img.shields.io/badge/-SQLite-044a64?style=flat-square&logo=SQLite&logoColor=white" />
                    <img alt="PostgreSQL"
                        src="https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=PostgreSQL&logoColor=white" />
                    <img alt="Sequalize"
                        src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=Sequelize&logoColor=white" />
                </span>
            </p>
        </section>
    )
}
