<script>
    import Input from "$lib/components/forms/input.svelte";
    
    export let data;
    // console.log(data.users)

</script>


<h1 class="create">Create Your Account!</h1>
    <!-- FORM FOR SIGNING UP/ SIGNING IN -->
    <div class="form-container">
        <form method="POST" class="form">
            <Input label="First Name" name="firstName" placeholder="John" required={true}/>       
            <Input label="Last Name" name="lastName" placeholder="Doe" required={true}/>
            <Input label="Email" name="email" placeholder="johnsmith@email.com" required={true}/>
            <!-- <Input label="Game Image" name="image" type="file"/> -->
            <Input label="Phone" name="phone" placeholder="123-456-7890" required={true}/>
            <Input label="Username" name="username" placeholder="johndoe32" required={true}/>
            <Input label="Password" name="password" placeholder="pA$$w0Rd" required={true}/>
            
            <select name="user_type" required>
                <option>
                    What type of user are you?
                </option>
                <!-- <option value="1">
                    Administrator
                </option>
                <option value="2">
                    Runner
                </option>
                <option value="3">
                    Moderator
                </option> -->
                
                {#each data.users as user}
                     <!-- content here -->
                    <option value={user.user_type}>   
                         {user.user_type} <!--actually displays the name of the genre -->
                    </option>
                {/each}
                
            </select>


        <!-- BUTTONS -->
            <button class="form-button" type="submit"> Sign Up!</button>
            <button class="form-button" type="reset">Reset</button>

            <div class="have-account">
                <p> Already have an account? </p>
                <a href="/sign-in"><button class="form-button"> Sign In </button></a>
            </div>
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

    .have-account{
        text-align: center;
        margin: 15px 0;
        /* justify-content: center; */
        /* align-items: center; */
    }

    select {
        margin: 15px auto;
        width: 70%;
    }
</style>