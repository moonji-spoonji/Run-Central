<script>
    export let tableData = [{}] 
</script>

<table>
    <thead>
        <tr>
            {#each Object.keys(tableData[0]) as columnHeader}
                <th>{columnHeader}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each Object.values(tableData) as row}
            <tr>
                {#each Object.values(row) as cell}
                    <td class="values">{cell}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table{
        border: 2px solid;
        border-collapse: collapse;
        /* justify-content: center; */
        /* align-items: center; */
        margin: 20px auto;
        /* height: 100px; */
        width: 1200px;
    }
    /* tr{
        margin: 10px;
        border: 2px solid;
    } */

    td, th {
        margin-bottom: 1000px;
        border: 2px solid rgb(30, 0, 64);
        color: rgb(30, 0, 64);
        text-align: center;
        height: 30px;
        width: auto;
    } 

    /* .values{
        justify-content: center;
        align-items: center;
    } */
</style>