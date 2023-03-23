import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { BooksComponent } from '../books/books.component';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {


  constructor(public BooksService:BooksService, private toastr: ToastrService, public UserService: UsuarioService){


  }

  public send (title:string, type:string, author: string, price: number, photo:string){
    let newBook = new Book(title, type, author, price, photo, null, this.UserService.user.id_user);
    console.log(newBook)
    this.BooksService.add(newBook).subscribe((data)=>{
      console.log(data)
      this.toastr.success("Se ha añadido un nuevo libro con el título" + " " + newBook.title)
    });

  }
  // public recogerCard(cardBook:Book){
  //   this.books = this.books.filter(bookFiltered => bookFiltered.id_book != cardBook.id_book)
  //   console.log(this.books);
  // }


}
