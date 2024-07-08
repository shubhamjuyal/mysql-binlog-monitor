<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--   <title>MySQL Binlog Monitor README</title> -->
</head>
<body>
  <h1>MySQL Binlog Monitor</h1>
  <p>This project monitors changes in a MySQL database using binlog events. It leverages Express.js for the server and <code>@rodrigogs/mysql-events</code> for binlog event monitoring.</p>

  <h2>Prerequisites</h2>
  <ul>
    <li>Node.js (version 14 or later)</li>
    <li>MySQL server</li>
  </ul>

  <h2>Getting Started</h2>
  <p>Follow these instructions to set up and run the project.</p>

  <h3>Installation</h3>
  <ol>
    <li>
      <strong>Clone the Repository</strong>
      <pre><code>git clone https://github.com/shubhamjuyal/mysql-binlog-monitor.git
cd mysql-binlog-monitor</code></pre>
    </li>
    <li>
      <strong>Install Dependencies</strong>
      <pre><code>npm install</code></pre>
    </li>
  </ol>

  <h3>Configuration</h3>
  <p>Update the database connection details in <code>./src/sql-service.js</code>:</p>
  <pre><code>const connection = createConnection({
  host: 'your-database-host',
  port: 3306,
  user: 'your-database-user',
  password: 'your-database-password',
  database: 'your-database-name',
});</code></pre>

  <h3>Running the Server</h3>
  <p>To start the server, run the following command:</p>
  <pre><code>npm run dev</code></pre>
  <p>This will start the server using <code>nodemon</code>, which automatically restarts the server when file changes are detected.</p>

  <h3>Running in Production</h3>
  <p>To run the server in production mode, use:</p>
  <pre><code>npm start</code></pre>
</body>
</html>
