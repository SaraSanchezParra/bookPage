import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {


  constructor(public BooksService:BooksService){


  }

  public send (title:string, type:string, author: string, price: number, photo:string, id_book:number){
    let newBook = new Book(title, type, author, price, photo, id_book)
    this.BooksService.add(newBook);
    alert("Se ha añadido un nuevo libro con el título" + " " +newBook.title)
  }
  // public recogerCard(cardBook:Book){
  //   this.books = this.books.filter(bookFiltered => bookFiltered.id_book != cardBook.id_book)
  //   console.log(this.books);
  // }


}
