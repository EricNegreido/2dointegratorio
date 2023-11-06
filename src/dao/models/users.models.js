import mongoose from 'mongoose'

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    email : String,
    age: Number,
    password: String,
    cart:{
        type: [
            {
                carts: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'carts'
                }
            }
        ],
        default: []
    },
    rol: String

});

const usersModel = mongoose.model(usersCollection, usersSchema);

export default usersModel;

