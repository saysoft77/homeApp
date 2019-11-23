import { Component, OnInit } from '@angular/core';
import { GetVerseService } from '../get-verse.service';

@Component({
  selector: 'app-main-say-verse',
  templateUrl: './main-say-verse.component.html',
  styleUrls: ['./main-say-verse.component.css']
})
export class MainSayVerseComponent implements OnInit {

  theVerse = '';
  
  constructor(private getVerseService: GetVerseService) { }

  ngOnInit() {
  
  this.theVerse = this.getVerseService.theVerse;
  
  }
  
  flipCard(){
  console.log("flipCard")
  
  }

}
