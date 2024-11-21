const mongoose = require("mongoose");

const questionSchema = require("./question-schema");

const Schema = mongoose.Schema;

//Would be better in a utils file
const generateCode = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from({
        length: 6
    }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
};

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    questions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Question",
        default: []
    },
    description: {
        type: String,
        maxlength: 256,
        default: ""
    },
    code: {
        type: String,
        unique: true,
        index: true,
        required: true,
        default: generateCode
    }
}, {timestamps: true});

courseSchema.pre("save", async function (next) {
    if (!this.isNew) 
        return next(); // Only generate a code for new documents
    
    while (true) {
        const existingCourse = await mongoose
            .model("Course")
            .findOne({code: this.code});
        if (!existingCourse) 
            break; // Unique code found
        this.code = generateCode(); // Regenerate code if conflict
    }
    next();
});

module.exports = courseSchema;
