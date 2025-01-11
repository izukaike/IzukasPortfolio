<template>
    <section class="section">
      <div class="container">
        <!-- Situation Section -->
        <div class="situation-box">
          <h2 class="description" >Project Description  :  Custom Embedded FPGA System </h2>
          <p class="link">Check Out More Details on Github! <a href="https://github.com/izukaike/Personal-Processor-Z64">Click Here</a></p>
          <p class="content-situation">
            I built a 64-Bit Processor on an FPGA, Assembler in Python,
            and UART interface between FPGA and PC, and Memory Controller as part of my growing
            passion of digital hardware design and understanding modern
            computing systems operate at their core. This project was
            inspired by my FPGA based internship at Lockheed Martin and
            my deep interest in my Advanced Digital Logic, Computer Organization,
            and Microprocessor Systems classes at Baylor University. Beyond the 
            technical challenge, efficiency and high-performance computing is essential 
            for many industries to progress and reach new heights and I want to be an active participant
            in that innovation and push the ball forward. 
          </p>
        </div>
  
        <!-- Action/Results Section -->
        <div class="action-box">
          <h2 class="details">Project Details  :</h2>
          <p>
          Using my Computer Architecture Knowledge and software skills gained from my Computer Organization, Microprocessor Systems, and Advanced Digital Logic class,
          and internship as an Embedded Systems Engineer at Lockheed Martin. I wanted to reinforce low level hardware concepts in a holistic way.
        </p>
          
        </div>
  
        <!-- Pictures Section -->
        <!--<div class="columns is-centered">-->
          <div class="column is-centered">
            <img src="https://raw.githubusercontent.com/izukaike/Images/main/computing_system.png" alt="Picture 1" class="image1" />
          </div>
          
          <p class="content-center">
             This is the main outline of the computing system featuring an assembler, UART interface and pipelined processor, Memory
             controller and LED lights for visual feedback
          </p>
          <!--<div class="columns is-multiline">-->
          <div class="column is-centered">
            <img src="https://raw.githubusercontent.com/izukaike/Images/main/pipeline_picture.png" alt="Picture 2" class="image2" />
           
            <div class="content-center">
                <div class="content-center">
  <p class="label">
    For this embedded project I implemented the 64- bit 5-stage processor datapath including fetch, decode, execute, memory and the writeback
      stage based off the the LEGv8 ISA from ARM. This processor taught me the details on..
  </p>
  <ul class="aligned-list1">
      <li>Computer Architecture</li>
      <li>Parallel Processing</li>
      <li>Advanced Assembly Programming and Machine Code</li>
      <li>Efficient Memory Interfacing</li>
  </ul>
</div>
</div>
        </div>
          <!--<div class="columns is-multiline">-->
          <div class="column is-centered">
            <img src="https://raw.githubusercontent.com/izukaike/Images/main/mem_picture.png" alt="Picture 3" class="image3" />
           
            <div class="content-center">
                <div class="content-center">
            
            <p class="label">
                I made a memory interface that bridges the application 
                level and the physical layer with Xilinx/Vivado by
                synchronizing addressing, read/write, and the low-level
                details like masking, and control signal handling. In this
                part of my project I gained experience in...

            </p>
            <u1 class="aligned-list2">
                <li >DDR Protocols Like Activating, Precahrging, Reading, and Writing</li>
                <li >DDR Addressing and Hardware (Banks, Columns, and Rows)</li>
                <li >Phased-Locked Loop (PLL) and MMCM(Mixed-Mode Clock Manager) and Flag Sync</li>
                <li >FSM (Finite State-Machine) Logic</li>
                <li> LVDS (Low-Voltage Differential Signal)</li>
  
            </u1>
            
        </div>
    </div>
</div>


        <div class="column is-centered">
            <img src="https://raw.githubusercontent.com/izukaike/Images/main/uart_picture.png" alt="Picture 4" class="image4" />
           
            <div class="content-center">
                <div class="content-center">
            
            <p class="label">
                Transferring instructions from PC to FPGA I used UART protocol using...
            </p>
            <u1 class="aligned-list2">
                <li >FIFO Buffers for CDC </li>
                <li >C++ Windows API Calls</li>
                <li >Object-Oriented Programming (OOP)</li>
                <li >Resource Management</li>
            </u1>
            
        </div>
    </div>
</div>

        <!--</div>-->

        
          

        <!--</div>-->
  
        <!-- Lessons and Skills Learned Section -->
        <div class="box">
          <h2 class="title is-4">Skills and Lessons Learned</h2>
          <u1 class="aligned-list2">
                <li >C++ Serial Communication Code</li>
                <li >Compilers and Instruction Optimization</li>
                <li >Advanced Processor Design and Computer Architecture</li>
                <li >Transistor and Logic Gate Utilization </li>
                <li >Memory Management Design</li>
                <li >Command Line Interface</li>
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
    width: 750px;
    height: 350px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
  }

  .image2 {
    width: 800px;
    height: 333px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  
  .image3 {
    width: 650px;
    height: 350px;
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .image4 {
    width: 500px;
    height: 300px;
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
}

.aligned-list2 li {
  margin: 0.5rem 0; /* Add spacing between items */
  list-style-position: inside; /* Ensure bullets align with text */
  color: white;
}

.aligned-list1 li {
  margin: 0.5rem 0; /* Add spacing between items */
  list-style-position: inside; /* Ensure bullets align with text */
  color: white;
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
