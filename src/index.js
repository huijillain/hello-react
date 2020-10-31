import React, { Component } from 'react'
import { render } from 'react-dom'

let bookList = [
    { "title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "White Teeth", "author": "Zadie Smith", "pages": 470 },
    { "title": "Lovely cats", "author": "Ernest Hemingway", "pages": 780 },
    { "title": "Lovely dogs", "author": "Kurt Vonnegut", "pages": 304 }
]

const Book = ({ title, author, pages }) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages}</p>
        </section>
    )
}

class Library extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true
        }
    }
    render() {
        const { books } = this.props
        return (
            <div>
                <h1>The library is {this.state.open ? 'open' : 'close'}</h1>
                {books.map(
                    (book, i) => <Book
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages} />
                )}
            </div>
        )
    }
}

render(
    <Library books={bookList} />,
    document.getElementById('root')
)