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
    title: {
        type: String,
        require: true
    },

}, {timestamp: true}
);
//****************************************************** */
