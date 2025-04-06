<template>
    <section class="section">
      <div class="container">
        <!-- Situation Section -->
        <div class="situation-box">
          <h2 class="description" >Project Description  : Rocket Engine Hardware Interface </h2>
          <p class="link">Check Out More Details on Github! <a href="https://github.com/izukaike/Baylor_Liquid_Propulsion_Electrical_System">Click Here</a></p>
          <p class="content-situation">
          Baylor Aero started its 2nd rendition of rocket engines making a 100-lb thrust
             liquid fueled rocket engine to compete at the prestigious Intercollegiate Rocket
              Engineering Competition (IREC). We needed to scale up our thrust as well as
               our hardware speed, accuracy, efficiency, autonomy, and reliability to better
                test our rocket to be competitive. I was enthusiastic about taking the position
                 as Lead Hardware Engineer making the custom hardware between the rocket engine
                  and the GUI front-end because I have a passion for all things sensors, actuators,
                   operating systems, wireless communication, electronics, and software. This was a
                    great opportunity to gain great practical hands-on technical experience in these
                     subjects to work on a team and accomplish something bigger than me.
          </p>
        </div>
  
        <!-- Action/Results Section -->
        <div class="action-box">
          <h2 class="details">Project Details  :</h2>
          <p>
            Because of my internship with SpaceX and upcoming graduation I would not be able to 
            be present for testing and debugging so I approached the design with a consumer product 
            mindset making the interactions with my work as easy for the software and mechanical 
            engineers and non-technical team members as easy as possible. Because Baylor Aero had its
             funding pulling, the need to be scrappy on budget was paramount so I used all in house
              parts and hand soldered all connections.
        </p>
          
        </div>


        <div class="column is-centered">
            <img src="https://raw.githubusercontent.com/izukaike/Images/main/v2_diagram.png" alt="Picture 12" class="image12" />
           
            <div class="content-center">
                <div class="content-center">
                  <p class="label">
                    This is the high-level diagram of the system
               </p>
</div>
</div>
</div>
<div class="column is-centered">
            <img src="https://raw.githubusercontent.com/izukaike/Images/main/pid2.png" alt="Picture 13" class="image13" />
           
            <div class="content-center">
                <div class="content-center">

              <p class="label">
               This is how the electronics interface with the rocket test stand
               </p>
</div>
</div>
</div>

        <!-- Pictures Section -->
        <!--<div class="columns is-centered">-->
          <div class="columns">
    <!-- First Column -->
    <div class="column is-half">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/hw_top_2.png" alt="Picture 12" class="image5" />
        <div class="content-center">
            <p class="label">
               This is the birds-eye-view of the hardware box with the control, data acquisition, and power distribution electronics 
               as well as the connectors, and Pi to make the rocket engine operate. I gained invaluable experience with...
            </p>
        </div>
    </div>

    <div class="column is-half">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/hw_bottom.jpg" alt="Picture 5" class="image5" />
        <div class="content-center">
            <p class="label">
               This is the bottom of hardware showcasing how I hand soldered all the connections
            </p>
            <ul class="aligned-list2">
                
            </ul>
        </div>
    </div>
</div>

<ul class="aligned-list2">
                <li> GREEEN: Utilized 3 Relays and  2 BJT's circuits for Valve Control</li>
                <li> RED: Synchronized 4 ADC's for varying Single-Ended, Differential, Voltage Ranges for Pressure Transducers, Load Cell, and Thermocouple, and Power Sensor Data </li>
                <li> BLUE: Implemented an LDO and Boost Converter on Board for Efficient and Stable Power for Valve, Raspberry Pi, and ADC performance</li>
                <li> USB and Ethernet Connectors For Easy Battery Module and Instruementation Interface</li>
                <li> C++ and Python for power management, ADC, GPIO, and Wi-Fi</li>
                
</ul>

        
<div class="columns">
    <!-- First Column -->
    <div class="column is-one-third">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/battery.jpg" alt="Picture 8" class="image8" />
    </div>

    <div class="column is-one-third">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/battery3.png" alt="Picture 9" class="image9" />
        
    </div>

    <div class="column is-one-third">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/battery2.png" alt="Picture 10" class="image10" />
        
    </div>
</div>

<div class="columns">
<div class = "content-center">
<p class="label">
               To provide an easy user friendly way to power the hardware box I reworked a rechargeable battery product where I...
</p>
</div>
</div>
<ul class="aligned-list2">
  <u1>
              <li> Replaced IEC Pigtail with USB to be able to recharge locally from laptop while in the field </li>
              <li> Disabled 2 recharge controller chips and rerouted Battery Paths from series to parallel </li>
              <li> Installed a Buck Converter to USB connector for votlage control and easy interface with HW box  </li>
            </u1>
                
