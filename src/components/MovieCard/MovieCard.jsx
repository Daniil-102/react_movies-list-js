import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card" data-cy="Movie">
    <div className="card-image" data-cy="MovieCardImageContainer">
      <figure className="image is-4by3">
        <img
          data-cy="MovieImage"
          src={movie.imgUrl}
          alt={`${movie.title} poster`}
        />
      </figure>
    </div>

    <div className="card-content" data-cy="MovieCardContent">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="images/imdb-logo.jpeg" alt="IMDb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-8" data-cy="MovieTitle">
            {movie.title}
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">
          {movie.description}
        </p>

        <a
          href={movie.imdbUrl}
          data-cy="MovieLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          IMDb
        </a>
      </div>
    </div>
  </div>
);
