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

const adventurer = {
    name: "Red",
    hitPoints: 20,
    attack: function (){

    }
}
const ogre = {
    name: "Green",
    hitPoints: 21,
    attack: function (damage){

    }
}


const Character = function (name, points) {
    this.points = points;
    this.name = name;
};

const Ogre = new Character("Ogre", 100);
Ogre.attack= function(){
    return (Math.random()*100)
}
const Adventurer = new Character("Adventurer", 101);
Adventurer.attack= function(){
    return 10
}

function Game(){
    for (let i=0; true; i++){
        if(Adventurer.points<0 || Ogre.points< 0){
            break
        }
        if(i%2===1){
          let attackOgre = Ogre.attack()
            Adventurer.points-=attackOgre
        }
        else {
            let attackAdventurer = Adventurer.attack()
            Ogre.points-=attackAdventurer
        }
        console.log(Ogre, Adventurer)
        if( Ogre.points> Adventurer.points){
            console.log("Ogre wins")
        }
        else{
            console.log("Adventurer wins")
        }

    }
}
Game()