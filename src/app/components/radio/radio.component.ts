import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements AfterViewInit {
  @ViewChild('audioref') audioref:ElementRef<HTMLAudioElement>
  constructor() { }
  ngAfterViewInit(): void {
    this.playRadio();
  }

  playRadio(){
    this.audioref.nativeElement.play();
    //this.btnRadio = false
  }
}
