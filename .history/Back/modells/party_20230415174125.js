//************************************************** */
// data required
//**************************************************/*css*/
                'use strict';
const mongoose = require('mongoose');
//***************************************** ***************/
// the skelector of API rest full
//******************************************************** */
const {Schema} = mongoose;
const {serviceSchema} = require('..\service');

//********************************************************* */
// models creation
//********************************************************** */
const partsSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    budget: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    services: {
        type: {String},
    
    },
}, {timestamp: true}
);
//****************************************************** */
