import { Grid } from "@mui/material";
import playstionCard from "../data/playstation.json";
import { StoreItem } from "../components/StoreItem";

export const Playstation = () => {
  return (
    <div className="px-5 m-2">
      <h1 className="text-xl text-center py-2">PlayStation Gift Cards</h1>
      <Grid container spacing={2}>
        {playstionCard.map((item) => (
          <Grid item xs={12} sm={6} lg={4} key={item.id}>
            <StoreItem {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
