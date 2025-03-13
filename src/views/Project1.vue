<template>
  <section class="section">
    <div class="container">
      <!-- Situation Section -->
      <div class="situation-box">
        <h2 class="description" >Project Description  : Rocket Engine Data & Control System </h2>
        <p class="link">Check Out More Details on Github! <a href="https://github.com/izukaike/Liquid_Fueled_Rocket_Engine_Electrical_System">Click Here</a></p>
        <p class="content-situation">
          Baylor Aero embarked on its first project to
          develop a 10-lb thrust liquid-fueled rocket 
          engine to compete at the prestigious Intercollegiate
          Rocket Engineering Competition (IREC). I was excited
          by the opportunity to combine my creativity and technical
          expertise to gain hands-on hardware and software development
          experience while laying the foundation for future Baylor Aero
          rocket projects. Although I was encouraged to use LabView and
          NI DAQ hardware to simplify the process, I chose to take on greater
          ownership and responsibility. I led the design and development of 
          the instrumentation and DAQ electronics hardware, as well as the
          signal processing, telemetry, and Graphical User Interface (GUI) 
          software, building a fully customized solution for the project.
        </p>
      </div>

      <!-- Action/Results Section -->
      <div class="action-box">
        <h2 class="details">Project Details  :</h2>
        <p>
        This was my first crack at a hardware project, so most
        of our options were limited to free available parts that we could find in our lab,
        which gave me the opportunity to be highly adaptable, creative, and result in crude solutions
        to get the job done.
      </p>
      </div>

      <!-- Pictures Section -->
      <div class="column is-centered">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/high_level_ee_system.png" alt="Picture 1" class="image1" />
      </div>
        
      <p class="content-center">
        This is the main outline of the electrical system with the ability to acquire data from pressure transducers for fluids and chamber pressure, 
        control a spark plug for ignition, regulate battery power, communicate data from Arduino to PC, access rocket engine through GUI.
      </p>
      
      <div class="column is-centered">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/v1_schematic.png" alt="Circuit Schematic" class="image6" />
      </div>
      
      <div class="content-center">
        <p class="label">
          This is the schematic that also includes the battery power source, pressure transducers, and solenoid valves.
        </p>
      </div>
      
      <!-- Moved List Below Circuit Schematic -->
      <div class="content-center">
        <p class="label">
          This is the main Control and Data Acquisition Electronics featuring...
        </p>
        <ul class="aligned-list1">
          <li>Arduino as the brains and ADC's</li>
          <li>Bare-Metal C++ on Microcontroller for...</li>
          <ul class="nested-list1">
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ADC</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- GPIO</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- EEPROM</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- UART</li>
          </ul>
          <li>Relays Logic for Valves and LS2 Coil</li>
          <li>Buck Converter for Power Management</li>
          <li>EMI Safe Covering</li>
          <li>USB Cable for UART Communication to PC</li>
        </ul>
      </div>
      
      <div class="column is-centered">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/v1_GUI.png" alt="GUI System" class="image3" />
        <div class="content-center">
          <p class="label">
            This is the GUI system, enabling data visualization, hardware control, and efficient user interaction with...
          </p>
          <ul class="aligned-list2">
            <li>Real-Time Data Collection and Visualization of 4 Pressure Transducers</li>
            <li>Down to 2ms Page Refresh Rate</li>
            <li>Automated Hardware-In-The-Loop Testing</li>
            <li>2 Factor Hot-Fire Start and Abort Safety</li>
            <li>Control of 2 Valves</li>
            <li>Control of LS2 Coil</li>
          </ul>
        </div>
      </div>

      <!-- Lessons and Skills Learned Section -->
      <div class="box">
        <h2 class="title is-4">Skills and Lessons Learned</h2>
        <ul class="aligned-list2">
          <li>Embedded Bare-Metal C++ Programming</li>
          <li>Basic Lab Equipment Experience</li>
          <li>Circuit Design and Prototyping and Schematic Reading</li>
          <li>Multi-Disciplinary Team Work and Communication</li>
          <li>Project Completion On A Budget and Strict Timeline</li>
          <li>Python Front-End And Data Visualization</li>
          <li>Python Automation</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "Project1",
};
</script>

<style scoped>
.image1 {
width: 550px;
display: block;
margin: 0 auto;
margin-bottom: 2rem;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
margin-top: 1rem;
}

.image3 {
width: 650px;
display: block;
margin: 0 auto;
margin-bottom: 2rem;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
margin-top: 1rem;
}

.image6 {
width: 675px;
height: 400px;
display: block;
margin: 0 auto;
margin-bottom: 2rem;
margin-top: 1rem;
}

.situation-box {
margin-bottom: 0rem;
color: white;
}

.action-box {
margin-bottom: 2rem;
color: white;
}

.container {
margin-top: 0rem;
}

.content-center {
text-align: center;
color: white;
}

.aligned-list1 {
display: inline-block;
text-align: left;
list-style-type: disc;
padding-left: 0;
margin: 0;
color: white;
}

.aligned-list2 {
display: inline-block;
text-align: left;
list-style-type: disc;
padding-left: 0;
margin: 0;
color: white;
}

.aligned-list1 li, .aligned-list2 li {
margin: 0.5rem 0;
list-style-position: inside;
color: white;
}

.label {
font-size: 18px;
}

.description {
margin-bottom: 1rem;
font-size: 28px;
font-weight: bold;
}

.details {
margin-bottom: 1rem;
font-size: 28px;
font-weight: bold;
}

</style>
