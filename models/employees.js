const mongoose = require('mongoose');
const Schema = mongoose.Schema
//names, roles,level, age. this is just using the schema to provide a structure for our database
// “blueprint” of a database which describes how the data may relate to other tables or other data models
//timestamps - createdAt - updatedAt -
const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    
}, {timestamps: true}
);

module.exports = mongoose.model("Employee", employeeSchema);
//module.exports = Employee;


