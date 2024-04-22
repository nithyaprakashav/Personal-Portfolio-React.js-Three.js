import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer (MERN Stack) ",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "SPM Global Technologies",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
//   const testimonials = [
//     {
//       testimonial:
//         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//       name: "Sara Lee",
//       designation: "CFO",
//       company: "Acme Co",
//       image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//       testimonial:
//         "I've never met a web developer who truly cares about their clients' success like Rick does.",
//       name: "Chris Brown",
//       designation: "COO",
//       company: "DEF Corp",
//       image: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//     {
//       testimonial:
//         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//       name: "Lisa Wang",
//       designation: "CTO",
//       company: "456 Enterprises",
//       image: "https://randomuser.me/api/portraits/women/6.jpg",
//     },
//   ];
  
  const projects = [
    {
      name: "BREADS - Meta's Threads app with Direct Message Chat Feature",
      description:
        "Web-based Social Media platform that allows users to Create/Login account ,create/Update their profile along with the Profile picture ,Add their post with text/images ,like/unlike other users' posts, Follow/Unfollow other users and send personal messages to the users they follow ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/nithyaprakashav/BREADS-Threads-app-with-Chat-feature",
    },
    {
      name: "FriendsHive - A MERN Stack Social Media App",
      description:
        "An exact clone of Threads app with added Chat feature that allows users to send Direct messages(personal messages) to the users they follow making it more feature rich than the original Threads app.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
            name: "mongodb",
            color: "green-text-gradient",
          },
      ],
      image: jobit,
      source_code_link: "https://github.com/nithyaprakashav/FriendsHive-SocialMediaApp-MERN",
    },
    {
      name: "Track Your Training",
      description:
        "A Web app built using MERN Stack technology that allows users to track their training sessions and their workouts along with its details by posting it in their dashboard along with the date and time. ",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
            name: "mongodb",
            color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/nithyaprakashav/Track-Your-Training-MERN-App",
    },
  ];
  
  export { services, technologies, projects };