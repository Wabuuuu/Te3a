<script>
    import { enhance } from "$app/forms";
    export let form;
</script>



<h1>LOGIN PAGE</h1>

<form use:enhance action="?/login" method="post">
    <div>
        <input type= "text" name="username" id=""/>
        <input type= "password" name="password" id=""/>
        <button type="submit" >login</button>
    {#if form}
    <span>{form.login_fail}</span>
    {/if}
    </div>
</form>