const express = require('express');
const app = express();
const path = require('path');

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/index.html'))
// })

// app.use(express.static(path.join(__dirname)))

app.use(express.static(path.join(__dirname, '../public')));

// app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000, function() {
	console.log('app lisening on port 3000')
})


//make a jsx component that renders to index.html


//high level design 
  //put all users info into mysql
    //name
    //description
    //profile picture