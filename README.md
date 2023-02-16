# About
This is a real time chat app designed to let users ask for and give recommendations in real time to about having to comb through long reviews from different sources

# Tech Stack Used
 - React
 - JavaScript
 - HTML
 - CSS
 - SASS
 - WebSocket
 - Stable Safe Stringify
 - Express.js
 - Node.js

# Features
Users can set their custom username
Users can ask for a recommendation (creates a chat room)
Users can view a list of recommendations being asked and can join in on the conversation. The messages and rooms persist on the back end. 
Users can chat with other users in real time on any given topic. 

# Installation
To get started, user should run 
### `npm i`

and then run 

### `npm start`

# API reference

https://github.com/DixonWuGithub/instantspots-server/

# Screen shots
![ask for recommendation](https://user-images.githubusercontent.com/118260699/219257696-060b1096-0321-45ac-9810-a68464d022e7.JPG)
![list of current inquiries](https://user-images.githubusercontent.com/118260699/219257700-175a5367-f7e8-4b9b-be83-8767256b1037.JPG)
![real time](https://user-images.githubusercontent.com/118260699/219257701-485758ba-151d-4f14-a52c-ef40d568011e.JPG)
![sign in](https://user-images.githubusercontent.com/118260699/219257702-a5a55c18-9c1a-4825-b767-b8a5776076fe.JPG)


# Lessons learned & next steps
 - WebSocket is very complicated, Socket.io has been recommended as the easier implementation. But since Socket.io masks a lot of the complexities, I wanted to peak under the curtain and understand the innerworkings of WebSocket. Hence, WebSocket was chosen instead of Socket.io. In production however, it would be much simpler to use Socket.io, and that I would in fact recommend it. 

 - Next steps include gamifying the experience, implement user authentification, and eventually, deployment and monetization. 
