const app = "I don't do much."

var kittens = ("Milo","Otis","Garfield");

function destructivelyAppendKitten(array,element){
  kittens.push(element);
  return kittens;
}