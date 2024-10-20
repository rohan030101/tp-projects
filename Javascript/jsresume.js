let personalDetails = {
  Name: "Rohan Janrao",
  age: 23,
  phone:8380059153,
  address:"Suman Nagar Chembur Mumbai-71",
  email:"janraorohan2@gmail.com"
};

let details={
  gender:"Male",
  nationality:"Indian",
  dateOfBirth:"03/01/2001"
};
let educationDetails = [
  {
    level: "Diploma Completed",
    collegeName: "Vivekanand Educaton Society Polytecnic Chembur",
    courseName: "Computer Technology",
    passoutYear: 2020,
    percentage: 76
  },
  {
    level: "HSC Completed",
    collegeName: "Shardashram Vidyamandir Technical Collge Dadat West",
    courseName: "12th",
    passoutYear: 2018,
    percentage: 74
  },
  {
    level: "SSC Completed",
    collegeName: "Sushma Patil Vidyalaya Kamothe",
    courseName: "10th",
    passoutYear: 2016,
    percentage: 62
  },
];

let jobDetails = [
  {
    companyName: "ITSC PRIVATE LIMITED",
    jobProfile: " IT Engineer",
    duration: "Oct 2022 to Feb 2024"
  },
  {
    companyName: "Super Maintaince LTD",
    jobProfile: " IT Engineer",
    duration: "Feb 2024 to Till Date"
  },
];


let skils=["HTML","CSS","JAVASCRIPT"];
 
let hobbies = ["Listening Music", "Travelling","Watching Movie"];


let socialsLinks = [
  {
    socialsName: "Github",
    socialUrl: "https://github.com/rohan030101"
  }
];

const resume = {
  personalDetails: personalDetails,
  details:details,
  jobDetails: jobDetails,
  educationDetails: educationDetails, 
  socialsLinks: socialsLinks,
  skils: skils,
  hobbies: hobbies
};

console.log("Name :"+resume.personalDetails.Name);
console.log("Designation : "+resume.jobDetails[0].jobProfile);
console.log("Phone No: "+resume.personalDetails.phone);
console.log("Email: "+resume.personalDetails.email);
console.log("Address: "+resume.personalDetails.address);

console.log("\nWork Experience:");
console.log("Company Name: "+resume.jobDetails[0].companyName);
console.log("Job Profile : "+resume.jobDetails[0].jobProfile);
console.log("Duration: "+resume.jobDetails[0].duration);


console.log("Company Name: "+resume.jobDetails[1].companyName);
console.log("Job Profile : "+resume.jobDetails[1].jobProfile);
console.log("Duration: "+resume.jobDetails[1].duration);

console.log("\nEducation:");
console.log(resume.educationDetails[0].level);
console.log(resume.educationDetails[0].collegeName);
console.log(resume.educationDetails[0].courseName);
console.log(resume.educationDetails[0].passoutYear);
console.log(resume.educationDetails[0].percentage+"%");



console.log(resume.educationDetails[1].level);
console.log(resume.educationDetails[1].collegeName);
console.log(resume.educationDetails[1].courseName);
console.log(resume.educationDetails[1].passoutYear);
console.log(resume.educationDetails[1].percentage+"%");

console.log(resume.educationDetails[2].level);
console.log(resume.educationDetails[2].collegeName);
console.log(resume.educationDetails[2].courseName);
console.log(resume.educationDetails[2].passoutYear);
console.log(resume.educationDetails[2].percentage+"%");

console.log("\nSkills:");
console.log(resume.skils[0]);
console.log(resume.skils[1]);
console.log(resume.skils[2]);

console.log("\nDetails:");
console.log("Gender : "+resume.details.gender);
console.log("Nationality : "+resume.details.nationality);
console.log("DOB: "+resume.details.dateOfBirth);




// alert("welcome");
