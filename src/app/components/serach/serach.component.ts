import { 
  Component, 
  EventEmitter, 
  Input, 
  OnInit, 
  Output 
} from '@angular/core';


@Component({
  selector: 'serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit(): void { }

  onType(value: string) {
    if(value != ''){
      this.newItemEvent.emit(value);
    }
  }
}
