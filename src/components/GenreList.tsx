import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCropedImageUrl from '../services/image-url';

const GenreList = () => {
  const { data: genres, error } = useGenres();
  return (
    <div>
      GenreList
      {error && <Text>{error}</Text>}
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY='6px'>
            <HStack>
              <Image
                src={getCropedImageUrl(genre.image_background)}
                boxSize='32px'
                borderRadius={8}
              />
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
