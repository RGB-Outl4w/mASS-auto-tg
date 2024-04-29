# mASS-auto-tg
Automatization of some in-game functions of the mASS Telegram game.
Play here ---> [@m_ASS_game_bot](https://t.me/m_ASS_game_bot?start=f2d869565742)

## ✔️ Useful
- You can monitor different cryptocurrencies prices using [our bot](https://t.me/crypteller_bot?start=0)

## What is mASS?
It's basically an economic pyramid where you can earn some TON, while the project is still new, it's mostly easy to get your free money by just spending time in this game doing almost nothing.
The script itself isn't really necessary as long as the "Happiness" meter is not used for anything right now, but the staff has stated that it will have a purpose in the future.

## Execution
Access the [**Telegram Webview Console**](https://telegra.ph/How-to-open-webview-inspecting-window-console-03-23).

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
