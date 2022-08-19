import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-radio-biblia',
  templateUrl: './radio-biblia.component.html',
  styleUrls: ['./radio-biblia.component.css']
})
export class RadioBibliaComponent implements OnInit,AfterViewInit {

  @ViewChild('audiocheck') audio:ElementRef<HTMLAudioElement>

  volumen:number = 0.5;

  constructor() { }
  ngAfterViewInit(): void {
    //this.audio.nativeElement.play()
  }

  ngOnInit(): void {
    
  }

  playRadio(){
    this.audio.nativeElement.play()
  }

}
