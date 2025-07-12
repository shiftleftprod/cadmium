const gameData = {
  questions: [
    {
      id: 1,
      question:
        "Au + proche, sur 95 réponses combien ont répondu 'Steve' à la question 'Quel est le combattant le + fort du jeu ?'",
      answers: {
        1: { id: 1, text: "79", votes: "83%" },
      },
    },
    {
      id: 2,
      question: "Qui est le combattant le plus facile a prendre en main ?",
      answers: {
        1: { id: 1, text: "Lucina", votes: 19 },
        2: { id: 2, text: "Kirby", votes: 11 },
        3: { id: 3, text: "Pit", votes: 7 },
        4: { id: 4, text: "Aegis", votes: 6 },
        5: { id: 5, text: "Mario", votes: 6 },
      },
    },
    {
      id: 3,
      question: "Quel personnage mérite un buff ?",
      answers: {
        1: { id: 1, text: "Ganondorf", votes: 6 },
        2: { id: 2, text: "Marth", votes: 4 },
        3: { id: 3, text: "Ike", votes: 3 },
        4: { id: 4, text: "Sheik", votes: 3 },
        5: { id: 5, text: "Rondoudou", votes: 3 },
      },
    },
    {
      id: 4,
      question: "Quel est le combattant que vous détestez le plus affronter ?",
      answers: {
        1: { id: 1, text: "MinMin", votes: 9 },
        2: { id: 2, text: "Kazuya", votes: 7 },
        3: { id: 3, text: "Bayonetta", votes: 6 },
        4: { id: 4, text: "Steve", votes: 5 },
      },
    },
    {
      id: 5,
      question: "Quel combattant faut il prendre si on a un style bourrin ?",
      answers: {
        1: { id: 1, text: "Roy", votes: 31 },
        2: { id: 2, text: "Little Mac", votes: 9 },
        3: { id: 3, text: "Félinferno", votes: 6 },
        4: { id: 4, text: "DK", votes: 5 },
        5: { id: 4, text: "Bowser", votes: 5 },
      },
    },
    {
      id: 6,
      question: "Quel personnage n'aurait pas dû être dans smash ?",
      answers: {
        1: { id: 1, text: "Steve", votes: 20 },
        2: { id: 2, text: "MinMin", votes: 7 },
        3: { id: 3, text: "Sora", votes: 4 },
        4: { id: 4, text: "Kazuya", votes: 3 },
      },
    },
    {
      id: 7,
      question:
        "Citez moi 7 des personnages les + moches selon le panel (sur 94 réponses).",
      answers: {
        1: { id: 1, text: "Olimar", votes: 11 },
        2: { id: 2, text: "Steve", votes: 10 },
        3: { id: 3, text: "Ridley", votes: 8 },
        4: { id: 4, text: "King K Rool", votes: 8 },
        5: { id: 4, text: "Villageois", votes: 6 },
        6: { id: 4, text: "Game & Watch", votes: 6 },
        7: { id: 4, text: "Simon", votes: 6 },
      },
    },
    {
      id: 8,
      question: "Quel est le combattant le plus dur à prendre en main ?",
      answers: {
        1: { id: 1, text: "Peach / Daisy", votes: 0 },
        2: { id: 2, text: "Ice Climbers", votes: 0 },
        3: { id: 3, text: "Sheik", votes: 0 },
        4: { id: 4, text: "Olimar", votes: 0 },
        5: { id: 4, text: "Harmonie et Luma", votes: 0 },
      },
    },
    {
      id: 9,
      question:
        "Quel combattant faut il jouer si j'ai un style plus pose et reflechi ?",
      answers: {
        1: { id: 1, text: "Pac Man", votes: 13 },
        2: { id: 2, text: "Samus", votes: 8 },
        3: { id: 3, text: "Wario", votes: 8 },
        4: { id: 3, text: "Lucina", votes: 7 },
        5: { id: 3, text: "Olimar", votes: 6 },
      },
    },
    {
      id: 10,
      question: "Quel personnage aurait dû être dans smash?",
      answers: {
        1: { id: 1, text: "Waluigi", votes: 10 },
        2: { id: 2, text: "Rayman", votes: 6 },
        3: { id: 3, text: "Le chasseur de Monster Hunter", votes: 5 },
        4: { id: 4, text: "Hollow Knight / Hornet", votes: 3 },
      },
    },
    {
      id: 11,
      question: "Quel est le perso le plus hype du jeu ?",
      answers: {
        1: { id: 1, text: "Joker", votes: 7 },
        2: { id: 2, text: "Captain Falcon", votes: 5 },
        3: { id: 3, text: "Rondoudou", votes: 4 },
        4: { id: 4, text: "Fox", votes: 3 },
        5: { id: 5, text: "Sheik", votes: 3 },
        6: { id: 5, text: "Wolf", votes: 3 },
      },
    },
    {
      id: 12,
      question: "Quel personnage est régulièrement sous-estimé ?",
      answers: {
        1: { id: 1, text: "Little Mac", votes: 12 },
        2: { id: 2, text: "Dr. Mario", votes: 4 },
        3: { id: 3, text: "Rondoudou", votes: 3 },
        4: { id: 4, text: "Pikachu", votes: 3 },
        5: { id: 5, text: "Kirby", votes: 3 },
      },
    },
    {
      id: 13,
      question:
        "Citez-moi, pour chaque édition, qui a été le gagnant du Flamin'GOAT.",
      answers: {
        1: { id: 1, text: "Eko", votes: 1 },
        2: { id: 2, text: "Flynn", votes: 2 },
        3: { id: 3, text: "Oxyzz", votes: 3 },
        4: { id: 3, text: "Kajou", votes: 4 },
        5: { id: 3, text: "Yas As1", votes: 5 },
        6: { id: 3, text: "Eko", votes: 6 },
        7: { id: 3, text: "fm", votes: 7 },
        8: { id: 3, text: "PeW", votes: 8 },
      },
    },
    {
      id: 14,
      question: "Qui va gagner le Flamin'Goat #9 ?",
      answers: {
        1: { id: 1, text: "Que_ni_ni", votes: 20 },
        2: { id: 2, text: "Yas as1", votes: 7 },
        3: { id: 3, text: "Kajou", votes: 6 },
        4: { id: 3, text: "KID", votes: 3 },
        5: { id: 3, text: "Joj", votes: 3 },
      },
    },
    {
      id: 15,
      question:
        "Qui sont les joueurs ayant fait le + de top 8 au Flamin'Goat ? (1pt supp si nombre exact de top 8) ?",
      answers: {
        1: { id: 1, text: "Que_ni_ni", votes: 48 },
        2: { id: 2, text: "Yas as1", votes: 46 },
        3: { id: 3, text: "Kajou", votes: 30 },
        4: { id: 4, text: "Elfo", votes: 28 },
        5: { id: 5, text: "Goison", votes: 12 },
      },
    },
    {
      id: 16,
      question: "Qui va gagner le Parthénon V ?",
      answers: {
        1: { id: 1, text: "KID", votes: 28 },
        2: { id: 2, text: "Yas As1", votes: 3 },
        3: { id: 3, text: "Kajou", votes: 3 },
        4: { id: 4, text: "HaluA", votes: 2 },
      },
    },
    {
      id: 17,
      question:
        "Quels sont les personnages ayant eu le + de games lors des Flamin'GOAT ?",
      answers: {
        1: { id: 1, text: "Bowser", votes: 378 },
        2: { id: 2, text: "Link", votes: 326 },
        3: { id: 3, text: "Mario", votes: 323 },
        4: { id: 4, text: "R.O.B", votes: 316 },
        5: { id: 5, text: "Joker", votes: 304 },
      },
    },
    {
      id: 18,
      question:
        "Quels sont les joueurs ayant fait le plus de GAME aux différents Flamin'Goat ?",
      answers: {
        1: { id: 1, text: "Yas As1", votes: 173 },
        2: { id: 2, text: "Que_ni_ni", votes: 169 },
        3: { id: 3, text: "Orik", votes: 158 },
        4: { id: 3, text: "ZeroFK", votes: 150 },
        5: { id: 3, text: "Goison", votes: 140 },
      },
    },
    {
      id: 19,
      question:
        "Quels sont les 2 jeux sortis sur Switch préféré de la commu ? Et quel est le jeu de combat (hors SSBU) préféré de la commu ?",
      answers: {
        1: { id: 1, text: "Zelda BOTW", votes: 14 },
        2: { id: 2, text: "SSBU", votes: 19 },
        3: { id: 3, text: "Street Fighter 6", votes: 6 },
      },
    },
    {
      id: 20,
      question: "Qui est le + gros hidden boss de l'Occitanie ?",
      answers: {
        1: { id: 1, text: "TatshPLS", votes: 5 },
        2: { id: 2, text: "Yarnos", votes: 5 },
        3: { id: 3, text: "Kajou", votes: 3 },
        4: { id: 4, text: "Flynn", votes: 3 },
        5: { id: 4, text: "Gerudo", votes: 2 },
      },
    },
    {
      id: 21,
      question: "Quel casteur représente le mieux le sud ?",
      answers: {
        1: { id: 1, text: "Kerriamh", votes: 27 },
        2: { id: 2, text: "Rooskas", votes: 14 },
        3: { id: 3, text: "Browkoo", votes: 6 },
        4: { id: 3, text: "Next", votes: 4 },
        5: { id: 3, text: "Poade", votes: 3 },
      },
    },
    {
      id: 22,
      question: "Qui de la commu Occitane à des takes désastreuses ?",
      answers: {
        1: { id: 1, text: "Layzz", votes: 15 },
        2: { id: 2, text: "Goison", votes: 5 },
        3: { id: 2, text: "Blitz0", votes: 4 },
        4: { id: 2, text: "Aabi", votes: 4 },
      },
    },
    {
      id: 23,
      question: "Qui a le pseudo le + marrant ?",
      answers: {
        1: { id: 1, text: "Pipibox", votes: 9 },
        2: { id: 2, text: "TarteAuPastek", votes: 4 },
        3: { id: 3, text: "Foie Gras Poêlé", votes: 3 },
        4: { id: 4, text: "Poutre", votes: 3 },
        5: { id: 4, text: "Larry le malic'Her 34", votes: 3 },
        6: { id: 4, text: "Vends Peugeot 205", votes: 3 },
      },
    },
    {
      id: 24,
      question: "Qui est le cauchemar des TOs ?",
      answers: {
        1: { id: 1, text: "Djevebran", votes: 14 },
        2: { id: 2, text: "BigFroa", votes: 13 },
        3: { id: 3, text: "Amine", votes: 12 },
        4: { id: 4, text: "Kajou", votes: 11 },
        5: { id: 4, text: "Next", votes: 11 },
      },
    },
    {
      id: 25,
      question:
        "Quel est LE personnage qui a la playerbase la plus nulle selon le sondage et quels sont (HORS STEVE), les 2 persos les + débiles du jeu ?",
      answers: {
        1: { id: 1, text: "Playerbase : Pikachu", votes: 9 },
        2: { id: 2, text: "Débiles : Luigi et Kazuya", votes: 6 },
      },
    },
    {
      id: 26,
      question: "Qui ressemble le plus a son main ?",
      answers: {
        1: { id: 1, text: "Bizaute", votes: 15 },
        2: { id: 2, text: "Pipibox", votes: 5 },
        3: { id: 2, text: "Que_ni_ni", votes: 4 },
        4: { id: 2, text: "Yarnos", votes: 3 },
        5: { id: 2, text: "Alcatrazz", votes: 3 },
        6: { id: 2, text: "BigFroa", votes: 3 },
      },
    },
    {
      id: 27,
      question: "Quel Top Player porte à lui tout seul toute une playerbase ?",
      answers: {
        1: { id: 1, text: "KID", votes: 8 },
        2: { id: 2, text: "Glutonny", votes: 6 },
        3: { id: 2, text: "Sparg0", votes: 6 },
        4: { id: 2, text: "Kajou", votes: 5 },
        5: { id: 2, text: "TofChirst", votes: 4 },
        6: { id: 2, text: "Yas As1", votes: 4 },
      },
    },
    {
      id: 28,
      question: "Quel est le meilleur format de Side Event ?",
      answers: {
        1: { id: 1, text: "2v2", votes: 12 },
        2: { id: 2, text: "Squad Strike", votes: 12 },
        3: { id: 2, text: "Ladder", votes: 10 },
        4: { id: 2, text: "Amateur Bracket", votes: 8 },
        5: { id: 2, text: "Crew Battle", votes: 6 },
      },
    },
    {
      id: 29,
      question: "Qui est le Good Guy ultime de la communauté ?",
      answers: {
        1: { id: 1, text: "Trozer", votes: 8 },
        2: { id: 2, text: "Kerriamh", votes: 7 },
        3: { id: 2, text: "Pipibox", votes: 8 },
        4: { id: 2, text: "Plapla", votes: 5 },
        5: { id: 2, text: "Rooskas", votes: 3 },
      },
    },
    {
      id: 30,
      question: "Quelle est la mécanique la plus dure du jeu ?",
      answers: {
        1: { id: 1, text: "La Tech", votes: 11 },
        2: { id: 2, text: "Descendre de la platform", votes: 5 },
        3: { id: 2, text: "Peach", votes: 4 },
        4: { id: 2, text: "Les douches", votes: 4 },
        5: { id: 2, text: "Desync lces", votes: 4 },
      },
    },
  ],
};

export default gameData;

