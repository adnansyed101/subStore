import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgurl: string;
};

export const StoreItem = ({ id, name, price, imgurl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <Card sx={{ h: 100 }}>
      <CardMedia
        image={imgurl}
        title={name}
        sx={{ height: "200px", objectFit: "cover" }}
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="h6" sx={{ mx: "2px" }}>
          {formatCurrency(price)}
        </Typography>
      </CardContent>
      <div className="mt-auto p-2">
        {quantity === 0 ? (
          <Button
            variant="contained"
            onClick={() => increaseCartQuantity(id)}
            fullWidth={true}
            className="bg-blue-500"
          >
            + Add to Cart
          </Button>
        ) : (
          <div className="flex items-center flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="contained"
                className="bg-blue-500"
                onClick={() => decreaseCartQuantity(id)}
                size="medium"
              >
                -
              </Button>
              <div>
                <Typography variant="h6" component="span">
                  {quantity}
                </Typography>{" "}
                in cart
              </div>
              <Button
                variant="contained"
                className="bg-blue-500"
                onClick={() => increaseCartQuantity(id)}
                size="medium"
              >
                +
              </Button>
            </div>
            <Button
              variant="contained"
              color="error"
              className="bg-red-500"
              size="small"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
