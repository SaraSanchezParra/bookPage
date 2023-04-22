import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  public books: Book[];

  constructor(
    public BooksService: BooksService,
    private toastr: ToastrService, 
    private userService: UsuarioService
  ) {
    this.books = [];
    this.BooksService.getAll(this.userService.user.id_user).subscribe((data:Respuesta) => { //para poder leerlo necesito susrcibirme a la llamada al api
      console.log(data);
      this.books = data.data; //this.books es igual a lo que me devuelve el api
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
      this.BooksService.getAll(this.userService.user.id_user).subscribe((data:any) => { //para poder leerlo necesito susrcibirme a la llamada al api
        console.log(data);
        this.books = data; //this.books es igual a lo que me devuelve el api
      });
      console.log(data);

    }); //tengo que llamar a cardbook porque es donde está el id_book

  }

 

searchBook(id_book: number) {
  console.log('idlibro' + id_book);

  this.BooksService.getOne(id_book, this.userService.user.id_user).subscribe((data:Respuesta)=>{
    this.books =data.data;
    console.log(data);
    
  })

}
}
//si existe un libro con el id que le he pasado, bórrame el array entero y créame un array(datos) en la vista (una tarjeta) con el libro que estoy buscando.
