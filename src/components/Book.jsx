import React from "react";
import "./Book.css";

const Book = ({ title, author, period }) => (
  <div className="book">
    <h4>{title}</h4>
    <p>{author}</p>
    <p>{period}</p>
  </div>
);

export default Book;