# Angular Forms

> Forms are essential part for any application
  bcoz using forms user can interact with our
  application
> Form are essential for accept input or data
  from the user for example: Login, Register

# Type of Forms in Angular
> Template Driven Forms (TDF)
> Model Driven Forms or Reactive Forms


# TDF vs Reactive Forms
1. In TDF most of code wil write in Tempate
   and in Reactive Forms most of the code
   wil write in Component classes
2. In TDF we can do 2 way data binding but
   in Reactive two way data binding not
   possible
3. TDF are simillar to form we have in 
   Angular 1 
4. In TDF the syntex is very much similar 
   to normal HTML forms
5. Unit testing is quite challenging
   in TDF where as it simple in reactive
   forms
6. If we have to design complicated or huge
   Forms in that case as all the code will
   go in template it may reduce the readbilty


# Template Driven Forms
> Steps
1. Create a HTML form
2. Data binding
3. tracking form state
4. Display validation errors
5. Submit the form


@angular/form package in app.module.ts
> TDF --> FormsModule
> Reactive ---> ReactiveFormsModule


FormsModule --> ngForm
which contain the entire information
of the form



# Form State
1. valid
2. invalid
3. touched
4. untouched
5. modified
6. not modified


ng-touch - element never touched
ng-untouch - element is been touched
ng-valid - element value is valid
ng-invalid - element value in invalid
ng-dirty - after form load we modified value
ng-prestine - we never mofied the value


ng-touch - touch  - true / false
ng-untouch - untouched
ng-valid   - valid
ng-invalid  - invalid
ng-dirty  - dirty
ng-prestine - prestive




# Reactive Forms or Template Driven Forms

import  -> ReactiveFormsModule -> app.module








