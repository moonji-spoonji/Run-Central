// import fs from "fs/promises";   //fs = file system
// import crypto from "crypto";                                                                                                
import { db } from "$lib/utils/db";

export async function load() {
    const games = db.prepare("SELECT name FROM games").all();
    return {games} 

    // const genres = db.prepare("SELECT * FROM genres").all();
    // return {games, genres}
}

export const actions = {
    // @ts-ignore
    //default is a common key word
    default: async ({request}) => {
        const formData = await request.formData();
        // const user_id = formData.get("username");

        // 1. Query users table by email address submitted in the form (just a .run())
        // const foundUser =

        // 2. Extract user_id from #1
        // const user_id = foundUser.user_id

        

        // TO DO: FIND THE USER_ID THAT MATCHES THE USERNAME ENTERED IN THE FORM
        // const get_uid = "SELECT user_id FROM users WHERE ";

        // const actual_user_id = formData.get("username");
        // const uid = db.prepare("SELECT id FROM users WHERE username = ?").get(actual_user_id);
        // console.log(uid);

        // const actual_game_id = formData.get("game");
        // const game_name = formData.get("gameName");
        // console.log(game_name);

        // const gid = db.prepare("SELECT id FROM games WHERE name = ?").get(game_name);
        // const g_id = +gid;
        // console.log(gid);
        
        // const matched_genre = db.prepare("SELECT genre_id FROM games WHERE name = ?").get(game_name);
        // const matched_genre = db.prepare("SELECT genres.name FROM genres JOIN games ON genres.id = games.genre_id WHERE games.name = ?").get(game_name);
        // console.log(matched_genre);

        // db.prepare("INSERT INTO runs (user_id, game_id, duration, genre, status, verified_by, verified_at, removed_by, removed_at, video) VALUES (@user_id, @game_id, @duration, @genre, @status, @verified_by, @verified_at, @removed_by, @removed_at, @video)").run({user_id: uid, game_id: gid, duration: formData.get("duration"), genre: matched_genre, status: "pending", verified_by: "NULL, verified_at: "NULL", removed_by: "NULL", removed_at: "NULL", video: formData.get("video")});
        // db.prepare("INSERT INTO runs (user_id, game_id, duration, genre, status, verified_by, verified_at, removed_by, removed_at, video) VALUES (@user_id, @game_id, @duration, @genre, @status, NULL, NULL, NULL, NULL, @video)").run({user_id: uid, game_id: gid, duration: formData.get("duration"), genre: matched_genre, status: "pending", video: formData.get("video")});
        // db.prepare("INSERT INTO runs (user_id, game_id, duration, genre, status, verified_by, verified_at, removed_by, removed_at, video) VALUES (CAST(@user_id AS INTEGER), CAST(@game_id AS INTEGER), @duration, CAST(@genre_name AS TEXT), @status, NULL, NULL, NULL, NULL, @video)").run({user_id: uid, game_id: gid, duration: formData.get("duration"), genre_name: matched_genre, status: "pending", video: formData.get("video")});
        // db.prepare("INSERT INTO runs (user_id, game_id, duration, video, status, verified_by, verified_at, removed_by, removed_at) VALUES (@user_id, @game_id, @duration, @video @status, NULL, NULL, NULL, NULL)").run({email: formData.get("email"), game_name: formData.get("game_name"), duration: formData.get("duration"), video: formData.get("video"), status: "pending"});



        // parseInt(formData.get("genre"));
        // +formData parses the data 
        // genre is referring to the name in the select statement in +page.svelte
    }
}