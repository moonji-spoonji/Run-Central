import { db } from "$lib/utils/db";

export async function load() {
    const games = db.prepare("SELECT * FROM games").all();
    return {games}
}