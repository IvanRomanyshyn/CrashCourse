//1  Create objects and used field
// const Cars = {
//     brand: 'Toyota',
//     engine: 3.5,
//     isgasoline: true,
//     motto: () =>console.log("Drive Your Dreams")
// }
// console.log(Cars.brand);
// console.log(Cars.engine);
// if(Cars.isgasoline){
//     console.log("Pushka")
// }
// Cars.motto();
//------------------------------------
// 2 Create 3 objects different method
//------------------------------------
const Car = {
    model : "",
    year : "",
    engine : "",
    motto : ""
}
const ToyotaMark2 = {}; // create with an object literal
// with properties
const BmwE69 = {
    model : 'E39',
    year : 1996,
    engine: 2.2,
    motto: () =>console.log("Ultimate Driving Machine")
};
// with constructor
const OpelVectra = new Object();
// adding new property 
ToyotaMark2.model ="Mark2";
// adding new field in Car3
ToyotaMark2["motto"] =() => console.log("I like electric pole");
const Audi80 = Object.assign({},Car);
Audi80.model = "80";
Audi80.year = 1987;
Audi80.engine = 1.6;
Audi80.motto = "Four rings"
if(BmwE69.model !== "E69"){
    BmwE69.model ="E69";
//  BmwE69["model"] ="E69";
    console.log("Corect model in BMW", BmwE69.model)
}
const newField = "country";
Audi80[newField] = "Germany";
console.log(Audi80);
// hasOwnProperty
if(!ToyotaMark2.hasOwnProperty("country")){
    ToyotaMark2[newField] = "Japan";
}
console.log(ToyotaMark2.valueOf());
Object.freeze(Car);
delete Car.year;//  dont change after freeze
Car.engine = 1.9;
console.log(Car);
const VolvoS40 = Object.assign({}, Car);
VolvoS40.safety = true;
if(VolvoS40.safety == true){
    console.log("This can save your life");
}
if(Audi80.safety!==VolvoS40.safety){
    Audi80.safety=true
    console.log("Audi also can save your life")
}
console.log(Object.keys(VolvoS40));
for (const [key, value] of Object.entries(ToyotaMark2)) {
    console.log(`${key}: ${value}`);
  }
const Vaz = Object.assign({},BmwE69);
Vaz.model = "Kopejla"
Vaz.safety = false;
console.log(Vaz);
Object.freeze(Vaz.model);
Vaz.engine = 1.2;
const OpelVectraB = new Object();
const OpelOmega = {
    model : 'Omega',
    year : 1990,
    engine: 1.4,
    motto: () =>console.log("Gavno")
};