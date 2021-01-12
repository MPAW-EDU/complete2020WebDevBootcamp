


function getDate(){
    let today = new Date();

    const options = { 
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    // Converts the date into a selected language,
    // Chinese in this case
    let day = today.toLocaleString('zh-CN', options);

    return day;
}

module.exports = getDate;