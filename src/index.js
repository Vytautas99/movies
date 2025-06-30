import express from 'express';
import { PORT } from './env.js';

const app = express();





app.get('/', (req, res) => {
    return res.send('HOME PAGE')
});

app.get('*error', (req, res) => {
    return res.send('ERROR PAGE')
});


app.listen(PORT, (req, res) => {
    console.log(`WEB URL: http://localhost:${PORT}`);
    
});