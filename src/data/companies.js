export const companies = [
    {
        name: "Company 1",
        reviews: [
            {
                name: "hieu",
                content: "good",
                postTime: "3 hours ago",
                type: "positive",
            },
            {
                name: "hoang",
                content: "bad",
                postTime: "2 days ago",
                type: "negative",
            },
            {
                name: "huy",
                content: "not good not bad, OK!",
                postTime: "5 days ago",
                type: "positive",
            }
        ],
        type: "IT",
        scale: "500 - 550",
        place: "Hanoi",
    },
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