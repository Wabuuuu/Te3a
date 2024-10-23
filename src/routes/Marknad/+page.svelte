<script>
    export let data;
</script>

<h1 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 2.5rem; text-align: center; color: #333;">
    Market
</h1>

<main style="max-width: 1200px; margin: 0 auto; padding: 20px;">
    <!-- Form for adding a product -->
    <form method="POST" action="?/create" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <div>
            <label for="balle" style="display: block; margin-bottom: 10px; font-weight: 600;">Name</label>
            <input id="balle" type="text" name="balle" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
        </div>

        <div>
            <label for="desc" style="display: block; margin-bottom: 10px; font-weight: 600;">Description</label>
            <input id="desc" type="text" name="desc" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
        </div>

        <div>
            <label for="price" style="display: block; margin-bottom: 10px; font-weight: 600;">Price</label>
            <input id="price" type="text" name="price" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
        </div>

        <button type="submit" style="grid-column: span 2; padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem; font-weight: 600; transition: all 0.3s ease;">
            Add Product
        </button>
    </form>

    <!-- Display list of products -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
        {#each data.product as prod}
        <!-- Create a clickable link for each product -->
        <a href={`/Marknad/${prod.id}`} style="text-decoration: none; color: inherit;">
            <div style="background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); transition: transform 0.2s ease-in-out;">
                <h2 style="margin-bottom: 10px; font-size: 1.5rem; color: #333;">{prod.name}</h2>
                <p style="margin-bottom: 10px; color: #777;">{prod.description}</p>
                <p style="font-weight: bold; color: #007BFF;">${prod.price}</p>
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img style="height: 80px; width: 80px; object-fit: cover; border-radius: 50%; margin-top: 10px;" 
                    src="https://preview.redd.it/ki2tlww8buw71.jpg?width=1080&crop=smart&auto=webp&s=6c1fad317681be6864e85b817545ef1e8954c561" 
                    alt="Product Image">
            </div>
        </a>
        {/each}
    </div>
</main>

<style>
   
    

    a:hover div {
        transform: scale(1.05);
    }

    button {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1rem;
        transition: all 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
        transform: scale(1.02);
        padding: 12px 24px;
    }
</style>