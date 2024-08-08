import { getCookie, setCookie } from "./utils/cookies.js";
import { companies, getCompany } from "../data/companies.js";

document.querySelector('.js-submit-button').addEventListener('click', async () => {
    setCookie('proved', 'true', 1);
});

window.addEventListener('load', () => {
    const url = new URL(window.location.href);
    const companyName = url.searchParams.get('company-name');

    const company = getCompany(companyName);

    if(company) {
        window.location.href = `http://localhost/companydetail.html?name=${company.name}`;
    }
})