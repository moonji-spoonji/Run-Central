import { db } from "$lib/utils/db";

export async function load({params}) {
    const id = params.id;
    const game = db.prepare("SELECT * FROM games WHERE id = @id").get({id});
    return {game}
}

// could do a join 
