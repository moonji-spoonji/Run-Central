<script>
    /**
     * @type {any}
     */
     export let label;
    export let password = "password";
    export let name="";
    export let placeholder="";
    export let required=false;
</script>

<h1>Hiya, add a game!</h1>
<div class="form-item">
    <label for="password">{label}</label>
    <input id="password" type={password} name={name} class="form-input" placeholder={placeholder} required={required} />
    
</div>