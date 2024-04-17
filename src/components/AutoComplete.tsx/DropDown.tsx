import { Autocomplete, Box, TextField } from "@mui/material";
import cities from "../../cities.json";
import { SyntheticEvent } from "react";
import React from "react";

interface ICity {
  latitude: number;
  longitude: number;
  locality: string;
  county: string;
  municipality: string;
}

export default function CountrySelect() {
  const [selectedLocal, setSelectedLocal] = React.useState<ICity | null>(null);
  const [inputLocal, setInputLocal] = React.useState<string>("");
  console.log("inputLocal", inputLocal);
  console.log("selectedLocal", selectedLocal);

  return (
    <div className="CountrySelect">
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 200 }}
        options={cities}
        inputValue={inputLocal}
        onInputChange={(event, newInputValue) => {
          setInputLocal(newInputValue);
        }}
        onChange={(event: any, newValue: ICity | null) => {
          setSelectedLocal(newValue);
        }}
        autoHighlight
        getOptionLabel={(option) => option.locality}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            {option.locality}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Välj en ort"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
          />
        )}
      />
      {/* </select> */}
    </div>
  );
}
