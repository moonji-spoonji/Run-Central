import  Database  from "better-sqlite3";


export const db = new Database("db.sqlite", {verbose: console.log})