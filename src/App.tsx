import { useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Header from "./components/header/header/headermain";
import cities from "./cities.json";
import MapWrapper from "./components/mapwrapper/MapWrapper";
import ComboBox from "./components/AutoComplete.tsx/DropDown";
import LightModeIcon from "@mui/icons-material/LightMode";
import { BarChart } from "@mui/x-charts";

function App() {
  const [count, setCount] = useState(0);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#000000" : "#FFFFFF",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const citys = [
    {
      locality: "Örebro",
      municipality: "Örebro",
      county: "Örebro",
      latitude: 59.274737,
      longitude: 15.214998,
    },
    {
      locality: "Öregrund",
      municipality: "Östhammar",
      county: "Uppsala",
      latitude: 60.338115,
      longitude: 18.442181,
    },
    {
      locality: "Örkelljunga",
      municipality: "Örkelljunga",
      county: "Skåne",
      latitude: 56.283976,
      longitude: 13.278452,
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#D7E4E4",
        fontSize: 50,
        fontWeight: "Bold",
        textAlign: "center",
        marginLeft: 20,
      }}
    >
      <Grid container spacing={12}>
        <Grid item xs={6} sm={8} md={12}>
          <div>
            <Header text="Kartprojekt" />
          </div>
        </Grid>
        <Grid item xs={6} sm={8} md={8}>
          <Item>
            <MapWrapper
              points={cities}
              center={[57.707232, 11.967017]}
              zoom={10}
            ></MapWrapper>
          </Item>
        </Grid>
        <Grid item xs={6} sm={8} md={4}>
          <Item>
            <Stack spacing={2}>
              <ComboBox></ComboBox>
              <Button variant="outlined">Sök</Button>
              <Button variant="outlined">Lägg till</Button>
              <LightModeIcon />
            </Stack>
            <Item>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["Jan", "Feb", "Mars", "April"],
                  },
                ]}
                series={[
                  { data: [4, 3, 5, 1] },
                  { data: [1, 6, 3, 4] },
                  { data: [2, 5, 6, 7] },
                  { data: [2, 5, 6, 10] },
                ]}
                width={300}
                height={300}
              />
            </Item>
          </Item>
        </Grid>
        <Grid item xs={6} sm={8} md={12}>
          <Item>Telge Energi, Storgatan 42</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
