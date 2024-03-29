import self from "../img/horizon.JPG";
import mcu from "../img/space-mission.jpeg";
import crypto from "../img/crypto.jpeg";
import cilica from "../img/Cilica.jpeg";
import pdf from "../img/resume3.png";
import meme from "../img/memegen.jpeg";
import mungo from "../img/mungovan.jpeg";
import yarn from "../img/yarn.JPG";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Jesse",
  lastName: "Lloyd",
  initials: "JL", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Web Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the US",
    },
    {
      emoji: "📧",
      text: "jesselloyd911@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/jlloyd0430",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/jesse-lloyd-32456b215/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/bitcoins_son",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Jesse.Im a driven self-starter with professional adaptability, full-stack software developer, Eager to grow and learn more about the web3 and tech industry.",
  skills: {
    proficientWith: [
      "javascript",
      "python",
      "node.js",
      "express.js",
      "MongoDB",
      "SQL",
      "react.js",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "UI/UX Designer",
      "figma",
      "excell",
      "Tailwind css",
    ],
    exposedTo: ["Blockchain Technology", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "skateboarding",
      emoji: "🛹",
    },
    {
      label: "crypto/nfts",
      emoji: "⛓️",
    },
    {
      label: "music",
      emoji: "🎸",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Freelance Marketplace",
      live: "https://yarn-solution.onrender.com ",
      source: "https://github.com/jlloyd0430/Yarn.solutions",
      image: yarn,
      info: "A dynamic MERN full-stack Web Service. This project includes user authentication login, real-time peer-to-peer messaging with socket.io, and seamless integration of Stripe for secure payments. I utilized MongoDB as the database technology to handle and store user data.",
    },
    {
      title: "Space-Mission",
      live: "https://space-mission-xuzu.onrender.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/jlloyd0430/Space-Mission", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mcu,
      info: "This front-end React project utilizes NASA's API to fetch and display the latest Mars rover images.",
    },
    {
      title: "Cilica.xyz | Blog-app",
      live: "https://cilica-front-end.onrender.com/ ",
      source: "https://github.com/jlloyd0430/Cilica.io-front-end",
      image: cilica,
      info: "A MERN full-stack web application allowing users to seamlessly post, edit, search, and delete blog posts.",
    },
    {
      title: "Crypto-Search-App",
      live: " https://crypto-search-app.onrender.com/",
      source: "https://github.com/jlloyd0430/Crypto-App",
      image: crypto,
      info: "A powerful Cryptocurrency API designed to provide live token prices and additional data.",
    },
    {
      title: "Mungovan Trucking",
      live: " https://www.mungovan.land/",
      source: "https://github.com/jlloyd0430/Mungovan-Trucking",
      image: mungo,
      info: "A React Native-based front-end web application tailored for a Trucking Company in New England, this application features form submission functionality and an efficient address search tool.",
    },
    {
      title: "Meme-Dashboard",
      live: " https://meme-maker-rzg7.onrender.com/",
      source: "https://github.com/jlloyd0430/MemeMaker",
      image: meme,
      info: "Randomly generated memes.",
    },
  ],

  resume: [
    {
      image: pdf,
    },
  ],
};
