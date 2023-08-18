interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 && (
        <ul>
          {cartItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}

      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default Cart;
