const portfolio = [
  {
    id: 0,
    projectName: "CRM Telesales",
    url: [],
    image: "https://t3.ftcdn.net/jpg/03/75/77/90/360_F_375779088_kjTKvm0iUspPsf4rAX9BeO5dlRnAOyPz.jpg",
    projectDetail:
      "This project support customer shorten the working progress, manager data and order.",
    technologiesUsed: [
      {
        tech: "Laravel",
      },
      {
        tech: "HTML",
      },
      {
        tech: "CSS",
      },
      {
        tech: "MySQL",
      },
      {
        tech: "Bootstrap",
      },
      {
        tech: "JQuery",
      },
    ],
  },
  {
    id: 1,
    projectName: "IziSalon",
    url: [
      {
        name: "https://izisalon.com/",
      },
      {
        name: "https://app.izisalon.com/",
      },
    ],
    image: "https://izisalon.com/wp-content/themes/ThemeCustome/images/logo.png",
    projectDetail:
      "Beauty's management system for salon, spa",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: ".Net Core",
      },
      {
        tech: "MySQL",
      },
      {
        tech: "Ant Design",
      },
      {
        tech: "Docker",
      },
      {
        tech: "Jenkins",
      },
      {
        tech: "TypeScript",
      },
    ],
  },
  {
    id: 1,
    projectName: "Mobile network information: open-source project",
    url: [
      {
        name: "https://dichvudidong.vn",
      },
      {
        name: "https://viettel4g.net",
      },
      {
        name: "https://mobifone3g.info",
      }
    ],
    image: "https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_1280.jpg",
    projectDetail:
      "This project provide information about mobile network in Vietnam to guest",
    technologiesUsed: [
      {
        tech: "HTML",
      },
      {
        tech: "CSS",
      },
      {
        tech: "PHP",
      },
      {
        tech: "JavaScript",
      },
      {
        tech: "Wordpress",
      },
      {
        tech: "JQuery",
      },
    ],
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
