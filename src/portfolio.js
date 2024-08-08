/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Umesh Thapa's Portfolio",
  description:
    "Experienced ICT Support and System Engineer with over 8 years of experience in maintaining, optimizing, and securing IT infrastructures. Proficient in a wide range of technologies and committed to ensuring high levels of system and network performance.",
  og: {
    title: "Umesh Thapa Portfolio",
    type: "website",
    //url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Umesh Thapa",
  logo_name: "Umesh Thapa",
  nickname: "Umesh",
  subTitle:
    "Dynamic IT Support Specialist with expertise in software, hardware, cloud services, and network security. Proven ability to lead projects and collaborate with cross-functional teams. Celebrated for strategic problem-solving and proactive system maintenance.",
 resumeLink:
    "https://drive.google.com/file/d/1SxisCRpDVdGPTe-LbevXQ8gQAeUPGCBw/view?usp=sharing",
  //portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  //githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  // {
  //   name: "Github",
  //   link: "https://github.com/ashutosh1919",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/umesh-thapa-1b7a02105/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
 
  {
    name: "Gmail",
    link: "mailto:uthapa149@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "System Administration",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Upgrade, install, and configure ICT hardware, cloud services, and backups.",
        "⚡ Specialize in managing Windows, Android, Linux, and Mac systems.",
        "⚡ Delivering effective technical support to employees..",
        "⚡ Knowledge of Windows Server, Active Directory, PowerShell scripting, HTML, Javascript and Python.",
      ],
      softwareSkills: [
        {
          skillName: "Synology",
          fontAwesomeClassname: "cbi:nas-v2",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Server",
          fontAwesomeClassname: "teenyicons:servers-outline",
          style: {
            backgroundColor: "white",
            color: "#0a2472",
          },
        },
        {
          skillName: "Backup Drive",
          fontAwesomeClassname: "iconoir:database-backup",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL Database",
          fontAwesomeClassname: "bi:filetype-sql",
          style: {
            backgroundColor: "transparent",
            color: "#42A5F6"
          },
        },
        {
          skillName: "Computer",
          fontAwesomeClassname: "fluent-emoji-flat:desktop-computer"
          //imageSrc: "fluent-emoji-flat:desktop-computer",
        },
        {
          skillName: "Office 365",
          fontAwesomeClassname: "mdi:microsoft-office",
          style: {
            backgroundColor: "transparent",
            color: "#E9380C"
          },
        },
        {
          skillName: "Mac Os",
          fontAwesomeClassname: "simple-icons:macos"
          //imageSrc: "fluent-emoji-flat:desktop-computer",
        },

        {
          skillName: "Printer",
          fontAwesomeClassname: "emojione:printer"
          //imageSrc: "fluent-emoji-flat:desktop-computer",
        },

        {
          skillName: "WinOS",
          fontAwesomeClassname: "skill-icons:windows-light"
          //imageSrc: "fluent-emoji-flat:desktop-computer",
        },
        {
          skillName: "LinuxOS",
          fontAwesomeClassname: "devicon:linux"
          //imageSrc: "fluent-emoji-flat:desktop-computer",
        },

      ],
    },
    {
      title: "Network Management",
      fileName: "FullStackImg",
      skills: [
        "⚡ Design and implement robust network configurations to support organizational needs",
        "⚡ Setting up routing, IP addresses, and maintaining LAN & WAN.",
        "⚡ Install, Configure and Maintain networks & network file systems",
    
      ],
      softwareSkills: [
        {
          skillName: "Switch",
          fontAwesomeClassname: "clarity:network-switch-line",
          style: {
            color: "#1572B6"
            //"#E34F26",
          },
        },
        {
          skillName: "Router",
          fontAwesomeClassname: "bi:router",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Cisco",
          fontAwesomeClassname: "simple-icons:cisco",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Firewall",
          fontAwesomeClassname: "mdi:firewall",
          style: {
            backgroundColor: "transparent",
            color: "#e61e1e",
          },
        },
        {
          skillName: "Lan",
          fontAwesomeClassname: "icon-park-solid:network-tree",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Access Point",
          fontAwesomeClassname: "mdi:access-point-network",
          style: {
            //color: "#339933",
          },
        },
        {
          skillName: "Comp.Network",
          fontAwesomeClassname: "emojione-v1:three-networked-computers",
          style: {
            color: "#61DAFB",
          },
        },
      
       
      ],
    },
    {
      title: "Project Management",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Lead IT projects, including upgrades, migrations, and cutting-edge implementations.",
        "⚡ Work closely with  cross-functional teams to ensure timely, goal-oriented project completion.",
        "⚡ Liaise with vendors to procure the best hardware and software tools.",
    
      ],
      softwareSkills: [
        {
          skillName: "Powerpoint",
          fontAwesomeClassname: "file-icons:microsoft-project",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Teams",
          fontAwesomeClassname: "logos:microsoft-teams",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Time Management",
          fontAwesomeClassname: "svg-spinners:clock",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Collaboration",
          fontAwesomeClassname: "flat-color-icons:collaboration",
          style: {
            //color: "#FFCA28",
          },
        },
        {
          skillName: "Communication",
          fontAwesomeClassname: "material-symbols:communication-rounded",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Budgeting",
          fontAwesomeClassname: "map:finance",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Documenting",
          fontAwesomeClassname: "flat-color-icons:document",
          style: {
            color: "#47A248",
          },
        },
    
      ],
    },
    {
      title: "Cybersecurity",
      fileName: "DesignImg",
      skills: [
        "⚡ Applying timely updates and patches to protect against vulnerabilities.",
        "⚡ Ensuring systems compliance with standards and maintaining IT security.",
        "⚡ Educating employees on cybersecurity best practices to build a security-conscious culture.",
      ],
      softwareSkills: [
        {
          skillName: "Nessus",
          fontAwesomeClassname: "file-icons:nessus",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "devicon:kalilinux",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Antivirus",
          fontAwesomeClassname: "mdi:antivirus",
          style: {
            //color: "#FF7C00",
          },
        },
        {
          skillName: "Data Loss Prevention",
          fontAwesomeClassname: "material-symbols:data-loss-prevention-outline",
          style: {
            color: "#bf6822",
          },
        },
        {
          skillName: "Firewall",
          fontAwesomeClassname: "arcticons:noroot-firewall",
          style: {
            color: "#bf6822",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Google",
      iconifyClassname: "flat-color-icons:google",
      style: {
        //color: "#F79F1B",
      },
      //profileLink: "",
    },
    {
      siteName: "Hackthebox",
      iconifyClassname: "simple-icons:hackthebox",
      style: {
        color: "#2EC866",
      },
      //profileLink: "",
    },
    
    {
      siteName: "Cisco",
      iconifyClassname: "simple-icons:cisco",
      style: {
        color: "#1F8ACB",
      },
      //profileLink: "",
    },
    {
      siteName: "Hackerone",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      //profileLink: "",
    },
    {
      siteName: "IBM",
      iconifyClassname: "cib:ibm",
      style: {
        color: "#20BEFF",
      },
      //profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Panchamunidev Higher Secondary School, Dulegaunda, Nepal",
      subtitle: "Intermediate degree in Science",
      logo_path: "panchamunidev.png",
      alt_name: "Panchamuni",
      duration: "2012 - 2014",
      descriptions: [
        "⚡ Studied essential subjects like Mathematics, which aids in algorithmic thinking and programming.",
        "⚡ Developed analytical and problem-solving skills applicable to IT and engineering fields.",
        "⚡ My coursework included a computer science module on basic hardware and software, sparking my passion for IT. This foundation led me to pursue a Diploma in Computer Applications. ",
      ],
      //website_link: "https://www.indiana.edu/",
    },

    {
      title: "RealTech Computer Institute, Pokhara, Nepal",
      subtitle: "Diploma in Computer Application",
      logo_path: "realtech_diploma.png",
      alt_name: "RealTech",
      duration: "2013 - 2014",
      descriptions: [
        "⚡ I have studied software applications like Microsoft Office, email, and networking.",
        "⚡ Apart from this, I worked with computer hardware and DOS Disk operating system.",
        "⚡ I successfully completed a Diploma in Computer Applications, gaining comprehensive training in software and hardware.",
      ],
      //website_link: "http://iiitk.ac.in",
    },
    
    {
      title: "THOMAS EDISON STATE UNIVERSITY, 111 West State Street Trenton",
      subtitle: "Computer Science Fundamentals",
      logo_path: "thomas_edison.png",
      alt_name: "RealTech",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ learned Python, writing programs with strings, lists, and dictionaries and understanding syntax and semantics.",
        "⚡ Studied computer architecture deeply, covering hardware components, operating systems, and the interaction between software and hardware..",
        "⚡ Explored advanced networking, including protocols, architecture, security, IP addressing, routing, and troubleshooting.",
      ],
      //website_link: "http://iiitk.ac.in",
    },
    
  ],
};

