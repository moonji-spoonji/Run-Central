<script>
    export let data;

    console.log(data.games)
    
</script>


<h1 class="registered-games-header"> Registered Games </h1>
   <div class="featured-games">
        {#each data.games as game}
        <!-- content here -->
        <!-- <li>{game.name}</li> -->
        <!-- {game.image} -->
            <div class="image-with-name">
                <img class="game" src={`/assets/images/${game.image}`} alt={game.name}/>
                <p><a href={`/games/${game.id}`}>{game.name}</a></p>
            </div>
        {/each}
   </div>
   

<style>

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
    /* width: 100px; */
    width: 80%;
    /* height: 20%; */
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
}

.image-with-name{
    display: block;
    padding: 10px;
    text-align: center;
    font-size: 18px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #002b70;
    box-sizing: border-box;
    box-shadow: 0 0 5px 5px #87a5ff;
    margin: 10px 10px;
}

.game {
    display: block;
    flex: 1;
    width: 250px;
    height: auto;
    /* height: 250px; */
    /* width: auto; */
    padding: 10px;
    height: auto;
}
</style>