//estamos usando este archivo como controller para trarer todos los libros

const Book = require("./../models/Book")

exports.getAllBooks = async (req, res)=>{
   const allBooks = await Book.find({})

  res.render("books/list", {
      data: allBooks
  })

}

exports.getBook = async (req, res) =>{
    // console.log(req.params)
    const singleBookID = req.params.bookID
    const getTheBook = await Book.findById(singleBookID)
    console.log(getTheBook)
    res.render("books/single",{
        data:getTheBook
    })
};

exports.viewCreateBook = async(req, res)=>{
    res.render("books/create")
}

exports.createBook = async (req, res)=>{
    console.log(req.body)//conseguimos los datos que fueron ingresados con req.body
   const title = req.body.title
   const author = req.body.author
   const description = req.body.description
   const rating = req.body.rating

   const newBookCreated= await  Book.create({title, author, description, rating})

    // console.log("Datos Recibidos")
    res.redirect("/books")
}

exports.viewEditBook = async (req, res) => {
    console.log(req.params)

	const bookID = req.params.bookID

	const foundBook = await Book.findById(bookID)

	res.render("books/edit", {
		data: foundBook
	})

}

 exports.editBook = async (req, res)=>{
     //aqui necesitamos conseguir el ID del llibro
     const bookID = req.params.bookID

     //necesitamos conseguir los cambios enviados del formulario de editar
     const title = req.body.title
     const author = req.body.author
     const description = req.body.description
     const rating = req.body.rating

     console.log(bookID)
     console.log(title, description, author, rating)

     //realizar la actualizacion de la base de datos con los datos nuevos
     //uso de metodo finByIdAndUpdate ([ID], [nuevosCambios en objeto], [Devolver a la variable la actualizacion])
   const updatedBook =  await Book.findByIdAndUpdate(
       bookID,
       {title, description, author, rating},
       {new:true}
   )
   console.log(updatedBook)
   res.redirect(`/books/${updatedBook._id}`)

}

exports.deleteBoook = async (req, res)=>{
    //identificamos el libro que queremos borrar, con el req y consiguiendo el bookID
    const bookID =req.params.bookID

    //realizamos el borrado en la base de datos 
    const deletedBook = await Book.findByIdAndDelete(bookID)

    console.log("Borrado de libro:", deletedBook)
    res.redirect("/books")
}