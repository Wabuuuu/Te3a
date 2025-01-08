<script>
  // JavaScript logic (if any) goes here
</script>

<nav>
  <!-- Navigation links (if needed) -->
</nav>

<h1>My projects</h1> <!-- No need to add inline style here, we are applying font globally in the <style> -->

<main>
  <slot></slot> <!-- This is where your page content will be injected -->
</main>

<style>
  /* Import the font */
  @font-face {
    font-family: 'MyCustomFont';
    src: url('/optimusprinceps-webfont.woff') format('woff'); /* Correct path since it's directly in static */
    font-weight: normal;
    font-style: normal;
  }

  /* Apply the font globally */
  

  /* Apply the font specifically to <h1> */
  h1 {
    font-family: 'MyCustomFont', serif;
  }

  /* Optional: Apply to other text elements */
  

  /* Add more styles for layout if needed */
</style>