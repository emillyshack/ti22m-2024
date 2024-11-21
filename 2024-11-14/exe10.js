const usuarios = [
    {nome:"Jurandir",idade:15,email:"juranzin@gmail.com"},
    {nome:"amanda",idade:26,email:"Emailly@akakdj.com"}
]
const novo = usuarios.map(function(elemento){
    return `${elemento.nome}, ${elemento.email}`
})

console.log(novo)