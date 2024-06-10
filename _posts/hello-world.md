---
title: 'We are looking for an "ONU" with the following'
excerpt: "Example ONU: EKGVCAROHXO / 10.40.57.130 SLOT 2 OLT 3 ONU 10 - this is one that we are going to image we got a trouble-ticket for and tested it and we need to check something or attempt a resync, reboot, default, send update to ONT etc. in ZMS"
coverImage: "/assets/blog/hello-world/testboard.PNG"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Seven
  picture: "/assets/blog/authors/welcome.jpg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

sometimes need to convert the serial number to hex - like so with a windos calculator in programer mode

![ZMS 1U Products](/assets/blog/hello-world/calc.png)

paste the Dec number from testboard and copy the Hex number

![ZMS 1U Products](/assets/blog/hello-world/calc2.png)

Next go to ZMS 

![ZMS 1U Products](/assets/blog/hello-world/zms2.png)

when you know what the serial number is - click the search function and paste the serial (HEX) in and click locate

![ZMS 1U Products](/assets/blog/hello-world/search.png)

![ZMS 1U Products](/assets/blog/hello-world/ont_serial_search.png)

it should take you to the customer's ONU

![ZMS 1U Products](/assets/blog/hello-world/cust.png)

right click and select modify (be careful not to make any changes if unsure)

![ZMS 1U Products](/assets/blog/hello-world/modify.png)

now you should see this screen pop up >>>> select status

![ZMS 1U Products](/assets/blog/hello-world/status.png)

if oper status is up 
- that means 
-link is up to the ONT

![ZMS 1U Products](/assets/blog/hello-world/up.png)

