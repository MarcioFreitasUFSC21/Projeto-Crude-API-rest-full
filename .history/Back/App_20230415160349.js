'use strict'
//***************************************************************** */
//  The data requirements for  API fucnionament
//***************************************************************** */
const express = require('express');
const http = require('http');
const cors = require('cors');
//******************************************************************** */
const app = express();
//********************************************************************* */
//                 the app uses
//********************************************************************* */
app.use(cors());
app.use(express.json());
app.listen(5000, function () {
    console.log("Server online!");
})

///OpxHz0P8YoLDFk7R password