<script lang="ts">
  
   let handedImage = '/OneHander.png';
 

  let isPopupVisible = false;
  
 
   function updateselectSlotImage(imagePath: string, size: string, numberOfSlots: number) {
  attackSlotImage = imagePath; 
  slotSize = size; 
  
 
  const newSlots = Array(numberOfSlots).fill(null).map((_, i) => {
    if (slots[i]) {
      return slots[i];
    }
    return { number: '', image: '' };
  });
  
  slots = newSlots;
  isSlotPopupVisible = false;
}


let slots = [{ number: '', image: '' }];

function updateSlotNumber(index: number, event: Event) {
  const input = event.target as HTMLInputElement;
  slots[index].number = input.value;
  slots = [...slots]; 
}

function updateSlotImage(index: number, event: Event) {
  const select = event.target as HTMLSelectElement;
  slots[index].image = select.value;
  slots = [...slots]; 
}
  //-new

  let stats = Array(4).fill(0);

  function changeHandedImage() {
 
    isPopupVisible = !isPopupVisible;
  }
 
  function selectImage(imagePath: string) {
    handedImage = imagePath;
    isPopupVisible = false; 
  }

  
  let attackSlotImage = '/1Slot.png';
  let slotSize = 'default'; 
  let isSlotPopupVisible = false;

  function changeSlotImage() {
    isSlotPopupVisible = !isSlotPopupVisible;
  }
  
</script>



