import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input() cardBook: Book //es el libro, los datos del libro que pinta la tarjeta
@Input() par: boolean
@Output() deletedCard = new EventEmitter<Book>();

  constructor(public BooksService:BooksService){ //escribo el constructor pasra inyectar el servicio

  }
  eliminarCard() { //elimina mi card
    this.BooksService.delete(this.cardBook.id_book)//tengo que llamar a cardbook porque es donde está el id_book
    // this.deletedCard.emit(this.cardBook)
    // console.log(this.cardBook);

  }

}

//ahora tengo que inyectar el servicio para qu eme borre el libro que yo haya seleccionado del array list, pero no solo de la vista, también del modelo(los datos).
