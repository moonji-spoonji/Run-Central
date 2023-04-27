<script>
    // import type { db } from "$lib/utils/db";
    import Table from "$lib/components/tables/table.svelte";
    export let data; 
</script>

<Table tableData={data.runs} />