<main>
  <div class="mainCard">
    <label for="item_name"></label>
    <textarea class="item_name" id="item_name" name="item_name" spellcheck="false" placeholder="Item name"></textarea>

    <button 
    class="attackSlot {slotSize === 'large' ? 'large' : ''} {slotSize === 'extra-large' ? 'extra-large' : ''}" 
    style="background-image: url({attackSlotImage});" 
    on:click={changeSlotImage}>
  </button>

 

      <span class="itemHolder">
      </span>

      <span class="dot_range">
          <select>
              <option value="none" selected>-</option>
              <!-- Options 1 to 10 -->
              <option value="∞">∞</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select>
      </span>

      <span class="dot_origin"></span>

      <button class="dot_handed" style="background-image: url({handedImage});" on:click={changeHandedImage}></button>

      <span class="dot_logo"></span>

      <span class="dot_pBlock"></span>

      <span class="dot_mBlock"></span>

      <span class="dot_dodge"></span>

      <span class="dot_upgrade"></span>

      <span class="dot_stats">
      <div class="stats-container">
        {#each Array(4).fill(0) as _, index}
          <div class="stat-selector">
            <select id="stat{index + 1}" bind:value={stats[index]}>
              {#each Array(41).fill(0).map((_, i) => i) as num}
                <option value={num}>{num}</option>
              {/each}
            </select>
          </div>
        {/each}
      </div>


  {#if isPopupVisible}
  <div class="popup">
    <div class="popup-content">
      <h2>Select an Item type</h2>
      <div class="image-options">
        <button type="button" on:click={() => selectImage('/OneHander.png')}>
          <img 
            src="/OneHander.png" 
            alt="OneHander" />
        <button type="button" on:click={() => selectImage('/TwoHander.png')}>
          <img 
            src="/TwoHander.png" 
            alt="TwoHander" />
        <button type="button" on:click={() => selectImage('/WeaponUpgrade.png')}>
          <img 
            src="/WeaponUpgrade.png" 
            alt="WeaponUpgrade" />
        <button type="button" on:click={() => selectImage('/Armor.png')}>
          <img 
            src="/Armor.png" 
            alt="Armor" />
        <button type="button" on:click={() => selectImage('/ArmorUpgrade.png')}>
          <img 
            src="/ArmorUpgrade.png" 
            alt="ArmorUpgrade" />
       
        </button>
      </div>
      <button style="margin-top: 10px;" on:click={() => isPopupVisible = false}>Close</button>
    </div>
  </div>
{/if}

{#if isSlotPopupVisible}
  <div class="popup2">
    <div class="popup-content2">
      <h2>Select Item Data Box</h2>
      <div class="image-options2">
        <button type="button" on:click={() => updateselectSlotImage('/TextBox.png', 'default', 0)}>
          <img style="height:20px;" src="/TextBox.png" alt="TextBox" />
        </button>
        <button type="button" on:click={() => updateselectSlotImage('/1Slot.png', 'default', 1)}>
          <img style="height:20px;" src="/1Slot.png" alt="1Slot" />
        </button>
        <button type="button" on:click={() => updateselectSlotImage('/2Slot.png', 'large', 2)}>
          <img style="height:40px;" src="/2Slot.png" alt="2Slot" />
        </button>
        <button type="button" on:click={() => updateselectSlotImage('/3Slot.png', 'extra-large', 3)}>
          <img style="height:60px;" src="/3Slot.png" alt="3Slot" />
        </button>
      </div>
      <button style="margin-top: 10px;" on:click={() => isSlotPopupVisible = false}>Close</button>
    </div>
  </div>
{/if}

<div style="position: relative; height: 300px; margin-top: 107px;"> 
 
  <div class="first-slot" style="top: 0; left: 0; right: 0;">
    <div style="display: flex; align-items: center; gap: 0px;"> 
      <input
        type="number"
        min="0"
        max="99"
        value={slots[0]?.number}
        on:input={(e) => updateSlotNumber(0, e)}
        placeholder="[ ]"
        style="font-size: 19px; font-family: 'MyCustomFont', sans-serif; background: transparent; border: none; width: 55px; text-align: center;" 
      />
      <select
        value={slots[0]?.image}
        on:change={(e) => updateSlotImage(0, e)}
        class="h-8 px-2 border rounded"
      >
        <option value="">Attack Type</option>
        <option value="/slash.png">Slash</option>
        <option value="/thrust.png">Thrust</option>
        <option value="/strike.png">Strike</option>
      </select>
    </div>
  </div>


  <div style="display: flex; flex-direction: column; position: relative;">
    {#each slots.slice(1) as slot, i}
      <div class="flex items-center gap-2 justify-center" style="margin-top: -62px;">
        <div style="display: flex; align-items: center; gap: 4px;"> 
          <input
            type="number"
            min="0"
            max="99"
            value={slot.number}
            on:input={(e) => updateSlotNumber(i + 1, e)}
            placeholder="[ ]"
            style=" font-size: 19px; font-family: 'MyCustomFont', sans-serif; background: transparent; border: none; width: 50px; text-align: center;" 
          />
          <select
            value={slot.image}
            on:change={(e) => updateSlotImage(i + 1, e)}
            class="h-8 px-2 border rounded"
          >
            <option value="">Attack Type</option>
            <option value="/slash.png">Slash</option>
            <option value="/thrust.png">Thrust</option>
            <option value="/strike.png">Strike</option>
          </select>
        </div>
      </div>
    {/each}
  </div>
</div>
</main>




<style>
.attackSlot {
  position: absolute;
  bottom: 55px;
  left: 12.5px;
  width: 200px; 
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.3s ease; 
  height: 41px;
  background-image: url('/1Slot.png');
  display: flex;
  justify-content: center;
  align-items: center;
}


.attackSlot.large {
  height: 82px; 
}

.attackSlot.extra-large {
  height: 124px;
}

.popup2 {
  font-family: 'MyCustomFont', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content2 {
  background-color: rgb(62, 62, 62);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
}

.image-options2 button {
  background: none;
  border: none;
  cursor: pointer;
}

.image-options2 img {
  width: 80px;
  height: 80px;
  margin: 10px;
}



  .itemHolder{
  position: absolute;
  bottom: 190px;
  left: 62px;
  height: 42px;
  width: 100px;
  background-image: url('/ItemPlate.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  }

@font-face {
    font-family: 'MyCustomFont';
    src: url('/optimusprinceps-webfont.woff') format('woff'); 
    font-weight: normal;
    font-style: normal;
  }

  .item_name {
  font-family: 'MyCustomFont', sans-serif;
  position: absolute;
  top: 23px;
  left: 50.5px;
  color: #fff;
  font-size: 19px;
  width: 120px;
  height: 40px;
  text-align: center;
  background: none;
  padding: 0 2px;
  border: none;
  resize: none;
  outline: none;
  
}
 .item_name::placeholder {
    opacity: 0.7;  /* Set opacity only for the placeholder text */
  }


.mainCard {
    width: 205px; 
    height: 315px;
    background-color: black;
    margin: auto;
    padding: 10px;
    margin-top: 100px;
    border-radius: 10px;
    position: relative;
    background-image: url('/BackgroundItem.png');
    object-fit: cover;
    background-size: 100% 100%;
}

.dot_range {
  position: absolute;
  top: 10px;
  left: 10px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-image: url('/Range.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* range dropdown saken */
.dot_range select {
  font-family: 'MyCustomFont', sans-serif;
  position: relative;
  top: 10px; 
  right: 0.5px;
  border: none;
  background: transparent;
  font-size: 21px;
  text-align: center;
  outline: none;
  cursor: pointer;
}
/* Stylen för range dropdown saken */
.dot_range select option {
  background-color: black;
  color: white;
  right: 200px;
}

.dot_stats select {
  font-family: 'MyCustomFont', sans-serif;
  position: relative;
  top: 7px; 
  left: 23px;
  border: none;
  background: transparent;
  font-size: 15px !important; 
  text-align: center;
  outline: none;
  cursor: pointer;
}
.dot_stats select option {
  background-color: black;
  color: white;
}



.dot_range select::-ms-expand {
  display: none;
}
.dot_range select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.dot_stats select::-ms-expand {
  display: none;
}
.dot_stats select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}


.dot_origin {
  position: absolute;
  top: 5px;
  right: 8px;
  height: 55px;
  width: 49px;
  border-radius: 50%;
  background-image: url('/TreasureIcon.png');
  background-size: 100% 100%;
}

.dot_handed {
  position: absolute;
  top: 58px;
  right: 10px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-size: 100% 100%;
  background-color: transparent; 
  border: none;
  padding: 0; 
  cursor: pointer; 
}

.dot_pBlock {
  position: absolute;
  bottom: 10px;
  left: 10px;
  height: 45px;
  width: 45px;
  background-image: url('/Defense.png');
  background-size: 100% 100%;
}

.dot_mBlock {
  position: absolute;
  bottom: 10px;
  left: 65px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-image: url('/Resistance.png');
  background-size: 100% 100%;
}

.dot_dodge {
  position: absolute;
  bottom: 10px;
  left: 120px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-image: url('/Dodge.png');
  background-size: 100% 100%;
}

.dot_upgrade {
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-image: url('/UpgradeSlots.png');
  background-size: 100% 100%;
}

.dot_stats {
  position: absolute;
  top: 58px;
  left: 10px;
  height: 95px;
  width: 45px;
  background-image: url('/StatBlock.png');
  background-size: 100% 100%;
}

  /* Popup modal styling */
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-content {
    font-family: 'MyCustomFont', sans-serif;
    background-color: rgb(0, 0, 0);
    padding: 10px;
    border-radius: 5px;
    font-size: 10px;
    text-align: center;
    width: 475px;
    color: rgb(199, 199, 199);
    letter-spacing: 1.2px;
  }

  .image-options {
    display: flex;
    justify-content: center;
    gap: 10px;
    
  }

  .image-options img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 30px;
    margin-top: 10px;
  }

  .image-options img:hover {
    opacity: 0.7;
  }



  button {
    font-family: 'MyCustomFont', sans-serif;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 2px;
  }


.stats-container {
  display: flex;
  flex-direction: column; 
  gap: 1px; 
  margin-top: 0px;
}

.stat-selector select {
  left: 22px;
  padding: 2px; 
  font-size: 12px; 
  width: 20px;
  height: 20px; 
  text-align: center;
  border-radius: 3px; 
  background: transparent; 
  appearance: none; 
}


.stat-selector select::-ms-expand {
  display: none;
}

.stat-selector select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
 
</style>