import { Injectable } from '@angular/core';
import bible from '../assets/kjv.json';


@Injectable({
  providedIn: 'root'
})
export class GetVerseService {
 
  bookArray = [];
  chArray = [];
  versesArray = [];
  bookNum = 0 ;
  chapterNum = 0;
  verseNum = 0;
  theVerse = "";

  constructor() { }
  
  getBooks(): Array<any> {
  
  for(var i in this.books)
  this.bookArray.push(this.books[i]);
  
  return this.bookArray
  
  }
  
  getChapters(bNum): Array<any>{
    console.log("getChapters() bnum= "+bNum)
    
    let allChapters: Array<number> =[];
    
    for(let item of bible){
    {if(item.b == bNum){allChapters.push(item.c)}};
			}
    const uniqueCh = new Set(allChapters);
    this.chArray = [...uniqueCh];
    console.log(this.chArray)
    this.bookNum = bNum;
    return this.chArray;
   
  }
  
getVerses(chNum): Array<any> {
 console.log("getVerses() chNum= "+chNum)
    
    let allVerses: Array<number> =[];
    
    for(let item of bible){
 
    {if(item.b == this.bookNum){
			    if(item.c == chNum){
					allVerses.push(item.v)}}};
			}
    const uniqueVerses = new Set(allVerses);
    this.versesArray= [...uniqueVerses];
    console.log(this.versesArray)
    this.chapterNum = chNum;
    return this.versesArray;
}

showVerse(vNum): string {
     console.log("showVerse()")
     
    for(let item of bible){
    {if(item.b == this.bookNum){
			    if(item.c == this.chapterNum){
			        if(item.v == vNum){
					this.theVerse = item.t;
					}}}};
			}
    
    console.log(this.theVerse)
    this.verseNum = vNum;
    return this.theVerse;
}

books = [{"bNum":1,"bName":"Genesis"},{"bNum":2,"bName":"Exodus"},{"bNum":3,"bName":"Leviticus"},{"bNum":4,"bName":"Numbers"},{"bNum":5,"bName":"Deuteronomy"},{"bNum":6,"bName":"Joshua"},{"bNum":7,"bName":"Judges"},{"bNum":8,"bName":"Ruth"},{"bNum":9,"bName":"1 Samuel"},{"bNum":10,"bName":"2 Samuel"},{"bNum":11,"bName":"1 Kings"},{"bNum":12,"bName":"2 Kings"},{"bNum":13,"bName":"1 Chronicles"},{"bNum":14,"bName":"2 Chronicles"},{"bNum":15,"bName":"Ezra"},{"bNum":16,"bName":"Nehemiah"},{"bNum":17,"bName":"Esther"},{"bNum":18,"bName":"Job"},{"bNum":19,"bName":"Psalms"},{"bNum":20,"bName":"Proverbs"},{"bNum":21,"bName":"Ecclesiastes"},{"bNum":22,"bName":"Song of Solomon"},{"bNum":23,"bName":"Isaiah"},{"bNum":24,"bName":"Jeremiah"},{"bNum":25,"bName":"Lamentations"},{"bNum":26,"bName":"Ezekiel"},{"bNum":27,"bName":"Daniel"},{"bNum":28,"bName":"Hosea"},{"bNum":29,"bName":"Joel"},{"bNum":30,"bName":"Amos"},{"bNum":31,"bName":"Obadiah"},{"bNum":32,"bName":"Jonah"},{"bNum":33,"bName":"Micah"},{"bNum":34,"bName":"Nahum"},{"bNum":35,"bName":"Habakkuk"},{"bNum":36,"bName":"Zephaniah"},{"bNum":37,"bName":"Haggai"},{"bNum":38,"bName":"Zechariah"},{"bNum":39,"bName":"Malachi"},{"bNum":40,"bName":"Matthew"},{"bNum":41,"bName":"Mark"},{"bNum":42,"bName":"Luke"},{"bNum":43,"bName":"John"},{"bNum":44,"bName":"Acts"},{"bNum":45,"bName":"Romans"},{"bNum":46,"bName":"1 Corinthians"},{"bNum":47,"bName":"2 Corinthians"},{"bNum":48,"bName":"Galatians"},{"bNum":49,"bName":"Ephesians"},{"bNum":50,"bName":"Philippians"},{"bNum":51,"bName":"Colossians"},{"bNum":52,"bName":"1 Thessalonians"},{"bNum":53,"bName":"2 Thessalonians"},{"bNum":54,"bName":"1 Timothy"},{"bNum":55,"bName":"2 Timothy"},{"bNum":56,"bName":"Titus"},{"bNum":57,"bName":"Philemon"},{"bNum":58,"bName":"Hebrews"},{"bNum":59,"bName":"James"},{"bNum":60,"bName":"1 Peter"},{"bNum":61,"bName":"2 Peter"},{"bNum":62,"bName":"1 John"},{"bNum":63,"bName":"2 John"},{"bNum":64,"bName":"3 John"},{"bNum":65,"bName":"Jude"},{"bNum":66,"bName":"Revelation"}]

}
