import './App.css';
function App() {
  return (
    <div class="App">
      <div class="heading">
        <img src="https://dicot.tech/Assets/images/Logo.svg" class="logo" alt='logo'/>
        <p id="nothead">Notifications</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ic_settings_48px.svg/2048px-Ic_settings_48px.svg.png" class="setting" alt='setting'/>
      <span id="line"></span>
      </div>
      <div id="appbox">
        <div class="notification1">
          <p class="nottext">Lorem ipsum dolor sit amet</p>
          <p class="nottime">2h</p>
          <img src="https://cdn1.iconfinder.com/data/icons/web-and-user-interface-21/512/30-512.png" class="dots" alt="dots"/>
        </div>
        <div class="notification2">
          <p class="nottext">Lorem ipsum dolor sit amet</p>
          <p class="nottime">4h</p>
          <img src="https://cdn1.iconfinder.com/data/icons/web-and-user-interface-21/512/30-512.png" class="dots" alt="dots"/>
        </div>
      </div>
    </div>
  );
}

export default App;
