<script>
export let data;

let winstreak = 0;
let highestWinstreak = 0;
let totalGames = 0; 
let wins = 0;

data.games.forEach(game => {
  totalGames++; 
  
  if (game.result === "win") { 
    winstreak++;
    wins++;
    if (winstreak > highestWinstreak) {
      highestWinstreak = winstreak;
    }
  }
  else if (game.result === "loss") {
    winstreak = 0;
  }
});

let winrate = (wins / totalGames) * 100;

let charactersStats = {};

data.games.forEach(game => {
  const character = game.character; 
  
 
  if (!charactersStats[character]) {
    charactersStats[character] = { totalGames: 0, wins: 0, winstreak: 0, highestWinstreak: 0 };
  }

  charactersStats[character].totalGames++;

  if (game.result === "win") {
    charactersStats[character].wins++;
    charactersStats[character].winstreak++;

    if (charactersStats[character].winstreak > charactersStats[character].highestWinstreak) {
      charactersStats[character].highestWinstreak = charactersStats[character].winstreak;
    }
  } else if (game.result === "loss") {
    charactersStats[character].winstreak = 0;
  }
});

for (const character in charactersStats) {
  charactersStats[character].winrate = (charactersStats[character].wins / charactersStats[character].totalGames) * 100;
}
</script>


<!-- Removed duplicate modal -->

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 
</head>


  <body>
    <div class="box">
        <a href="#popup-box" class="open-popup">Your stats</a>
    </div>
    
    <div id="popup-box" class="modal">
        <div class="content">
            <h1 class="title">Stats</h1>
            <h2>Your winrate: {winrate.toFixed(1)}%</h2>
            <h2>Total games: {totalGames}</h2>
            <h2>Total wins: {wins}</h2>
            <h2>Your winstreak: {winstreak}</h2>
            <h2>Your highest winstreak: {highestWinstreak}</h2>
            <a href="#" class="close-btn">&times;</a>
        </div>
    </div>  
</body>


