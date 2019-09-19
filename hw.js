const Me ={
    name: "Kristyn",
    age: 42,
    email: "kristyn@foo.bar"

}
console.log(`${Me.name}`)
Me["age"]   = 43;
console.log(`${Me.age}`)
Me["place of residence"]= "Burgas"
console.log(Me["place of residence"])