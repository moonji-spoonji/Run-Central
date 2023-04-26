import { db } from "$lib/utils/db";

export async function load() {
    const runs = db.prepare("SELECT * FROM runs").all();
    return {runs}
}

// TO DO: SORT DURATION WITH SQL STATEMENT --> SELECT * FROM your_table ORDER BY time(strftime('%H:%M:%S', your_column)) ASC;
