<script>
    export let data;
</script>

<h1 style="color: aliceblue;">{data.game.character} vs {data.game.opponentCharacter}</h1> 
<h2 style="color: aliceblue;">Your Character: {data.game.character}</h2>
<div>
    <p  style="color: aliceblue;" class="game-info opponent">
      Opponent: <strong>{data.game.opponentCharacter}</strong>
    </p>
    
            <span  style="color: aliceblue;" class="result-tag {data.game.result}">{data.game.result} for {data.game.character}</span>
          <p  style="color: aliceblue;" class="game-info">Map: <strong>{data.game.Map}</strong></p>
          <p  style="color: aliceblue;" class="game-info">Started: <strong>{data.game.play_as}</strong></p>
          </div>