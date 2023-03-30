import lorem from "../src/assets/images/mobile_app.jpg";
import pSearch from "../src/assets/images/product_search.jpg";
import foody from "../src/assets/images/foody.jpg";
import applelanding from "../src/assets/images/apple-landing-bw.png";
const logotext = "UMUT";
const meta = {
  title: "Umut (Hope) Portfolio",
  description:
    "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
  title: "I’m Umut Sarihan",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop mobile apps",
  },
  description:
    " Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to your organization. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. This has allowed me to stay ahead of the curve and deliver exceptional work to all of my employers, including those I've worked for on a project basis.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "About Myself",
  aboutme:
    "I like team play sports, and having fun with my friends. I like to play video games, and expanding my knowledge by exploring and leaning new things. Enjoying art and watching anime.",
};
const worktimeline = [
  {
    jobtitle: "Frontend Dev",
    where: "Goony",
    date: "2022",
  },
];

const skills = [
  {
    name: "Python",
    value: 30,
  },
  {
    name: "Firebase",
    value: 85,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "ReactJs",
    value: 80,
  },
  {
    name: "React Navite",
    value: 80,
  },
  {
    name: "HTML5",
    value: 85,
  },
  {
    name: "CSS",
    value: 95,
  },
  {
    name: "Tailwind",
    value: 95,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Web App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

// add websites buillded to portfolio then deploy

const dataportfolio = [
  {
    img: foody,
    desctiption: "Fronted Food Ordering Application",
    link: "https://foody-hope.netlify.app/",
  },
  {
    img: lorem,
    desctiption: "Web App Demo for Mobile Application with Map integration.",
    link: "https://goony-priv.netlify.app/",
  },
  {
    img: applelanding,
    desctiption: "Apple Watch Landing Page Clone",
    link: "https://apple-landing-clone.netlify.app/",
  },
  {
    img: pSearch,
    desctiption: "Data Search Engine Implamentation",
    link: "https://hopeproductsearch.netlify.app/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "mrhopela@icloud.com",
  YOUR_FONE: "(213)376-7764",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "porfolio_mail",
  YOUR_TEMPLATE_ID: "template_hg6948v",
  YOUR_USER_ID: "cOUC81sxjGzJNIA1g",
};

const socialprofils = {
  github: "https://github.com/umuttolga",
  facebook: "https://facebook.com/RayleighOP",
  linkedin: "https://linkedin.com/in/umuttolgasarihan",
  twitter: "https://twitter.com/mrhopela",
  youtube: "https://youtube.com",
  twitch: "https://twitch.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
