export const jobs = [
    {
        id: "1",
        featured: true,
        title: "Cloud Engineer",
        type: "it",
        place: "Hanoi",
        company: "Company 1",
        position: "Senior",
        salary: "50000 - 60000",
        postTime: "1 day, 4 hours"
    },
    {
        id: "2",
        featured: true,
        title: "Backend Developer",
        type: "it",
        place: "Ho Chi Minh City",
        company: "Company 2",
        salary: "20000 - 30000",
    },
    {
        id: "3",
        featured: true,
        title: "Product Manager",
        type: "marketing",
        place: "Danang",
        company: "Company 3",
        salary: "50000 - 60000",
    },
    {
        id: "4",
        title: "Data Scientist",
        place: "Hanoi",
        company: "Company 4",
        salary: "30000 - 40000",
    },
    {
        id: "5",
        title: "AI Specialist",
        place: "Ho Chi Minh City",
        company: "Company 5",
        salary: "35000 - 45000",
    },
    {
        id: "6",
        title: "Frontend Developer",
        place: "Danang",
        company: "Company 6",
        salary: "25000 - 35000",
    },
    {
        id: "7",
        title: "Mobile App Developer",
        place: "Hanoi",
        company: "Company 7",
        salary: "20000 - 30000",
    },
    {
        id: "8",
        title: "Cybersecurity Analyst",
        place: "Ho Chi Minh City",
        company: "Company 8",
        salary: "40000 - 50000",
    },
    {
        id: "9",
        title: "Database Administrator",
        place: "Danang",
        company: "Company 9",
        salary: "30000 - 40000",
    },
    {
        id: "10",
        title: "DevOps Engineer",
        place: "Hanoi",
        company: "Company 10",
        salary: "45000 - 55000",
    },
    {
        id: "11",
        title: "Network Engineer",
        place: "Ho Chi Minh City",
        company: "Company 11",
        salary: "35000 - 45000",
    },
    {
        id: "12",
        title: "Systems Analyst",
        place: "Danang",
        company: "Company 12",
        salary: "30000 - 40000",
    },
    {
        id: "13",
        title: "IT Project Manager",
        place: "Hanoi",
        company: "Company 13",
        salary: "50000 - 60000",
    },
    {
        id: "14",
        title: "QA Engineer",
        place: "Ho Chi Minh City",
        company: "Company 14",
        salary: "25000 - 35000",
    },
    {
        id: "15",
        title: "UI/UX Designer",
        place: "Danang",
        company: "Company 15",
        salary: "20000 - 30000",
    },
    {
        id: "16",
        title: "Blockchain Developer",
        place: "Hanoi",
        company: "Company 16",
        salary: "50000 - 70000",
    },
    {
        id: "17",
        title: "Game Developer",
        place: "Ho Chi Minh City",
        company: "Company 17",
        salary: "30000 - 40000",
    },
    {
        id: "18",
        title: "Tech Support Specialist",
        place: "Danang",
        company: "Company 18",
        salary: "15000 - 20000",
    },
    {
        id: "19",
        title: "Business Analyst",
        place: "Hanoi",
        company: "Company 19",
        salary: "30000 - 40000",
    },
    {
        id: "20",
        title: "Digital Marketing Specialist",
        place: "Ho Chi Minh City",
        company: "Company 20",
        salary: "20000 - 30000",
    },
    {
        id: "21",
        title: "Software Engineering",
        place: "Hanoi",
        company: "Company 21",
        salary: "10000 - 12000",
    },
    {
        id: "22",
        title: "Salesforce Administrator",
        place: "Hanoi",
        company: "Company 22",
        salary: "35000 - 45000",
    },
    {
        id: "23",
        title: "SEO Specialist",
        place: "Ho Chi Minh City",
        company: "Company 23",
        salary: "20000 - 30000",
    }
];

export function getJob(id) {
    let matchingJob;

    jobs.forEach((job) => {
        if(job.id === id) {
            matchingJob = job;
        }
    });

    return matchingJob;
}