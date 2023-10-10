# MyLibrary

## Creation des pages

```shell 
ng generate module core
ng generate module core/layout
ng generate component core/layout/header
ng generate component core/layout/footer

ng generate module pages
ng generate module pages/homepage
ng generate component pages/homepage/pages/index --skip-tests --style none
ng generate module pages/about --routing
ng generate component pages/about/pages/index
ng generate module pages/contact --routing
ng generate component pages/contact/pages/index

ng generate module pages/book --routing
ng generate component pages/book/pages/index
ng generate component pages/book/pages/create
ng generate component pages/book/pages/read
ng generate component pages/book/pages/update
ng generate component pages/book/pages/delete
ng generate interface pages/book/interfaces/book

ng generate module pages/not-found --routing
ng generate component pages/not-found/not-found

```