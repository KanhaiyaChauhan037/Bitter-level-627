let me = [
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/acfc069b6351c9d83b5b58e07ccb6f49`,
        title: "Maersk",
        rating: "★★★☆☆",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/7502c4fab3c11f90ed12b06b5e7b138d`,
        title: "Bosch",
        rating: "★★★★☆",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/46105bb1392fe4bdf5127cb50b19e04c`,
        title: "Ride.Swiegy",
        rating: "★★★☆☆",
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/bf30169effaccda27699b204e40e0dbb`,
        title: "WNS Global Services",
        rating: "★★★★☆",
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
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/e76988dd6c8bf19022d480ba7814316d`,
        title: "Virtusa",
        rating: `★★★★☆`,
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/806ab4e587375ca09afa57492b509707`,
        title: "Sutherland",
        rating: `★★★★☆`,
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    },
    {
        image: `https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/64x64/e8ac3849c7ac343c0b4495df46906cd2`,
        title: "Honeywell",
        rating: `★★★★☆`,
        sal: "salary",
        que: "questions",
        opn: "Open Jobs",
    }
];

let append = () => {
    let container = document.getElementById("container1")
    container.innerHTML = null;

    me.forEach(el => {
        // console.log(me);
        let div = document.createElement("div");
        div.setAttribute("id", "div");

        let b = document.createElement("div");
        b.setAttribute("id", "b");

        let bx = document.createElement("div");
        bx.setAttribute("id", "bx");

        let bx1 = document.createElement("div");
        bx1.setAttribute("id", "bx1");

        let bx2 = document.createElement("div");
        bx2.setAttribute("id", "bx2");

        let img = document.createElement("img");
        img.setAttribute("id", "img");
        img.src = el.image;

        let title = document.createElement("p");
        title.innerText = el.title;

        let rating = document.createElement("p");
        rating.setAttribute("id", "rating")
        rating.innerText = el.rating;

        let sal = document.createElement("p");
        sal.innerText = el.sal;

        let que = document.createElement("p");
        que.innerText = el.que;

        let opn = document.createElement("p");
        opn.innerText = el.opn;

        bx.append(img);
        bx1.append(title, rating);
        b.append(bx, bx1);
        bx2.append(sal, que, opn);
        div.append(b, bx2);
        container.append(div);
    })
};

append();

