const welcomePage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sommelier Path API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          background-color: #f4f4f9;
          color: #333;
          margin: 0;
          padding: 0;
        }
        header {
          background-color: #267dc2;
          color: white;
          padding: 1rem 0;
          text-align: center;
        }
        header h1 {
          margin: 0;
        }
        main {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 10px 0;
        }
        a {
          text-decoration: none;
          color: #267dc2;
        }
        a:hover {
          text-decoration: underline;
        }
        .section-title {
          margin-top: 20px;
          padding-top: 10px;
          border-top: 2px solid #ddd;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>WELCOME TO SOMMELIER PATH API</h1>
      </header>
      <main>
        <p>Explore the available routes below:</p>
        <p>Consider the base route: sommelierpath-2.onrender.com/api/v1</p>

        <section>
          <h2 class="section-title">User Routes</h2>
          <ul>
            <li><a href="/users">GET /users</a> - Fetch a list of all users</li>
            <li><a href="/users/:id">GET /users/:id</a> - Fetch details of a specific user</li>
            <li><a href="/users">POST /users</a> - Create a new user</li>
            <li><a href="/users/:id">PUT /users/:id</a> - Update a user role (admin only)</li>
            <li><a href="/users/:id">DELETE /users/:id</a> - Delete a user (admin only)</li>
          </ul>
        </section>

        <section>
          <h2 class="section-title">Configuracao Routes</h2>
          <ul>
            <li><a href="/configuracao">GET /configuracao</a> - Fetch all wine-tasting configurations</li>
            <li><a href="/configuracao/:id">GET /configuracao/:id</a> - Fetch details of a specific configuration</li>
            <li><a href="/configuracao">POST /configuracao</a> - Create a new configuration</li>
            <li><a href="/configuracao/:id">PUT /configuracao/:id</a> - Update a configuration</li>
            <li><a href="/configuracao/:id">DELETE /configuracao/:id</a> - Delete a configuration</li>
          </ul>
        </section>

        <section>
          <h2 class="section-title">Avaliacao Routes</h2>
          <ul>
            <li><a href="/avaliacao">GET /avaliacao</a> - Fetch all evaluations</li>
            <li><a href="/avaliacao/:id">GET /avaliacao/:id</a> - Fetch details of a specific evaluation</li>
            <li><a href="/avaliacao">POST /avaliacao</a> - Create a new evaluation</li>
            <li><a href="/avaliacao/:id">PUT /avaliacao/:id</a> - Update an evaluation</li>
            <li><a href="/avaliacao/:id">DELETE /avaliacao/:id</a> - Delete an evaluation</li>
          </ul>
        </section>

        <section>
          <h2 class="section-title">Authentication Routes</h2>
          <ul>
            <li><a href="/login">POST /login</a> - User login to authenticate and receive a token</li>
            <li><a href="/user">GET /user</a> - Retrieve user information (requires valid token)</li>
          </ul>
        </section>
      </main>
    </body>
    </html>
  `.replaceAll('\n','');

module.exports = { welcomePage };

