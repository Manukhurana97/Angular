# Mongodb




# Type of database
- SQL - RDBMS
- No SQl - Unstructural


SQL - Mysql, SQL Server, Oracle
store the data in table
table -> column -> row
table scema
colum - datatype


No SQL - unstructure
data store JSON
mongodb
cassandra
couchDB
Redis

MongoDB


order 
 id
 amount
 userid

orderItems
  oid
  pid
  prodctName
  price


{
 id: 1,
 amount: 100,
 userId: 1,
 orderItems: [
  {},
  {}
 
]
}


{ name: "" }
{ name:"", phone: 999 }
{ name: "", phone: "99" }




# Capped Collection






# capped collection
 collection with restriction or capping

Note: Once we createed collection
 we can not remove its restriction

db.users.insert(
{
name: "mark",
email: "m@gmail.com",
address: {
 house: "100",
 city : "city 1",
 county: "india"
}
})


db.users.insert(
{
name: "paul",
email: "p@gmail.com",
address: {
 house: "200",
 city : "city 2",
 county: "india"
}
})

db.users.insert(
{
name: "watson",
email: "w@gmail.com",
address: {
 house: "300",
 city : "city 3",
 county: "usa"
}
})
