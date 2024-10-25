//code I wrote
// let a;
// let date;
// let time;

//const options = { year: 'numeric', month: 'long', day: 'numeric' };

// setInterval(() => {
//     a=new Date();

//     date = a.toLocaleDateString(undefined,options);
//     time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
//     document.getElementById('clock').innerHTML = time + "<br> on" + date; 
    
// },1000);




//GPT corrected
let a;
let date;
let time;

// Define date formatting options
const options = { year: 'numeric', month: 'long', day: 'numeric' };

setInterval(() => {
    a = new Date(); // Correctly create a new Date object

    date = a.toLocaleDateString(undefined, options);
    
    // Get hours, minutes, and seconds
    let hours = String(a.getHours()).padStart(2, '0');
    const minutes = String(a.getMinutes()).padStart(2, '0');
    const seconds = String(a.getSeconds()).padStart(2, '0');

    // Determine AM or PM and convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12; // Convert to 12-hour format
    hours = hours ? hours : 12; // The hour '0' should be '12'

    time = hours + ':' + minutes + ':' + seconds + ' ' + ampm; // Format hours, minutes, and seconds

    document.getElementById('time').innerHTML = time + "<br> on " + date; // Use the correct ID 'time'
    
}, 1000);

