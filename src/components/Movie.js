import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({coverImg, title, summary, genres, id, year}) {
  return (
  <div key={id} className={styles.movie}>
    <img src={coverImg} alt={title} />
    <div>
      <h2 className={styles.movie__title}>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres?.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  </div>
  )
}

Movie.proTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;