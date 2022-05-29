var cantidad_platos = 20
var precio_unitario
if (cantidad_platos = 20){
    precio_unitario = 250
}  
if (cantidad_platos >=25 && cantidad_platos <= 80){
    precio_unitario = 125
}
if (cantidad_platos > 88 && cantidad_platos <= 200){
    precio_unitario = 100
}
if (cantidad_platos > 201){
    precio_unitario = 75
}
if (cantidad_platos < 30){
    precio_unitario = 200
}

console.log("El precio total de tu compra es: ", cantidad_platos )
