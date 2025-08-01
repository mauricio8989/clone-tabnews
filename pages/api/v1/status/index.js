function status(req, res) {
  res.status(200).json({
    alunos: "Acima da média",
  });
}

export default status;
