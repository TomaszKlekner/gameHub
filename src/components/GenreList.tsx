import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCropedImageUrl from '../services/image-url';

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <div>
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
