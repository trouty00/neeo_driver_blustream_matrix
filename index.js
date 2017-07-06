'use strict';

const neeoapi = require('neeo-sdk');
const controller = require('./controller');

console.log('NEEO SDK Example "Blustream HD Matrix" adapter');
console.log('---------------------------------------------');

/*
 * A Very simple Telnet adapter to control the devices on a HD Matrix, can support a blustream HD Matrix up to 8x8 , just use the appropriate codes.
  */
 
 
 
 const blustreamtelnet= neeoapi.buildDevice('HMXLXX-KIT')
  .setManufacturer('Blustream')
  .addAdditionalSearchToken('foo')
  .setType('HDMISWITCH')
	
.addButton({ name: 'OUT01FR01\r', label: 'OUT01FR01'}, controller.button)
.addButton({ name: 'OUT01FR02\r', label: 'OUT01FR02'}, controller.button)
.addButton({ name: 'OUT01FR03\r', label: 'OUT01FR03'}, controller.button)
.addButton({ name: 'OUT01FR04\r', label: 'OUT01FR04'}, controller.button)
.addButton({ name: 'OUT01FR05\r', label: 'OUT01FR05'}, controller.button)
.addButton({ name: 'OUT01FR06\r', label: 'OUT01FR06'}, controller.button)
.addButton({ name: 'OUT01FR07\r', label: 'OUT01FR07'}, controller.button)
.addButton({ name: 'OUT01FR08\r', label: 'OUT01FR08'}, controller.button)
.addButton({ name: 'OUT02FR01\r', label: 'OUT02FR01'}, controller.button)
.addButton({ name: 'OUT02FR02\r', label: 'OUT02FR02'}, controller.button)
.addButton({ name: 'OUT02FR03\r', label: 'OUT02FR03'}, controller.button)
.addButton({ name: 'OUT02FR04\r', label: 'OUT02FR04'}, controller.button)
.addButton({ name: 'OUT02FR05\r', label: 'OUT02FR05'}, controller.button)
.addButton({ name: 'OUT02FR06\r', label: 'OUT02FR06'}, controller.button)
.addButton({ name: 'OUT02FR07\r', label: 'OUT02FR07'}, controller.button)
.addButton({ name: 'OUT02FR08\r', label: 'OUT02FR08'}, controller.button)
.addButton({ name: 'OUT03FR01\r', label: 'OUT03FR01'}, controller.button)
.addButton({ name: 'OUT03FR02\r', label: 'OUT03FR02'}, controller.button)
.addButton({ name: 'OUT03FR03\r', label: 'OUT03FR03'}, controller.button)
.addButton({ name: 'OUT03FR04\r', label: 'OUT03FR04'}, controller.button)
.addButton({ name: 'OUT03FR05\r', label: 'OUT03FR05'}, controller.button)
.addButton({ name: 'OUT03FR06\r', label: 'OUT03FR06'}, controller.button)
.addButton({ name: 'OUT03FR07\r', label: 'OUT03FR07'}, controller.button)
.addButton({ name: 'OUT03FR08\r', label: 'OUT03FR08'}, controller.button)
.addButton({ name: 'OUT04FR01\r', label: 'OUT04FR01'}, controller.button)
.addButton({ name: 'OUT04FR02\r', label: 'OUT04FR02'}, controller.button)
.addButton({ name: 'OUT04FR03\r', label: 'OUT04FR03'}, controller.button)
.addButton({ name: 'OUT04FR04\r', label: 'OUT04FR04'}, controller.button)
.addButton({ name: 'OUT04FR05\r', label: 'OUT04FR05'}, controller.button)
.addButton({ name: 'OUT04FR06\r', label: 'OUT04FR06'}, controller.button)
.addButton({ name: 'OUT04FR07\r', label: 'OUT04FR07'}, controller.button)
.addButton({ name: 'OUT04FR08\r', label: 'OUT04FR08'}, controller.button)
.addButton({ name: 'OUT05FR01\r', label: 'OUT05FR01'}, controller.button)
.addButton({ name: 'OUT05FR02\r', label: 'OUT05FR02'}, controller.button)
.addButton({ name: 'OUT05FR03\r', label: 'OUT05FR03'}, controller.button)
.addButton({ name: 'OUT05FR04\r', label: 'OUT05FR04'}, controller.button)
.addButton({ name: 'OUT05FR05\r', label: 'OUT05FR05'}, controller.button)
.addButton({ name: 'OUT05FR06\r', label: 'OUT05FR06'}, controller.button)
.addButton({ name: 'OUT05FR07\r', label: 'OUT05FR07'}, controller.button)
.addButton({ name: 'OUT05FR08\r', label: 'OUT05FR08'}, controller.button)
.addButton({ name: 'OUT06FR01\r', label: 'OUT06FR01'}, controller.button)
.addButton({ name: 'OUT06FR02\r', label: 'OUT06FR02'}, controller.button)
.addButton({ name: 'OUT06FR03\r', label: 'OUT06FR03'}, controller.button)
.addButton({ name: 'OUT06FR04\r', label: 'OUT06FR04'}, controller.button)
.addButton({ name: 'OUT06FR05\r', label: 'OUT06FR05'}, controller.button)
.addButton({ name: 'OUT06FR06\r', label: 'OUT06FR06'}, controller.button)
.addButton({ name: 'OUT06FR07\r', label: 'OUT06FR07'}, controller.button)
.addButton({ name: 'OUT06FR08\r', label: 'OUT06FR08'}, controller.button)
.addButton({ name: 'OUT07FR01\r', label: 'OUT07FR01'}, controller.button)
.addButton({ name: 'OUT07FR02\r', label: 'OUT07FR02'}, controller.button)
.addButton({ name: 'OUT07FR03\r', label: 'OUT07FR03'}, controller.button)
.addButton({ name: 'OUT07FR04\r', label: 'OUT07FR04'}, controller.button)
.addButton({ name: 'OUT07FR05\r', label: 'OUT07FR05'}, controller.button)
.addButton({ name: 'OUT07FR06\r', label: 'OUT07FR06'}, controller.button)
.addButton({ name: 'OUT07FR07\r', label: 'OUT07FR07'}, controller.button)
.addButton({ name: 'OUT07FR08\r', label: 'OUT07FR08'}, controller.button)
.addButton({ name: 'OUT08FR01\r', label: 'OUT08FR01'}, controller.button)
.addButton({ name: 'OUT08FR02\r', label: 'OUT08FR02'}, controller.button)
.addButton({ name: 'OUT08FR03\r', label: 'OUT08FR03'}, controller.button)
.addButton({ name: 'OUT08FR04\r', label: 'OUT08FR04'}, controller.button)
.addButton({ name: 'OUT08FR05\r', label: 'OUT08FR05'}, controller.button)
.addButton({ name: 'OUT08FR06\r', label: 'OUT08FR06'}, controller.button)
.addButton({ name: 'OUT08FR07\r', label: 'OUT08FR07'}, controller.button)
.addButton({ name: 'OUT08FR08\r', label: 'OUT08FR08'}, controller.button)
.addButton({ name: 'PON\r', label: 'PON'}, controller.button)
.addButton({ name: 'POFF\r', label: 'POFF'}, controller.button)
.addButton({ name: 'IR ON/OFF\r', label: 'IR ON/OFF'}, controller.button)
.addButton({ name: 'APM ON/OFF\r', label: 'APM ON/OFF'}, controller.button)
.addButton({ name: 'RESET\r', label: 'RESET'}, controller.button)
.addButton({ name: 'KEY ON/OFF\r', label: 'KEY ON/OFF'}, controller.button)



  


    .addButtonHander(controller.HMXLXXButtonPressed);
  
  //add modules above here
function startSdkExample(brain) {
  console.log('- Start server');
  neeoapi.startServer({
    brain:,
    port: 6336,
    name: 'simple-adapter-one',
    devices: [blustreamtelnet]
 
  })
  .then(() => {
    console.log('# READY! use the NEEO app to search for "HMXLXX-KIT.');
  })
  .catch((error) => {
    //if there was any error, print message out to console
    console.error('ERROR!', error.message);
    process.exit(1);
  });
}

const brainIp = process.env.BRAINIP;
if (brainIp) {
  console.log('- use NEEO Brain IP from env variable', brainIp);
  startSdkExample(brainIp);
} else {
  console.log('- discover one NEEO Brain...');
  neeoapi.discoverOneBrain()
    .then((brain) => {
      console.log('- Brain discovered:', brain.name);
      startSdkExample(brain);
    });
}
	

