import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Interest = new Schema({
    type: {
        type: String
    },
    image: {
        type: String 
    },
    title: {
        type: String
    }
});

export default mongoose.model('Interest', Interest);
