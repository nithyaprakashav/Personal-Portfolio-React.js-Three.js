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
    spmlogo,
    python,
    java,
    bootstrap,
    express,
    chakraui,
    javabasic,
    javascriptinter,
    problemsolving,
    mernstack,
    mern,
    tyt,
    breads
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
      id:"projects",
      title:"Projects"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React JS Developer",
      icon: reactjs,
    },
    {
      title: "Full Stack Developer (MERN Stack) ",
      icon: mern,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
   
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "BootStrap",
      icon: bootstrap,
    },
    {
      name: "Chakra UI",
      icon: chakraui,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
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
      icon: spmlogo,
      iconBg: "#383E56",
      date: "October 2023 - April 2024",
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  const certifications = [
    {
      name: "HackerRank Certification in Java(Basic)",
      skill:"Java",
      company: "HackerRank",
      image: javabasic,
      source_code_link:"https://www.hackerrank.com/certificates/429f162f54fe",
    },
    {
      
      name: "HackerRank Certification in JavaScript(Intermediate)",
      skill: "JavaScript",
      company: "HackerRank",
      image: javascriptinter,
      source_code_link:"https://www.hackerrank.com/certificates/c05517ad5fd0",
    },
    {
      name: "HackerRank Certification in Problem Solving(Intermediate)",
      skill: "Problem Solving",
      company: "HackerRank",
      image: problemsolving,
      source_code_link:"https://www.hackerrank.com/certificates/1817cdf58f07",
    },
  ];
  
  const projects = [
    {
      name: "BREADS - Meta's Threads app with Direct Message Chat Feature",
      description:"Developed an exact clone of the Threads app entails replicating its core functionalities while integrating an additional Chat feature. This enhancement enables users to exchange Direct messages, enriching their communication experience beyond the original Threads app." 
      ,
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
          name: "mernstack",
          color: "pink-text-gradient",
        },
        {
          name: "chakraui",
          color: "orange-text-gradient",
        },
      ],
      image: breads,
      source_code_link: "https://github.com/nithyaprakashav/BREADS-Threads-app-with-Chat-feature",
    },
    {
      name: "FriendsHive - A MERN Stack Social Media App",
      description:
        "Web-based social media platform enabling account creation/login, profile customization including profile picture upload, posting content with text/images, interaction with posts through likes/unlikes, and following/unfollowing other users."
        ,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mernstack",
          color: "pink-text-gradient",
        },
        {
          name: "reduxtoolkit",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/nithyaprakashav/FriendsHive-SocialMediaApp-MERN",
    },
    {
      name: "Track Your Training",
      description:
        "A web application built using MERN Stack technology, enabling users to track their training sessions and workouts. Post session details on your personalized dashboard, including dates and times, for comprehensive tracking and analysis. ",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "mernstack",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tyt,
      source_code_link: "https://github.com/nithyaprakashav/Track-Your-Training-MERN-App",
    },
  ];
  
  export { services, technologies, projects,experiences,testimonials,certifications };