</ul>
<div class="columns">
    <!-- First Column -->
    <div class="column is-half">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/image.png" alt="Picture 4" class="image4" />
        <div class="content-center">
            <p class="label">
               To automate Hardware-In-The-Loop Testing, I made my own 8 Channel Signal Generator 
               with 4 DAC's. To reliably test my Liquid-Fuel Rocket Engine hardware, I needed to test my DACs.
            </p>
            <ul class="aligned-list2">
                <li>1 DAC serving as a Signal Generator</li>
                <li>1 ADC for Load Impedance</li>
                <li>Bare-Metal C++ for DAC Control from MCU</li>
                <li>Oscilliscope Automated Data Collection using Python </li>
            </ul>
        </div>
    </div>

    <div class="column is-half">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/dac_data.png" alt="Picture 5" class="image5" />
        <div class="content-center">
            <p class="label">
               This is Voltage Sweep Test Proving my Signal Generator is accurate and reliable
            </p>
            <ul class="aligned-list2">
                <li>Data Visualization on Expected Data vs Real Data on a  V Sweep Test</li>
                <li> Minimal Calculated % Error</li>
            </ul>
        </div>
    </div>
</div>


<div class="columns">
    <!-- First Column -->
    <div class="column is-half">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/adc_data2.png" alt="Picture 4" class="image4" />
        <div class="content-center">
            <p class="label">
               Testing the ADC Circuit and Software Using the a DAC. The test features a 
            </p>
            <ul class="aligned-list2">
                <li>Raspberry Pi 4b+ Controlled ADC and Arduino Controlled DAC</li>
                <li>System-Level C++ for ADC and Bare-Metal C++ for DAC </li>
                <li>Oscilliscope Automated Data Collection using Python </li>
            </ul>
        </div>
    </div>

    <div class="column is-half">
        <img src="https://raw.githubusercontent.com/izukaike/Images/main/adc_data.png" alt="Picture 7" class="image7" />
        <div class="content-center">
            <p class="label">
               This is Voltage Sweep Test Proving my Signal Generator is accurate and reliable
            </p>
            <ul class="aligned-list2">
                <li>Data Visualization on Expected Data vs Real Data on a  V Sweep Test</li>
                <li> Minimal Calculated % Error</li>
            </ul>
        </div>
    </div>
</div>
        <!--</div>-->

        
          

        <!--</div>-->
  
        <!-- Lessons and Skills Learned Section -->
        <div class="box">
          <h2 class="title is-4">Skills and Lessons Learned</h2>
          <u1 class="aligned-list2">
                <li >Operating Systems and System-Level C++ Programming</li>
                <li >Embedded Bare-Metal C++ Programming</li>
                <li >Test Planning and Hardware Verification </li>
                <li >Data Acquisition Hardware and Software</li>
                <li >Sensor Technology </li>
                <li >Power Electronics and Batteries</li>
                <li >Wireless Communication Hardware and Software</li>
                <li >Circuit Design and Prototyping and Schematic Reading</li>
                <li >Multi-Disciplinary Team Work and Communication</li>
                <li >Project Completion On A Budget and Strict Timeline</li>
                <li >Developing Software API's</li>
                <li >Python Automation and Data Visualization</li>
            </u1>
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
    width: 650px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
  }

  .image2 {
    width: 400px;
    height: 333px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  
  .image3 {
    width: 650px;
    height: 400px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .image4 {
    width: 550px;
    height: 350px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .image5 {
    width: 550px;
    height: 350px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .image11 {
    width: 550px;
    height: 350px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .image6 {
    width: 400px;
    height: 350px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .image7 {
    width: 550px;
    height: 350px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .image8 {
    width: 355px;
    height: 250px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .image9 {
    width: 355px;
    height: 250px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .image10 {
    width: 355px;
    height: 250px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .image12 {
    width: 750px;
    height: 250px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  .image13 {
    width: 650px;
    height: 450px;
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
  text-align: center; /* Center the entire block */
  color: white;
}

.aligned-list1 {
  display: inline-block; /* Centers the entire list block */
  text-align: left; /* Aligns text to the left inside the list */
  list-style-type: disc; /* Default bullet style */
  padding-left: 0; /* Remove any left padding */
  margin: 0; /* Remove extra margins */
  color: white;
}

.aligned-list2 {
  display: inline-block; /* Centers the entire list block */
  text-align: left; /* Aligns text to the left inside the list */
  list-style-type: disc; /* Default bullet style */
  padding-left: 0; /* Remove any left padding */
  margin: 0; /* Remove extra margins */
  color: white;
  font-size: 18;
}

.aligned-list2 li {
  margin: 0.5rem 0; /* Add spacing between items */
  list-style-position: inside; /* Ensure bullets align with text */
  color: white;
  font-size: 18;
}

.aligned-list1 li {
  margin: 0.5rem 0; /* Add spacing between items */
  list-style-position: inside; /* Ensure bullets align with text */
  color: white;
  font-size: 18;
}

  .content-center1{
    text-align: center;
    color: white;
    font-size: 18px;
  }
  .content-situation{
    text-align: center;
    color: white;
    font-size: 18px;
    margin-bottom: 2rem;
  }
.h2{

    margin-top: 5rem;
}

.bullet-point{
    text-align: center;
    color: white;
}

.description{
    margin-bottom: 1rem;
    font-size: 28px;
    font-weight: bold;

}

.details{
    margin-bottom: 1rem;
    font-size: 28px;
    font-weight: bold;

}
.label {
    font-size: 18px;
}

.link{
    font-size:16px;
    font-weight: 700;
    margin-bottom: 0.5rem;
}
  </style>
