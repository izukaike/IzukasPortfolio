<template>
    <!--nav class="navbar is-light"-->
      <div class="navbar-brand">
        <!--a class="navbar-item navbar-title" href="/">Izuka Ikedionwu -->
        <h2 class="title is-20 navbar-name" style="font-size: 2.6rem;margin-bottom: 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Izuka's Engineering Portfolio!</h2>
      </div>
    <!--nav-->
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
<style>

html, body {
  margin: 0;
  padding: 0;
}

.navbar {
    display: flex; /* Enable flexbox for alignment */
    justify-content: flex-end; /* Push items to opposite sides */
    align-items: right; /* Center items vertically */
    padding: 1rem; /* Add padding for spacing */
    /*border-bottom: 1px solid #ddd;*/
    background-color: white;
    color: white;
    border-bottom: 2px solid white;
    margin-bottom: 0rem;
}

.navbar-name {
  font-size: 2.75rem; /* Font size */
  font-weight: bold; /* Bold text */
  color: #333; /* Text color */
  padding-left: 30px; /* Add white space on the left */
  padding-right: 30px; /* Add white space on the right */
  margin-bottom: 0rem;
}

.navbar-title {
    font-size: 2.75rem; /* Adjust size to match */
    font-weight: bold; /* Match weight */
    color: #333; /* Use the same color as the project title */
    text-transform: uppercase; /* If "Projects" is uppercase */
    text-align: center; /* Center the text */
    margin-bottom: 0rem;
}
  
  .navbar-title:hover {
    color: #f9f9f9; /* Optional hover effect */
    margin-bottom: 0rem;
  }
  </style>
