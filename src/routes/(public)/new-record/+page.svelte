<script>
    import Input from "$lib/components/forms/input.svelte";
    export let data;
    // export let data;
    // console.log(data.games);
</script>

 
<h1 class="create">Add a New Record!</h1>
    <!-- FORM FOR SIGNING UP/ SIGNING IN -->
    <div class="form-container">
        <form method="POST" class="form">
            <Input label="Email" name="email" placeholder="john_doe@gmail.com" required={true} /> 
            <!-- <Input label="Name" name="gameName" placeholder="Dead By Daylight" required={true} />         -->
            <!-- <Input label="Genre" name="genre" placeholder="Survival" required={true}/> -->
            <select name="game_name" required>
                <option>
                    Select a Game
                </option>

                <!-- Grabs records from the Genres database -->
                {#each data.games as game}
                     <!-- content here -->
                    <option value={game.id}>   
                        {game.name} <!-- actually displays the name of the game -->
                    </option>
                {/each}
                
            </select>

            <Input label="Time (sec)" name="duration" placeholder="12:34:56" required={true} />
            
            <Input label="Video" name="video" placeholder="https//www.youtube.com" required={true} />

            <!-- <select name="genre" required>
                <option>
                    Select a Genre
                </option> -->

                <!-- Grabs records from the Genres database -->
                <!-- {#each data.genres as genre} -->
                     <!-- content here -->
                    <!-- <option value={genre.id}>    -->
                        <!-- {genre.name} actually displays the name of the genre -->
                    <!-- </option> -->
                <!-- {/each} -->
                
            <!-- </select> -->
            <!-- <Input label="Status" name="status" placeholder="Dead By Daylight" required={true} /> -->
            <!-- <Input label="Name" name="gameName" placeholder="Dead By Daylight" required={true} /> -->
        <!-- BUTTONS -->
            <button class="form-button" type="submit"> Add Run! </button>

        </form> 
    </div>


<style>
    .form-container{
        /* background-color: white; */
        /* margin: 20%; */
        width: 75%;
        margin: 0;
        /* align-items: center; */
        /* justify-content: center; */
        padding-left: 35%;
    }

    option, select{
        margin: auto;
        width: 70%;
        /* padding: 15px 0; */
        margin-top: 15px;
        margin-bottom: 15px;
    }

</style>