<main class="main-container">
  <div class="content-wrapper">
    <!-- Left Column: lägga till match -->
    <section class="form-section">
      <h1>Add a New Game</h1>
      <form method="POST" action="?/create" class="form-container">
        <div class="form-group">
          <label for="character">Your Character</label>
          <select id="character" name="character">
            <option value="" disabled selected>Select your character</option>
            <option value="Winter Soldier">Winter Soldier</option>
            <option value="Oda Nobunaga">Oda Nobunaga</option>
            <option value="Sinbad">Sinbad</option>
            <option value="Willow">Willow</option>
            <option value="Luke Cage">Luke Cage</option>
            <option value="Harry Houdini">Harry Houdini</option>
            <option value="Sherlock Holmes">Sherlock Holmes</option>
            <option value="Jekyll & Hyde">Jekyll & Hyde</option>
            <option value="Angel">Angel</option>
            <option value="Invisible Man">Invisible Man</option>
            <option value="Bullseye">Bullseye</option>
            <option value="Spiderman">Spiderman</option>
            <option value="Bruce Lee">Bruce Lee</option>
            <option value="Black Widow">Black Widow</option>
            <option value="Tomoe Gozen">Tomoe Gozen</option>
            <option value="Buffy">Buffy</option>
            <option value="Golden Bat">Golden Bat</option>
            <option value="The Genie">The Genie</option>
            <option value="Bigfoot">Bigfoot</option>
            <option value="Spike">Spike</option>
            <option value="Sun Wukong">Sun Wukong</option>
            <option value="Cloak Dagger">Cloak Dagger</option>
            <option value="Bloody Mary">Bloody Mary</option>
            <option value="Annie Christmas">Annie Christmas</option>
            <option value="Achilles">Achilles</option>
            <option value="Black Panther">Black Panther</option>
            <option value="Little Red">Little Red</option>
            <option value="Dracula">Dracula</option>
            <option value="Yennenga">Yennenga</option>
            <option value="Dr. Jill Trent">Dr. Jill Trent</option>
            <option value="Robin Hood">Robin Hood</option>
            <option value="Nikola Tesla">Nikola Tesla</option>
            <option value="Beowulf">Beowulf</option>
            <option value="King Arthur">King Arthur</option>
            <option value="Robert Muldoon">Robert Muldoon</option>
            <option value="Squirrel Girl">Squirrel Girl</option>
            <option value="Doctor Strange">Doctor Strange</option>
            <option value="Ms. Marvel">Ms. Marvel</option>
            <option value="Raptors">Raptors</option>
            <option value="Medusa">Medusa</option>
            <option value="Deadpool">Deadpool</option>
            <option value="Alice">Alice</option>
            <option value="Elektra">Elektra</option>
            <option value="Ghost Rider">Ghost Rider</option>
            <option value="Dr. Sattler">Dr. Sattler</option>
            <option value="Moon Knight">Moon Knight</option>
            <option value="T. Rex">T. Rex</option>
            <option value="She Hulk">She Hulk</option>
            <option value="The Wayward Sisters">The Wayward Sisters</option>
            <option value="Shakespeare">Shakespeare</option>
            <option value="Titania">Titania</option>
            <option value="Hamlet">Hamlet</option>
            <option value="Ciri">Ciri</option>
            <option value="Geralt of Rivia">Geralt of Rivia</option>
            <option value="Philippa">Philippa</option>
            <option value="Ancient Leshen">Ancient Leshen</option>
            <option value="Yennefer & Triss">Yennefer & Triss</option>
            <option value="Eredin">Eredin</option>
          </select>
          
          <div class="form-group">
            <label for="opponent">Opponent's Character</label>
            <select id="opponent" name="opponent">
              <option value="" disabled selected>Select opponent's character</option>
              <option value="Winter Soldier">Winter Soldier</option>
              <option value="Oda Nobunaga">Oda Nobunaga</option>
              <option value="Sinbad">Sinbad</option>
              <option value="Willow">Willow</option>
              <option value="Luke Cage">Luke Cage</option>
              <option value="Harry Houdini">Harry Houdini</option>
              <option value="Sherlock Holmes">Sherlock Holmes</option>
              <option value="Jekyll & Hyde">Jekyll & Hyde</option>
              <option value="Angel">Angel</option>
              <option value="Invisible Man">Invisible Man</option>
              <option value="Bullseye">Bullseye</option>
              <option value="Spiderman">Spiderman</option>
              <option value="Bruce Lee">Bruce Lee</option>
              <option value="Black Widow">Black Widow</option>
              <option value="Tomoe Gozen">Tomoe Gozen</option>
              <option value="Buffy">Buffy</option>
              <option value="Golden Bat">Golden Bat</option>
              <option value="The Genie">The Genie</option>
              <option value="Bigfoot">Bigfoot</option>
              <option value="Spike">Spike</option>
              <option value="Sun Wukong">Sun Wukong</option>
              <option value="Cloak Dagger">Cloak Dagger</option>
              <option value="Bloody Mary">Bloody Mary</option>
              <option value="Annie Christmas">Annie Christmas</option>
              <option value="Achilles">Achilles</option>
              <option value="Black Panther">Black Panther</option>
              <option value="Little Red">Little Red</option>
              <option value="Dracula">Dracula</option>
              <option value="Yennenga">Yennenga</option>
              <option value="Dr. Jill Trent">Dr. Jill Trent</option>
              <option value="Robin Hood">Robin Hood</option>
              <option value="Nikola Tesla">Nikola Tesla</option>
              <option value="Beowulf">Beowulf</option>
              <option value="King Arthur">King Arthur</option>
              <option value="Robert Muldoon">Robert Muldoon</option>
              <option value="Squirrel Girl">Squirrel Girl</option>
              <option value="Doctor Strange">Doctor Strange</option>
              <option value="Ms. Marvel">Ms. Marvel</option>
              <option value="Raptors">Raptors</option>
              <option value="Medusa">Medusa</option>
              <option value="Deadpool">Deadpool</option>
              <option value="Alice">Alice</option>
              <option value="Elektra">Elektra</option>
              <option value="Ghost Rider">Ghost Rider</option>
              <option value="Dr. Sattler">Dr. Sattler</option>
              <option value="Moon Knight">Moon Knight</option>
              <option value="T. Rex">T. Rex</option>
              <option value="She Hulk">She Hulk</option>
              <option value="The Wayward Sisters">The Wayward Sisters</option>
              <option value="Shakespeare">Shakespeare</option>
              <option value="Titania">Titania</option>
              <option value="Hamlet">Hamlet</option>
              <option value="Ciri">Ciri</option>
              <option value="Geralt of Rivia">Geralt of Rivia</option>
              <option value="Philippa">Philippa</option>
              <option value="Ancient Leshen">Ancient Leshen</option>
              <option value="Yennefer & Triss">Yennefer & Triss</option>
              <option value="Eredin">Eredin</option>
            </select>
          </div>

        <div class="form-group">
  <label for="map">Map</label>
  <select id="map" name="map">
    <option value="" disabled selected>Select a map</option>
    <option value="McMinnville">McMinnville</option>
    <option value="Point Pleasant">Point Pleasant</option>
    <option value="Marmoreal">Marmoreal</option>
    <option value="Sarpedon">Sarpedon</option>
    <option value="Baskerville Manor">Baskerville Manor</option>
    <option value="Soho">Soho</option>
    <option value="Sunnydale High">Sunnydale High</option>
    <option value="The Bronze">The Bronze</option>
    <option value="The Raft">The Raft</option>
    <option value="Sanctum Sanctorum">Sanctum Sanctorum</option>
    <option value="Navy Pier">Navy Pier</option>
    <option value="Hell's Kitchen">Hell's Kitchen</option>
    <option value="Helicarrier">Helicarrier</option>
    <option value="Hanging Gardens">Hanging Gardens</option>
    <option value="Globe Theatre">Globe Theatre</option>
    <option value="Yukon">Yukon</option>
    <option value="Sherwood Forest">Sherwood Forest</option>
    <option value="King Solomon's Mine">King Solomon's Mine</option>
    <option value="Raptor Paddock">Raptor Paddock</option>
    <option value="Heorot">Heorot</option>
    <option value="Azuchi Castle">Azuchi Castle</option>
    <option value="T. Rex Paddock">T. Rex Paddock</option>
  </select>