const certifications = {
  certifications: [
    {
      title: "ICT Support Engineer",
      subtitle: "Assessment by Australian Computer Society",
      logo_path: "ACS.png",
      //certificate_link: "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "ACS",
      //color_code: "#8C151599",
    },
    {
      title: "Penetration Tester",
      subtitle: "- Job Role Path",
      logo_path: "htb.png",
      certificate_link:
        "https://drive.google.com/file/d/1-mBnDSdtL1QSebTxYQgnDOhlpq9rNwos/view?usp=drive_link",
      alt_name: "Coursera",
      //color_code: "#2A73CC",
    },

    {
      title: "Prompt Engineering for ChatGPT ",
      subtitle: "Vanderbilt University",
      logo_path: "Vanderbilt-University.png",
      certificate_link:
        "https://coursera.org/share/04eb2a287d0d850e2c33347d37ed7d75",
      alt_name: "deeplearning.ai",
      //color_code: "#00000099",
    },
    {
      title: "Systems Security Certified Practitioner SSCP",
      subtitle: "ISC2",
      logo_path: "isc2.png",
      certificate_link:
        "https://coursera.org/share/6d676485e5024f39b43702c7d8a797b7",
      alt_name: "ISC2",
      color_code: "#0C9D5899",
    },
    {
      title: "Programming with Google Go",
      subtitle: "University of California",
      logo_path: "university_california.png",
      certificate_link:
        "https://coursera.org/share/82c81fb167598d49f712de15001ece7f",
      alt_name: "UCI",
      color_code: "#1F70C199",
    },
    {
      title: "Google IT Support",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/961c37798fe4653b6f54658c2a95d1ea",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Computer Hardware and Operating Systems",
      subtitle: "NYU",
      logo_path: "nyu.png",
      certificate_link:
        "https://courses.edx.org/certificates/c60230be5212441b8086e51b882309c6?_gl=1*y3d82t*_gcl_au*MTc4MTU2Njk3OS4xNzIxODQwMTMy*_ga*ODk2NTk3NzA5LjE3MjE4NDAxMzI.*_ga_D3KS4KMDT0*MTcyMTg0MDEzMi4xLjEuMTcyMTg0MDE3My4xOS4wLjA.",
      alt_name: "NYU",
      //color_code: "#1F70C199",
    },
    {
      title: "Introduction to Cybersecurity Tools & Cyber Attacks",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "IBM",
      //color_code: "#6f6f6f",
    },
    {
      title: "IT Support Specialist",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-630ea48e-ee4a-4916-96cf-12a809d29f88/",
      alt_name: "udemy",
      color_code: "#00000099",
    },
 
    {
      title: "Cisco Certified Entry Networking Technician (CCENT)",
      subtitle: "- Cisco",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1-viaRJ5byUXwCmWH5Lj0MTXf_SF2l9eT/view?usp=drive_link",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Introduction to Networking",
      subtitle: "- NYU",
      logo_path: "nyu.png",
      certificate_link:
        "https://courses.edx.org/certificates/658ddf501bad481db46f72ad64b56160?_gl=1*1pmo615*_gcl_aw*R0NMLjE3MjE4NDQwMDUuQ2p3S0NBand6SUsxQmhBdUVpd0FIUW1VM2tQd0RwQjJGQ2xpSGFFWHRBMll4eDlxQlVhdVkxQnhtRGJkYlRqdVB5bXotb0EycTdCdmtCb0N0aFFRQXZEX0J3RQ..*_gcl_au*MTc4MTU2Njk3OS4xNzIxODQwMTMy*_ga*ODk2NTk3NzA5LjE3MjE4NDAxMzI.*_ga_D3KS4KMDT0*MTcyMTg0NDAwNC4yLjEuMTcyMTg0NDI1My40Ni4wLjA.",
      alt_name: "nyu",
      //color_code: "#FFBB0099",
    },
    {
      title: "Basics of Computing and Programming",
      subtitle: "- NYU",
      logo_path: "nyu.png",
      certificate_link:
        "https://courses.edx.org/certificates/2794d2f066ab404b9b441094cfb73a00?_gl=1*1ofpwsp*_gcl_aw*R0NMLjE3MjE4NDQwMDUuQ2p3S0NBand6SUsxQmhBdUVpd0FIUW1VM2tQd0RwQjJGQ2xpSGFFWHRBMll4eDlxQlVhdVkxQnhtRGJkYlRqdVB5bXotb0EycTdCdmtCb0N0aFFRQXZEX0J3RQ..*_gcl_au*MTc4MTU2Njk3OS4xNzIxODQwMTMy*_ga*ODk2NTk3NzA5LjE3MjE4NDAxMzI.*_ga_D3KS4KMDT0*MTcyMTg0NDAwNC4yLjEuMTcyMTg0NDUxNy4zMi4wLjA.",
      alt_name: "NYU",
      //color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have worked with many evolving technologies, I specialize in managing network systems, implementing security measures, and troubleshooting issues to ensure high performance and support organizational goals.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Information Technology Specialist",
          company: "Aldaaysi Holding.",
          company_url: "https://www.instagram.com/aldaaysiholding/",
          logo_path: "aldaaysilogo.png",
          duration: "Jan 2024 - Present",
          location: "Salmabad, Bahrain",
          description:
            "I have worked on various projects, from new complex system setup and infrastructure management to overseeing project execution and successful delivery. I deliver technical leadership and administration for systems and configurations, collaborate with stakeholders to optimize support and performance, and drive ICT capability through strategic coaching and risk management.",
          color: "#000000",
        },
        {
          title: "Computer Technician",
          company: "Aldaaysi Holding.",
          company_url: "https://www.instagram.com/aldaaysiholding/",
          logo_path: "aldaaysilogo.png",
          duration: "Jan 2022 - Jan 2024",
          location: "Salmabad, Bahrain",
          description:
            "Improving the core IT infrastructure. Experience in working with diverse IT systems, software, resolving complex technical issues, and optimizing operations etc. I have learned advanced troubleshooting, system management, user support, and improved communication with people.",
          color: "#000000",
        },

        {
          title: "IT Technician",
          company: "Panorama Contracting & Engineering Services W.L.L",
          company_url: "https://panoramabh.com/",
          logo_path: "panorama.png",
          duration: "July 2016 - Jan 2022",
          location: "Juffair, Bahrain",
          description:
            "I have worked on industrial software setup and PLC programming, optimizing IT system operations through rigorous inspections, meticulous documentation, and effective management of critical IT infrastructure. I have handled SCADA systems, IT Hardware, network management, and data analysis.",
          color: "#9b1578",
        },
        
      ],
    },
    
    {
      title: "Volunteerships",
      experiences: [
      
        {
          title: "Email Security Training",
          company: "Aldaaysi Holding",
          company_url: "https://www.instagram.com/aldaaysiholding/",
          logo_path: "aldaaysilogo.png",
          duration: "June 2024",
          location: "Salmabad, Bahrain",
          description:
            "My responsibility for this training program was to prepare the presentation and deliver training on email security, including best practices, threat identification, and protective measures.",
          color: "#000000",
        },
        {
          title: "Critical Data Recover",
          company: "Water Transmission Directorate, Bahrain",
          company_url: "https://www.ewa.bh/",
          logo_path: "ministry.png",
          duration: "June 2019",
          location: "Salmabad, Bahrain",
          description:
            "I successfully recovered the Windows admin password on an old desktop running Windows 2000 Server for the Water Transmission Directorate (WTD) and retrieved the critical plant old data.",
          color: "#4285F4",
        },
        {
          title: "CYBER Insurance Forum",
          company: "GIF Gulf",
          company_url: "https://www.giggulf.bh/en/",
          logo_path: "gig.png",
          duration: "June, 2022",
          location: "Hyderabad, Telangana",
          description:
            "Participated in a Cyber Insurance Forum, understanding the risk management strategies, policy coverage options, and best practices for mitigating cyber threats and ensuring robust security.",
          color: "#D83B01",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to provide extensive hands-on experience in managing technical support and optimizing ICT systems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publication",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "",
      name: "𝗖𝗿𝗼𝘄𝗱𝘀𝘁𝗿𝗶𝗸𝗲 𝗕𝗦𝗢𝗗 𝗙𝗶𝘅 📢",
      createdAt: "07-2024",
      description: "CrowdStrike’s recent update caused a widespread Blue Screen of Death (BSOD) on Windows hosts due to driver incompatibility, leading to major disruptions in internal operations.",
      url: "https://www.linkedin.com/posts/umesh-thapa-1b7a02105_cybersecurity-crowdstrike-fix-activity-7220368660954021888-aArt?utm_source=share&utm_medium=member_desktop",
    },
   
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    //link: "https://blogs.ashutoshhathidara.com/",
    profile_image_path: "me1.png",
    description:
      "I welcome inquiries, collaboration opportunities, or any questions you may have. Please feel free to reach out, and I will respond within 24 hours. I look forward to connecting with you.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:"[HOME: Dulegaund - Tanahun, Nepal,]   [WORKING: Salmabad, BAHRAIN]",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/hMpBnJknNrMsKi1Q7",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+973 33661098",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
