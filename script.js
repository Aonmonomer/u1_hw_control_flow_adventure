const playerName = prompt("What's your name?")
alert('Hi ' + playerName + ', welcome to the the World of Dota!')

const gameStart = () => {
  const start = confirm(playerName + ', do you want to start a game?')
  if (start === true) {
    alert('Choose your hero! ')
  } else {
    alert('You may now exit the game!')
  }
}

gameStart()

const chooseHero = prompt(
  'Please type w for Warrior, a for Archer or m for Magician!'
)

let playerLevel = 1

switch (chooseHero.toUpperCase()) {
  case 'W':
    alert(
      'Good choice! You have chosen Warrior! Warrior is strong in melee combat and adept in using sword and shield! You are now level ' +
        playerLevel
    )
    break
  case 'A':
    alert(
      'Good choice! You have chosen Archer! Archer is strong in long range combat and adept in using bow and arrow! You are now level ' +
        playerLevel
    )
    break
  case 'M':
    alert(
      'Good choice! You have chosen Magician! Magician is strong in mid range combat and adept in using magic! You are now level ' +
        playerLevel
    )
    break
  default:
    alert('Idk what choice that is, please choose again')
    gameStart()
}

// const battle = () => {
//   if (chooseHero.toUpperCase === 'A') {
//     alert('You fought bravely and won!')
//   } else {
//     alert('You were defeated by the monster, pleast start again!')
//     gameStart()
//   }
// }
const runAway = () => {
  alert('You ran away safely but the monster killed many villagers.')
}

//For archer
const firstMonster = prompt(
  playerName +
    ' you have encounter a zombie, weak in long range combat, what do you do? Select 1 to Battle, Select 2 to Run Away'
)
if (firstMonster === '1') {
  if (chooseHero === 'A') {
    playerLevel += 9
    alert(
      'You shot a precise arrow through its skull and won! You are now level ' +
        playerLevel
    )
  } else if (chooseHero === 'a') {
    playerLevel += 9
    alert(
      'You shot a precise arrow through its skull and won! You are now level ' +
        playerLevel
    )
  } else {
    alert('You were defeated by the monster, please start again!')
    gameStart()
  }
} else {
  runAway()
}

//For Magician
const secondMonster = prompt(
  playerName +
    ' you have encounter a Shadow Fiend, weak in magic combat, what do you do? Select 1 to Battle, Select 2 to Run Away'
)
if (secondMonster === '1') {
  if (chooseHero === 'M') {
    playerLevel += 9
    alert('You gave it a fireball and won! You are now level ' + playerLevel)
  } else if (chooseHero === 'm') {
    playerLevel += 9
    alert('You gave it a fireball and won! You are now level ' + playerLevel)
  } else {
    alert('You were defeated by the monster, please start again!')
    gameStart()
  }
} else {
  runAway()
}

//For Warrior
const thirdMonster = prompt(
  playerName +
    ' you have encounter a Spider Queen, weak in melee combat, what do you do? Select 1 to Battle, Select 2 to Run Away'
)
if (thirdMonster === '1') {
  if (chooseHero === 'W') {
    playerLevel += 9
    alert('You fought bravely and won! You are now level ' + playerLevel)
  } else if (chooseHero === 'w') {
    playerLevel += 9
    alert('You fought bravely and won! You are now level ' + playerLevel)
  } else {
    alert('You were defeated by the monster, please start again!')
    gameStart()
  }
} else {
  runAway()
}

// Boss Battle
const bossFight = prompt(
  playerName +
    ' you have encounter level 10 Boss Roshan, strong in all combats, what do you do? Select 1 to Battle, Select 2 to Run Away'
)
if (bossFight === '1') {
  if (playerLevel >= 10) {
    playerLevel += 10
    alert(
      'Congratulations! It was an epic battle and you won! You are now level ' +
        playerLevel +
        ' and you gained the Aegis of immortal! '
    )
  } else {
    alert('You were defeated by Roshan, please start again!')
    gameStart()
  }
} else {
  alert(
    'Roshan spotted you trying to run away, you were defeated fighting an unprepared battle! Please try again! '
  )
  gameStart()
}

let replay = prompt('Do you want to play again? [Y / N]')
if (replay.toUpperCase === 'Y') {
  gameStart()
} else {
  gameStart()
}
