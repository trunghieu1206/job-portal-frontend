import { jobs } from "./jobs.js";

function renderFeaturedJobs() {
    let featuredJobsHTML = `
    <p>Featured Jobs</p>
    <hr>
    `;

    jobs.forEach((job) => {
        if(job.featured === undefined){
            return;
        }
        featuredJobsHTML += `
        
        <a href="/jobdetails.html?id=${job.id}">
            <div class="job js-job">
                <div class="logo">
                    <img class="background" src="images/job_logo.jpg" alt="">
                    <img class="top" src="images/company_logo.png" alt="">
                </div>

                <div class="contents">
                    <div class="job-title">
                        ${job.title}
                    </div>
                    
                    <div class="job-description">
                        <div class="job-place">
                            <i style='font-size:20px' class='fas'>&#xf3c5;</i> ${job.place}
                        </div>
                        <div class="job-company">
                            <i style='font-size:20px' class='fas'>&#xf1ad;</i> ${job.company}
                        </div>
                        <div class="job-salary">
                            <i style='font-size:20px' class='fas'>&#xf155;</i> <span style="background-color: rgb(253, 106, 106); color: white; padding: 5px; border-radius: 10px;">${job.salary} USD</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </a>
        `;
    });

    document.querySelector('.js-featured-jobs').innerHTML = featuredJobsHTML;
}

renderFeaturedJobs();

document.querySelector('.js-more-job-button').addEventListener('click', () => {
    const url = 'http://localhost/jobslist.html'
    window.location.href = url;
});