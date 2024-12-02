function status(req, res, next) {
  res
    .status(200)
    .json({ chave: "Alunos do curso.dev são alunos acima da média" });
}

export default status;
