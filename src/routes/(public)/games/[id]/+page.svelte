<!-- slug page -->

<!--<script>
  import Table from '$lib/components/tables/table.svelte';
    export let data;
    // export let runs;
</script>-->

<!-- {JSON.stringify(data.game)} -->

<!--<Table tableData={data.game} />-->

<script>
  import Table from '$lib/components/tables/table.svelte';
  export let data = { body: { game: {}, runs: [] } };

  const runs = data.body.runs ? data.body.runs : [];

  const tableData = runs.map(runs => ({
    'ID': runs.id,
    'Player': runs.runner,
    'Duration': runs.duration,
    'Status': runs.status,
    'Comments': runs.comment_count
  }));
</script>

<Table {tableData}>
  <thead>
    <tr>
      <th>Run ID</th>
      <th>Player</th>
      <th>Duration (s)</th>
      <th>Status</th>
      <th>Comments</th>
    </tr>
  </thead>
  <tbody>
    {#each runs as run}
      <tr>
        <td>{run.run_id}</td>
        <td>{run.player_name}</td>
        <td>{run.duration}</td>
        <td>{run.status}</td>
        <td>{run.num_comments}</td>
      </tr>
    {/each}
  </tbody>
  
</Table>




<!-- <script context="module">
    
    export let runs;

  </script> -->
  
  <!-- <script>
    export let runs;
  </script> -->

  <!-- {JSON.stringify(data.game)} -->
  
  
  <!-- <style>
    .registered-games-header {
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 40px;
      text-align: center;
      color: #002b70;
      margin-bottom: 10px;
      text-shadow: 2px 2px #3e5994;
    }
  
    .featured-games {
      display: flex;
      width: 80%;
      margin: 0 auto;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 20px;
    }
  
    .runs-table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
    }
  
    .runs-table th,
    .runs-table td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }
  
    .runs-table th {
      background-color: #f2f2f2;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      color: #002b70;
    }
  </style> -->
  
