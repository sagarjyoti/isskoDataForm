const databaseName = "sqlxproject";
const schemaName = "mainframe_raw";


const settings = {
    f_param : {
        type: "table",
        database: databaseName,
        schema : schemaName,
        name: "f_param",
        tags: ["control", "daily_processing"],
        description: "Control Table: Stores the Batch Processing Date (Replaces F-PARAM)"
    },

    date_window : {
        type : "view",
        database: databaseName,
        schema : schemaName,
        name: "date_window",
        tags: ["control", "daily_processing"],
        description: "Calculates the Extraction Window (CALCUL-DATE)",
    },
    lslog : {
        type: "view",
        database: databaseName,
        schema : schemaName,
        name: "lslog",
        tags: ["staging", "daily_processing"],
        description: "Staging: Product & Housing Mapping (Replaces LSLOGV0 Lookup)"
    },
    sto_base : {
        type: "view", 
        database: databaseName,
        schema : schemaName,
        name: "sto_base",
        tags: ["staging", "daily_processing"],
        description: "Staging: Main Stock Cursor (Replaces CURS-STO Join Logic)"
    },
    tacopV0 : {
        type: "view",
        database: databaseName,
        schema : schemaName,
        name: "tacopV0",
        tags: ["staging", "daily_processing"],
        description: "Staging: Coefficient Parameters (Replaces Memory Array T-TACOP)"
    },
    occ_rows : {
        type: "view",
        database: databaseName,
        schema : schemaName,
        name: "occ_rows",
        tags: ["intermediate", "daily_processing"],
        description: "Intermediate: Unpivots the 15 Periods (Columns to Rows)"
    },
    occ_days_o_temp : {
        type: "view",
        database: databaseName,
        schema : schemaName,
        name: "occ_days_o_temp",
        tags: ["intermediate", "daily_processing"],
        description: "This is a temp table before occ_days_o"
    },
    occ_days_o : {
        type: "view",
        database: databaseName,
        schema : schemaName,
        name: "occ_days_o",
        tags: ["intermediate", "daily_processing"],
        description: "Intermediate: Unpivots Days and filters for 'O' (Active) only",
    },
    occ_days_in_window : {
        type: "view", 
        database: databaseName,
        schema : schemaName,
        name: "occ_days_in_window",
        tags: ["intermediate", "daily_processing"],
        description: "Intermediate: Filter days based on Extraction Window (CALCUL-DATE logic)"
    },
    issko_calc_dispo : {
        type: "view",
        database: databaseName,
        schema : schemaName,
        name: "issko_calc_dispo",
        tags: ["intermediate", "daily_processing"],
        description: "Intermediate: Parsing Packed Numbers & Calculating Availability (CALC-DISPO)"
    },
    ISSKO : {
        type: "table",
        database: databaseName,
        schema : schemaName,
        name: "ISSKO",
        description: "Final Output: Stock Occupation (Replaces CHARG-ISSKO + WRITE)",
        tags: ["final", "daily_processing"],
        bigquery: {
            partitionBy: "DATOCC",
            clusterBy: ["CODPRD", "CODLGT"]
        }
    }
};

module.exports = { 
    settings,
    schemaName,
    databaseName
};