const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'FPT Polytechnic',
                degree: 'Web Developer',
                detail: "Bachelor's Degree in Web Developer from FPT Polytechnic.",
                year: '2018-2021'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'DoBranch',
                role: 'Software Developer',
                url: 'no website',
                desc: 'As a software developer, I use wordpress to build websites.',
                year: '10/2020 - 06/2021',
                location: 'Da Nang, Viet Nam'
            },
            {
                id: 2,
                title: 'CTNet Digital',
                role: 'Software Developer',
                url: 'https://ctnet.vn',
                desc: 'As a software developer, I use wordpress to build websites. After that i use .Net core API and ReactJS to build a Web Application',
                year: '07/2021 - 10/2024',
                location: 'Peshawar, Pakistan'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
