let data=[
    {
        company:"Cyber Security Experts",
        title:"Infosys Limited 3.9",
        location:"Bengaluru, Karnataka",
        salary:"15,000-28,000 a month",
        condition:"part-time",
        requirment:"Apply securely with Indeeded Resume,Responsive employer",
        descp:"Abilit to work with cilents to identify business challanges and contributes to client deliverable by refining analyzing and structrign relevant data Awareness of latest technologies and trends",

    },
    {
        company:"bpo non voice",
        title:"eWebGuru Solutions Pvt Ltd",
        location:"Preet vihar, Delhi, Delhi",
        salary:"15,000-28,000 a month",
        condition:"part-time",
        requirment:"Apply securely with Indeeded Resume,Responsive employer",
        descp:"Abilit to work with cilents to identify business challanges and contributes to client deliverable by refining analyzing and structrign relevant data Awareness of latest technologies and trends",
        
    },
    {
        company:"Embroidery Designer",
        title:"Darshan emb",
        location:"Noida, Uttar Pardesh",
        salary:"15,000 a month",
        condition:"part-time",
        requirment:"Apply securely with Indeeded Resume,Responsive employer",
        descp:"Total work:10 years(required)"
    },
    {
        company:"Us Recruiter",
        title:"DivIHN Integration, Inc 4.9",
        location:"Rmote",
        salary:"22,000-35,000 a month",
        condition:"Full-time",
        requirment:"Apply securely with Indeeded Resume,urgently hiring,Hiring multiple candidtes",
        descp:"Relevant experience working It and Non-It(mainly engineering) requirements in the us market., Experience-6 months to 3 years",

    },
    {
        company:"ApI Integration Specialist",
        title:"tawk.to, Inc",
        location:"New Delhi, Delhi",
        salary:"1,60,000-4,00,000 a month",
        condition:"Full-time",
        requirment:"Apply securely with Indeed Resume, Hiring multiple candidates",
        descp:"Tawk.to, the world's #1 business messaging application is expanding its engineering team and is seeking an experienced API Integrations Developer,with research and dat analysis skills,to help shape",

    },
    {
        company:"Technical Editor",
        title:"Packet publishing",
        location:"Mumbai, Maharashtra",
        salary:"3,60,000-4,20,000 a year",
        condition:"Full-time",
        requirment:"Hiring multiple candidates",
        descp:"Supportin individual development through growth opportunities and internal mobility, Ina nutshell the Technical Editor functions as both a reader advocate and an author coach",

    },
    {
        company:"bpo voice process",
        title:"DataVision Software Solutions pvt ltd 3.3",
        location:"Hauz khas, Delhi",
        salary:"15,000-26,000 a month",
        condition:"Full-time",
        requirment:"Apply securely with Indeed Resume, Hiring multiple candidates",
        descp:"part time and full time",

    },
    {
        company:"Business Analyst",
        title:"Amazon 3.5",
        location:"Mumbai, Maharashtra",
        salary:"4,00,000-7,00,000 a year",
        condition:"Full-time",
        requirment:"Apply securely with Indeed Resume",
        descp:"Experience defining requirements and using data and metrics to draw business,shaping and delivering key metrics,reports, and indicators by which our business will",

    },
    {
        company:"Pay per click specialist",
        title:"Autus digital agency",
        location:"Tilak Nagar, delhi",
        salary:"3,60,000-6,00,000 a year",
        condition:"Full-time",
        requirment:"Apply securely with Indeed Resume",
        descp:"3 plus year of experience working in google ppc,re-marketing facebook & Instgram ads. autus digital agency is Urgently hiring paid marketing experts (3-4yr)",

    },
    {
        company:"Campaign specialist",
        title:"Specter and bond Pvt Ltd",
        location:"Hydrabad,Telengana",
        salary:"5,00,000-8,00,000 a year",
        condition:"Full-time",
        requirment:"Apply securely with Indeed Resume",
        descp:"flexible to work from home ,travel, and comply with impromptus requirements keep abrast of new industry updates, polices and market trends to implement the learnings accordingly.",

    },
    {
        company:"Cyber Security Intern",
        title:"Foxhog Ventures corp",
        location:"Delhi,Delhi",
        salary:"20,000-35,000 a month",
        condition:"Full-time",
        requirment:"Apply securely with Indeed Resume",
        descp:"should responsible for observing all of the operations occurring across the network and managing the infrastructure that facilities those operations.",

    },
    {
        company:"SMM manager in EdTech",
        title:"Coding Invaders by MentorsPRO",
        location:"remote",
        salary:"4,00,000-7,00,000 a year",
        condition:"Full-time",
        requirment:"Apply securely with Indeed Resume",
        descp:"Own laptop and good internet speed are required you are an ideal candidates if you have both experience in full stack development and interest in sharing your",

    },
    {
        company:"Sales Manager/ Vendor Specialist(3-9 years)-Us shift",
        title:"Amazon 3.5",
        location:"Bengalure,karnataka",
        salary:"4,00,000-7,00,000 a year",
        condition:"Full-time",
        requirment:"Apply securely with Indeed Resume",
        descp:"also you will look into strategic and operational aspects of their business with Amazon ,root cause analysis of issues and opportunities affecting the vendor's business",

    }


];

import newNavbar from "/newNavbar.js";
// console.log(newNavbar)
document.getElementById("navbar").innerHTML= newNavbar();

let container=document.getElementById("container");
let count=document.getElementById("count");
function getdata(){
    data.forEach((el)=>{
        let company=document.createElement("h2")
        company.innerText=el.company;

        let title=document.createElement("h4")
        title.innerText=el.title;

        let location=document.createElement("h4")
        location.innerText=el.location;

        let salary=document.createElement("a")
        salary.innerText=el.salary;

        let condition=document.createElement('a')
        condition.innerText=el.condition;
        
        let requirment=document.createElement("h4")
        requirment.innerText=el.requirment;

        let descp=document.createElement("p")
        descp.innerText=el.descp;

        let div=document.createElement("div")
        div.addEventListener("click",function(){
            storedata(el);
        })
        div.append(company,title,location,salary,condition,requirment,descp);

        container.append(div)
    })
}

getdata(data);


function storedata(arr){
   
    let jobdata=JSON.parse(localStorage.getItem("jobdata"))||[];
    jobdata.push(arr);

    localStorage.setItem("jobdata",JSON.stringify(jobdata));
   
}


function rightside(){
    let jobdata=JSON.parse(localStorage.getItem("jobdata"))||[];
    jobdata.forEach((el)=>{
        let company=document.createElement("h2")
        company.innerText=el.company;

        let location=document.createElement("h4")
        location.innerText=el.location;

        let descp=document.createElement("p")
        descp.innerText=el.descp;

        let div=document.createElement("div")
       
        div.append(company,location,descp);

        count.append(div);

    })
}
rightside();

let findJob = () => {
    location.href = "#"
}
let company = () => {
    location.href = "companyReview.html";
}
let salary = () => {
    location.href = "salary.html";
}
let Post = () => {
    location.href = "#";
}
let employers = () => {
    location.href = "employers.html";
}

let singin = () => {
location.href = "sign-in1.html";
};
