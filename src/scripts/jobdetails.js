import { jobs, getJob } from "../data/jobs.js";

function renderJobDetail() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    const matchingJob = getJob(id);

    const jobDetailsHTML = `
    <div class="job-title-container">
        <div class="job-title-detail">
            ${matchingJob.title}
        </div>

        <div class="job-company-detail">
            At <span style="color: red;">${matchingJob.company}</span>
        </div>

        <hr>

        <div class="job-place-detail">
            <i style='font-size:16px' class='fas'>&#xf3c5;</i> ${matchingJob.place} | posted ${matchingJob.postTime} | <span class='js-job-position' style="background-color: ${renderPositionColor(matchingJob)}; color: white; padding: 4px; margin-left: 4px; border-radius: 5px;">${matchingJob.position}</span> 
        </div>
    </div>

    <div class="job-details-container">
        <div class="left-section">
            <div class="job-description-detail">
                <div class="job-description-detail-title">Job Description</div>
                <div class="job-description-detail-detail">
                    <div class="line"></div>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce condimentum et diam nec tincidunt. Aenean placerat 
                        nunc id nunc ultrices maximus. Vivamus id blandit felis, 
                        et lobortis sapien. Nullam in ligula convallis, 
                        ullamcorper quam tristique, iaculis dui. Sed sollicitudin 
                        vulputate mattis. Integer cursus mauris in erat vestibulum, 
                        vitae feugiat massa gravida. Donec vulputate velit sit amet 
                        lectus ultricies, eu porttitor velit finibus.
                    </div>
                </div>
            </div>
    
            <div class="job-expire-date">
                Available until: April 2th, 2030
            </div>
    
            <div class="job-salary-detail">
                Salary: $${matchingJob.salary}
            </div>
    
            <div class="job-requirements-detail">
                <div class="job-requirements-detail-title">Requirements for applicants</div>
                <div class="job-requirements-detail-detail">
                    <div class="line"></div>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fusce condimentum et diam nec tincidunt. Aenean placerat 
                        nunc id nunc ultrices maximus. Vivamus id blandit felis, 
                        et lobortis sapien. Nullam in ligula convallis, 
                        ullamcorper quam tristique, iaculis dui. Sed sollicitudin 
                        vulputate mattis. Integer cursus mauris in erat vestibulum, 
                        vitae feugiat massa gravida. Donec vulputate velit sit amet 
                        lectus ultricies, eu porttitor velit finibus.
                    </div>
                </div>
            </div>

            <div class="apply-button-container">
                <button id="apply-button" class="apply-button js-apply-button" data-text="apply">Apply</button>
            </div>
        </div>

        <div class="right-section">
                <div class="top">
                    About ${matchingJob.company}
                </div>
                <div class="middle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce condimentum et diam nec tincidunt. Aenean placerat 
                    nunc id nunc ultrices maximus. Vivamus id blandit felis, 
                    et lobortis sapien. Nullam in ligula convallis, 
                    ullamcorper quam tristique, iaculis dui. Sed sollicitudin 
                    vulputate mattis. Integer cursus mauris in erat vestibulum, 
                    vitae feugiat massa gravida. Donec vulputate velit sit amet 
                    lectus ultricies, eu porttitor velit finibus.
                </div>

                <div class="bottom">
                    <button class="review-button js-review-button">Read review</button>
                </div>
            </div>
    </div>
    `;

    document.querySelector('.js-job-contents').innerHTML = jobDetailsHTML;


    const reviewButton = document.querySelector('.js-review-button');
    reviewButton.addEventListener('click', () => {
        window.location.href = `http://localhost/companydetail.html?name=${matchingJob.company}`
    });
}

renderJobDetail();

const applyButton = document.querySelector('.js-apply-button');

applyButton.addEventListener('click', () => {
    if(applyButton.innerHTML === 'Apply') {
        applyButton.innerHTML = 'Already Applied';
    } else{
        applyButton.innerHTML = 'Apply';
    }
})

function renderPositionColor(job) {
    if(job.position === 'Senior') {
        return 'rgb(' + 239 + ',' + 79 + ',' + 79 + ')';
    } else if(job.position === 'Junior'){
        return 'rgb(' + 255 + ',' + 187 + ',' + 0 + ')';
    } else if(job.position === 'Intern'){
        return 'rgb(' + 27 + ',' + 184 + ',' + 27 + ')';
    }

    return job.position;
}