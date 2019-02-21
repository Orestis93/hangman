import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { WordService } from '../services/word.service';
import { tap, mapTo } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable()
export class WordGuard implements CanActivate {
    constructor(private wordService: WordService) { }
    canActivate(): Observable<boolean> {
        return this.wordService.getAllWords().pipe(
            tap(() => {
                this.wordService.setGameWords(5);
            }
            ),
            mapTo(true))
    }
}