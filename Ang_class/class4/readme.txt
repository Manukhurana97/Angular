# Angular

# Is there any difference b/w
> AngularJs
> Angular

AngularJs - veriosn 1.x
Angular - version 2 and above

Angular is the update of the angularJs this is enitely new framework


# Angular Features
1. One framework we can use for mobile or web application
2. Component base Architecture
3. Use TypeScript
4. Inbuilt Depency Injection 

Ionic


AngularJs vs Angular

1. AngularJs has scope, controller, factory and services which is not
   avauilable in angular
2. Angular uses component base architecture which is missing in angularJs
3. AngularJs uses spinal syntex ng-bing where angular use camelcase
   ngBind
4. AngularJs uses directive where angular uses html dom element directly




# Angular Building Blocks
1. Modules
2. Components
3. Services
4. Pipes
5. Decorators



# Angular CLI
it is command line tool which we can use automatic various task
such as creating new project, starting server, generate component,
generate service, run test server


> Node
> NPM
> Angular CLI


# Angular Project Structure
> e2e - end to end testing

> package.json - this is the json file which contain the   
   list of all the package and dependency
   there are two typr of depedency
   dependecy
   dev-dependecy

> Node_module - this folder contain all the packages
   which we require while building aplication
   this is one of the biggest folder in the entire
   project

> .editorconfig - this the configuartion file used by vs code
  it has nothing to do wth angular project

> .gitignore - this is the file used by github to ignore
   any file while pushing code 

> angular.json - this is angular app level configuaration file

> karma.confi - this config file for karma
  karma is the test runner

> Readme.md - this file we can use to write some instruction
  for our team members

> tsconfig.app.json - ts config file for app code
> tsconfig.spec.json - ts config file test cde

> src - which is source code folder

> assets - where we want to keep all static content
           images, file

> environmant - it contain develop and prod envirnmant files
  by default angular app run in develop env

> favicon - icon which appear in browser tab

> index.html - this is file which finally serve on tghe
  browser

> main.ts - this is the entry point for angular app

> style.css - this is ur global css file

> test.ts - is the entry point for test cases

> app - this the main folder which contain all the 
  modules, component, service etc
  this is folder where we going to create everything




# Angular

# Module
> Angular has it own modularity system called module or NgModule
> Every angular app must have atleat one module
> By default we get one module with the name AppModule
> This module we can decorate with NgModule decorator which contain
  the meta data of the module class
> In the NgModule decorator we set some properties valies
> angular has it own built in modules or packages with @angular prefix
> we can install any @angular pacjkage using npm

5 Main properties which we use in NgModule are

1. exports
2. imports
3. declaration
4. bootstrap
5. providers


declartion - contain all the user define components which you want to use
             in the application

imports - contain all other module for example: angular build in packages

providers - conatin the reference of all the services

bootstrap - which contain the name of the root component from which we want to
            start our application

export - when we wan to export something so that other module can able to use it




# Component
> Component are the main UI of the application
> We can re use these components
> every componet consist of

 HTML   +      class     + Meta Data
template  +    TS	  @Component



ng generate component <compoent name>

ng g c <component name>


We can call component in three ways
1. html element name
2. class   - .
3. directive - []































