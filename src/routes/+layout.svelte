<script>
    
let links = ["/unmatched"]

</script>



<nav>
   {#each links as link}
    <a class = "headr" href={link}>{link}</a>
    {/each} 
</nav>

<h1
style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
>My projects</h1>

<slot> 

</slot>


<style>

nav{
    width: 100%;
    height: 30px;
    margin-left: -8px;
    /*background-image: linear-gradient(to right, rgb(67,28,48)0%,rgb(45,37,90)45%,rgb(45,37,90)45%,rgb(67,28,48)100%);*/
    background-color:aquamarine
}



</style>