import React from "react";
import "./Reading.css";

const Reading = () => {
  // Group books by date
  const groupedBooks = [
    {
      date: "january 2025",
      title: "the future of digital health with federated learning",
      author: "nicola rieke, jonny hancox, et al."
    },
    {
      date: "january 2025",
      title: "why machines learn: the elegant math behind modern ai",
      author: "anil ananthaswamy"
    },
    {
      date: "november 2024",
      title: "concepts of programming languages",
      author: "robert w. sebesta"
    },
    {
      date: "october 2024",
      title: "ikigai: the japanese secret to a long and happy life", 
      author: "hector garcia & francesc miralles"
    },
    {
      date: "october 2024",
      title: "frankenstein",
      author: "mary shelley"
    },
    {
      date: "september 2024",
      title: "thinking, fast and slow",
      author: "daniel kahneman"
    },
    // Add more books here
  ].reduce((acc, book) => {
    if (!acc[book.date]) {
      acc[book.date] = [];
    }
    acc[book.date].push(book);
    return acc;
  }, {});

  return (
    <div className="reading-container">
      {Object.entries(groupedBooks).map(([date, books]) => (
        <div key={date} className="reading-entry">
          <div className="reading-date">{date}</div>
          {books.map((book, index) => (
            <div key={index} className="book-entry">
              <div className="reading-title">
                <i>{book.title}</i> — {book.author}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Reading;