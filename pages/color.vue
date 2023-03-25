<template>
    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </template>
  
  <script setup>
  const colorMode = useColorMode()
  
  console.log(colorMode.preference)
  </script>
  
  <style>
  body {
    background-color: #fff;
    color: rgba(0,0,0,0.8);
  }
  .dark-mode {
  --color: #ff0303;
  --color-primary: #41b38a;
  --color-secondary: #fe9901;
  --bg: #091a28;
  --bg-secondary: #071521;
  --border-color: #0d2538;
  --font-weight: bold;
}

  .sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
  }
  </style>
  