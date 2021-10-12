import express from 'express'
import ReactDOM  from 'react-dom/server';
import  { Header } from '../shared/Header.jsx'
import { indexTemplate } from './indexTexplate.js';

const app = express();

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res)=>{
    res.send(
        indexTemplate( ReactDOM.renderToString(Header())),
        
    )
})

app.listen(3000, ()=> {
    console.log('start on http://localhost:3000')
})