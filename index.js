    const express = require('express');
    const app = express();
    const cors = require('cors');
    require('dotenv').config()
    const port = process.env.PORT || 3000;



    // middleware
    app.use(cors());
    app.use(express.json());



    // main route 
    app.get('/', (req, res) =>{
        res.send('kita khaybar ayso tumi? boho khawon pathaytesi😁')
    })



    app.listen(port, () =>{
        console.log(`Bistro Boss is runing on ${port}` );
    })