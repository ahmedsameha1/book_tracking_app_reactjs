import React from "react";
import Book from "./Book";

class Grid extends React.Component {
    render() {
        return (
            <div className="grid_layout">
                {this.props.books.map( book => {
                    return (<Book key={book.id} book={book} />)}
                )}
            </div>
        );
    }
}

export default Grid;