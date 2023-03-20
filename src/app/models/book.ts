export class Book {

  public Id_book:number;
  public Id_user:number;
  public title:string;
  public type: string;
  public author:string;
  public price:number;
  public photo: string;



  constructor(title:string, type:string, author: string, price: number, photo:string, Id_book:number = 0, Id_user:number = 0){


    this.Id_book= Id_book;
    this.Id_user = Id_user;
    this.title = title;
    this.type = type;
    this.author = author;
    this.price = price;
    this.photo = photo;

  }
}
