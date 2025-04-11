<!-- filepath: /Users/stevenhill/Projects/slidev-gce-theme/global-top.vue -->
<template>
    <header class="custom-header">
      <img v-if="logo" :src="logo" alt="Logo" class="logo" />
      <img v-if="avatar" :src="avatar" alt="Avatar" class="avatar" />
    </header>
  </template>
  
  <script setup>
  // Access the theme configuration using $slidev.themeConfigs
  const logo = $slidev.themeConfigs.logo || ''
  const avatar = $slidev.themeConfigs.avatar || ''
  </script>
  
  <style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: transparent; /* Transparent background */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  
  .logo {
    height: 40px;
  }
  
  .avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%; /* Makes the avatar circular */
    object-fit: cover; /* Ensures the image fits within the circle */
  }
  </style>