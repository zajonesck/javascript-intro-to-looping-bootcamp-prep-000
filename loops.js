function forLoop(array){
  for(var i = 0; i <25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
  }
}
return array
}
function whileLoop(array)
  let countdown = 100;
 
while (countdown > 0) {
  console.log(--countdown)
}