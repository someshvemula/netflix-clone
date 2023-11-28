import useMovies from "../hooks/useMovies";
import imageURLGenerator from "../services/url-generator";
import "./Row.css";
interface Props {
  title: string;
  url: string;
  isLargeRow: boolean;
}
const Row = ({ url, title, isLargeRow }: Props) => {
  const { data, error, isLoading } = useMovies(url);
  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__posters">
        {data?.results.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={imageURLGenerator(
              isLargeRow ? movie.backdrop_path : movie.poster_path
            )}
            alt="Image"
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
