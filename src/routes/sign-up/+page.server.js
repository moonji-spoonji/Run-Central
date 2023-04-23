import { db } from "$lib/utils/db";
// @type {import('./$types').Actions};

export async function load() {
    // either Runner, Moderator, or Administrator
    const users = db.prepare("SELECT DISTINCT user_type FROM users").all();
    return {users}
}

export const actions = {
    // @ts-ignore
    default: async ({request}) => {
        const formData = await request.formData();
        console.log(formData)
        db.prepare("INSERT INTO users (email, phone, first_name, last_name, password, user_type, username) VALUES (@email, @phone, @first_name, @last_name, @password, @user_type, @username)").run({email: formData.get("email"), phone: formData.get("phone"), first_name: formData.get("firstName"), last_name: formData.get("lastName"), password: formData.get("password"), user_type: formData.get("user_type"), username: formData.get("username")});

        // const users = db.prepare("INSERT INTO users (name, passsword) values (@name, @password)").run({name: formData.get("firstName"), password: "test"})
        // return{users}
    }
}







