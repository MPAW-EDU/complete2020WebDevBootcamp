


function getDate(){
    let today = new Date();

    const options = { 
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleString('zh-CN', options);

    return day;
}

module.exports = getDate;