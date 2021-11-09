const ToyotaMark2 = {}; // create with an object literal
ToyotaMark2.model = "Mark 2"
// with properties
const BmwE69 = {
    model : 'E39',
    year : 1996,
    engine: 2.2,
    motto: () =>console.log("Ultimate Driving Machine")
};
BmwE69.time=4;
BmwE69.speed=100;

function distance(a,b){
    return a * b;

}
console.log(distance(BmwE69.time,BmwE69.speed));
ToyotaMark2.massa =1100;
ToyotaMark2.height =8;// meter
ToyotaMark2.timeHorses =64;// sec
const HorsePower = obj =>{
console.log( "This", obj.model , "has", obj.massa * obj.height / obj.timeHorses, "Power Horses")
}
HorsePower(ToyotaMark2);

function addNewField (key,value,obj = {}){
    obj[key]=value
}
addNewField(year,2,ToyotaMark2);

brokeEngine (function() {
    if(HorsePower()<5){
        console.log("Engine is broken");
    }
});
