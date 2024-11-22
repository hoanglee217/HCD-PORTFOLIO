const expertise = [
    {
        id: 0,
        title: '.Net core Development',
        desc: 'I use .NET Core because .NET Core is an open source, cross-platform software development framework developed by Microsoft. It allows developers to build high-performance web applications, APIs, and microservices that are easily deployed on multiple operating systems, such as Windows, Linux, and macOS. .NET Core stands out for its flexibility, scalability, and superior performance, making it an ideal choice for modern, performance-intensive applications.',
    },
    {
        id: 1,
        title: 'ReactJS Development',
        desc: "I use ReactJS because ReactJS allows developers to create dynamic and interactive web applications by dividing the interface into reusable components. With the “Virtual DOM” mechanism, ReactJS helps optimize performance by updating only the necessary changes instead of refreshing the entire interface. This results in a smooth and fast user experience.",
    },
    {
        id: 2,
        title: 'Jira',
        desc: "As a developer, I'm proficient in Jira methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
    {
        id: 5,
        title: 'MySQL ',
        desc: "MySQL is an excellent choice for developers and businesses due to its cost-effectiveness, scalability, ease of use, and powerful features. Whether you’re building a small blog or a complex enterprise system, MySQL provides the tools to efficiently store, manage, and retrieve your data.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
