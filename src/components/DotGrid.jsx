import React from "react";
import { Box } from "@mui/material";

function DotGrid({ color, rows = 5, cols = 8 }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {Array.from({ length: rows }).map((_, r) => (
        <Box key={r} sx={{ display: "flex", gap: "6px" }}>
          {Array.from({ length: cols }).map((_, c) => (
            <Box
              key={c}
              sx={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                backgroundColor: color,
                opacity: 0.7,
              }}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default DotGrid;