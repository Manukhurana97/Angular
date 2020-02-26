# Angular

# Modules
# Components


# Compoments
> Thet are Resuable UI segement of the app which is visible to user
> To create a component we have use @Component decorator

# Decorator
> Decorators are special function provided angular framework use to add
  meta data to the class
> Decorator conatin some properties which contains the data
> All the decorator has a prefix with @

# Angular has it own decorators
> @Component - to create components
> @NgModule - to create modules
> @Pipe - to create pipes
> @Injectable - to create services


# create a command
ng g c <component-name>

This command will create a director inside the directory we have 4 files
.html - html code
.css - css file specifically for this component
.spec.ts - this is file we use to write test cases
.ts - typescript file which contain the logic of the component

update app.module.ts


# Install Bootstrap
1. add the cdn link directly in the index.html

2. install bootstrap using npm
   npm i bootstrap --save
   npm i bootstrap@3.1.1 --save
   npm i bootstrap@latest --save
   
  --save will add this as a depency in the package.json


# Data Binding
> One way data binding - data will flow from component to template 
> One way data binding - data will flow from template to component
> Two way data binding - data will flow from component to template and from template
                         to component





# One way data binding  - component to template
> Interpolation
> Property Binding


# Interpolation
> We can send the data from component to template by creating a property in thr
  component class and in the template we can access using {{}}

Interpolation will convert the expression into plain html with 
browser can understand


# Property binding
Property can also be use to send data from component to template
we have use the pair of square bracket for which we want to bind property

[] - 



Property binding vs Interpolation
1. When ever we are working with string value we should use
   interpolation. Interpolation will not work well with non string value
   we can use interpolation for concatenation
2. For non string value should consider property binding




# One way data binding -  template to component class
> Event Binding

In event binding we can bind any event with using ()
$event is the reserve keyword which gives all the information of the current
event

we can create a fucntion in the component class that we can set for event 



# Class binding
when you want to bind css class dynamically
based on some condition u want to apply
css class on any element

we can use [] for class binding

[ngClass] this is a special directive we can use when we want to apply
          multuiple css class conditionally



# style binding
like class binding ww can bing styles with the elemeent based on condition




























