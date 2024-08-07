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
        position: "Junior",
        salary: "21000 - 31000",
        postTime: "2 days, 3 hours"
    },
    {
        id: "3",
        featured: true,
        title: "Product Manager",
        type: "sales",
        place: "Danang",
        company: "Company 3",
        position: "Intern",
        salary: "52000 - 62000",
        postTime: "3 days, 1 hour"
    },
    {
        id: "4",
        title: "Data Scientist",
        type: "it",
        place: "Hanoi",
        company: "Company 4",
        position: "Senior",
        salary: "32000 - 42000",
        postTime: "5 hours"
    },
    {
        id: "5",
        title: "AI Specialist",
        type: "it",
        place: "Ho Chi Minh City",
        company: "Company 5",
        position: "Junior",
        salary: "36000 - 46000",
        postTime: "4 days, 6 hours"
    },
    {
        id: "6",
        title: "Frontend Developer",
        type: "it",
        place: "Danang",
        company: "Company 6",
        position: "Senior",
        salary: "26000 - 36000",
        postTime: "6 days, 2 hours"
    },
    {
        id: "7",
        title: "Mobile App Developer",
        type: "it",
        place: "Hanoi",
        company: "Company 7",
        position: "Intern",
        salary: "22000 - 32000",
        postTime: "2 hours"
    },
    {
        id: "8",
        title: "Cybersecurity Analyst",
        type: "it",
        place: "Ho Chi Minh City",
        company: "Company 8",
        position: "Junior",
        salary: "41000 - 51000",
        postTime: "1 day, 3 hours"
    },
    {
        id: "9",
        title: "Database Administrator",
        type: "it",
        place: "Danang",
        company: "Company 9",
        position: "Senior",
        salary: "31000 - 41000",
        postTime: "3 days, 7 hours"
    },
    {
        id: "10",
        title: "DevOps Engineer",
        type: "it",
        place: "Hanoi",
        company: "Company 10",
        position: "Senior",
        salary: "46000 - 56000",
        postTime: "5 days, 8 hours"
    },
    {
        id: "11",
        title: "Network Engineer",
        type: "it",
        place: "Ho Chi Minh City",
        company: "Company 11",
        position: "Junior",
        salary: "36000 - 46000",
        postTime: "4 days, 4 hours"
    },
    {
        id: "12",
        title: "Systems Analyst",
        type: "it",
        place: "Danang",
        company: "Company 12",
        position: "Intern",
        salary: "31000 - 41000",
        postTime: "6 hours"
    },
    {
        id: "13",
        title: "IT Project Manager",
        type: "it",
        place: "Hanoi",
        company: "Company 13",
        position: "Junior",
        salary: "51000 - 61000",
        postTime: "7 days, 9 hours"
    },
    {
        id: "14",
        title: "QA Engineer",
        type: "it",
        place: "Ho Chi Minh City",
        company: "Company 14",
        position: "Junior",
        salary: "26000 - 36000",
        postTime: "2 days, 5 hours"
    },
    {
        id: "15",
        title: "UI/UX Designer",
        type: "it",
        place: "Danang",
        company: "Company 15",
        position: "Intern",
        salary: "22000 - 32000",
        postTime: "4 hours"
    },
    {
        id: "16",
        title: "Blockchain Developer",
        type: "it",
        place: "Hanoi",
        company: "Company 16",
        position: "Junior",
        salary: "51000 - 71000",
        postTime: "1 day, 8 hours"
    },
    {
        id: "17",
        title: "Game Developer",
        type: "it",
        place: "Ho Chi Minh City",
        company: "Company 17",
        position: "Junior",
        salary: "31000 - 41000",
        postTime: "3 days, 6 hours"
    },
    {
        id: "18",
        title: "Tech Support Specialist",
        type: "it",
        place: "Danang",
        company: "Company 18",
        position: "Junior",
        salary: "16000 - 21000",
        postTime: "5 days, 3 hours"
    },
    {
        id: "19",
        title: "Business Analyst",
        type: "it",
        place: "Hanoi",
        company: "Company 19",
        position: "Intern",
        salary: "31000 - 41000",
        postTime: "7 hours"
    },
    {
        id: "20",
        title: "Digital Marketing Specialist",
        type: "marketing",
        place: "Ho Chi Minh City",
        company: "Company 20",
        position: "Junior",
        salary: "21000 - 31000",
        postTime: "3 days, 2 hours"
    },
    {
        id: "21",
        title: "Software Engineer",
        type: "it",
        place: "Hanoi",
        company: "Company 21",
        position: "Intern",
        salary: "11000 - 13000",
        postTime: "5 hours"
    },
    {
        id: "22",
        title: "Salesforce Administrator",
        type: "sales",
        place: "Hanoi",
        company: "Company 22",
        position: "Intern",
        salary: "36000 - 46000",
        postTime: "6 days, 1 hour"
    },
    {
        id: "23",
        title: "SEO Specialist",
        type: "marketing",
        place: "Ho Chi Minh City",
        company: "Company 23",
        position: "Senior",
        salary: "21000 - 31000",
        postTime: "1 day, 9 hours"
    }
];

export function getJob(id) {
    let matchingJob;

    jobs.forEach((job) => {
        if (job.id === id) {
            matchingJob = job;
        }
    });

    return matchingJob;
}
