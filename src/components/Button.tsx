import { ReactNode } from 'react';

interface Props {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ color = 'primary', onClick, children }: Props) => {
  return (
    <button type='button' className={'btn ' + 'btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
