export const jobs_url = 'https://rec-extra-api.netlify.app/api/jobs';
export const single_job_url = `https://rec-extra-api.netlify.app/api/single-job?id=`;


export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type])
    
    return ['all', ...new Set(unique)]
}