import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  dialogOpen = false;

  constructor() {}

  ngOnInit() {
  }
 
  @Input()  secretWordObject;
  @Input() modalText: string;
  @Output() myEvent = new EventEmitter();


  newGame(){
   this.myEvent.emit(null)
 }
  
   Modal(modalText) {
      if (!this.dialogOpen) {
          let dialog: any = document.getElementById('alertModal');
          this.dialogOpen = true;
          this.modalText = modalText;
          dialog.showModal();
      }
   }
  
  
  closeModal() {
      if (this.dialogOpen) {
        let dialog: any = document.getElementById('alertModal');
        this.dialogOpen = false;
        dialog.close();
      }
    }
}
