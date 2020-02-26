# Angular

# Data Binding
> One Way Data binding - Component to Template (interpolation / Property Binding)
> One Way Data Binding - Template to component (event binding)
> Two way data binding - component to template to component

# Two Way Data Binding

It is the combination of both property binding and event binding
Property Binding - []
Event Binding - ()

Two way binding - [()] - banana in a box


# Template Reference Variable
To find any html element we will assign 
template reference variable using #

#variable name

for example:
<input type="text" #myInput/>
<button (click)="onButtonClick(#myInput.value)">Click</button>



# Two way data binding
 <h1>{{ name }}</h1>
<input type="text" [(ngModel)]="name" #myInput  />

also we need to import FormsModule from @angular/forms



# Component Interaction
When we want to share data between component
is knowe as component interaction

@Input
@Output

we can use these two decorator when we want to
send data between two componets

Note: Input and Output decorator we can only
use when we have parent and child relation
between the component or between nested 
component



Patent  -> Child  -> @Input()  -> Property Binding

Child  -> Child   -> @Output()   -> Event Emitter 



# Pipes
Pipes are esesntial for application
Pipes are also one of the main building block
of anglar application


> Pipes can be use to transform the data before
it get displayed on screen
> Pipes are use for display purpose only

> We have some inbult pipes
 for example
1. date
2. Json
3. currency
4. uppercase / lowercase / titlecase


# How to use Pipe
Syntex

{{ name | <pipe name>:<parameter> }}


{{ name | uppercase }}


# Custom Pipes
If requirement is not fullfill by the inbuilt
pipe we can also create our own custom pipe


by default date pipe wil take date in 
this format 
mm/dd/yyyy


ng g p <pipe-name>



# Services

> DRY - Dont repeat yourself
> Simple class Responsibilty


# Why use services
1. When you want to share common data accross the
   application we can use services
2. We can use services for writting business
   logic
3. We can use services for external interaction
   example: - calling rest api


By default services are singleton classes which
get instantiated when we ever we start the class


Steps
1. Create a service
2. Register a service
3. consume a service


1. create a service
   bg g s <service>



2. Register a service
   two ways of registering service

 1. @Injectable({
  providedIn: 'root'
})
  servive get register with appModule


 2. providers: []
    either with appModule or component














































