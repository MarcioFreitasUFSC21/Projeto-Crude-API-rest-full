'use strict'
//************************************************* */
// import the mongoose data bank 
//************************************************** */
const mongoose = require('mongoose');
//************************************************** */
//  the async main fucntion to auxiliary of connection data bank
//********************************************************** */
async function main () {
    try {
        await mongoose.connection("mongodb+srv://marciofreitasufsc21:<OpxHz0P8YoLDFk7R>@cluster0.ryj7r1i.mongodb.net/?retryWrites=true&w=majority");
    } catch (error) {
        console.log ('Error: ${error}');
    }
}
//***************************************************************** */
//            module to export the main function
//****************************************************************** */
module.exports = main;
