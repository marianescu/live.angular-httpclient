import { Component, computed, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  name = input.required<string>()
  completed=input<boolean>(false)
  statusIcon=computed(()=>this.completed()? "✅" : "❌")
  // statusIcon=computed(()=>{
  //   return this.completed()? "✅" : "❌"
  //   // if(this.completed()) return "✅"
  //   // return "❌"
  // })

}
