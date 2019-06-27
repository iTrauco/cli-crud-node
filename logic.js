const mongoose = require('mongoose')  // an object document-wrapper for node
const assert = require('assert'); // Assert module is bundled w/ node
mongoose.Promise = global.Promise; // Permits use of native promises w/o throwing shady errors

// connect to a single MongoDB instance, the connection string could be that of a remote server
// we assign the connection instance to a constant to be used later in closing the connection 

// define the 'contact' schema
const constactChema = mongoose.Schema({
    firstname: {type: String, set: toLower},
    lastname: {type: String, set: toLower},
    phone: {type: String, set: toLower},
    email: {type: String, set: toLower}
});

// define model as an interface with the db
const Contact = mongoose.model('Contact', contactSchema);

/**
 * @function  [addContact] // controller function
 * @returns {String} Status
 */

const addContact = (contact) => {
    Contact.create(contact, (err) => {
        assert.equal(null, err);
        console.info('New contact added');
        db.disconnect();
    });
};


/** 
 * @function  [getContact] // controller function
 * @returns {Json} contacts
 */

 const getContact = (name) => {
     // define search criteria. the search here is case-insensitive and inexact 
     const search = new RegExp(name, 'i');
    Contact.find({$or: [{firstname: search}, {lastname: search}]})
    .exec((err, contact) => {
        assert.equal(null, err);
        console.info(contact);
        console.info(`${contact.length} matches`);
        db.disconnect();
    });
 };

 // export all methods
 module.exports = { addContact, getContact };