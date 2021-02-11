export const transport = [
  {
    id: "0",
    name: "Междугородний транспорт",
    enName: "BetweenCountry",
    variants: [
      {
        id: "0",
        name: "Калуга-Товарково",
        routes: [
          {
            id: 0,
            name: "5:17",
            halt: [
              {
                id: "0",
                name: "Калуга,автовокзал",
                time: "5-17",
              },
              {
                id: "1",
                name: "Калуга, 6 школа",
                time: "5-28",
              },
              {
                id: "2",
                name: '"Калуга-Бор", санаторий',
                time: "5-30",
              },
            ],
          },
          {
            id: 1,
            name: "5:20",
            halt: [
              {
                id: "0",
                name: "Калуга,автовокзал",
                time: "5-30",
              },
              {
                id: "1",
                name: "Калуга, 6 школа",
                time: "5-33",
              },
              {
                id: "2",
                name: '"Лесная Сказка", санаторий',
                time: "5-35",
              },
              {
                id: "2",
                name: '"Сокол", санаторий',
                time: "5-36",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const countryTransport = [
  {
    id: "0",
    name: "29",
    routes: [
      {
        id: 0,
        name: "5:17",
        halt: [
          {
            id: "0",
            name: "Калуга,автовокзал",
            time: "5-17",
          },
          {
            id: "1",
            name: "Калуга, 6 школа",
            time: "5-28",
          },
          {
            id: "2",
            name: "Кошелев проект",
            time: "6-00",
          },
        ],
      },
    ],
  },
  {
    id: "1",
    name: "44",
    routes: [
      {
        id: 0,
        name: "5:17",
        halt: [
          {
            id: "0",
            name: "Калуга,автовокзал",
            time: "5-17",
          },
          {
            id: "1",
            name: "Калуга, 6 школа",
            time: "5-28",
          },
          {
            id: "2",
            name: "Кошелев проект",
            time: "6-00",
          },
        ],
      },
    ],
  },
];
