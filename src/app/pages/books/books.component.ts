import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  public books: Book[];

  constructor(
    public BooksService: BooksService,
    private toastr: ToastrService
  ) {
    this.BooksService.getAll().subscribe((data:any) => { //para poder leerlo necesito susrcibirme a la llamada al api
      console.log(data);
      this.books = data; //this.books es igual a lo que me devuelve el api
    });
  }

  public send(
    title: string,
    type: string,
    author: string,
    price: number,
    photo: string,
    id_book: number
  ) {
    let newBook = new Book(title, type, author, price, photo, id_book);
    // this.books.push(newBook);
  }
  public recogerCard(cardBook: Book) {
    this.BooksService.delete(cardBook.id_book).subscribe((data)=>{
      this.BooksService.getAll().subscribe((data:any) => { //para poder leerlo necesito susrcibirme a la llamada al api
        console.log(data);
        this.books = data; //this.books es igual a lo que me devuelve el api
      });
      console.log(data);

    }); //tengo que llamar a cardbook porque es donde está el id_book

  }
  searchBook(id_book: string) {
    console.log('idlibro' + id_book); //para ver qué llega cuando en el campo de Search no he metido nada
    if (id_book == '') {
      //si yo meto algo vacío en el buscador, me devolverá todos los libros
      this.BooksService.getAll().subscribe((data) => {
        console.log(data['data']);
        this.books = data['data'];
      });
    } else {
      let number: number = Number(id_book); //convierto en número esa referencia
      this.BooksService.getOne(number).subscribe((data) => {
        console.log(data['data']);
        let searchedBook = data['data'];
        if (searchedBook != undefined) {
          //si busco un libro que no existe, me devolverá a undefined. Es decir, si existe, me devuelve el libro, si no existe, no toca nada.
          this.books = [searchedBook];
          console.log(searchedBook);
        } else {
          this.toastr.warning('This id has not been found');
        }
      });
    }
  }
}
//si existe un libro con el id que le he pasado, bórrame el array entero y créame un array(datos) en la vista (una tarjeta) con el libro que estoy buscando.
