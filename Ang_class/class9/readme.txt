# Grocery App

# AddToCart Button
# LocalStorage
# CartComponent

# Routing
> Routing is essential for every application
  that allow the user to navigate in the application

  We can use routing to change the content or thr
  component by changing url

  localhost:4200/
  localhost:4200/login  -> LoginComponent
  localhost:4200/register  -> RegisterComponent

# Two ways we can routing module in app
1. using angular/cli
2. Manually

1. using angular/cli
   while creating new project you get an
   option to add routing module
   
   ng new <project app> --routing

2. Manually
   we have to crate as file with the name
   app-routing.module.ts


  <routerOutlet></routerOutlet>
  this is the special directive
given by angular router module
 where we can display the content


@angular/router provide on more directive
which we can use for navigation

routerLink

<a href=""></a>
<a routerLink=""></a>


# Wild Card Routes
Are use to hande page not found error
with any wroing path wild card route will
be activated

Note: It has to be last route in the route
array otherwise router module will try to match
every route with this path







