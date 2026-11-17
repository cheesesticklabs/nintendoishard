// NES files use JSNES. Arcade ZIPs use the bundled compressed local player.
window.LESSON_GAMES = {
  castlevania: { title: 'Castlevania', platform: 'NES', rom: 'roms/castlevania.nes', cover:'assets/castlevania.png', engine:'nes', focus:'Watch attack timing and what happens after a hit.' },
  ninja: { title: 'Ninja Gaiden', platform: 'NES', rom: 'roms/ninja-gaiden.nes', cover:'assets/ninja-gaiden.png', engine:'nes', focus:'Watch enemy placement, movement, and recovery.' },
  punch: { title: 'Mike Tyson’s Punch-Out!!', platform: 'NES', rom: 'roms/punch-out.nes', cover:'assets/punch-out.png', engine:'nes', focus:'Watch the opponent’s signals before an attack.' },
  mega: { title: 'Mega Man 2', platform: 'NES', rom: 'roms/mega-man-2.nes', cover:'assets/mega-man-2.png', engine:'nes', focus:'Watch how stage choice and practice affect progress.' },
  gradius: { title: 'Gradius', platform: 'NES', rom:'roms/gradius.nes',cover:'assets/gradius.png',engine:'nes',focus:'Watch upgrades and what changes after losing a life.' },
  battletoads: { title:'Battletoads',platform:'NES',rom:'roms/battletoads.nes',cover:'assets/battletoads.png',engine:'nes',focus:'Watch how the game teaches timing and movement.' },
  contraArcade: { title: 'Contra', platform: 'Arcade', rom: 'roms/contra.zip', cover:'assets/contra-arcade.png', engine:'mame2003' },
  contraNes: { title: 'Contra', platform: 'NES', rom:'roms/contra.nes', cover:'assets/contra.png', engine:'nes' },
  ghostsArcade: { title: 'Ghosts ’n Goblins', platform: 'Arcade', rom: 'roms/gng.zip', engine:'mame2003' },
  pacArcade: { title:'Pac-Man (Puck Man)', platform:'Arcade', rom:'roms/puckman.zip', cover:'assets/pac-man-arcade.png', engine:'mame2003' },
  msPacArcade: { title:'Ms. Pac-Man', platform:'Arcade', rom:'roms/mspacman.zip', cover:'assets/ms-pac-man-arcade.png', engine:'mame2003' },
  ghostsNes: { title: 'Ghosts ’n Goblins', platform: 'NES', rom: 'roms/ghosts-n-goblins.nes', cover:'assets/ghosts-n-goblins.png', engine:'nes' }
};
