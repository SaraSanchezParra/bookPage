import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books: Book [];

  constructor(){

    let book1:Book = new Book ( "El señor de los anillos", "Tapa dura", " J.R.R. Tolkien", 29, "https://upload.wikimedia.org/wikipedia/commons/7/7d/El_Se%C3%B1or_de_los_Anillos_lectura.jpg", 33, 24);
    let book2:Book = new Book ( "Los renglones torcidos de Dios", "Tapa blanda", "Torcuato Luca de Tena", 15, "https://m.media-amazon.com/images/I/513FJOfUW2L._SX324_BO1,204,203,200_.jpg", 34, 28);
    let book3:Book = new Book ( "La revuelta de las putas", "Tapa dura", " Amelia Tiganus", 19, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81PzbsMEcCQTwsx1KAoNOiIFNsBsD3BXt0Q&usqp=CAU", 35, 232);
    this.books = [book1, book2, book3]
    // this.books = []

  }

  public send (title:string, type:string, author: string, price: number, photo:string, id_book:number){
    let newBook = new Book(title, type, author, price, photo, id_book)
    this.books.push(newBook)
  }
}
