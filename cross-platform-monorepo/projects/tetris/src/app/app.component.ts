import { Component } from '@angular/core';
import { GameEngineLibService } from 'projects/game-engine-lib/src/lib/game-engine-lib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tetris';
  constructor(private engineService: GameEngineLibService) {
    console.info(engineService);
  }
}
