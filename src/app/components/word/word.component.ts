import { Component, OnInit, OnChanges} from '@angular/core';
import { WordService } from 'src/app/services/word.service';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  setOfWords:object;
  secretWordObject;
  secretWordObjectLength: number;
  tries: number;
  correctlyGuessedLetters: any[] = null;
  missedLetters: string ;
  modalText:string;
  dialog: any;
  rounds: number;
  letters;
  correctguesses:number;

  constructor(private wordService: WordService,private dialogcomponent: DialogComponent, ) { }


  receiveMessage($event) {
    this.newGame = $event
    }

   ngOnInit() {
    console.log((this.wordService.getGameWords()));
    this.newGame();
  }
  
  newGame() {
    this.letters = this.wordService.sliceWord('abcdefghijklmnopqrstuvwxyz');
    this.setOfWords=this.wordService.getGameWords();
    this.tries = 6;
    this.rounds = 1;
    this.modalText="";
    this.correctguesses=0;
    this.secretWordObject=this.setOfWords[0].split('');
    this.secretWordObjectLength = this.secretWordObject.length;
    this.correctlyGuessedLetters = [];
    this.missedLetters = "";
    this.dialogcomponent.closeModal();
  }
  nextRound(){
    this.CheckIfWonTheGame()
    this.tries=6;
    this.secretWordObject=this.setOfWords[this.rounds-1].split('');
    this.secretWordObjectLength = this.secretWordObject.length;
    this.correctlyGuessedLetters = [];
    this.missedLetters = "";
    this.CheckIfWonTheGame();
    this.resetKeyboard(); 
  }

  checkGuessedLetter(userinput) {
    userinput.chosen = true;
    for (var i = 0; i <= this.secretWordObject.length; i++) {
      if (userinput.name == this.secretWordObject[i]) {
        this.correctlyGuessedLetters.push(userinput.name);
        console.log(this.correctlyGuessedLetters);
      }
    }
    if (this.secretWordObject.indexOf(userinput.name) == -1) {
      this.tries--;
      this.missedLetters += userinput.name;
      this.checkIfLost();
    }
    this.checkIfWon();
  }

  resetKeyboard(){
     this.letters.forEach((letter) => {
        letter.chosen = false;
      });  
  }


  isSecretWord(secret: string, array: any[]) {
    return array.indexOf(secret) > -1;
  }

  GuessedCorrect(secret: string) {
    return this.isSecretWord(secret, this.correctlyGuessedLetters);
  }

  checkIfLost() {
    if (this.tries == 0) {
      this.modalText="You Lost :( "
      this.dialogcomponent.Modal('You Won');
      
    }

  }
  checkIfWon() {
    if (this.secretWordObjectLength == this.correctlyGuessedLetters.length) {
      this.rounds++;
      this.correctguesses++;
      this.nextRound();
    }
    this.CheckIfWonTheGame()

  }

  CheckIfWonTheGame(){
    if(this.correctguesses == 5){
      this.modalText="Congrats! You Won"
      this.dialogcomponent.Modal('You Won');
    }
   
  };

}
