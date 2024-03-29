import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { BooksComponent } from '../books/books.component';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  // public books: Book []; //no tiene sentido porque los libros están en el servicio.
  //tengo que inyectar en los componentes de public ese servicio.
  constructor(public BooksService:BooksService, private toastr: ToastrService, private http:HttpClient, public userService: UsuarioService){  //lo inyectamos desde el servicio BooksService

  //quito todo los arrays de books porque ya los tengo en el servicio.
  }

  public send (title:string, type:string, author: string, price: number, photo:string, id_book:number){
    let newBook = new Book(title, type, author, price, photo, id_book, this.userService.user.id_user);
    console.log(newBook);
    this.BooksService.edit(newBook).subscribe((data)=>{
      this.toastr.success("The reference book" + " " + newBook.id_book + "has been modified")
    });
  }
//   public recogerCard(cardBook:Book){
//     this.books = this.books.filter(bookFiltered => bookFiltered.id_book != cardBook.id_book)
//     console.log(this.books);
//   }
}
