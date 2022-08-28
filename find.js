let you = [
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/acfc069b6351c9d83b5b58e07ccb6f49`,
        title: "Maersk",
        rating: "★★★☆☆",
        dis: "There is an urgent need to build resiliency and agility into supply chains and this is what is driving demand for the flexibility that the Less than Container Load logistics service offers.",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/7502c4fab3c11f90ed12b06b5e7b138d`,
        title: "Bosch",
        rating: "★★★★☆",
        dis: "Bosch is a leading IoT company and global supplier of technology and services in the Mobility Solutions, Industrial Technology, Consumer Goods, and Energy and Building Technology sectors.",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/46105bb1392fe4bdf5127cb50b19e04c`,
        title: "Ride.Swiegy",
        rating: "★★★☆☆",
        dis: "Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region and age The developer provided this information and may update it over time.",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/bf30169effaccda27699b204e40e0dbb`,
        title: "WNS Global Services",
        rating: "★★★★☆",
        dis: "WNS’ focus is on co-creating solutions that are relevant and impactful, seamlessly aligning with a disruptive and complex business landscape.",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/13b693b4dcc055d2344351b4c9a148e9`,
        title: "TCS",
        rating: "★★★☆☆",
        dis: "Tata Consultancy Services is an IT services, consulting, and business solutions organization that delivers real results to global business.",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/e6c5eda7fc206158e9a85cd706f7ae9f`,
        title: "Muthoot Finance",
        rating: "★★★☆☆",
        dis: "Muthoot Finance Limited is the largest gold financing company in India in terms of loan portfolio. The company is a ‘Systemically Important Non-deposit taking NBFC’ headquartered in the southern India",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/e76988dd6c8bf19022d480ba7814316d`,
        title: "Virtusa",
        rating: `★★★★☆`,
        dis: "Dramatically increase the success of your digital transformation. Whether developing net new solutions or scaling existing processes and staff worldwide, Virtusa helps you reach your goals in some of today’s most complex and fast-moving use cases.",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/806ab4e587375ca09afa57492b509707`,
        title: "Sutherland",
        rating: `★★★★☆`,
        dis: "Sutherland is an experience-led digital transformation company. Our mission is to deliver exceptionally engineered experiences for customers and employees today, that continue to delight tomorrow. For over 35 years, we have cared for our customers' customers, delivering measurable results and accelerating growth.",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/e8ac3849c7ac343c0b4495df46906cd2`,
        title: "Honeywell",
        rating: `★★★★☆`,
        dis: "Honeywell International Inc. is an American publicly traded, multinational conglomerate corporation headquartered in Charlotte, North Carolina. It primarily operates in four areas of business: aerospace, building technologies, performance materials and technologies, and safety and productivity solutions",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    }
];


let data = () => {
    let coll = document.getElementById("coll")
    coll.innerHTML = null;

   you.forEach(el => {
        console.log(you);
        let d = document.createElement("div");
        d.setAttribute("id", "d");

        let e = document.createElement("div");
        e.setAttribute("id", "e");

        let f = document.createElement("div");
        f.setAttribute("id", "f");

        let g = document.createElement("div");
        g.setAttribute("id", "g");

        let h = document.createElement("div");
        h.setAttribute("id", "h");

        let img = document.createElement("img");
        img.setAttribute("id", "im");
        img.src = el.image;

        let title = document.createElement("p");
        title.setAttribute("id","tit")
        title.innerText = el.title;

        let rating = document.createElement("p");
        rating.setAttribute("id", "rat")
        rating.innerText = el.rating;

        let dis=document.createElement("p");
        dis.setAttribute("id","dis")
        dis.innerText=el.dis;

        let sal = document.createElement("p");
        sal.innerText = el.sal;

        let que = document.createElement("p");
        que.innerText = el.que;

        let opn = document.createElement("p");
        opn.innerText = el.opn;

        e.append(img);
        f.append(title,rating,dis);
        g.append(sal, que, opn);
        // h.append();
        d.append(e,f,g);
        coll.append(d);
    })
};

data();


let findJob=()=>{
    location.href="#"
    }
    let company=()=>{
       location.href="companyReview.html";
   }
   let salary=()=>{
       location.href="salary.html";
   }
   let Post=()=>{
       location.href="#";
   }
   let employers=()=>{
       location.href="employers.html";
   }
   
          let  singin=()=>{
   window.location.href="sign-in1.html";
   }