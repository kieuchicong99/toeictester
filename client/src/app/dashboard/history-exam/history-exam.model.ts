
export class Exam {
  public id: string;
  public type_exam: string;
  public name_exam: string;
  public time: number;
  public time_real: number;
  public point: number;
  rank: number;
  date: Date
}


export class ExamHistoryList{
  public total_exam: number;
  type_exam: string;
  public exams: Exam[];

}
