import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
});

const UserModel = mongoose.model('User', UserSchema,"Users"); 
// name of model , schema , collection name
export default UserModel;
