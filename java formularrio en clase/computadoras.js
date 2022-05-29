var precio_pc = 22000
var cantidad =10
var fff 
if (cantidad < 5){
    fff = 0.66
}
else if (cantidad >= 5 && cantidad <10){
    fff = 0.20
}
else if (cantidad >= 10){
    fff = 0.40
}

console.log("El precio total de tu compra es: ", ((precio_pc * cantidad) - ((precio_pc * cantidad) * (fff))))

