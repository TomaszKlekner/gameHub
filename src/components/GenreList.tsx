import { Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data: genres, error } = useGenres();
  return (
    <div>
      GenreList
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.slug}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
