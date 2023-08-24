import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Menu item 1</MenuItem>
        <MenuItem>Menu item 2</MenuItem>
        <MenuItem>Menu item 3</MenuItem>
        <MenuItem>Menu item 4</MenuItem>
        <MenuItem>Menu item 5</MenuItem>
        <MenuItem>Menu item 6</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
