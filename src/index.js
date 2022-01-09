import React from 'react'
import ReactDom from 'react-dom'
import {data} from './books'
import Book from './book'

// console.log(newNames)

function BookList () {
    return (
        <div className="ui container">
            <h3>This is a book List</h3>
            <div className="ui three column grid">
                {data.map((book) => {
                    // const {img, title, author} = book
                    return (
                        <Book {...book} key={book.id}> </Book>
                    )
                })}
            </div>
        </div>
     );
}

ReactDom.render(
    <BookList />, document.getElementById('root')
)
