const express = require("express");
const app = express();
const morgan = require('morgan');
const path = require("path");
const port = process.env.PORT || 3000;
const teams = require('./football_data');

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) =>{
    const teamList = teams.list();
    const html = `<!DOCTYPE html>
        <html>
        <head>
            <title> National Football League </title>
            <link rel="stylesheet" href="/style.css"/>
        </head>
        <body>
            <div class='team-list'>
            <header><img src="/nfl_image.png"/>National Football League</header>
            ${teamList.map(team => {
            return `<a href = "/teams/${team.id}"span class="team">${team.name} </span>
                    <div></div>`}).join('')}
    
        </body>
        </hml>
    `
    res.send(html)
})

app.get('/teams/:id', (req,res) =>{
    const id = req.params.id
    const teamName = teams.find(id)

    const html = `<!DOCTYPE html>
    <html>
    <head>
        <title>${teamName.name} </title>
        <link rel="stylesheet" href="/style.css"/>
    </head>
    <body>
    <header><img src="/id_${teamName.id}_image.jpg"/>${teamName.name}</header>
        <p> ${teamName.name} --> ${teamName.division} </p>  
        <p> 2021 - 2022 Season W/L Record : ${teamName.record} </p>
    </body>
    `
    res.send(html)
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
