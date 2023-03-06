import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Book [];

  constructor(public BooksService:BooksService){

   this.books = this.BooksService.getAll()

  }

  public send (title:string, type:string, author: string, price: number, photo:string, id_book:number){
    let newBook = new Book(title, type, author, price, photo, id_book)
    this.books.push(newBook)
  }
  public recogerCard(cardBook:Book){
    this.books = this.books.filter(bookFiltered => bookFiltered.id_book != cardBook.id_book)
    console.log(this.books);

  }
  searchBook(id_book:string) {
    console.log("idlibro" + id_book); //para ver qué llega cuando en el campo de Search no he metido nada
    if (id_book == ""){ //si yo meto algo vacío en el buscador, me devolverá todos los libros
      this.books = this.BooksService.getAll();
      alert("This book doesn´t exist")
    }
    else {
    let number:number = Number(id_book)//convierto en número esa referencia
    let searchedBook = this.BooksService.getOne(number)//que ejecute el método getOne.
    if (searchedBook != undefined){//si busco un libro que no existe, enséñamelo. Es decir, si existe, me devuelve el libro, si no existe, no toca nada.
    this.books = [searchedBook];
    alert("This book doesn´t exist")
    console.log(searchedBook)}
    }

  }
}
//si existe un libro con el id que le he pasado, bórrame el array entero y créame un array(datos) en la vista (una tarjeta) con el libro que estoy buscando.
