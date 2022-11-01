let peliculas=[
    {
        nombre:"Amsterdam",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/AMSTERDAMNUEVO1.jpg?alt=media&token=6dc11c03-2590-4619-88f6-dff50c3d58e8"
    },
    {
        nombre:"blackAdam",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/Black%20adam%20ultimonuevo.jpg?alt=media&token=fed31a38-b6d7-4b1d-be6c-f8ce82cf4a67"
    },
    {
        nombre:"eraseUnaVez",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/Black%20adam%20ultimonuevo.jpg?alt=media&token=fed31a38-b6d7-4b1d-be6c-f8ce82cf4a67"
    },
    {
        nombre:"estamosHechosParaAmarnos",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/ESTAMOS%20HECHOS%20PARA%20AMARNOS1.jpg?alt=media&token=37261240-e9cb-4650-8ab5-c95d5c00472a"

    
    },
    {
        nombre:"laJauria",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/LA%20JAURIA.jpg?alt=media&token=4623ab0c-8250-40bc-9bc9-16cc1725cb49"
        
    },
    {
        nombre:"laMujerReyNuevo",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/LA%20MUJER%20REY%20NUEVO%20POSTER1.jpg?alt=media&token=06b699f5-a646-424f-a49c-f25df0835fa6"
    },
    {
        nombre:"losReyesDelMundo",
        duracion:150,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/LOS%20REYES%20DEL%20MUNDO1.jpg?alt=media&token=21af60b9-d9a7-4b85-9fef-026d74363cb9"
    },
    {
    nombre:"onePiece",
    duracion:90,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/ONEPIECE1.jpg?alt=media&token=3bfbd076-ec9e-4944-8c68-e467a068ac20"
},
{
    nombre:"onePiece",
    duracion:90,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/ONEPIECE1.jpg?alt=media&token=3bfbd076-ec9e-4944-8c68-e467a068ac20"
},
{
    nombre:"onePiece",
    duracion:90,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/ONEPIECE1.jpg?alt=media&token=3bfbd076-ec9e-4944-8c68-e467a068ac20"
},
{
    nombre:"onePiece",
    duracion:90,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/ONEPIECE1.jpg?alt=media&token=3bfbd076-ec9e-4944-8c68-e467a068ac20"
},
{
    nombre:"onePiece",
    duracion:90,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/ONEPIECE1.jpg?alt=media&token=3bfbd076-ec9e-4944-8c68-e467a068ac20"
},
{
    nombre:"onePiece",
    duracion:90,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/ONEPIECE1.jpg?alt=media&token=3bfbd076-ec9e-4944-8c68-e467a068ac20"
},
{
    nombre:"onePiece",
    duracion:90,
    poster:"https://firebasestorage.googleapis.com/v0/b/cinemacristobal.appspot.com/o/ONEPIECE1.jpg?alt=media&token=3bfbd076-ec9e-4944-8c68-e467a068ac20"
},
]

let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid","w-100")

    fila.appendChild(foto)

})