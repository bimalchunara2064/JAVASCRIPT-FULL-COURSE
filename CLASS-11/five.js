let cars = [

];
let white_Cars = []
for(let i=0;i<cars.length -1;i++){
    if(cars[i].color === 'White'){
        white_Cars.push(cars[i])
    }
}
console.log(white_Cars.length);
console.log(white_Cars);