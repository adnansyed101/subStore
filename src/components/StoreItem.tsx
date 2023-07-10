import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgurl: string;
};

export const StoreItem = ({ id, name, price, imgurl }: StoreItemProps) => {
  const quantity = 0;
  return (
    <Card>
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
    </Card>
  );
};
