import {Component} from '@angular/core';
import {DataService} from './data.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `<p [@myAwsomeAnimation] ='state' (click)="animateMe()"> {{name}}</p>`,
  styles: [`
    p { 
      width:200px;
      background:lightgray;
      margin: 100px auto;
      text-align:center;
      padding:20px;
      front-size :1.5em;
  }
 `],
  animations: [
    trigger('myAwsomeAnimation',
      [
        state('small', style({
          transform: 'scale(1)',
        })),
        state('large', style({
          transform: 'scale(1.5)',
        })),
        transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)', offset:.5}),
          style({opacity: 1, transform: 'translateY(-75%)', offset: 1})
        ]))),
      ]),
  ]
})
export class AppComponent {

  state: string = 'small';
  name: string = 'animate me !!';
  constructor(private dataService: DataService) {

  }
  animateMe() {
    this.state = (this.state == 'small' ? 'large' : 'small');
  }
}
