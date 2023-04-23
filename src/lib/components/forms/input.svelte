<script>
    /**
     * @type {any}
     */
     export let label;
    export let type_text="text";
    // export let email = "email";
    // export let image_file = "file";
    // export let password = "password";

    export let name="";
    export let placeholder="";
    export let required=false;
</script>

<div class="form-item">
    <label for="firstName">{label}</label>
    <input id="firstName" type={type_text} name={name} class="form-input" placeholder={placeholder} required={required} />
    <!-- <input id="lastName" type={type_text} name={name} class="form-input" placeholder={placeholder} required={required} />
    <input id="email" type={email} name={name} class="form-input" placeholder={placeholder} required={required} />
    <input id="phone" type={type_text} name={name} class="form-input" placeholder={placeholder} required={required} />
    <input id="username" type={type_text} name={name} class="form-input" placeholder={placeholder} required={required} />
    <input id="password" type={password} name={name} class="form-input" placeholder={placeholder} required={required} /> -->
    <!-- <input id="firstName" type={type_text} name={name} class="form-input" placeholder={placeholder} required={required} /> -->
    <!-- <input id="image" type={image_file} name={name} class="form-input" placeholder={placeholder} required={required} /> -->

</div>

<!-- <div >
    <input id="image" type={image_file} name={name} class="form-input" placeholder={placeholder} required={required} />
</div> -->