import { Box, Stack, SwipeableDrawer } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import allProduct from "../data/allProducts.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, openCart, cartItems } = useShoppingCart();

  const list = () => (
    <Box width={350} px={1} role="presentation">
      <h1 className="text-2xl font-bold">Cart</h1>
      <Stack spacing={2}>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="flex justify-end font-bold text-lg">
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = allProduct.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </Stack>
    </Box>
  );

  return (
    <>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={closeCart}
        onOpen={openCart}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
};
