

// // import { useState } from "react";

// // export function MovieSearch() {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [movie, setMovie] = useState(null);
// //   const [error, setError] = useState("");

// //   const handleSearch = async () => {
// //     if (!searchTerm.trim()) {
// //       setError("Please enter a movie name.");
// //       setMovie(null);
// //       return;
// //     }

// //     const response = await fetch(
// //       `https://www.omdbapi.com/?apikey=2f6435d9&t=${searchTerm}`
// //     );
// //     const data = await response.json();

// //     if (data.Response === "True") {
// //       setMovie(data);
// //       setError("");
// //     } else {
// //       setMovie(null);
// //       setError("Movie not found.");
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <input
// //         type="text"
// //         placeholder="Search a movie..."
// //         value={searchTerm}
// //         onChange={(e) => setSearchTerm(e.target.value)}
// //         style={styles.input}
// //       />
// //       <button onClick={handleSearch} style={styles.button}>
// //          Search
// //       </button>

// //       {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

// //       {movie && (
// //         <div style={styles.card}>
// //           <img src={movie.Poster} alt={movie.Title} style={styles.poster} />
// //           <h3>{movie.Title} ({movie.Year})</h3>
// //           <p><strong>Genre:</strong> {movie.Genre}</p>
// //           <p><strong>Plot:</strong> {movie.Plot}</p>
// //           <p><strong>IMDb:</strong> {movie.imdbRating}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     maxWidth: "500px",
// //     margin: "30px auto",
// //     textAlign: "center",
// //     fontFamily: "Arial, sans-serif",
// //   },
// //   input: {
// //     padding: "10px",
// //     width: "70%",
// //     borderRadius: "5px",
// //     border: "1px solid #ccc",
// //   },
// //   button: {
// //     padding: "10px 15px",
// //     marginLeft: "10px",
// //     border: "none",
// //     backgroundColor: "#007bff",
// //     color: "#fff",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //   },
// //   card: {
// //     marginTop: "30px",
// //     padding: "20px",
// //     border: "1px solid #ddd",
// //     borderRadius: "8px",
// //     boxShadow: "0 0 10px #ccc",
// //     backgroundColor: "#f9f9f9",
// //   },
// //   poster: {
// //     width: "200px",
// //     borderRadius: "8px",
// //     marginBottom: "10px",
// //   },
// // };












// import { useState } from "react";
// import { MovieCard } from "./MovieCard";

// export function MovieSearch() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [movie, setMovie] = useState(null);
//   const [error, setError] = useState("");

//   const handleSearch = async () => {
//     if (!searchTerm.trim()) {
//       setError("Please enter a movie name.");
//       setMovie(null);
//       return;
//     }

//     const response = await fetch(
//       `https://www.omdbapi.com/?apikey=2f6435d9&t=${searchTerm}`
//     );
//     const data = await response.json();

//     if (data.Response === "True") {
//       setMovie(data);
//       setError("");
//     } else {
//       setMovie(null);
//       setError("Movie not found.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <input
//         type="text"
//         placeholder="Search a movie..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={styles.input}
//       />
//       <button onClick={handleSearch} style={styles.button}>
//          Search
//       </button>

//       {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

//       {movie && <MovieCard movie={movie} />}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: "500px",
//     margin: "30px auto",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//   },
//   input: {
//     padding: "10px",
//     width: "70%",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     padding: "10px 15px",
//     marginLeft: "10px",
//     border: "none",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };


import { useState } from "react";
import { MovieCard } from "./MovieCard";

export function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a movie name.");
      setMovie(null);
      return;
    }

    setLoading(true);
    setError("");
    setMovie(null);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=2f6435d9&t=${searchTerm}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovie(data);
      } else {
        setError("Movie not found.");
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
    }

    setLoading(false);
  };

  const handleClear = () => {
    setSearchTerm("");
    setMovie(null);
    setError("");
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "20px" }}>Search Movie Here</h2>

      <input
        type="text"
        placeholder="Enter movie name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.input}
      />
      <div style={styles.buttonGroup}>
  <button onClick={handleSearch} style={styles.button}>
     Search
  </button>
  <button onClick={handleClear} style={styles.clearButton}>
     Clear
  </button>
</div>



      {loading && <p style={{ marginTop: "20px" }}>Loading...</p>}
      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {movie && <MovieCard movie={movie} />}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "30px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    padding: "10px",
    width: "65%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    marginLeft: "10px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  clearButton: {
    padding: "10px 15px",
    marginLeft: "10px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonGroup: {
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
}
};
