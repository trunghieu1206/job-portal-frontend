import { jobs } from "../data/jobs.js";
import { companies, getCompany, countPositiveReview, countNegativeReview, countReview, calculateStar, addReview } from "../data/companies.js";
import { getCookie, setCookie } from "./utils/cookies.js";

renderReviewPage();

function renderReviewPage() {
    const url = new URL(window.location.href);
    const companyName = url.searchParams.get('name');

    const company = getCompany(companyName);


    renderCompanyDetail(company);

    document.querySelector('.js-review-count').innerHTML = `There are ${countReview(company)} reviews`

    renderOthersReviews(company);
    renderReviewSummary(company);

    renderUserReview();
}

function renderCompanyDetail(company) {
    const companyDetailHTML = `
    <div class="company-logo">
        Company logo
    </div>

    <div class="company-info">
        <div class="company-name js-company-name">${company.name}</div>
        <div>
            <div class="company-type"><i style='font-size:16px' class='fas'>&#xf0b1;</i> ${company.type}</div>
            <div class="company-scale"><i style="font-size:16px" class="fa">&#xf0c0;</i> ${company.scale}</div>
        </div>
        <div class="company-place"><i style='font-size:16px' class='fas'>&#xf3c5;</i> ${company.place}</div>
    </div>
    `;

    document.querySelector('.js-company-title').innerHTML = companyDetailHTML;
}

function renderUserReview() {
    const proved = getCookie('proved') || 'false';

    let userReviewHTML;

    if(proved === 'false'){
        userReviewHTML = `
        <div class="warning">You have to <span class="warning-text" onclick="window.location.href='/formsubmission.html'">prove yourself</span> before you can post review</div>
        `;
    } else {
        userReviewHTML = `
        <input type="text" class="js-input-content" placeholder="Post your review here">
        <div class="user-choose-star">
            <span data-id="1"
                class="star js-star">★
            </span>
            <span data-id="2"
                class="star js-star">★
            </span>
            <span data-id="3"
                class="star js-star">★
            </span>
            <span data-id="4"
                class="star js-star">★
            </span>
            <span data-id="5"
                class="star js-star">★
            </span>
            <div class="star-output js-star-output">1</div>
        </div>
        <button class="send-button js-send-button"><i style="font-size:24px" class="fa">&#xf1d8;</i></button>
        `;
    }

    document.querySelector('.js-user-content').innerHTML = userReviewHTML;
}

function renderOthersReviews(company) {
    let userReviewsHTML = '';

    company.reviews.forEach((review) => {
        userReviewsHTML += `
        <div class="review">
            <div class="user-detail">
                <div class="top">
                    <div class="user-logo">
                        <img src="images/booking-1.png" alt="">
                    </div>
                    <div class="user-detail-info">
                        <div class="user-name">${review.name}</div>
                        <div class="user-post-time">${review.postTime}</div>
                    </div>
                </div>

                <div class="user-star js-user-star">
                    ${renderOthersStar(review)}
                </div>

                <div class="user-content">
                    ${review.content}
                </div>
            </div>
            <div class="widget"><i style="font-size:18px" class="fa">&#xf12a;</i></div>
        </div>
        `;
    });

    document.querySelector('.js-others-review').innerHTML = userReviewsHTML;
}

function renderReviewSummary(company) {
    const companyStar = calculateStar(company);
    const companyStarRound = Math.round(companyStar);

    const reviewSummaryHTML = `
    <div class="review-summary">Review summary</div>
        <div class="company-star">
            <span class="star star-1">${checkIfChoose(companyStarRound, 1)}</span>
            <span class="star star-2">${checkIfChoose(companyStarRound, 2)}</span>
            <span class="star star-3">${checkIfChoose(companyStarRound, 3)}</span>
            <span class="star star-4">${checkIfChoose(companyStarRound, 4)}</span>
            <span class="star star-5">${checkIfChoose(companyStarRound, 5)}</span>
        </div>
        <div class="review-count">
            ${companyStar} | ${countReview(company)} reviews
        </div>
    </div>
    `;

    document.querySelector('.js-company-review-count').innerHTML = reviewSummaryHTML;
}

function renderOthersStar(review) {
    const starsHTML = `
    <span class="star star-1">${checkIfChoose(review.star, 1)}</span>
    <span class="star star-2">${checkIfChoose(review.star, 2)}</span>
    <span class="star star-3">${checkIfChoose(review.star, 3)}</span>
    <span class="star star-4">${checkIfChoose(review.star, 4)}</span>
    <span class="star star-5">${checkIfChoose(review.star, 5)}</span>
    `;

    return starsHTML;
}

function checkIfChoose(star, k) {
    if(star >= k){
        return '★';
    } 
    return '☆';
}

document.querySelector('.js-send-button').addEventListener('click', () => {
    const star = parseInt(document.querySelector('.js-star-output').innerHTML);
    const content = document.querySelector('.js-input-content').value;
    const review = {
        name: "You",
        content: content,
        postTime: "Just now",
        star: star,
    };
    const companyName = document.querySelector('.company-name').innerHTML;
    const company = getCompany(companyName);


    addReview(company, review);

    renderReviewPage();

});

let stars = document.querySelectorAll('.js-star');
let output = document.querySelector('.js-star-output');
stars.forEach((star) => {
    star.addEventListener('click', () => {
        gfg(star.dataset.id);
    });
});

function gfg(n) {
	remove();

	for (let i = 0; i < n; i++) {
		stars[i].className = "star " + "js-star " + "display-color";
	};

	output.innerHTML = n;
}

// To remove the pre-applied styling
function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star " + "js-star";
		i++;
	}
}