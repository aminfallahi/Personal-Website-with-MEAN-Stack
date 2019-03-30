import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Msg = new Schema({
    subject: {
        type: String
    },
    email: {
        type: String 
    },
    body: {
        type: String
    }
});

export default mongoose.model('Msg', Msg);