</div>

        <div class="radio-group">
          <label>Did you play as:</label>
          <label>
            <input type="radio" name="play_as" value="1st" /> 1st
          </label>
          <label>
            <input type="radio" name="play_as" value="2nd" /> 2nd
          </label>
        </div>

        <div class="radio-group">
          <label>Result:</label>
          <label>
            <input type="radio" name="result" value="win" /> Win
          </label>
          <label>
            <input type="radio" name="result" value="loss" /> Loss
          </label>
        </div>

        <button type="submit" class="submit-button">Add Game</button>
      </form>
    </section>

    <!-- Right Column: visa matcherna -->
    <section class="results-section">
      <h1>Game Results</h1>
      <div class="results-grid">
        {#each data.games as game}
        <a href={`/games/${game.id}`} class="game-card">
          <div class="game-header">
            <h2>Your Character: {game.character}</h2>
            <span class="result-tag {game.result}">{game.result}</span>
          </div>
          <p class="game-info opponent">
            Opponent: <strong>{game.opponentCharacter}</strong>
          </p>
          <p class="game-info">Map: <strong>{game.Map}</strong></p>
          <p class="game-info">Started: <strong>{game.play_as}</strong></p>
        </a>
        {/each}
      </div>
    </section>
  </div>

    <!-- längst ner visa stats för specifika karaktärer -->
  <div class="win-rate-container">
    <h2>Win rate by character:</h2>
    {#each Object.keys(charactersStats) as character}
      <div class="character-card">
        <h3 class="character-name">{character}</h3>
        <p><strong>Win rate:</strong> {charactersStats[character].winrate.toFixed(1)}%</p>
        <p><strong>Total games:</strong> {charactersStats[character].totalGames}</p>
        <p><strong>Total wins:</strong> {charactersStats[character].wins}</p>
        <p><strong>Winstreak:</strong> {charactersStats[character].winstreak}</p>
        <p><strong>Highest winstreak:</strong> {charactersStats[character].highestWinstreak}</p>
      </div>
    {/each}
  </div>
  
</main>


    <style>
:root {
  --background-color: #f8f9fa;
  --card-bg-color: #ffffff;
  --text-color: #333333;
  --accent-color: #1e88e5;
  --success-color: #4caf50;
  --error-color: #f44336;
  --input-bg-color: #f9f9f9;
  --input-border-color: #1D263B;
  --button-bg-color: #1e88e5;
  --button-hover-bg: #42a5f5;
  --box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  margin: 0;
  padding: 0;
  
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
}

.form-section, .results-section {
  background-color: var(--card-bg-color);
  padding: 20px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--accent-color);
}

.form-container {
  display: grid;
  gap: 15px;
  
}

.form-group {
  display: flex;
  flex-direction: column;
  
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}


.radio-group {
  display: flex;
  gap: 15px;
}

.submit-button {
  background-color: var(--button-bg-color);
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: var(--button-hover-bg);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  
}

.game-card {
  background-color: var(--card-bg-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  padding: 20px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.result-tag {
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
}

.result-tag.win {
  background-color: var(--success-color);
  color: #ffffff;
}

.result-tag.loss {
  background-color: var(--error-color);
  color: #ffffff;
}

.box {
          background-color: black;
          height: 10vh;
          display: flex;
          align-items: center;
          justify-content: center;
      }

      .box a {
          padding: 15px;
          background-color: #fff;
          border-radius: 3px;
          text-decoration: none;
      }

      .modal {
          position: fixed;
          inset: 0;
          background: rgba(254,
                  126,
                  126,
                  0.7);
          display: none;
          align-items: center;
          justify-content: center;
      }

      .content {
          position: relative;
          background: white;
          padding: 1em 2em;
          border-radius: 4px;
      }

      .modal:target {
          display: flex;
      }

   

  .win-rate-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: var(--background-color);
  }

  h2 {
    font-size: 1.8rem;
    color: var(--accent-color);
    margin-bottom: 20px;
  }

  .character-card {
    background-color: var(--card-bg-color);
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .character-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }

  .character-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--accent-color);
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    margin: 5px 0;
  }

  strong {
    font-weight: bold;
  }

    /* General body styling */
    body {
     
      margin: 0;
      padding: 0;
      background-color: #689375;
    }

    /* The popup box trigger link */
    .box {
      margin: 20px;
      text-align: center;
      width: 10px;
      margin-left: 750px;
    }

    .open-popup {
      font-size: 18px;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: rgb(0, 0, 0);
      text-decoration: none;
      border-radius: 8px;
      transition: background-color 0.3s;
    }

    .open-popup:hover {
      background-color: #45a049;
    }

    /* The modal background and content styling */
    .modal {
      display: none; /* Hidden by default */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    /* The modal content box */
    .content {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      width: 80%;
      max-width: 600px;
      text-align: center;
      box-shadow: 0 4px 10px rgba(244, 244, 244, 0.1);
    }

    .title {
      color: green;
      font-size: 1.8rem;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 1.2rem;
      color: #333;
      margin: 10px 0;
    }

    /* Close button styling */
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #fe0606;
      font-size: 30px;
      text-decoration: none;
      transition: color 0.3s;
    }

    .close-btn:hover {
      color: #ff0000;
    }

    /* Show the modal when the link is clicked */
    #popup-box:target {
      display: flex;
    }

    </style>

