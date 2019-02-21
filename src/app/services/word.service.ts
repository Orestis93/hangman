import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class WordService {
  mainurl = "http://localhost:4200/assets/answers.json";
  private allWords: string[] = [];
  private gameWords: string[] = [];
  constructor(private http: HttpClient) { }

  public sliceWord(word: string) {
    return word.split('').map(letter => {
        return { name: letter, chosen: false };
    });
}

  setGameWords(noOfWords: number): string[] {
    this.resetGameArray();
    let i = 0;
    while (i < noOfWords) {
      let randomWord = this.getRandomWord();
      if (!this.gameWords.includes(randomWord)) {
        this.gameWords.push(randomWord)
        i++
      }
    }
    return this.getGameWords();
  }
  getGameWords(): string[] {
    return this.gameWords;
  }

  getAllWords() {
    return this.http.get(this.mainurl).pipe(
      map(
        (words: string[]) => this.allWords = words,
      ),
      catchError(error => {
        throw error;
      })

    );
  }


  getRandomWord(): string {
    return this.randomWord();
  }
  
  randomWord(): string {
    if (this.allWords.length) {
      const pos: number = this.getRandomInt(this.allWords.length - 1);
      return this.allWords[pos];
    }
  }
  
  getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }


  resetGameArray(): void {
    this.gameWords = [];
  }
}
