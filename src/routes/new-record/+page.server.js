import fs from "fs/promises";   //fs = file system
import crypto from "crypto";
import { db } from "$lib/utils/db";

export async function load() {
    const genres = db.prepare("SELECT * FROM genres").all();
    return {genres}
}

export const actions = {
    // @ts-ignore
    //default is a common key word
    default: async ({request}) => {
        const formData = await request.formData();
        const img = formData.get("image");
        const ext = img.type === "image/jpeg" ? "jpg" : "jpg";
        console.log(img);
        const buffer = Buffer.from(await img.arrayBuffer());
        const file_name = `${crypto.randomUUID()}.${ext}`;
        await fs.writeFile(`static/assets/images/${file_name}`, buffer, "base64");
        console.log(formData)
        db.prepare("INSERT INTO runs (user_id, game_id, duration, genre) VALUES (@user_id, @game_id, @duration, @genre)").run({user_id: formData.get("gameName"), game_id: +formData.get("genre"), duration: formData.get("gameName"), genre: formData.get("gameName") });
        // parseInt(formData.get("genre"));
        // +formData parses the data 
        // genre is referring to the name in the select statement in +page.svelte
    }
}