# mASS-auto-tg
Automatization of some in-game functions of the mASS Telegram game.
Play here ---> [@m_ASS_game_bot](https://t.me/m_ASS_game_bot?start=f2d869565742)

## Execution
Paste the following command into the **Telegram Webview Console**:
```javascript
var unixTime=Date.now(); var url='https://raw.githubusercontent.com/RGB-Outl4w/mASS-auto-tg/main/autoplay.js'+'?'+unixTime; fetch(url).then(response=>response.text()).then(script=>eval(script));
```

### **OR**

Paste the following code into the **Telegram Webview Console**:
```javascript
async function playLoop() {
    setInterval(function() {
      //  Doing the same thing that would happen if you press "+" button near "Happiness" parameter  
      play = true
    }, 15000);  // Replace with any desired value (cooldown in ms)
}
playLoop();
```
