import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

@Input() cardBook: Book
@Input() par: boolean
@Output() deletedCard = new EventEmitter<Book>();

  eliminarCard() {
    this.deletedCard.emit(this.cardBook)
    console.log(this.cardBook);

  }

}
