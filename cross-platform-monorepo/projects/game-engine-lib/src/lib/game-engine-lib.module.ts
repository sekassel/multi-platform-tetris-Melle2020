import { NgModule } from '@angular/core';
import { Piece } from './game-engine-lib.component';
import { BoardComponent } from './components/board/board.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    // Piece,
    BoardComponent
  ],
  imports: [CommonModule
  ],
  exports: [
    BoardComponent
  ]
})
export class GameEngineLibModule { }
