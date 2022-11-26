<script setup>
import '98.css';
</script>

<template>
  <main>
    <div class="window mainWindow">
      <div class="title-bar">
        <div class="title-bar-text">Login</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div class="window-body">
        <p>Please, enter your credentials to log-in:</p>
        <div class="field-row fieldRowDiv">
          <input type="email" placeholder="someone@email.com" />
          <input type="password" placeholder="yourpassword1234" />
          <button class="loginButton">Login</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 25px;
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainWindow {
  width: 600px;
  height: 300px;
}

p {
  text-align: center;
}

.fieldRowDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  margin: 10px;
}

.loginButton {
  margin: 10px;
}
</style>
