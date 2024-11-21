export interface Question {
    _id: string;
    title: string;
    choices: { text: string; isCorrect: boolean }[];
  }
  