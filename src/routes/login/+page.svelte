<script>
    import { enhance } from "$app/forms";
    export let form;
</script>




<div class="container">
    <div class="card">
        <div class="header">
            <h1 class="title">Welcome Back</h1>
            <p class="subtitle">Enter your credentials to access your account</p>
        </div>
        
        <form use:enhance action="?/login" method="post" class="form">
            <div class="input-group">
                <span class="icon">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                </span>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    placeholder="Username"
                    class="input"
                    required
                />
            </div>
            
            <div class="input-group">
                <span class="icon">
                    <!-- Lock icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </span>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    placeholder="Password"
                    class="input"
                    required
                />
            </div>

            <button type="submit" class="button">
                Sign In
            </button>

            {#if form?.login_fail}
                <p class="error">{form.login_fail}</p>
            {/if}

            <div class="forgot-password">
                <a href="/forgot-password" class="link">
                    Forgot password?
                </a>
            </div>
        </form>
    </div>
</div>




<style>

    

    .container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
        font-family: Arial, sans-serif;
    

    }

    .card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        width: 100%;
        max-width: 400px;
        box-sizing: border-box;
        
    }

    .header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        margin-bottom: 0.5rem;
    }

    .subtitle {
        font-size: 14px;
        color: #666;
        margin-bottom: 1.5rem;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .input-group {
        position: relative;
    }

    .input {
        width: 100%;
        padding: 12px 12px 12px 40px;
        font-size: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
        transition: border-color 0.3s ease;
        outline: none;
    }

    .input:focus {
        border-color: #2563eb;
    }

    .icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #666;
    }

    .button {
        background-color: #2563eb;
        color: white;
        padding: 12px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .button:hover {
        background-color: #1d4ed8;
    }

    .error {
        color: #dc2626;
        font-size: 14px;
        text-align: center;
        margin-top: 1rem;
    }

    .forgot-password {
        text-align: center;
        font-size: 14px;
    }

    .link {
        color: #2563eb;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .link:hover {
        color: #1d4ed8;
    }
</style>