import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

interface ITodo{
    text:string;
    done:boolean;
}

interface ITodoServer{
    todo:string;
    completed:boolean;
}

@Injectable({providedIn:"root"})
export class TodosService{

    constructor(private http: HttpClient){}

    __todos?:Observable<ITodo[]>
    get todos(){
        if(!this.__todos){
            this.__todos=this.http.get<ITodoServer[]>("https://dummyjson.com/todos/random/10").pipe(
                map(tds=>tds.map(this.mapTodo))
            )
        }
        return this.__todos
    }

    private mapTodo(data: ITodoServer): ITodo{
        return {
            text: data.todo,
            done: data.completed
        }
    }

} 