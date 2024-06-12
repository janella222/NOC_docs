---
title: "Copper access line Lincoln"
excerpt: "This one tripped me up because it's a copper accesss line, but it has to be built in a fiber OE in lincoln, so it's in ZMS"
coverImage: "/assets/blog/dynamic-routing/_9164086576.jpeg"
date: "2024-06-09T05:35:07.322Z"
author:
  name: Seven
  picture: "/assets/blog/authors/welcome.jpg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

When you go to ZMS it's easier if you expand the 1U Products before you expand the MALCs/MXKs or collapse MALCs/MXKs. They usually fail in provisioning guessing maybe due to protocol as ADSL I’m not entirely sure.
These we have to manually build the voice connections on the card and MALC. We may also need assignment to update to a compatible OE: A0660010158.

Go to prism first and select check the line card for the >> shelf management IP - make sure to select the active account at the top 

![ZMS 1U Products](/assets/blog/dynamic-routing/_prism_line_card.jpg)

Now we can search all ZMS for that "management IP"

![ZMS 1U Products](/assets/blog/dynamic-routing/_zms2.jpg)

Right click the shelf and choose >> Manage Voice Connections

![manage voice connections](/assets/blog/dynamic-routing/_manage_voice_connections.jpg)

Then search for the phone number just in case it's already built. If no search result >>> click the add button


![manage voice connections](/assets/blog/dynamic-routing/_search_for_phone_number.jpg)

![manage voice connections](/assets/blog/dynamic-routing/_OE_IP.jpg)

## Add Like this:

- IP Interface = ipobridge-3000
- Available POTS Ports = choose the Slot and Port you want dial tone built on (screenshot shows Slot 2, Port 10)
- PLAR = Enabled
- Directory Number = Cust telephone nuumber
- User Name = tells us what VDSL shelf/card/port this cust is on

- Shelf name (change space to an underscore) + Card # (2 digits) + Port # (2 digits)
- for example, if you are on CTHTCAJK HX2 CARD 02 PORT 10, username= CTHTCAJK_HX20210
- PLAR Address = IP of the voip gateway -- see chart above


![manage voice connections](/assets/blog/dynamic-routing/_add2.jpg)


