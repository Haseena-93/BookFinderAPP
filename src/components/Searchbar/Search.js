import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import "./Search.css";

function Search() {
  const [books, setBooks] = useState([]); 
  const [searchText, setSearchText] = useState("Harry Potter");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch books from Open Library API
  const getBooks = async (title) => {
    if (!title.trim()) {
      setBooks([]);
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
      );
      const data = await response.json();

      if (data.docs?.length > 0) {
        setBooks(data.docs.slice(0, 20));
      } else {
        setBooks([]);
        setErrorMessage("No books found. Try another title!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks(searchText);
  }, [searchText]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (value.trim()) {
      getBooks(value);
    } else {
      setBooks([]);
    }
  };

  return (
    <div className="search-container">
      <div className="overlay">
        <h1 className="search-heading">Discover Your Next Favorite Book 📚</h1>
        <p className="search-subheading">
          Powered by the Open Library API — just type and explore!
        </p>

        <div className="search-bar-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Type a book title..."
            value={searchText}
            onChange={handleInputChange}
          />
        </div>

        {loading && <p className="loader">Loading books...</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="book-list">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
