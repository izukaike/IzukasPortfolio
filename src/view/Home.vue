<template>
    <section class="section">
      <div class="container">
        <!-- Bio Section (Full Width) -->
        <div class="columns">
          <div class="column is-full">
            <div class="bio-box">
              <BioSection />
            </div>
          </div>
        </div>
  
        <!-- Projects Section -->
        <div class="projects-section">
          <div class="columns is-multiline">
            <!-- Project 1 -->
            <div class="column is-one-third">
              <ProjectCard
                title="Rocket Engine Data & Control System"
                description="Responsible for the control and DAQ circuitry, 
                signal processing and telemetry software in C++, and GUI used 
                by 9 engineers to test Baylor University’s first Liquid Fueled Rocket Engine"
                link="/project1"
                image="https://raw.githubusercontent.com/izukaike/Images/main/blp1.png"
              />
            </div>
            <!-- Project 2 -->
            <div class="column is-one-third">
              <ProjectCard
                title="Rocket Engine Hardware Box"
                description="Ground-up development of embedded hardware
                between instrumentation and front-end GUI
                through custom battery module, rocket control
                and sensor electronics, and telemetry API"
                link="/project2"
                image="https://raw.githubusercontent.com/izukaike/Images/main/blp2.png"
              />
            </div>
            <!-- Project 3 -->
            <div class="column is-one-third">
              <ProjectCard
                title="Custom Embedded FPGA System"
                description="Implemented my own pipelined 64-Bit ARM Processor,
                Assembler, UART interface, and Memory Controller focusing on high performance
                and rapid development"
                link="/project3"
                image="https://raw.githubusercontent.com/izukaike/Images/main/process.png"
              />
            </div>
          </div>
        </div>
  
        <!-- Contact Info Section at the Bottom -->
      </div>
    </section>
    <div class="contact-info-box">
          <ContactInfo />
        </div>
  </template>
  
  <script>
  import BioSection from "../components/BioSection.vue";
  import ContactInfo from "../components/ContactInfo.vue";
  import ProjectCard from "../components/ProjectCard.vue";
  
  export default {
    components: {
      BioSection,
      ContactInfo,
      ProjectCard,
    },
  };
  </script>
  
  <style scoped>
  /* General Section Styling */
  .section {
    padding: 1rem 1.5rem;
    background-color: white;
    border-radius: 8px;
  }
  
  /* Container */
  .container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0.75rem;
    background-color: white;
    border-radius: 8px;
  }
  
  /* Bio Section Styling */
  .bio-box {
    width: 100%;
    padding: 0.75rem;
    background-color: #f9f9f9;
    margin-bottom: 1rem;
    border-radius: 8px;
    border: 2px solid black;
  }
  
  /* Projects Section Styling */
  .projects-section {
    margin-bottom: 1rem;
    background-color: white;
  }
  
  .project-card {
    padding: 0.5rem;
    background-color: white;
  }
  
  /* Remove Column Padding */
  .column {
    padding: 0rem;
    background-color: white;
  }
  
  /* Contact Info Section Styling */
  .contact-info-box {
    padding: 1rem;
    margin-top: 1rem;
    text-align: center;
  }
  </style>
