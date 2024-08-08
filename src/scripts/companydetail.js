import { jobs } from "../data/jobs.js";
import { companies, getCompany, countPositiveReview, countNegativeReview, countReview } from "../data/companies.js";
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
        <div class="company-name">${company.name}</div>
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
        <input type="text" placeholder="Post your review here">
        <button class="send-button"><i style="font-size:24px" class="fa">&#xf1d8;</i></button>
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
    const reviewSummaryHTML = `
    <div class="review-summary">Review summary</div>
    <div class="positive-review"><i class="fa fa-thumbs-up" style="font-size:30px;color:green"></i> ${countPositiveReview(company)}</div>
    <div class="negative-review"><i class="fa fa-thumbs-down" style="font-size:30px;color:red"></i> ${countNegativeReview(company)}</div>
    `;

    document.querySelector('.js-company-review-count').innerHTML = reviewSummaryHTML;
}