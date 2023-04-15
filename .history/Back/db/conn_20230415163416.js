'use strict'
//************************************************* */
// import the mongoose data bank 
//************************************************** */
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
//************************************************** */
//  the async main fucntion to auxiliary of connection data bank
//********************************************************** */

async function main () {
    try {
        await mongoose.connection("mongodb+srv://marciofreitasufsc21:<OpxHz0P8YoLDFk7R>@cluster0.ryj7r1i.mongodb.net/?retryWrites=true&w=majority");
        mongoose.connect
    } catch (error) {
        console.log ('Error: ${error}');
    }
}

//***************************************************************** */
//            module to export the main function
//****************************************************************** */
module.exports = main;
///OpxHz0P8YoLDFk7R password to mongoDB
//mongodb+srv://marciofreitasufsc21:<password>@cluster0.ryj7r1i.mongodb.net/?retryWrites=true&w=majority