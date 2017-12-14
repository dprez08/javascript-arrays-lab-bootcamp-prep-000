const app = "I don't do much."

var kittens = ("Milo","Otis","Garfield");

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}

function appendKitten(name){
  return [...kittens,name];
}

function prependKitten(name){
  return [name,...kittens];
}

function removeLastKitten(name){
  return [name.slice(3)];
}

function removeFirstKitten(name){
  return [name.slice(1)];
}