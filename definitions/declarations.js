// This file links your Source Tables to Dataform so ${ref()} works.
const schema = "mainframe_raw"; // Make sure your BigQuery dataset is named this!
const database = "sqlxproject";


declare({
  database: database, // Replace with your actual Project ID
  schema: schema,      // Replace with the dataset where COBOL data lives
  name: "R2SOCV0",
  description: "Raw COBOL Table: R2SOC"
});

declare({
  database: database,
  schema: schema,
  name: "RESTOV0",
  description: "Raw COBOL Table: RESTO"
});

declare({
  database: database,
  schema: schema,
  name: "TACOP",
  description: "Raw COBOL Table: TACOP (Coefficients)"
});

declare({
  database: database,
  schema: schema,
  name: "LSLOGV0",
  description: "Raw COBOL Table: LSLOG (Product Mapping)"
});