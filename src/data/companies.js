export const companies = [
    {
        name: "Company 1",
        reviews: [
            {
                name: "hieu",
                content: "good",
                postTime: "3 hours ago",
                star: 5,
            },
            {
                name: "hoang",
                content: "I love this company",
                postTime: "2 days ago",
                star: 5,
            },
            {
                name: "huy",
                content: "not good not bad, OK!",
                postTime: "5 days ago",
                star: 4,
            },
            {
                name: "hieu hoang",
                content: "good company",
                postTime: "10 days ago",
                star: 4,
            }
        ],
        type: "IT",
        scale: "500 - 550",
        place: "Hanoi",
    },
    {
        name: "Company 2",
        reviews: [
            {
                name: "an",
                content: "excellent service",
                postTime: "1 hour ago",
                star: 5,
            },
            {
                name: "binh",
                content: "could be better",
                postTime: "1 day ago",
                star: 2,
            },
            {
                name: "lan",
                content: "not satisfied",
                postTime: "3 days ago",
                star: 1,
            }
        ],
        type: "Finance",
        scale: "200 - 250",
        place: "Ho Chi Minh City",
    },
    {
        name: "Company 3",
        reviews: [
            {
                name: "khoa",
                content: "amazing experience",
                postTime: "2 hours ago",
                star: 5,
            },
            {
                name: "mai",
                content: "just okay",
                postTime: "2 days ago",
                star: 2,
            },
            {
                name: "quynh",
                content: "terrible support",
                postTime: "4 days ago",
                star: 1,
            }
        ],
        type: "Healthcare",
        scale: "1000 - 1200",
        place: "Da Nang",
    },
    {
        name: "Company 4",
        reviews: [
            {
                name: "son",
                content: "very good",
                postTime: "30 minutes ago",
                star: 4,
            },
            {
                name: "thu",
                content: "not bad",
                postTime: "5 hours ago",
                star: 3,
            },
            {
                name: "hoa",
                content: "poor quality",
                postTime: "1 week ago",
                star: 2,
            }
        ],
        type: "Education",
        scale: "50 - 100",
        place: "Hai Phong",
    },
    {
        name: "Company 5",
        reviews: [
            {
                name: "hien",
                content: "fantastic",
                postTime: "10 minutes ago",
                star: 5,
            },
            {
                name: "minh",
                content: "average",
                postTime: "3 days ago",
                star: 3,
            },
            {
                name: "trang",
                content: "bad experience",
                postTime: "6 days ago",
                star: 1,
            }
        ],
        type: "Retail",
        scale: "300 - 350",
        place: "Can Tho",
    },
    {
        name: "Company 6",
        reviews: [
            {
                name: "bao",
                content: "nothing good about it",
                postTime: "20 minutes ago",
                star: 1,
            },
            {
                name: "loan",
                content: "I hate this company",
                postTime: "4 days ago",
                star: 1,
            },
            {
                name: "thanh",
                content: "disappointing",
                postTime: "1 week ago",
                star: 1,
            }
        ],
        type: "Manufacturing",
        scale: "700 - 750",
        place: "Hue",
    }
];


export function getCompany(name) {
    let matchingCompany;

    companies.forEach((company) => {
        if(company.name === name){
            matchingCompany = company;
        }
    });
    
    return matchingCompany;
}

export function countReview(company) {
    let reviewCount = 0;

    company.reviews.forEach(() => {
        reviewCount++;
    });

    return reviewCount;
}

export function countPositiveReview(company) {
    let positiveCount = 0;

    company.reviews.forEach((review) => {
        if(review.type === 'positive'){
            positiveCount++;
        }
    });

    return positiveCount;
}

export function countNegativeReview(company) {
    let negativeCount = 0;

    company.reviews.forEach((review) => {
        if(review.type === 'negative'){
            negativeCount++;
        }
    });

    return negativeCount;
}

export function calculateStar(company) {
    let totalStar = 0;

    company.reviews.forEach((review) => {
        totalStar += review.star;
    });

    const totalReviews = countReview(company);
    return (totalStar / totalReviews).toFixed(1);
}

export function addReview(company, review) {
    company.reviews.unshift(review);
}