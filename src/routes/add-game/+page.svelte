<script>
    import Input from "$lib/components/forms/input.svelte";
    export let data;
</script>


<h1 class="create">Add a New Game!</h1>
    <!-- FORM FOR SIGNING UP/ SIGNING IN -->
    <div class="form-container">
        <form method="POST" class="form" enctype="multipart/form-data">
            <Input label="Name" name="gameName" placeholder="Dead By Daylight" required={true} />       
            <!-- <Input label="Genre" name="genre" placeholder="Survival" required={true}/> -->
            <select name="genre" required>
                <option>
                    Select a Genre
                </option>

                <!-- Grabs records from the Genres database -->
                {#each data.genres as genre}
                     <!-- content here -->
                    <option value={genre.id}>   
                        {genre.name} <!-- actually displays the name of the genre -->
                    </option>
                {/each}
                
            </select>
            <div class="image-text">
                <p> Image: </p>
                <input name="image" type="file"/>
            </div>
        <!-- BUTTONS -->
            <button class="form-button" type="submit"> Add Game! </button>

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

    .image-text {
        display: flex;
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: 65px;
        /* align-items: center; */
        width: 75%;
        justify-content: center;
        /* justify-content: space-between; */
        /* padding: 10px 0; */
    }

</style>