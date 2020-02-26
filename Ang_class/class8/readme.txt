# Services

1. Share data accross the application
2. Business Logic
3. External interaction like Rest API


Steps
1. Creating a service
2. Register a service
3. Consuming a service



# Dependency Injection

# Code without DI
# Code with DI


# HTTP Verbs
- Get - Read data
- Post - create data
- Put - update
- Delete - delete



# RxJs
- Reactive extension of javascript
- which give observable


steps
1. Import HTTPClientModule in the app.module
2. import HttpClient in the service
3. add httpClient as dependency for the service
4. using httpclient instance we can call 
   get, post, put, delete method
5. this will give observable so import { Observable } from 'rxjs';
6. component interested in data from the
   service need to subscribe
7. in the component we can get the data in
   subscribe method which we can assign 
   to local variable-




