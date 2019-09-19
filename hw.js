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

const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something",
    introduce: function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }

}
console.log(`${monster.name}`)
monster["type"]="creature"
console.log(monster)
monster["age"]= 6
console.log(monster)

monster.introduce()
