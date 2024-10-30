
const otadiv = document.querySelector(".diiv")

fetch("https://jsonplaceholder.org/posts")
    .then((res) => res.json())
    .then((data) => {

        const limitedData = data.slice(0, 30);

        limitedData.forEach((e) => {

            let div1 = document.createElement("div");
            div1.className = "div_";
            div1.style.border = "1px solid black";
            div1.style.padding = "10px";
            div1.style.margin = "10px";
            div1.style.width = "200px"; 
            div1.style.display = "inline-block";
            div1.style.verticalAlign = "top";

            let rangEL = document.createElement("img");
            rangEL.className = "img";
            rangEL.src = `${e.image}`;
            rangEL.alt = "Image";
            rangEL.style.width = 100 + "px";

            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");

            p1.innerHTML = `ID: ${e.id}`;
            p2.innerHTML = `Title: ${e.title}`;
            p3.innerHTML = `Body: ${e.publishedAt}`;

            div1.appendChild(rangEL);
            div1.appendChild(p1);
            div1.appendChild(p2);
            div1.appendChild(p3);

            otadiv.append(div1);
        });
    })

