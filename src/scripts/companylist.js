import { companies, countReview, getCompany } from "../data/companies.js";
import { checkIfChoose } from "./utils/stars.js";
import { calculateStar } from "../data/companies.js";

renderCompanyList();

function renderCompanyList() {
    let companyListHTML = '';

    companies.forEach((company) => {
        const companyStar = calculateStar(company);
        const companyStarRound = Math.round(companyStar);

        companyListHTML += `
        <div class="company" onclick="window.location.href='/companydetail.html?name=${company.name}'">
            <h3>${company.name}</h3>
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
            <p><i style="font-size:14px" class="fa">&#xf0c0;</i> ${company.scale}</p>
            <p><i style='font-size:14px' class='fas'>&#xf3c5;</i> ${company.place}</p>
        </div>
        `;
    });

    document.querySelector('.js-company-list').innerHTML = companyListHTML;
}