(() => {
'use strict';const game=window.LESSON_GAMES[decodeURIComponent(location.hash.slice(1))];const $=id=>document.getElementById(id);let started=false;
$('return').onclick=()=>parent.postMessage({type:'close-game'},location.origin);
if(!game?.rom){$('status').textContent='This game space is waiting for a file. Return to the lesson.';$('start').disabled=true;return;}
document.title=game.title+' · Arcade';
$('start').onclick=async()=>{if(started)return;$('start').disabled=true;$('status').textContent='Loading game…';try{const r=await fetch(game.rom,{cache:'no-store'});if(!r.ok)throw new Error('Game file could not be loaded ('+r.status+').');const rom=await r.arrayBuffer();window.embedMAME({container:'arcade',name:game.rom.split('/').pop(),rom,soundEnabled:true,showMobileControls:false,backText:window.LESSON_I18N.lang==='es'?'VOLVER':'BACK',soundText:window.LESSON_I18N.lang==='es'?'SONIDO':'SOUND',loadText:window.LESSON_I18N.lang==='es'?'CARGAR':'LOAD',saveText:window.LESSON_I18N.lang==='es'?'GUARDAR':'SAVE',coin:'Digit1',player1:{up:'KeyW',down:'KeyS',left:'KeyA',right:'KeyD',start:'KeyH',button1:'KeyJ',button2:'KeyK'},cbStarted:()=>{started=true;$('status').textContent='';$('start').hidden=true;}});}catch(e){$('status').textContent=e.message||'Could not load this game.';$('start').disabled=false;}};
window.addEventListener('error',e=>{$('status').textContent='Player error: '+(e.message||'Could not load this game.');});
})();
