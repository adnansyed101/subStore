import { Grid } from "@mui/material";
import streamingServices from "../data/streamingServices.json";
import { StoreItem } from "../components/StoreItem";

export const StreamingServices = () => {
  return (
    <div className="px-5">
      <h1 className="text-xl text-center py-2">Streaming Services</h1>
      <Grid container spacing={2}>
        {streamingServices.map((item) => (
          <Grid item xs={12} sm={6} lg={4} key={item.id}>
            <StoreItem {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
