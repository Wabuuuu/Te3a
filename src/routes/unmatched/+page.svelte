<script>
// @ts-nocheck
let show = false;



let characters = [{name:"Medusa",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/medusa-card-backjpg.png",Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"Battle of Legends, Volume One", Health:"Start health: 16",Sidekick:"Sidekick: Harpies x3",Sidekick_Quantity: 3,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 1", Movement: 3,AbilityName:"",Ability:"At the start of your turn, you may deal 1 damage to an opposing fighter in Medusa's zone"},
{name:"Sinbad",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/sinbad-card-backjpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Battle of Legends, Volume One", Health:"Start health: 15",Sidekick:"Sidekick: The Porter",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 6", Movement: 2,AbilityName:" 7 VOYAGES",Ability:"When you maneuver, you may move your fighters +1 space for each VOYAGE card in your discard pile"},
{name:"Alice",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/alice-card-backjpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Battle of Legends, Volume One", Health:"Start health: 13",Sidekick:"Sidekick: The Jabberwock",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 8", Movement: 2,AbilityName:" CURIOSER AND CURIOSER",Ability:"When you place Alice, choose whether she starts the game BIG or SMALL. When Alice is BIG, add 2 to the value of her attack cards. When Alice is SMALL, add 1 to the value of her defense cards"},
{name:"King Arthur",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/king-arthur-card-backjpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Battle of Legends, Volume One", Health:"Start health: 18",Sidekick:"Sidekick: Merlin",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/ranged.716adb4d.svg", SidekickHealth:"Start Health: 7", Movement: 2,AbilityName:"",Ability:"When King Arthur attacks, you may BOOST that attack. Play the BOOST card, face down, along with your attack card. If your opponent cancels the effects on your attack card, the BOOST is discarded without effect"},
{name:"Bruce Lee",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/bruce-leejpg.png",Health:"Start health: 14", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Bruce Lee" ,Movement: 3,Quote:"The successful warrior is the average man, with laser-like focus",AbilityName:" ",Ability:"At the end of your turn, you may move Bruce Lee 1 space"},
{name:"Robin Hood",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/robin-hoodjpg.png",Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"Robin Hood vs. Bigfoot", Health:"Start health: 13",Sidekick:"Sidekick: Outlaws x4",Sidekick_Quantity: 4,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 1", Movement: 2,AbilityName:" HIT AND RUN",Ability:"After you attack, you may move your attacking fighter up to 2 spaces"},
{name:"Bigfoot",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/bigfoot-card-backjpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Robin Hood vs. Bigfoot", Health:"Start health: 16",Sidekick:"Sidekick: The Jackalope",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 6", Movement: 3,AbilityName:" LONER BY NATURE",Ability:"At the end of your turn, if there are no opposing fighters in Bigfoot's zone, you may draw 1 card"},
{name:"Robert Muldoon",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/ingen-card-backpng.png",Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"Jurassic Park - InGen vs. Raptors", Health:"Start health: 14",Sidekick:"Sidekick: InGen Workers x3",Sidekick_Quantity: 3,SidekickRange:"https://unmatched.cards/img/ranged.716adb4d.svg", SidekickHealth:"Start Health: 1", Movement: 3,AbilityName:"",Ability:"At the start of your turn, you may place a trap. Whenever one of your traps is returned to the box, draw a card. Muldoon starts with 8 traps. ABILITY NOTES: You may place a trap token in any unoccupied space in Muldoon's zone. If Muldoon's space is in more than one zone, you may pick a space in any of them. The target space cannot contain any fighters or other tokens, including other traps. When an opposing fighter enters a space with a trap, the trap goes off. The fighter must immediately stop moving and takes 1 damage. After the trap goes off, return it to the box. Muldoon's and his allies may land on or move through traps freely without setting them off"},
{name:"Raptors",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/raptors-card-backpng.png",Health:"Start health: 7", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Jurassic Park - InGen vs. Raptors" ,Movement: 3,Quote:"They're lethal at 8 months, and I do mean lethal. - Robert Muldoon",AbilityName:" ",Ability:"Raptors add 1 to the value of their attack cards for each of your other Raptors adjacent to the defeder"},
{name:"Sherlock Holmes",img:"https://cf.geekdo-images.com/vhszc_2uB9EYODG8oxbFIQ__imagepage/img/lNgsrupay45FLLEnjOU6wR5povg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5426245.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Cobble & Fog", Health:"Start health: 16",Sidekick:"Sidekick: Dr. Watson",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/ranged.716adb4d.svg", SidekickHealth:"Start Health: 8", Movement: 2,AbilityName:"",Ability:"Effects on HOLMES and DR.WATSON cards cannot be cancelled by an opponent Effects on ANY cards can be cancelled"},
{name:"Dracula",img:"https://cf.geekdo-images.com/NvL3ZBlLjPG1zuUIcsyjFQ__medium/img/1TVZr-rDsHtARh6KKtUbqhVtNR4=/fit-in/500x500/filters:no_upscale():strip_icc()/pic5451791.png", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Cobble & Fog", Health:"Start health: 13",Sidekick:"Sidekick: The Sisters x3",Sidekick_Quantity: 3,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 1", Movement: 2,AbilityName:" BLOODTHIRSTY",Ability:"At the start of your turn, you may deal 1 damage to a fighter adjacent to Dracula. If you do, draw a card"},
{name:"Jekyll & Hyde",img:"https://cf.geekdo-images.com/XlPzdyZKQbaRGye2Z2oreA__medium/img/89xovU1bnHDNd-zgKiOCzsbhsJI=/fit-in/500x500/filters:no_upscale():strip_icc()/pic5438530.png", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Cobble & Fog", Health:"Start health: 16",Quote:"Man is not truly one, but truly two.", Movement: 2,AbilityName:" THE SERUM",Ability:"Start the game as Dr.Jekyll. At the start of your turn, you may transform into Dr.Jekyll or Mr.Hyde. While Mr.Hyde: After you Maneuver, take 1 damage. Use the transformation token to indicate what he currently is"},
{name:"Invisible Man", img:"https://cf.geekdo-images.com/WrzUt0vPQdOwqnKLARFt3w__imagepage/img/FB5dMVITV1Fp-y6XJWK4e1w_Vyc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5444137.png", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Cobble & Fog", Health:"Start health: 15",Quote:"...I was only just beginning to realise the extraordinary advantage my invisibility gave me.", Movement: 2,AbilityName:" ",Ability:"At the start of the game, after you place Invisible Man, place 3 fog tokens in separate spaces in his zone. When Invisible Man is on a space with a fog token, add 1 to the value of his defense cards. Invisible Man may move between two spaces with fog tokens as if they were adjacent"},
{name:"Buffy",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/buffyjpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Buffy the Vampire Slayer", Health:"Start health: 14",Sidekick:"Sidekick: Giles or Xander",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 6", Movement: 3,AbilityName:"",Ability:"Buffy may move through spaces containing opposing fighters (including when she is moved by effects)"},
{name:"Angel",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/angeljpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Buffy the Vampire Slayer", Health:"Start health: 16",Sidekick:"Sidekick: Faith",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 8", Movement: 2,AbilityName:"",Ability:"After Angel or Faith attacks, if you lost the combat, draw 1 card"},
{name:"Spike",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/spikejpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Buffy the Vampire Slayer", Health:"Start health: 15",Sidekick:"Sidekick: Drusilla",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 7", Movement: 2,AbilityName:"",Ability:"At the start of your turn, you may place a Shadow token in any space adjacent to Spike or Drusilla"},
{name:"Willow",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/willow-card-backpng.png",Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"Buffy the Vampire Slayer", Health:"Start health: 14",Sidekick:"Sidekick: Tara",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/ranged.716adb4d.svg", SidekickHealth:"Start Health: 6", Movement: 2,AbilityName:"",Ability:"When Willow or Tara is dealt damage, Willow becomes Dark Willow. At the end of your turn, if Dark Willow is adjacent to Tara, she becomes Willow"},
{name:"Beowulf",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/beowulfjpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Little Red Riding Hood vs. Beowulf", Health:"Start health: 17",Sidekick:"Sidekick: Wiglaf",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 9", Movement: 2,AbilityName:"",Ability:"Beowulf starts with 1 Rage. When Beowulf is dealt damage, he gains 1 Rage. Beowulf has a maximum of 3 rage"},
{name:"Little Red Riding Hood",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/little-redjpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Little Red Riding Hood vs. Beowulf", Health:"Start health: 14",Sidekick:"Sidekick: Huntsman",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/ranged.716adb4d.svg", SidekickHealth:"Start Health: 9", Movement: 2,AbilityName:"",Ability:"Resolve an effect on a card you play if the symbol next to the effect matches the item in your basket. At the start of the game, place LITTLE RED's BASKET in your discard pile. Little Red's Basket: This starts in your discard pile. It does not count as a card"},
{name:"Deadpool",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/deadpooljpg.png",Health:"Start health: 10", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Deadpool" ,Movement: 2,Quote:"What were you expecting? Negasonic-Teenage-Too-Busy-Snapbookittergramming? Nah! Just me, myself, and yo momma.",AbilityName:" ",Ability:"After you attack, Deadpool recovers 1 health. Also, if your opponent's real name is Logan, all your attacks are +5"},
{name:"Achilles",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/achilles-card-backpng.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Battle of Legends, Volume Two", Health:"Start health: 18",Sidekick:"Sidekick: Patroclus",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 6", Movement: 2,AbilityName:"",Ability:"When Patroclus is defeated, discard 2 random cards. While Patroclus is defeated: Add +2 to the value of all Achilles' attacks. If Achilles wins combat, draw 1 card"},
{name:"Bloody Mary",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/bloody-maryjpg.png",Health:"Start health: 16", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Battle of Legends, Volume Two" ,Movement: 3,Quote:"Bloody Mary. Bloody Mary. Bloody Mary.",AbilityName:"",Ability:"At the start of your turn, if you have exactly 3 cards in hand, gain 1 action"},
{name:"Sun Wukong",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/sun-wukongjpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Battle of Legends, Volume Two", Health:"Start health: 17",Sidekick:"Sidekick: Clones x3",Sidekick_Quantity: 3,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 1", Movement: 2,AbilityName:"",Ability:"At the start of your turn, you may take 1 damage to summon a Clone in an empty space adjacent to Sun Wukong. Do not start with any Clones on the board"},
{name:"Yennenga",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/yennengajpg.png",Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"Battle of Legends, Volume Two", Health:"Start health: 15",Sidekick:"Sidekick: Archers x2",Sidekick_Quantity: 2,SidekickRange:"https://unmatched.cards/img/ranged.716adb4d.svg", SidekickHealth:"Start Health: 2", Movement: 2,AbilityName:"",Ability:"If Yennenga would take damage, you may assign any amount of that damage to one or more Archers in her zone instead. (You may not assign more damage to an Archer than their remaining health.)"},
{name:"Luke Cage",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/luke-cagejpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Redemption Row", Health:"Start health: 13",Sidekick:"Sidekick: Misty Knight",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/ranged.716adb4d.svg", SidekickHealth:"Start Health: 6", Movement: 2,AbilityName:"",Ability:"Luke Cage takes 2 less combat damage from attacks. (When defending, Luke Cage wins combat if he takes no damage, even if he didn't play a card.)"},
{name:"Ghost Rider",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/ghost-riderjpg.png",Health:"Start health: 17", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Redemption Row" ,Movement: 2,Quote:"You cannot destroy one already beyond death, villan.",AbilityName:"",Ability:"Ghost Rider starts the game with 5 Hellfire. When you maneuver you may spend 1 Hellfire. If you do, increase Ghost Rider's move value to 4, and he mave move through opposing fighters. Then deal 1 damage to each opposing fighter he moved through. If you spend a Hellfire to use Ghost Rider's ability, your movement value is set to 4, and cannot be increased by BOOSTING your maneuver",Sidekick_Quantity: 0},
{name:"Moon Knight",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/moon-knightjpg.png",Health:"Moon Knight: Start health: 16, Khonshu: Start health: 16, Mr. Knight: Start health: 16", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Redemption Row" ,Movement: 3,Quote:"Moon Knight: I'm not real. Khonshu: You are my son. Mr.Knight: I've died before. It was boring, so I stood up",AbilityName:"",Ability:"Moon Knight: At the start of your turn, move up to 2 spaces. At the end of your turn, change to your next identity (Khonshu). Khonshu: Khonshu adds +2 to the value of his attack cards. He does not take damage from effects other than combat damage. At the end of your turn, change to your next identity (Mr.Knight). Mr.Knight: Mr.Knight adds +1 to all his defense values. At the end of your turn, change to your next identity (Moon Knight). Notes: Start the game as Moon Knight. You must change to your next form at the end of your turn. Moon Knight, Khonshu, and Mr.Knight all share the same health dial",Sidekick_Quantity: 0},
{name:"Daredevil",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/daredeviljpg.png" ,Health:"Start health: 17", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Hell's Kitchen" ,Movement: 3,Quote:"Fear can be overcome, if you have the will -Daredevil",AbilityName:"",Ability:"DURING COMBAT: If you have 2 or fewer cards in your hand, you may BLIND BOOST your attack or defense. (If you have other DURING COMBAT effects, choose the order.) ",Sidekick_Quantity: 0},
{name:"Bullseye",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/bullseyejpg.png",Health:"Start health: 14", Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"Hell's Kitchen" ,Movement: 2,Quote:"In real life, if he's quick and smart, and nasty enough the BAD guy wins! -Bullseye",AbilityName:"",Ability:"Bullseye can attack from up to 5 spaces away (ignoring zones)",Sidekick_Quantity: 0},
{name:"Elektra",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/elektrajpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Hell's Kitchen", Health:"Elektra: Start health: 7, Elektra Resurrected: Start health: 9",Sidekick:"Sidekick: The Hand x4",Sidekick_Quantity: 4,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 1", Movement: 2,AbilityName:"",Ability:"The first time Elektra would be defeated, remove her and all Hand from the board. She is not defeated. At the start of your next turn, Resurrect her. Ignore effects with this symbol",abilitySymbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Red_hand.svg/1892px-Red_hand.svg.png",Ability2:"When Elektra Resurrects: Flip your health dial. Shuffle your discard pile into your deck. Place Elektra and all Hand back onto the board with each fighter in a different zone. You must resolve effects with this symbol"},
{name:"Dr.Ellie Sattler",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1668709442sattler-card-backpng.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Jurassic Park - Sattler vs. T-Rex", Health:"Start health: 13",Sidekick:"Sidekick: Dr. Malcolm",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 7", Movement: 2,AbilityName:"",Ability:"After Dr.Sattler or Dr.Malcolm move, place an insight token in their new space. You have 5 insight tokens. NOTES: Whenever either of your fighters moves to a new space, place and insight token in their new space. Tokens may be placed in spaces with other tokens, including other insight tokens. These tokens have no effect themselves but many of your cards interact with them. When you remove insight tokens from the board, return them to your supply. You can place them on the board again in the future. If you would place an insight token but don't have any in your supply, nothing happens"},
{name:"T-Rex",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1668709465trex-card-backpng.png", Health:"Start health: 27", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Jurassic Park - Sattler vs. T-Rex" ,Movement: 1,Quote:"ROOOOOOAAAAARR -T.Rex",AbilityName:"",Ability:"T-Rex is a large fighter. (She can attack up to 2 spaces away.) At the end of your turn, draw a card. NOTES: Large fighters have an extended base that can occupy up to two spaces. Large fighters may start moving from any space they are in. When they do, rotate them so that the head is moving into the new space. Their tail always follows behind their head, entering the space the left. Large fighters also ignore one-way arrows on maps and cannot use secret passages. Large fighters can attack up to 2 spaces away, even over fighters that occupy one of those spaces",Sidekick_Quantity: 0},
{name:"Harry Houdini",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/houdinijpg.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Houdini vs. The Genie", Health:"Start health: 14",Sidekick:"Sidekick: Bess",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 5", Movement: 2,AbilityName:"ESCAPE ARTIST",Ability:"When you take the maneuver action and BOOST, you may place Houdini in any space instead of moving. (Bess moves as normal.)"},
{name:"Genie",img:"https://tiermaker.com/images/template_images/2022/15438827/unmatched---34-fighters-15438827/geniejpg.png", Health:"Start health: 16", Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"Houdini vs. The Genie" ,Movement: 3,Quote:"What wouldst thou have? - The Genie",AbilityName:"INFINITE POWER",Ability:"At the start of your turn, you may discard 1 card to gain 1 action",Sidekick_Quantity: 0},
{name:"Ms Marvel",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158126ms-marvel-card-back.png",Health:"Start health: 14", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Teen Spirit" ,Movement: 2,Quote:"A hero is just somebody who tries to do the right thing even when it's hard - Ms.Marvel",AbilityName:"STRETCHY",Ability:"At the start of your turn, you may move Ms.Marvel 1 space. Ms.Marvel can attack from up to 2 spaces away (ignoring zones).",Sidekick_Quantity: 0},
{name:"Squirrel Girl", img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158126squirrel-girl-card-back.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Teen Spirit", Health:"Start health: 13",Sidekick:"Sidekick: Squirrels ×8",Sidekick_Quantity: 8,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 1", Movement: 2,AbilityName:"GO NUTS!",Ability:"At the start of your turn, summon a squirrel in a space adjacent to Squirrel Girl. Squirrels are small fighters. Do not start with any squirrels on the board. NOTES: Up to 4 small fighters may share a space with another fighter. When a squirrel is dealt damage, each other squirrel in their space is dealt that much damage as well."},
{name:"Cloak and Dagger",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158125cloak-and-dagger-card-back.png",Health:"Cloak: Start health: 8, Dagger: Start health: 8", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Teen Spirit" ,Movement: 2,Quote:"",AbilityName:"UMBRA",AbilityName2:"REFRACTION",Ability:"After you attack, if Cloak dealt at least 2 combat damage, your opponent discards 1 card",Ability2:"After you attack, if Dagger dealt at least 2 combat damage, gain 1 action",Sidekick_Quantity: 0},
{name:"Black Widow",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158125black-widow-card-back.png",Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"For King and Country", Health:"Start health: 13",Sidekick:"Sidekick: Maria Hill",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/ranged.716adb4d.svg", SidekickHealth:"Start Health: 6", Movement: 2,AbilityName:"MISSION READY",Ability:"Before drawing your starting hand, add THE MOSCOW PROTOCOL card to your hand. Then, shuffle your deck and draw 5 cards. (Your starting hand is 6 cards instead of 5.)"},
{name:"Black Panther",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158125black-panther-card-back.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"For King and Country", Health:"Start health: 14",Sidekick:"Sidekick: Shuri",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/ranged.716adb4d.svg", SidekickHealth:"Start Health: 6", Movement: 2,AbilityName:"VIBRANIUM SUIT",Ability:"Whenever you BOOST, draw 1 card. Cards stored in your VIBRANIUM SUIT can only be used to BOOST"},
{name:"Winter Soldier",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158126winter-soldier-card-back.png",Health:"Start health: 15", Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"For King and Country" ,Movement: 2,Quote:"It's time for me to face the past...no matter what.",AbilityName:"BRAINWASHED",Ability:"Effects on Winter Soldier's cards cannot be canceled",Sidekick_Quantity: 0},
{name:"Spider Man", img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158126spider-man-card-back.png", Health:"Start health: 15", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Brains and Brawn" ,Movement: 3,Quote:"It's easy to laugh in the face of danger when you don't take anything too seriously.",AbilityName:"SPIDEY-SENSE",Ability:"When an opponent attacks Spider-Man, before you play a defense card, they must tell you the printed value of their card.",Sidekick_Quantity: 0},
{name:"She-Hulk",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158126she-hulk-card-back.png",Health:"Start health: 20", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Brains and Brawn" ,Movement: 2,Quote:"Green, gorgeous, gamma-powered bombshell...I know that's what you're thinking.",AbilityName:"JUST THROW SOMETHING",Ability:"At the start of your turn, you may discard a card to deal damage equal to its BOOST value to a fighter in your zone.",Sidekick_Quantity: 0},
{name:"Dr Strange",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158126doctor-strange-card-back.png",Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"Brains and Brawn", Health:"Start health: 14",Sidekick:"Sidekick: Wong",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/ranged.716adb4d.svg", SidekickHealth:"Start Health: 6", Movement: 2,AbilityName:"DARK PACT",Ability:"After each combat, if Doctor Strange played a card, you may deal 1 damage to him. If you do, put that card on the bottom of your deck and draw 1 card"},
{name:"Nikola Tesla",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158126tesla-card-back.png",Health:"Start health: 14", Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"Unmatched Adventures - Tales to Amaze", Movement: 2,Quote:"You may live to see man-made horrors beyond your comprehension",AbilityName:" ELECTRICAL OVERFLOW",Ability:"Start the game with 1 coil charged. At the end of your turn, charge 1 coil. At the start of your turn, if both coils are charged, deal 1 damage to each opposing fighter adjacent to Tesla and move them up to 1 space",Sidekick_Quantity: 0},
{name:"Dr Jill Trent",img:"https://api.triviacreator.com/v1/imgs/quiz/422276170_321070447597449_3973063738906055226_n-bcf9d0d2-b9c2-4724-bd86-45491fd519a1.jpg",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Unmatched Adventures - Tales to Amaze", Health:"Start health: 13",Sidekick:"Sidekick: Daisy",Sidekick_Quantity: 1, SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 6", Movement: 2,AbilityName:" GADGETOLOGY",Ability:"At the start of your turn, activate one of your gadgets. Whenever Jill Trent attacks, resolve the active gadget's effect. Hypnoray Blaster - DURING COMBAT: If your card's printed value is lower than your opponent's, reveal the top card of your opponent's deck. Increase the value of your attack by the BOOST value of the revealed card. Ultrabiotic Tonic - AFTER COMBAT: If your card's printed value is higher than your opponent's, Jill Trent Recovers 1 health"},
{name:"Golden Bat",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158126golden-bat-card-back.png",Health:"Start health: 18", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Unmatched Adventures - Tales to Amaze" ,Movement: 3,Quote:"HA HA HA HA HA ha ha ha ha",AbilityName:" THE FIRST SUPERHERO",Ability:"If you haven't taken a Maneuver action this turn, add +2 to the value of Golden Bat's attacks",Sidekick_Quantity: 0},
{name:"Annie Christmas",img:"https://tiermaker.com/images/chart/chart/unmatched-bol2-997464/zzzzz-1698158125annie-christmas-card-back.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Unmatched Adventures - Tales to Amaze", Health:"Start health: 14",Sidekick:"Sidekick: Charlie",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/ranged.716adb4d.svg", SidekickHealth:"Start Health: 8", Movement: 2,AbilityName:"NECKLACE OF PEARLS",Ability:"Add +2 to the value of Annie's attacks if she has less health than the defender."},
{name:"Oda Nobunaga",img:"https://tiermaker.com/images/media/template_images/2024/16010850/unmatched-fighter-tier-list-january-2024-16010850/zzzzz-170571612249-oda-nobunaga.png",Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Sun's Origin", Health:"Start health: 13",Sidekick:"Sidekick: Honor Guard x2",Sidekick_Quantity: 2, SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 6", Movement: 2,AbilityName:"MASTER STRATEGIST",Ability:"Other friendly fighters in Oda Nobunaga's zone add +1 to the value of their played combat cards. (Oda Nobunaga does not benefit from this ability.)"},
{name:"Tomoe Gozen",img:"https://tiermaker.com/images/media/template_images/2024/16010850/unmatched-fighter-tier-list-january-2024-16010850/zzzzz-170571612248-tomoe-gozen.png", Health:"Start health: 14", Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"Sun's Origin" ,Movement: 2,Quote:"If only I could find a worthy foe.",AbilityName:"ATTACK OF OPPORTUNITY",Ability:"When an opposing hero leaves Tomoe Gozen's zone, deal 1 damage to that hero",Sidekick_Quantity: 0},
{name:"Hamlet",img:"https://pbs.twimg.com/media/GI-2GwlWkAAKsuv.png", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Slings & Arrows", Health:"Start health: 15",Sidekick:"Sidekick: Rosencrantz & Guildenstern",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 6", Movement: 2,AbilityName:"THE QUESTION",Ability:"At the start of your turn, choose TO BE or NOT TO BE. If you choose NOT TO BE, deal 2 damage to one of your fighters. TO BE: When you maneuver, draw 1 additional card. NOT TO BE: Add +2 to the value of Hamlet's attacks "},
{name:"Titania",img:"https://tiermaker.com/images/media/template_images/2024/16010850/unmatched-fighter-tier-list-january-2024-16010850/zzzzz-1712851415cardback.png",Range:"https://unmatched.cards/img/ranged.716adb4d.svg",Sett:"Slings & Arrows", Health:"Start health: 12",Sidekick:"Sidekick: Oberon",Sidekick_Quantity: 1,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 6", Movement: 2,AbilityName:"FAIRY MAGIC",Ability:"If you do not have a face-up glamour at the start of your turn, flip the top card of your glamour deck face-up. Its effect is ongoing while it remains face-up"},
{name:"The Wayward Sisters",img:"https://tiermaker.com/images/media/template_images/2024/16010850/unmatched-fighter-tier-list-january-2024-16010850/zzzzz-1713399419um-saa-wayward-sisterscard-back.png",Health:"Start health: 6", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Slings & Arrows" ,Movement: 2,Quote:"What's done cannot be undone",AbilityName:"BUBBLING BREW",Ability:"Your cards go into your cauldron instead of your discard pile. After you attack, you may cast one spell that you have the ingredients for. If you do, discard all the cards in your cauldron."},
{name:"Shakespear",img:"https://pbs.twimg.com/media/GMgNYD5W4AAPUil.jpg", Range:"https://unmatched.cards/img/melee.d95dac7a.svg",Sett:"Slings & Arrows", Health:"Start health: 13",Sidekick:"Sidekick: Actors x3",Sidekick_Quantity: 3,SidekickRange:"https://unmatched.cards/img/melee.d95dac7a.svg", SidekickHealth:"Start Health: 1", Movement: 2,AbilityName:"IAMBIC PENTAMETER",Ability:"After you attack or defend, add your card to your line. When you line has 10 or more syllables, discard your line. If there are exactly 10 syllables, resolve the completion effect on the last card"},]

let characterShow = [...characters]
import { writable } from 'svelte/store';

let properties = writable([{name:"Movement",option:1,view:false},{name:"Movement",option:2,view:true},{name:"Movement",option:3,view:true},{name:"Sidekick_Quantity",option:0,view:true},{name:"Sidekick_Quantity",option:1,view:true},{name:"Sidekick_Quantity",option:2,view:true},{name:"Sidekick_Quantity",option:3,view:true},{name:"Sidekick_Quantity",option:4,view:true},{name:"Sidekick_Quantity",option:8,view:true}])
let propertiesName = ["Movement","Sidekick_Quantity"] 
properties.subscribe((value)=>{
  let filterProperties = $properties.filter((property) => property.view )
  if(filterProperties.length == $properties.length){
    characterShow = [...characters]
  }
  else{
    let selection = []
    propertiesName.forEach((name)=>{
      let temp = []


      let tempfilterProperties = filterProperties.filter((property)=>name == property.name)
      console.log(tempfilterProperties)
      if (tempfilterProperties.filter((property) =>property.view ).length > 0){
        tempfilterProperties.forEach((property) =>{
              temp =[...temp, ...characters.filter((object) => object[property.name] == property.option )];
          })
          temp = removeDuplicates(temp)
          console.log(temp)
          selection = [...selection,...temp]
          console.log("selection", selection)

        }
        else{
          selection = [...selection,...characters]
        }
        
      }
    )
    
     characterShow= filterDuplicates(selection,"name")
     console.log("filtered ", characterShow)
     characterShow = removeDuplicates(characterShow)
    }
  }
  )
   

  function filterDuplicates(arr, key) {
// Create a map to count occurrences of each key
const countMap = arr.reduce((acc, obj) => {
  acc[obj[key]] = (acc[obj[key]] || 0) + 1;
  return acc;
}, {});

// Filter the array to keep only objects with duplicates
return arr.filter(obj => countMap[obj[key]] > 1);
}

  function removeDuplicates(arr) {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
}


function resetProperties() {
  console.log("here")
  $properties.forEach((property)=>{
  })
  characterShow = [...characters]

}


let currentPop;
</script>

<main>


<!--popup-->

{#if show && currentPop}

<div class="card info shadow-xl" style="z-index:4;">
  <div style=" border-right:solid; border-color:rgb(080,070,070)">
    <button style="margin-bottom: 70px; margin-left: 30px; width: 50px; font-size:50px;" class = "button1" on:click={()=>{show = false;}}> &#8592;</button>
    <img style="-webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4)); padding-bottom:2px; border-radius:4%; height: 355px; width: 250px; margin-bottom: 170px; margin-left:150px;"src={currentPop.img}>
  </div>
  <div class="infoScreen" style="display:grid; grid-template-columns:repeat(2,50%) ">
    <div>
      <h3 style="font-weight:bolder; font-size:large; opacity: 0.30;">{currentPop.Sett}</h3>
      {#if currentPop.name !== "Raptors" && currentPop.name !== "The Wayward Sisters"}
        <h3 style="font-weight:bolder; font-size:large;">{currentPop.name}</h3>
        {:else}
        <h3 style="font-weight:bolder; font-size:large;">{currentPop.name} x3</h3>
      {/if}

      

      <img style="height: 50px;"src={currentPop.Range}>
      <div class="" style=" overflow-wrap: normal; width: 310px;">
        {#each currentPop.Health.split(", ") as health}
            <p>{health}</p>
        {/each}
      </div>
      <div style="margin-top: 40px;" class=""><p>Movement: {currentPop.Movement} </p></div>
      <div style="margin-top: 40px; font-weight:lighter" class=""><p><b>Special ability: </b>{currentPop.AbilityName} </p></div>
      <div style="width: 500px; margin-top: 10px; margin-top: 10px; font-weight:lighter" class="">
        {#each currentPop.Ability.split(". ") as ability}
        {#if currentPop.name === "Moon Knight" || currentPop.name === "Jekyll & Hyde" || currentPop.name === "Sherlock Holmes"  || currentPop.name === "Dr.Ellie Sattler" || currentPop.name === "Ms Marvel"}
          <p>{@html ability.replace(/\./g, '. ')}.</p>
        {:else}
          <p>{@html ability}.</p>
        {/if}
      {/each}

      {#if currentPop.AbilityName2}
        <p style="margin-bottom:10px; margin-top:20px;"><b>Special ability: </b>{currentPop.AbilityName2}</p>
      {/if}
      
      {#if currentPop.abilitySymbol}
        <img style="height: 50px; width: 50px;" src={currentPop.abilitySymbol}>
      {/if}
      
      {#if currentPop.name == "Elektra"|| currentPop.name == "Cloak and Dagger"}
        {#each currentPop.Ability2.split(". ") as ability2}
          <p>{@html ability2}.</p>
        {/each}

      
      
        {#if currentPop.abilitySymbol}
          <img style="height: 50px; width: 50px;" src={currentPop.abilitySymbol}>
        {/if}
      {/if}
      
      </div>
    </div>
    <div class="HELLO" >
      {#if currentPop.Sidekick != null}
        <div class="" style="font-weight:bold; font-size:large;"><p>{currentPop.Sidekick} </p></div>
        <img style="height: 50px;"src={currentPop.SidekickRange}>
        <div class=""><p>{currentPop.SidekickHealth} </p></div>
        {:else}
        <h3 style="font-style:italic; margin-right: 1px;">
          {#each currentPop.Quote.split(". ") as quote}
          {#if currentPop.name === "Moon Knight"}
            <p>{quote.replace(/\./g, '. ')}.</p>
        
          {/if}

          {#if currentPop.name != "Moon Knight" && currentPop.name != "Cloak and Dagger"}
          <p>"{quote}"</p>
          {/if}
        
          

          {/each}
        
        
        </h3>
      {/if}
    </div>

    <div>
      <div class="arrow bg-surface-100-800-token" />
      
      </div>
    </div>
</div>
{/if}

<div class="main">




<!--SIDEBAR-->
  <div class="sidebar">
  {#each propertiesName as name}
          <h2 style= "margin-left:50px; margin-top:10px;">{name.replace("_"," ")}</h2>
    {#each $properties.filter((property)=>name == property.name) as property}
        <span style= "margin-left:20px;">{""}</span>
        <!--Sidebar Buttons-->
       
        <button 
class="check" 
style=" background-color: {property.view ? 'rgb(115,95,65)' : 'rgb(30,30,30)'}; border-style: solid; border-color: rgb(100,100,100);  cursor: pointer; font-size: 18px;  transition: background-color 0.3s, color 0.3s; display: flex; flex-direction: column; align-items: center; justify-content: center;"  
on:click={() => property.view = !property.view}>
<span style="font-size: 24px;">{property.view ? property.option : property.option}</span>
</button>

    {/each}
  {/each}
   

          
</div>


<!--cards-->
<div class="card_main">
{#each characterShow as character,i}

<button class="btn btncard" on:click={()=>{show = true; currentPop= character }} >
  <div >
  <img src={character.img} alt="">
  <h1>{character.name}</h1></div>
</button>

{/each}
</div>
</div>



</main>


<style>

.check{
width: 30px;
height: 30px;
cursor: pointer;
display: flex;
align-items: center;
background: red;
border: none;
border-width: 0.08em;
border-radius: 1px;
border-color: rgb(59, 57, 54);
box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
background: #e62222;
margin-left: 50px;
}
.sidebar{
width: 200px;
height: 100%;
background-color: rgb(38, 36, 34);
}
.main{
display: grid;
grid-template-columns: 1fr 4fr;
height: 90.9vh;

}
.card_main{
margin: auto;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
height: 100%;
overflow-y: scroll;
width: 100%;
}
.HELLO{
margin-top: 26px;
}
.btncard{
flex-basis: 200px;
margin: 1%;
 
}


main  .card{
  position: fixed;
  top:8vh;
  left:0vw;
  height: 95vh;
  width: 100vw;
  
}
.info{

  position: fixed;
  left: 0px;
  display: grid;
  grid-template-columns: 35% 60%;
  grid-gap: 5%;
  align-items: center;

}
.infoScreen{
  height: 60vh;
  width: 120vh;
  overflow-y: scroll;
  padding: 10px;
}



.info img {
width: 150px;
height: 210px;
}

button{
  
    height:fit-content;
    padding: 0%;
}

.button1 {
border-radius: 10%;
padding-bottom: 3px;
padding-left: 3px;
padding-right: 3px;
color: rgb(72, 72, 72);
font-weight: bold;
transition: transform 1ms;
}
.button1:active{
transform: scale(0.9);
}

.btncard img{
  display: block;
  width: 100%;
  border-radius: 10px;
}

.button1:hover{
  filter: brightness(80%);
}




</style>