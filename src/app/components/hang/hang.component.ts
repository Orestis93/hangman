import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hang',
  templateUrl: './hang.component.html',
  styleUrls: ['./hang.component.css']
})
export class HangComponent implements OnInit {

  @Input() tries:string;
  constructor() { }

  ngOnInit() {
  }

}
