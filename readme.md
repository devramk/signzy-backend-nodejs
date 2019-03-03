# Signzy Backend - Node.js

Language: [Javascript]
Framworks: [Node.js], [Express]

## Setting up server
0. Make sure the system has Node.js and NPM installed.
1. Unzip or clone the project. Navogate to the project folder in terminal (In windows, open CMD with admin rights).
2. Run `sudo npm install` (Windows: `npm install`).
3. After successfull installation, run `node app.js` or using any demons.
4. This project will run in port 4000 (make sure port 4000 is free or change port in app.js file).
5. Now in browser or postman call `http://localhost:4000/helloWorld` to check whether server running or not.

## APIs
1. API: `http://localhost:4000/monitor/get/usage/cpuMemory`

This GET API will give current stats of RAM & CPU usage of the system.

2. API: `http://localhost:4000/monitor/get/usage/cpu/time`

This POST API will give last 10 or less minutes stats about cpu usage in percentage. This API will take prev result of this very same as input, for 1st time empty json can be sent.

3. API: `http://localhost:4000/monitor/get/usage/memory/time`

This POST API will give last 10 or less minutes stats about memory usage in percentage. This API will take prev result of this very same as input, for 1st time empty json can be sent.