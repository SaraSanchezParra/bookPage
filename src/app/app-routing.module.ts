import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path:"register", component: RegisterComponent},
  {path:"profile", component: ProfileComponent},
  {path:"books", component: BooksComponent},
  {path:"add-book", component: AddBookComponent},
  {path: "update-book", component: UpdateBookComponent},
  {path: "loginPage", component: LoginPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
