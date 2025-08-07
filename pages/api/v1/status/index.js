import database from "infra/database.js";

async function status(req, res) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(result.rows[0]);
  res.status(200).json({
    alunos: "Acima da média",
  });
}

export default status;
