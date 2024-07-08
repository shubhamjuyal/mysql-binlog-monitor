const { createConnection } = require('mysql');
const MySQLEvents = require('@rodrigogs/mysql-events');

//connection details
const connection = createConnection({
    host: 'your-database-host',
    port: 3306,
    user: 'your-database-user',
    password: 'your-database-password',
    database: 'your-database-name',
});

//instance for binary-log streaming
const instance = new MySQLEvents(connection, {
    startAtEnd: true,
});

async function startLogMonitoring() {

    try {
        //starting the instance.
        instance.start()
            .then(() => {
                console.log('monitoring started for table "Employee"');
            })
            .catch((err) => {
                console.error('Error starting MySQLEvents:', err);
            });

        // trigger of the instance. 
        instance.addTrigger({
            name: 'test trigger',
            expression: 'growfit_non_prod.Employee', // database_name.table_name
            statement: MySQLEvents.STATEMENTS.ALL,
            onEvent: (e) => {
                console.log('Event:', e);
            },
        });
    } catch {
        //error handling
        instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, (err) => console.error('Connection Error:', err));
        instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, (err) => console.error('Zongji Error:', err));

        //stopping the instance
        process.on('SIGINT', async () => {
            console.log('Stopping MySQLEvents...');
            await instance.stop();
            process.exit();
        });
    }


}

module.exports = { startLogMonitoring };
