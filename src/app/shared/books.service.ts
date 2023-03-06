import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books:Book[]
  constructor() {

    let book1:Book = new Book ( "El señor de los anillos", "Tapa dura", " J.R.R. Tolkien", 29, "https://upload.wikimedia.org/wikipedia/commons/7/7d/El_Se%C3%B1or_de_los_Anillos_lectura.jpg", 33, 24);
    let book2:Book = new Book ( "Los renglones torcidos de Dios", "Tapa blanda", "Torcuato Luca de Tena", 15, "https://m.media-amazon.com/images/I/513FJOfUW2L._SX324_BO1,204,203,200_.jpg", 34, 28);
    let book3:Book = new Book ( "La revuelta de las putas", "Tapa dura", " Amelia Tiganus", 19, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81PzbsMEcCQTwsx1KAoNOiIFNsBsD3BXt0Q&usqp=CAU", 35, 232);
    this.books = [book1, book2, book3];
    // this.books = []
  }
  public getAll():Book[]{ //creo todo esto para poder inyectar estos servicios en cualquier lugar
    return this.books
  }
  public getOne(id_libro:number):Book{
    let bookFound = this.books.find(book => book.id_book == id_libro)
      return bookFound
    }

  public add(book:Book):void{
    this.books.push(book);  //estoy añadiendo al array que tiene los slibros en la línea 14

  }
  public edit(bookEdited:Book):boolean{ //me llega un book formulario
   console.log(bookEdited.id_book)
   console.log(this.books)
    let editBook = this.books.findIndex(book => book.id_book === bookEdited.id_book)
    // this.books[editBook] = bookEdited //ouedes hacerlo de esta manera o
    this.books.splice(editBook, 1, bookEdited)
    return editBook != -1;
}

public delete(id_book:number):boolean{ //me llega un id en el formulario
  let deletedBook = this.books.findIndex(book => book.id_book == id_book)
      this.books.splice(deletedBook, 1);  //a partir de la i, bórrame un elemento.
  return deletedBook != -1 //devuelve un booleano como parámetro de salida para decirme si se ha podido modificar o no el libro.
}

}
