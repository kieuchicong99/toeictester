export class ChoiceAnswer{
    public opt:string;
    public content:string;
    public formtype:string;
}
export class Question{
    public question:string;
    public question_id: string;
    public choiceAnswer : ChoiceAnswer[];
};
export class ExamContentModel{
    public id:string;
    public time:number;
    public name: string;
    public questions: Question[];
};