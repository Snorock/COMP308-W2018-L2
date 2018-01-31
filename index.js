let express = require('express');
let app = express();

//Routing section
app.get('/', (req,res) => res.send('Hello World!!'));
app.get('/home', (req,res) => res.send('Wellcom home'));

let server = app.listen(3000, () => console.log('Example listening on port 3000'));