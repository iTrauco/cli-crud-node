const mongoose = require('mongoose')  // an object document-wrapper for node
const assert = require('assert'); // Assert module is bundled w/ node
mongoose.Promise = global.Promise; // Permits use of native promises w/o throwing shady errors

// connect to a single MongoDB instance, the connection string could be that of a remote server
// we assign the connection instance to a constant to be used later in closing the connection 

// define the 'contact' schema
// 'toLower' function supports db friendly 'case-insensitive inexact matches'
const contactSchema = mongoose.Schema({
    firstname: { type: String, set: LowerCase },
    lastname: { type: String, set: LowerCase },
    phone: { type: String, set: LowerCase },
    email: { type: String, set: LowerCase }
  });

// define model as an interface with the db
const Contact = mongoose.model('Contact', contactSchema);

/**
 * @function  [addContact]
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