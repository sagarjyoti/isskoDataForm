// This file links your Source Tables to Dataform so ${ref()} works.

declare({
  database: "your-gcp-project-id", // Replace with your actual Project ID
  schema: "your_raw_dataset",      // Replace with the dataset where COBOL data lives
  name: "R2SOCV0",
  description: "Raw COBOL Table: R2SOC"
});

declare({
  database: "your-gcp-project-id",
  schema: "your_raw_dataset",
  name: "RESTOV0",
  description: "Raw COBOL Table: RESTO"
});

declare({
  database: "your-gcp-project-id",
  schema: "your_raw_dataset",
  name: "TACOPV0",
  description: "Raw COBOL Table: TACOP (Coefficients)"
});

declare({
  database: "your-gcp-project-id",
  schema: "your_raw_dataset",
  name: "LSLOGV0",
  description: "Raw COBOL Table: LSLOG (Product Mapping)"
});