// Write your solution here!

let cats = ["Milo","Otis","Garfield"];


function destructivelyAppendCat(name){
    cats.push(name);
    return cats ;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats ;
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats ;
}
function destructivelyRemoveFirstCat (){
    cats.shift();
    return cats ;
}
function appendCat(name){
    let nameCat=[...cats,name]
    return nameCat;

}
function prependCat(name){
    let nameCat2=[name, ...cats];
    return nameCat2;
}
function removeLastCat(){
    let removeCat = cats.slice(0,cats.length-1);
    return removeCat;
}
function removeFirstCat(){
    let removeCat1= cats.slice(1)
    return removeCat1;
}