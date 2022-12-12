const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
// app.use(express.json());


// const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.ykgjeea.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// async function run(){
// try{

// }
// finally{
//     const projectCollection = client.db('portfolio').collection('project');

//     app.get('/projects', async (req, res) => {
//         const query = {}
//         const cursor = projectCollection.find(query);
//         const projects = await cursor.toArray();
//         res.send(projects);
//     })
//     app.get('/projects/:name', async (req, res) => {
//         const name = req.params.name
//         const query = { name }
//         const cursor = projectCollection.findOne(query);
//         const projects = await cursor.toArray();
//         res.send(projects);
//     })
// }
// }
// run().catch(err => console.error(err));

const projects = require('./project.json')

app.get('/projects', (req, res) => {
    res.send(projects);
});
app.get('/projects/:id', (req, res) => {
    const id= req.params.id;
    const selectedProject = projects.find(n => n.id === id);
    res.send(selectedProject);
});
app.get('/', (req, res) => {
    res.send('Dental service training server running')
})

app.listen(port, () => {
    console.log(`Dental service server running on: ${port}`)
})