import { db } from "$lib/utils/db";
// @type {import('./$types').Actions};

export async function load() {
    // either Runner, Moderator, or Administrator
    // const users = db.prepare("SELECT DISTINCT user_type FROM users").all();
    // return {users}
}

export const actions = {
    // @ts-ignore
    default: async ({request}) => {
        const formData = await request.formData();
        console.log(formData)
        
        const get_email = formData.get("email");
        const correct_email = db.prepare("SELECT email FROM users WHERE email = ?").get(get_email);
        console.log(correct_email);

        const get_password = formData.get("password");
        const correct_password = db.prepare("SELECT password FROM users WHERE password = ?").get(get_password);
        console.log(correct_password);
    }
}