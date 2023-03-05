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
    let bookPosition = -1; //no existe// no lo pongo en 0 poruq ei no estaría dici9endo que la posición del libro es el primer índice
    for (let i=0; i<this.books.length; i++){
      if (this.books[i].id_book == id_libro){
        bookPosition = i
      }
    }
    return this.books[bookPosition] //comparo libro a libro, si coincide el id, guardo la variable en book position la posicion de i

  }
  public add(book:Book):void{
    this.books.push(book);  //estoy añadiendo al array que tiene los slibros en la línea 14

  }
  public edit(book:Book):boolean{ //me llega un book formulario
      for (let i=0; i<this.books.length; i++){
        if (this.books[i].id_book == book.id_book) { //si el id del book que estamos recorriendo es igual al que se pasa por parámetro (en la card)
          this.books[i] = book //lo buscamos y cuando enocntramos su posición, lo sobreescribimos ocn lso datos del nuevo
        }
      }
      return true;
  }
  public delete(id_book:number):boolean{ //me llega un id en el formulario
      for (let i=0; i<this.books.length; i++){
        if (this.books[i].id_book == id_book) {
          this.books.splice(i, 1);  //a partir de la i, bórrame un elemento.
        }
      }
      return true //devuelve un booleano como parámetro de salida para decirme si se ha podido modificar o no el libro.
  }

}
