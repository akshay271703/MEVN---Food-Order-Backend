# MEVN---Food-Order-Backend

# Routes
### AuthRoutes
```
/Signup POST
/Login  POST
```

### ProductRoutes
```
/products             GET
/products/add         POST
/products/edit/:id    POST
/products/delete/:id  POST
/products/buy/:id     POST
```

# Controllers
### Auth - 
```
Login  - Returns ID and email of 'EXISTING USER'
Signup - Returns ID and email of newly created User
```
### Products - 
```
/products -> fetch all data in Product Model
/add      -> req.body { name, id, price, quantity, imageURL } -> return new product
/edit     -> edit and return updated product
/delete   -> delete and return deleted product
/buy      -> Update quantity from purchased product
```
# Models
### User
```
{ email : String , password : bcrypt hashed string }
```
### Products
```
{ id, name, quantity, imageUrl, price}
```

# Views
### Handles by VUE 3 and cors
