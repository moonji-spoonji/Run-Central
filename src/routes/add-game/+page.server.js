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
        db.prepare("INSERT INTO games (name, genre_id, image) VALUES (@name, @genre_id, @image)").run({name: formData.get("gameName"), image: file_name, genre_id: +formData.get("genre") });
        // parseInt(formData.get("genre"));
        // +formData parses the data 
        // genre is referring to the name in the select statement in +page.svelte
    }
}