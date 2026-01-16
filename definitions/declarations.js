// This file links your Source Tables to Dataform so ${ref()} works.
//const schema = "mainframe_raw"; // Make sure your BigQuery dataset is named this!
//const database = "sqlxproject";

const config = require('../includes/issko_config');

declare({
  database: config.databaseName, // Replace with your actual Project ID
  schema: config.schemaName,      // Replace with the dataset where COBOL data lives
  name: "R2SOCV0",
  description: "Raw COBOL Table: R2SOC"
});

declare({
  database: config.databaseName,
  schema: config.schemaName,
  name: "RESTOV0",
  description: "Raw COBOL Table: RESTO"
});

declare({
  database: config.databaseName,
  schema: config.schemaName,
  name: "TACOP",
  description: "Raw COBOL Table: TACOP (Coefficients)"
});

declare({
  database: config.databaseName,
  schema: config.schemaName,
  name: "LSLOGV0",
  description: "Raw COBOL Table: LSLOG (Product Mapping)"
});