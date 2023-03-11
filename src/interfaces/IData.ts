import { Document, Schema } from "mongoose";

export interface IUser extends Document {
    _id: Schema.Types.ObjectId;
    email: string;
    username: string;
    password: string;
}

export interface IPage extends Document {
    _id: Schema.Types.ObjectId;
    root_id: string;
    created_time: Date;
    last_edited_time: Date;
    title: string;
    url: string;
    number_of_usages: number;
    sentences: Array<ISentence>;
}

export interface ISentence extends Document {
    _id: Schema.Types.ObjectId;
    root_id: string;
    page: Schema.Types.ObjectId | IPage;
    plain_text: string;
    created_time: Date;
    last_edited_time: Date;
    number_of_usages: number;
    number_of_wrongs: number;
    list_question_core: Schema.Types.ObjectId | IQuestionCore;
}

export enum QuestionType {
    CORE_DUPLEX = "DUPLEX",
    CORE_FILL = "FILL",
}

export interface IQuestionCore extends Document {
    _id: Schema.Types.ObjectId;
    sentence: Schema.Types.ObjectId | ISentence;
    dificulty: number;
    number_of_usages: number;
    number_of_wrong: number;
    last_edited_time: number;
    created_time: Date;
    type: QuestionType;
}

export enum Language {
    ENGLISH = "ENGLISH",
    VIETNAMESE = "VIETNAMESE",
}

export interface IWords {
    text: string;
    language: Language;
}

export interface IDuplexQuestionCore extends IQuestionCore {
    first: IWords;
    second: IWords;
    type: QuestionType.CORE_DUPLEX;
}

export interface IFillWordQuestionCore extends IQuestionCore {
    list_words: Array<IWords>;
    fill_field_indexes: Array<Number>;
    language: Language;
    type: QuestionType.CORE_FILL;
}

interface IPracticeTest {}

interface IPracticeQuestion {}

interface IMultichoiceQuestion extends IPracticeQuestion {}

interface ITranslateQuestion extends IPracticeQuestion {}