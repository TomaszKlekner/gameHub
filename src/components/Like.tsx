import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface Props {
  color?: string;
  size: string | number;
  onClick: () => void;
}

const Like = ({ color = 'black', size, onClick }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleStatus = () => {
    setIsLiked(!isLiked);
    onClick();
  };

  return (
    <>
      {isLiked ? (
        <FaHeart color={color} size={size} onClick={toggleStatus} />
      ) : (
        <FaRegHeart color={color} size={size} onClick={toggleStatus} />
      )}
    </>
  );
};

export default Like;
