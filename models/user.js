import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type:String,
        required:true
       
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    businessname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    imageurl:{
        type:Object,
        
    }
})

const user = mongoose.model('user',userSchema);

export default user;
