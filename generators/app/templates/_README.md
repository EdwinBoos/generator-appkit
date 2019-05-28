﻿<h3> How do I run the build project? </h3>

HTTP-Server 
 - Install http-server: ```npm install http-server -g```
 - Navigate to build/WebContent/. and start the server: ```http-server -p 1337 -c1 -a localhost``` <b> 
  <br> Note: It is very important to launch the Server on address localhost and port 1337 </b>
 - Next we need to disable Chromes security:
       -Make a shortcut of chrome.exe and rename it how you like it. 
	   -Next step is to right click it and set the destination to:  
	```"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-site-isolation-trials --user-data-dir="C:\Users\username \Desktop\chromeTemp"```

After this we just need to open the shortcut type ``` http://localhost:1337 ``` in the browser. Now the application can call OData-Services without the CORS-Problem.

       

Eclipse
- Import the build project. Right click on your project -> Run As  -> Web Preview



Fiori Launchpad :  
- No configuration needed. Since it takes the direct URL to the Service, when not running  locally.

