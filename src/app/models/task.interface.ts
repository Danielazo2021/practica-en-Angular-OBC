export enum LEVELS{
    "INFO",
    "URGENTE",
    "BLOCKING"
}


export interface ITask{
    title: string;
    desciption: string;
    completed: boolean;
    level: LEVELS
}