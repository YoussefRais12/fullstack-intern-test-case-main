const mongoose = require("mongoose");

const CourseModel = require("./models/course-model");
const QuestionModel = require("./models/question-model");

// Totally random data generated from ChatGPT for seeding purpose

const courses = [
  {
    _id: "67373aebd5512d2581f30ae9",
    code: "LIJEAP",
    title: "Mathematics",
    description: "This course covers basic concepts of mathematics.",
    questions: [
      {
        title: "What is 2 + 2?",
        choices: [
          { text: "3", isCorrect: false },
          { text: "4", isCorrect: true },
          { text: "5", isCorrect: false },
          { text: "6", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78a41",
      },
      {
        title: "What is the square root of 16?",
        choices: [
          { text: "2", isCorrect: false },
          { text: "4", isCorrect: true },
          { text: "8", isCorrect: false },
          { text: "16", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78a42",
      },
      {
        title: "What is the value of Pi (π) approximately?",
        choices: [
          { text: "3.14", isCorrect: true },
          { text: "3.00", isCorrect: false },
          { text: "2.71", isCorrect: false },
          { text: "1.62", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78a43",
      },
      {
        title: "What is 7 * 6?",
        choices: [
          { text: "42", isCorrect: true },
          { text: "36", isCorrect: false },
          { text: "48", isCorrect: false },
          { text: "40", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78a44",
      },
      {
        title: "What is the formula for the area of a circle?",
        choices: [
          { text: "πr^2", isCorrect: true },
          { text: "2πr", isCorrect: false },
          { text: "r^2", isCorrect: false },
          { text: "πd", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78a45",
      },
      {
        title: "What is 100 divided by 4?",
        choices: [
          { text: "25", isCorrect: true },
          { text: "20", isCorrect: false },
          { text: "30", isCorrect: false },
          { text: "40", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78a46",
      },
      {
        title: "What is the result of 9^2?",
        choices: [
          { text: "81", isCorrect: true },
          { text: "72", isCorrect: false },
          { text: "91", isCorrect: false },
          { text: "99", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78a47",
      },
      {
        title: "What is the derivative of x^2?",
        choices: [
          { text: "2x", isCorrect: true },
          { text: "x", isCorrect: false },
          { text: "x^2", isCorrect: false },
          { text: "0", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78a48",
      },
      {
        title: "What is the value of 2^3?",
        choices: [
          { text: "8", isCorrect: true },
          { text: "6", isCorrect: false },
          { text: "9", isCorrect: false },
          { text: "10", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78a49",
      },
      {
        title: "What is the sum of angles in a triangle?",
        choices: [
          { text: "180 degrees", isCorrect: true },
          { text: "360 degrees", isCorrect: false },
          { text: "90 degrees", isCorrect: false },
          { text: "270 degrees", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78a50",
      },
    ],
  },
  {
    _id: "67373b4235aac63cc9f552f6",
    code: "ZUWJPA",
    title: "Biology",
    description: "This course covers basic concepts of biology.",
    questions: [
      {
        title: "What is the powerhouse of the cell?",
        choices: [
          { text: "Mitochondria", isCorrect: true },
          { text: "Nucleus", isCorrect: false },
          { text: "Ribosome", isCorrect: false },
          { text: "Chloroplast", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78b01",
      },
      {
        title: "What is the basic unit of life?",
        choices: [
          { text: "Cell", isCorrect: true },
          { text: "Atom", isCorrect: false },
          { text: "Tissue", isCorrect: false },
          { text: "Organ", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78b02",
      },
      {
        title: "What is the process by which plants make food?",
        choices: [
          { text: "Photosynthesis", isCorrect: true },
          { text: "Respiration", isCorrect: false },
          { text: "Fermentation", isCorrect: false },
          { text: "Glycolysis", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78b03",
      },
      {
        title: "What part of the cell contains genetic material?",
        choices: [
          { text: "Nucleus", isCorrect: true },
          { text: "Mitochondria", isCorrect: false },
          { text: "Cell wall", isCorrect: false },
          { text: "Cytoplasm", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78b04",
      },
      {
        title: "What is the process by which cells divide?",
        choices: [
          { text: "Mitosis", isCorrect: true },
          { text: "Meiosis", isCorrect: false },
          { text: "Binary fission", isCorrect: false },
          { text: "Cytokinesis", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78b05",
      },
      {
        title: "Which organ is responsible for pumping blood?",
        choices: [
          { text: "Heart", isCorrect: true },
          { text: "Lung", isCorrect: false },
          { text: "Brain", isCorrect: false },
          { text: "Liver", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78b06",
      },
      {
        title: "What is the term for animals that eat plants?",
        choices: [
          { text: "Herbivores", isCorrect: true },
          { text: "Carnivores", isCorrect: false },
          { text: "Omnivores", isCorrect: false },
          { text: "Detritivores", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78b07",
      },
      {
        title: "Which organ system controls the body using electrical signals?",
        choices: [
          { text: "Nervous system", isCorrect: true },
          { text: "Circulatory system", isCorrect: false },
          { text: "Respiratory system", isCorrect: false },
          { text: "Digestive system", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78b08",
      },
      {
        title: "What is the main pigment in plants that absorbs sunlight?",
        choices: [
          { text: "Chlorophyll", isCorrect: true },
          { text: "Carotenoids", isCorrect: false },
          { text: "Xanthophyll", isCorrect: false },
          { text: "Anthocyanin", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78b09",
      },
      {
        title: "What is the largest organ in the human body?",
        choices: [
          { text: "Skin", isCorrect: true },
          { text: "Liver", isCorrect: false },
          { text: "Brain", isCorrect: false },
          { text: "Heart", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78b10",
      },
    ],
  },
  {
    _id: "67373b60a6d54ca78ae57789",
    code: "SUWIGJ",
    title: "Geography",
    description: "This course covers geographical concepts and features.",
    questions: [
      {
        title: "What is the largest continent by area?",
        choices: [
          { text: "Asia", isCorrect: true },
          { text: "Africa", isCorrect: false },
          { text: "Europe", isCorrect: false },
          { text: "North America", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78c01",
      },
      {
        title: "What is the longest river in the world?",
        choices: [
          { text: "Nile", isCorrect: true },
          { text: "Amazon", isCorrect: false },
          { text: "Yangtze", isCorrect: false },
          { text: "Mississippi", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78c02",
      },
      {
        title: "Which country has the largest population?",
        choices: [
          { text: "China", isCorrect: true },
          { text: "India", isCorrect: false },
          { text: "USA", isCorrect: false },
          { text: "Russia", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78c03",
      },
      {
        title: "What is the capital of France?",
        choices: [
          { text: "Paris", isCorrect: true },
          { text: "London", isCorrect: false },
          { text: "Berlin", isCorrect: false },
          { text: "Madrid", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78c04",
      },
      {
        title: "Which ocean is the largest?",
        choices: [
          { text: "Pacific Ocean", isCorrect: true },
          { text: "Atlantic Ocean", isCorrect: false },
          { text: "Indian Ocean", isCorrect: false },
          { text: "Southern Ocean", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78c05",
      },
      {
        title: "What is the tallest mountain in the world?",
        choices: [
          { text: "Mount Everest", isCorrect: true },
          { text: "K2", isCorrect: false },
          { text: "Kangchenjunga", isCorrect: false },
          { text: "Lhotse", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78c06",
      },
      {
        title: "Which desert is the largest in the world?",
        choices: [
          { text: "Sahara Desert", isCorrect: true },
          { text: "Arabian Desert", isCorrect: false },
          { text: "Gobi Desert", isCorrect: false },
          { text: "Kalahari Desert", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78c07",
      },
      {
        title: "Which country is known as the Land of the Rising Sun?",
        choices: [
          { text: "Japan", isCorrect: true },
          { text: "China", isCorrect: false },
          { text: "South Korea", isCorrect: false },
          { text: "Thailand", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78c08",
      },
      {
        title: "What is the smallest country in the world by area?",
        choices: [
          { text: "Vatican City", isCorrect: true },
          { text: "Monaco", isCorrect: false },
          { text: "San Marino", isCorrect: false },
          { text: "Liechtenstein", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78c09",
      },
      {
        title: "Which of the following countries is located on two continents?",
        choices: [
          { text: "Turkey", isCorrect: true },
          { text: "Egypt", isCorrect: false },
          { text: "Russia", isCorrect: false },
          { text: "Spain", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78c10",
      },
    ],
  },
  {
    _id: "64b2f26fa2dce00ffec78e11",
    code: "AOJKWO",
    title: "History",
    description: "This course covers historical events and figures.",
    questions: [
      {
        title: "Who was the first President of the United States?",
        choices: [
          { text: "George Washington", isCorrect: true },
          { text: "Thomas Jefferson", isCorrect: false },
          { text: "John Adams", isCorrect: false },
          { text: "Abraham Lincoln", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78d01",
      },
      {
        title: "In which year did World War II end?",
        choices: [
          { text: "1945", isCorrect: true },
          { text: "1939", isCorrect: false },
          { text: "1918", isCorrect: false },
          { text: "1950", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78d02",
      },
      {
        title: "Who was the leader of the Soviet Union during World War II?",
        choices: [
          { text: "Joseph Stalin", isCorrect: true },
          { text: "Vladimir Lenin", isCorrect: false },
          { text: "Mikhail Gorbachev", isCorrect: false },
          { text: "Nikita Khrushchev", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78d03",
      },
      {
        title: "What ancient civilization built the pyramids?",
        choices: [
          { text: "Egyptians", isCorrect: true },
          { text: "Romans", isCorrect: false },
          { text: "Greeks", isCorrect: false },
          { text: "Persians", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78d04",
      },
      {
        title: "Who discovered America?",
        choices: [
          { text: "Christopher Columbus", isCorrect: true },
          { text: "Leif Erikson", isCorrect: false },
          { text: "Ferdinand Magellan", isCorrect: false },
          { text: "Amerigo Vespucci", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78d05",
      },
      {
        title: "Which empire was ruled by Julius Caesar?",
        choices: [
          { text: "Roman Empire", isCorrect: true },
          { text: "Byzantine Empire", isCorrect: false },
          { text: "Ottoman Empire", isCorrect: false },
          { text: "Persian Empire", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78d06",
      },
      {
        title: "In which year did the French Revolution begin?",
        choices: [
          { text: "1789", isCorrect: true },
          { text: "1776", isCorrect: false },
          { text: "1804", isCorrect: false },
          { text: "1815", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78d07",
      },
      {
        title: "What was the capital of the Byzantine Empire?",
        choices: [
          { text: "Constantinople", isCorrect: true },
          { text: "Rome", isCorrect: false },
          { text: "Athens", isCorrect: false },
          { text: "Alexandria", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78d08",
      },
      {
        title: "Who was the first emperor of China?",
        choices: [
          { text: "Qin Shi Huang", isCorrect: true },
          { text: "Kublai Khan", isCorrect: false },
          { text: "Emperor Wu", isCorrect: false },
          { text: "Sun Tzu", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78d09",
      },
      {
        title: "What was the main cause of the American Civil War?",
        choices: [
          { text: "Slavery", isCorrect: true },
          { text: "Taxation", isCorrect: false },
          { text: "Territorial expansion", isCorrect: false },
          { text: "Foreign relations", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78d10",
      },
    ],
  },
  {
    _id: "67373b864f1d5ecfef8af096",
    code: "QOPKXI",
    title: "French",
    description: "This course introduces basic French language concepts.",
    questions: [
      {
        title: "How do you say 'Hello' in French?",
        choices: [
          { text: "Bonjour", isCorrect: true },
          { text: "Hola", isCorrect: false },
          { text: "Ciao", isCorrect: false },
          { text: "Hallo", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78e01",
      },
      {
        title: "How do you say 'Thank you' in French?",
        choices: [
          { text: "Merci", isCorrect: true },
          { text: "Gracias", isCorrect: false },
          { text: "Danke", isCorrect: false },
          { text: "Grazie", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78e02",
      },
      {
        title: "How do you say 'Goodbye' in French?",
        choices: [
          { text: "Au revoir", isCorrect: true },
          { text: "Adios", isCorrect: false },
          { text: "Ciao", isCorrect: false },
          { text: "Tschüss", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78e03",
      },
      {
        title: "What is the French word for 'yes'?",
        choices: [
          { text: "Oui", isCorrect: true },
          { text: "Si", isCorrect: false },
          { text: "Ja", isCorrect: false },
          { text: "Sim", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78e04",
      },
      {
        title: "How do you say 'Please' in French?",
        choices: [
          { text: "S'il vous plaît", isCorrect: true },
          { text: "Por favor", isCorrect: false },
          { text: "Per favore", isCorrect: false },
          { text: "Bitte", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78e05",
      },
      {
        title: "What is the French word for 'apple'?",
        choices: [
          { text: "Pomme", isCorrect: true },
          { text: "Manzana", isCorrect: false },
          { text: "Apfel", isCorrect: false },
          { text: "Mela", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78e06",
      },
      {
        title: "What is the French word for 'water'?",
        choices: [
          { text: "Eau", isCorrect: true },
          { text: "Agua", isCorrect: false },
          { text: "Wasser", isCorrect: false },
          { text: "Acqua", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78e07",
      },
      {
        title: "How do you say 'I love you' in French?",
        choices: [
          { text: "Je t'aime", isCorrect: true },
          { text: "Te amo", isCorrect: false },
          { text: "Ti amo", isCorrect: false },
          { text: "Ich liebe dich", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78e08",
      },
      {
        title: "What is the French word for 'book'?",
        choices: [
          { text: "Livre", isCorrect: true },
          { text: "Libro", isCorrect: false },
          { text: "Buch", isCorrect: false },
          { text: "Livro", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78e09",
      },
      {
        title: "How do you say 'Excuse me' in French?",
        choices: [
          { text: "Excusez-moi", isCorrect: true },
          { text: "Perdón", isCorrect: false },
          { text: "Entschuldigung", isCorrect: false },
          { text: "Per favore", isCorrect: false },
        ],
        _id: "64b2f26fa2dce00ffec78e10",
      },
    ],
  },
];

const seed = async () => {
  for (const course of courses) {
    await CourseModel.updateOne(
      { _id: course._id },
      { ...course },
      { upsert: true }
    );

    for (const question of course.questions) {
      await QuestionModel.updateOne(
        { _id: question._id },
        { ...question, course: course._id },
        {
          upsert: true,
        }
      );
    }
  }
};

(async () => {
  try {
    console.log("Connection to MongoDB...");
    const db = await mongoose.connect(
      "mongodb://admin:password@127.0.0.1:27042/course-catalog",
      {
        authSource: "admin",
      }
    );
    console.log("Connection successful!");

    console.log("Seeding ...");

    await seed();

    console.log("Seed done!");

    await db.disconnect();

    console.log("Disconnected from MongoDB!");
  } catch (err) {
    console.log(err);
  }
})();
