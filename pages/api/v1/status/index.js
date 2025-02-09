import database from "infra/database";
async function status(req, res, next) {
  const version = await database.query("SHOW server_version;");
  const maxConnection = await database.query("SHOW max_connections;");

  const databaseName = process.env.POSTGRES_DB;

  const usedConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  res.status(200).json({
    dependencies: {
      database: {
        version: version.rows[0].server_version,
        maxconnection: parseInt(maxConnection.rows[0].max_connections),
        usedconnections: usedConnections.rows[0].count,
      },
    },
  });
}

export default status;
