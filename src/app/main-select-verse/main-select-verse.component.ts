import { Component, OnInit } from '@angular/core';
import { GetVerseService } from '../get-verse.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-main-select-verse',
  templateUrl: './main-select-verse.component.html',
  styleUrls: ['./main-select-verse.component.css']
})
export class MainSelectVerseComponent implements OnInit {

  books = [];
  chapters = [];
  verses = [];
  theVerse = '';
  private selectedTab = 0;
  

  constructor(private getVerseService: GetVerseService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() { 
  this.books = this.getVerseService.getBooks();
  }
  
  
  selectChapters(aBook) {
  
  this.chapters = this.getVerseService.getChapters(aBook);
  this.selectedTab = 1;
  
  }
  
  selectVerse(chapter) {
  
  
		this.verses = this.getVerseService.getVerses(chapter);
		this.selectedTab = 2;
  
  }
  
  showVerse(aVerse){
  
  this.theVerse = this.getVerseService.showVerse(aVerse);
  this.router.navigate(['/sayVerse']);
  
  }
  
  

}
