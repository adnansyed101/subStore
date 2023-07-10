import { Grid } from "@mui/material";
import storeItems from "../data/streamingServices.json";
import { StoreItem } from "../components/StoreItem";

export const Store = () => {
  return (
    <div className="px-5">
      <h1 className="text-xl">Store</h1>
      <Grid container spacing={2}>
        {storeItems.map((item) => (
          <Grid item xs={12} sm={6} lg={4} key={item.id}>
            <StoreItem {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
