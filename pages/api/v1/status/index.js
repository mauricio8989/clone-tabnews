import database from "infra/database";

async function status(req, res, next) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result);
  res
    .status(200)
    .json({ chave: "Alunos do curso.dev são alunos acima da média" });
}

export default status;
