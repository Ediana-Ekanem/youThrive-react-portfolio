import nodejs from "/assets/icons/node.png";
import mysql from "/assets/icons/sql.svg";
import mongodb from "/assets/icons/mongoDB.png";
import typescript from "/assets/icons/tsc.png";

let id = 0;

export const learningList = [
  {
    id: id++,
    img: nodejs,
    title: "NODEJS",
  },
  {
    id: id++,
    img: mysql,
    title: "MYSQL",
  },
  {
    id: id++,
    img: mongodb,
    title: "MONGODB",
  },
  {
    id: id++,
    img: typescript,
    title: "TYPESCRIPT",
  },
];
