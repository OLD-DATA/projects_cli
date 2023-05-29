#!/usr/bin/env node
import inquirer from 'inquirer';
import * as child from 'node:child_process'

inquirer
  .prompt([
    {
    type:'list',
    message:'what is your project',
    name:'framework',
    choices: ['angular','react','vue','svelte','preact','django','electron']
    }
  ])
  .then((answers) => {
    if (answers.framework === 'angular'){
    child.exec(`git clone https://github.com/rajni-a/angular.git`)
    console.log("now install the angular cli with")
    console.log("npm i @angular/cli")
    }
    if (answers.framework === 'react'){
    child.exec(`git clone https://github.com/rajni-a/react.git`)
    console.log("now install react with")
    console.log("npm -i react")
    }
    if (answers.framework === 'vue'){
    child.exec(`git clone https://github.com/rajni-a/vue.git`)
    console.log("now install vue with")
    console.log("npm -i vue")
    }
    if (answers.framework === 'svelte'){
    console.log(`git clone https://github.com/rajni-a/svelte.git`)
    console.log("here is the app")
    }
    if (answers.framework === 'preact'){
    child.exec(`git clone https://github.com/rajni-a/preact.git`)
    console.log("now install preact with")
    console.log("npm -i preact")
    } 
    if(answers.framework === 'django'){
    console.log("why are you doing this in a js cli")
    console.log("you must learn js")
    console.log("then your project won't be slow")
    console.log("javascript.com")
    } 
    if(answers.framework === 'electron'){
    child.exec(`git clone https://github.com/electron/electron-quick-start.git`)
    console.log("now just install dependencies")
    }
})