function sendEmail(name, email) {
    console.log(`Sending email to ${name} <${email}>`);
}

let p1 = { name: 'Vinod', email: 'vinod@vinod.co' };
// object destructuring:
let {name, email, city} = p1; // city is not found in p1, becomes 'undefined'
sendEmail(name, email);

// object destructring at parameter level:
let sendSMS = ({text, mobile})=>{
    console.log(`Sending SMS to ${mobile} And the message text is: ${text}`);
}

let msg = { mobile: '9731424784', text: 'Please call back ASAP.....'};

sendSMS(msg);

// destructring can also be used with arrays:
let data = ['Vinod', 'Kumar', 'vinod@vinod', '9731424784', 'Bangalore', 'India'];
let [fname, lname, emailId, ...remData] = data;

console.log('fname=%s, lname=%s, emailId=%s', fname, lname, emailId);
console.log('remData is', remData); // '9731424784', 'Bangalore', 'India'

let p2 = {fname, lname, emailId, city: 'Bangalore'};
console.log(p2);

// shallow copying of objects
let p3 = {...p2, city: 'Tumkur', mobile: '9731424784'};
p3.state = 'Karnataka';
console.log(p2);
console.log(p3);
console.log('p2===p3 is', p2===p3);

let newData = [...data, 10, 20]; // data===newData is false
console.log(data);
console.log(newData);