
import "./BookCard.css";

const BookCard = ({ book }) => {
  // Extracting data from the book object using destructuring
  const { title, author_name, cover_i, first_publish_year } = book;

  // Fallback values for books missing info
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";
  const author = author_name ? author_name[0] : "Unknown Author";
  const year = first_publish_year || "N/A";

  return (
    <div className="book-card">
      <img
        src={coverUrl}
        alt={`Cover of ${title}`}
        className="book-cover"
      />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">
          <strong>Author:</strong> {author}
        </p>
        <p className="book-year">
          <strong>Published:</strong> {year}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
