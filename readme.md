# ImaGen frontend vanilla
see it live here: https://imagen-vanilla.netlify.app/ 

![screenshot](https://github.com/argonathmos/ImaGen_frontend_vanilla/blob/master/Screenshot_2020-12-15%20Vanilla%20front-end.png)
---

## WHAT ?
This web application aims at helping a user navigating through life's most difficult questions, by asking three most trusted advisors: **Mr Tumblr**, **Lady Pixabay** and **Lady DuckDuckGo** any of the following: 

- What should I eat tonight ? 
- I want a hot drink !? 
- No public transport today ?
- Show me something great !

The answers are generated in seconds and displayed in the form of an image! 

---
## HOW ?
1. First users select who they want to get answers from (DuckDuckGo, Pixabay or Tumblr)

2. Then they click a button corresponding to one of the above questions, the app generates a random word corresponding to the question asked *(ex:  hotDrinks = ['tea', 'coffe', 'soup'])*.

3. When a button is clicked, the application sends a request to fetch an image from ImaGen_REST_API including the random word as query parameter. *(ex: https://imagen-rest-api.herokuapp.com/pixabay?q=coffee )*.

4. The app then receives a randomly generated image and displays it to the user. 

This frontend app was build using vanilla JS (es6+), Axios, Parcel and Netlify.

--- 
## WHY ?

- Practice communicating with a REST API through a simple, modern and fun interface. :slightly_smiling_face:
- Implementing a build toolchain (Parcel).
- Scratch the surface of continous deployement with Git / Netlify.
 
The ImaGen_REST_API is hosted on heroku and itsefl places calls to 3rd party APIs. 
You can find more info about the API here: https://github.com/argonathmos/ImaGen_REST_API
