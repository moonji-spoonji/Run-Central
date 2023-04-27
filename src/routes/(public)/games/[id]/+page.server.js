import { db } from "$lib/utils/db";

// export async function load({params}) {
//     const id = params.id;
//     const game = db.prepare("SELECT * FROM games WHERE id = @id").get({id});
//     return {game}
// }

// async function load(){
//   const game_info = db.prepare("SELECT * FROM runs WHERE id = ?").get('id');
//   return {game_info}
// }

// could do a join 


export async function load({ params }) {
    const gameId = params.id;
  
    const runs = await db.prepare(`
      SELECT runs.*, users.username AS runner, COUNT(comments.id) AS comment_count
      FROM runs
      INNER JOIN users ON runs.user_id = users.id
      LEFT JOIN comments ON runs.id = comments.run_id
      WHERE runs.game_id = ?
      GROUP BY runs.id
      ORDER BY runs.duration ASC
    `).all(gameId);
  
    const game = await db.prepare("SELECT * FROM games WHERE id = ?").get(gameId);
  
    return {
      body: {
        runs
      }
    };
  }


