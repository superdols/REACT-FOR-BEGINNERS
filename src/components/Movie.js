import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Movie({coverImg, title, summary, genres, id}) {
  return (
  <div key={id}>
    <img src={coverImg} alt={title} />
    <h2>
      <Link to={`movie/${id}`}>{title}</Link>
      </h2>
    <p>{summary}</p>
    <ul>
      {genres?.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </ul>
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