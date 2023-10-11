import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';

const routes: Routes = [

  // Books index
  // Book create
  // Book read
  // Book update
  // Book delete



  // site.com/books             -> Index
  // site.com/books/create      -> Create
  // site.com/books/42          -> Read
  // site.com/books/42/edit     -> Update
  // site.com/books/42/delete   -> Delete

  // site.com/books/(create|:id)/(edit|delete)

  // books
  // ->child : create
  // ->child : read
  //           ->child : update
  //           ->child : delete





  // site.com/books             -> Index
  // site.com/book              -> Create
  // site.com/book/42           -> Read
  // site.com/book/42/edit      -> Update
  // site.com/book/42/delete    -> Delete

  // site.com/book(s?)/:id/(edit|delete)

  // books : Index
  // book : create
  // ->child : read
  //           ->child : update
  //           ->child : delete




  // Book Index
  {
    path: 'books', // site.com/books
    component: IndexComponent
  },

  // Book create
  {
    path: 'book', // site.com/book
    children: [
      {
        path: '',// site.com/book
        component: CreateComponent,
      },
      {
        path: ':id', // site.com/book/42
        children: [
          {
            path: '', // site.com/book/42
            component: ReadComponent,
          },
          {
            path: 'edit', // site.com/book/42/edit
            component: UpdateComponent
          },
          {
            path: 'delete', // site.com/book/42/delete
            component: DeleteComponent
          }
        ]
      }
    ]
  },


  // // Book read
  // {
  //   path: 'book/:id',
  //   component: ReadComponent
  // },

  // // Book update
  // {
  //   path: 'book/:id/edit',
  //   component: UpdateComponent
  // },

  // // Book delete
  // {
  //   path: 'book/:id/delete',
  //   component: DeleteComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
