const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3,
        maxlength: 15
    },
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 15   
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 40
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        maxlength: 15
    },
    address:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 15
    },
    contactNo:{
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 10,
        maxlength: 10
    },
},{
    timestamps: true
});

// hashing
userSchema.pre('save', async function(next){
    console.log("asdsa");
    if(this.isModified('password')){
        this.password = bcrypt.hash(this.password, 12);
    }
    next();
})


const user = mongoose.model('user',userSchema);
module.exports = user;
