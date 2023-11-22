let squadre = [
  {
    nome: "fiorentina",
    punti: 0,
    falli: 0,
  },
  {
    nome: "juventus",
    punti: 0,
    falli: 0,
  },
  {
    nome: "inter",
    punti: 0,
    falli: 0,
  },
  {
    nome: "milan",
    punti: 0,
    falli: 0,
  },
  {
    nome: "roma",
    punti: 0,
    falli: 0,
  },
  {
    nome: "napoli",
    punti: 0,
    falli: 0,
  },
  {
    nome: "lazio",
    punti: 0,
    falli: 0,
  },
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

squadre.forEach((squadra) => {
  squadra.punti = getRndInteger(1, 90);
  squadra.falli = getRndInteger(1, 100);
});

let nomiEFalli = squadre.map(({ nome, falli }) => ({ nome, falli }));
console.log(nomiEFalli);
