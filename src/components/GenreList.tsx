import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCropedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
              <Button
                variant='link'
                fontSize='lg'
                style={{
                  whiteSpace: 'normal',
                  wordWrap: 'break-word',
                  textAlign: 'left',
                }}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
