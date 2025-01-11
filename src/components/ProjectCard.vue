<template>
    <div class="project-card">
      <img :src="image" alt="Project Image" class="project-image" />
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-description">{{ description }}</p>
      <a :href="link" class="project-link">View Project</a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String,
      link: String,
      image: String,
    },
  };
  </script>
  
  <style scoped>
  .project-card {
    text-align: center;
    padding: 1rem;
    background-color: #f9f9f9;
    border: black;
    border-radius: 8px;
    margin-bottom: 0rem;
    height: 275px;
  }
  
  .project-image {
    max-width: 100%;
    height: 100px;
    width: 150px;
    border-radius: 8px;
    margin-bottom: 0rem;
    margin-top: 0rem;
  }
  
  .project-title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: black;
  }
  
  .project-description {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.6;
    color: black;
  }
  
  .project-link {
    color: #3273dc;
    text-decoration: underline;
  }
  .project-link:hover {
    color: #2758a5;
  }
  </style>