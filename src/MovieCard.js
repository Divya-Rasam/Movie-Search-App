export function MovieCard({ movie }) {
  return (
    <div style={styles.card}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        style={styles.poster}
      />
      <div style={styles.details}>
        <h3>{movie.Title}</h3>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    marginTop: "30px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  poster: {
    width: "150px",
    height: "auto",
    borderRadius: "5px",
  },
  details: {
    textAlign: "left",
    flex: 1,
  },
};
