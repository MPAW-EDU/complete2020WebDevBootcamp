


function getDate(){
    let today = new Date();
    // let currentDay = today.getDay();
    // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const options = { 
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleString('zh-CN', options);

    return day;
}

module.exports = getDate;