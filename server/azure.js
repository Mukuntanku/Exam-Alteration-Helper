import sql from 'mssql';

const config = {
    user: 'mukuntan',
    password: 'Admin!admin',
    server: 'case-study-dbserver.database.windows.net',
    port: 1433,
    database: 'case-study-db',
    authentication: {
        type: 'default',
    },
    options: {
        encrypt: true,
    },
};

async function executeQuery() {
    try {
        // Create a new connection pool
        const pool = await sql.connect(config);

        // Query database
        const query = "SELECT * FROM employee";
        const result = await pool.request().query(query);

        // Process the result
        console.log(result.recordset);

    } catch (err) {
        // Handle errors
        console.error('Error executing query:', err.message);
    } finally {
        // Close the connection pool
        sql.close();
    }
}

// Call the function to execute the query
executeQuery();
