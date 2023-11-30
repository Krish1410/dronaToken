function listOfdates() {
    /// Function to get short month name from month index
    function getShortMonthNameFromIndex(index) {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr',
            'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec'
        ];

        return months[index - 1]; // Subtract 1 to match the array index
    }

    // Get user input for month (numeric) and year
    // const inputMonthNumber = parseInt(prompt('Enter the month number (1 for January, 2 for February, etc.):'), 10);
    // const inputYear = prompt('Enter the year (e.g., 2023):');
    const inputMonthNumber = parseInt(4, 10);
    const inputYear = 2023


    // Validate the month entered by the user and get the number of days

    const inputMonth = getShortMonthNameFromIndex(inputMonthNumber);

    const monthIndex = inputMonthNumber - 1; // Subtract 1 to match JavaScript's month indexing

    const daysInMonth = new Date(inputYear, monthIndex + 1, 0).getDate();
    var listOfdates = []
    for (let i = 1; i <= daysInMonth; i++) {
        const newDate = i
        date = `${newDate} ${inputMonth.toUpperCase()} ${inputYear}`;
        listOfdates.push(date)
    }
    return listOfdates;
}
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
// console.log(GetURLParameter('month'))
var dates = listOfdates()

const center = document.getElementById('center');
dates.forEach(date => {
    let mainEle = document.createElement('main')
    mainEle.id = date
    document.body.appendChild(mainEle)
    let main = document.getElementById(date)
    for (let j = 1; j <= 5; j++) {
        const flex = document.createElement('div')
        flex.classList.add('flex')
        flex.id = date + j.toString()
        main.appendChild(flex)
        const dateContainer = document.getElementById(date + j.toString());

        for (let i = 1; i <= 5; i++) {
            const paragraph = document.createElement('div');
            paragraph.classList.add('img');

            const img = document.createElement('img');
            img.src = '2.png';
            img.alt = '';

            const p = document.createElement('p');
            p.textContent = date;

            paragraph.appendChild(img);
            paragraph.appendChild(p);
            dateContainer.appendChild(paragraph);
        }
    }
});