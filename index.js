/*
Created, shared by Fhyrox
|=> https://fhyrox.dev
*/

const { AoiClient } = require('aoi.js')
const { prefix, token } = require('./config')

const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

const client = new AoiClient({
    token, prefix,
    intents: ["Guilds", "GuildMembers", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require('@aoijs/aoi.db'),
        dbType: "KeyValue",
        tables: ['main'],
        securityKey: "a-32-characters-long-string-here"
    }
})

client.loadCommands('./commands')
require('./status')(client)

const variables = fs.readdirSync(path.join(__dirname, 'variables'));
variables.forEach(vars => {
    client.variables(require(path.join(__dirname, 'variables', vars)), vars.slice(0, -2))
    console.log(`${chalk.yellow('[VARIABLES]')} => ${vars} yüklendi.`)
});

const functions = fs.readdirSync(path.join(__dirname, 'functions'));
functions.forEach(funcs => {
    client.functionManager.createFunction(require(path.join(__dirname, 'functions', funcs)))
    console.log(`${chalk.blue('[FUNCTIONS]')} => ${funcs} yüklendi.`)
});