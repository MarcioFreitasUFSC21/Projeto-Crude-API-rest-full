'use strict'
//***************************************************************** */
//  The data requirements for  API 
//***************************************************************** */
const express = require('express');
const http = require('http');
const cors = require('cors');
const conn = require('./db/conn.js');

conn ();
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
//****************************************************************/
//               testing data bank access
//****************************************************************


///OpxHz0P8YoLDFk7R password to mongoDB
//mongodb+srv://marciofreitasufsc21:<password>@cluster0.ryj7r1i.mongodb.net/?retryWrites=true&w=majority