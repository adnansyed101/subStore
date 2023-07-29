import { Button, Stack, Typography } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import streamingService from "../data/streamingServices.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = streamingService.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="row" className="flex items-center">
      <img src={item.imgurl} className="w-1/3 object-cover pr-2" />
      <div className="mr-auto">
        <div>
          <Typography variant="subtitle2">{item.name}</Typography>{" "}
          {quantity > 1 && (
            <Typography variant="caption">x{quantity}</Typography>
          )}
        </div>
        <Typography variant="caption">{formatCurrency(item.price)}</Typography>
      </div>
      <Typography variant="caption" className="pr-2">
        {formatCurrency(item.price * quantity)}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};
