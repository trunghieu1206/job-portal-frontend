import { companies, countReview, getCompany } from "../data/companies.js";

renderCompanyList();

function renderCompanyList() {
    let companyListHTML = '';

    companies.forEach((company) => {
        companyListHTML += `
        <div class="company" onclick="window.location.href='/companydetail.html?name=${company.name}'">
            <h3>${company.name}</h3>
            <div class="stars-review-count">
                <div class="stars">★★★☆☆</div>
                <div class="review-count">| ${countReview(company)} reviews </div>
            </div>
            <p>Scale | ${company.scale}</p>
            <p>${company.place}</p>
        </div>
        `;
    });

    document.querySelector('.js-company-list').innerHTML = companyListHTML;
}


