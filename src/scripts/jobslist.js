import { jobs } from "../data/jobs.js";

renderJobsList('all');

function renderJobsList(role) {
    let jobsListHTML = '';

    jobs.forEach((job) => {
        if(role !== job.type){
            if(role !== 'all') return;
        }
        jobsListHTML += `
        <a href="/jobdetails.html?id=${job.id}">
            <div class="job js-job">
                <div class="logo">

                </div>
                <img class="background" src="images/job_logo.jpg" alt="">

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
        `
    });

    document.querySelector(".js-job-list").innerHTML = jobsListHTML;
}

document.querySelectorAll('.js-role').forEach((radioButton) => {
    radioButton.addEventListener('click', () => {
        const role = radioButton.dataset.role;
        renderJobsList(role);
    });
});