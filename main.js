/**
 * Outline:
 * Before beginning: have divs ready filled with content for each tab (saved to memory)
 * 1. get tab elements using querySelect
 * 2. add event listeners
 * 3. onclick: clear folder content
 * 4. Replace text with appropriate div stored in memory
 */

const projLink = document.querySelector("#h_proj");
const expLink = document.querySelector("#h_exp");



const folder = document.querySelector("#folder");


const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
// const tab3 = document.querySelector("#tab3");

const tab_p1 = document.querySelector("#tab-p1");
const tab_p2 = document.querySelector("#tab-p2");

const darkBeige = "#c2b19f";
const lightBeige = "#f4dfc8";
const grey = "rgba(209, 209, 209, 0.829)";

projLink.addEventListener("click", ()=>{
    sessionStorage.setItem("scrollToId", "tab1"); //creates a pair in local storage
    insertProjects();
});

//listens to reloads specifically from project clicks
window.addEventListener("load", () => {
    const scrollToId = sessionStorage.getItem("scrollToId");
    if (scrollToId) {
        const element = document.getElementById(scrollToId);
        //scroll to section if reload came from click
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        sessionStorage.removeItem("scrollToId"); // Clear the stored ID
    }
});


function insertProjects(){
    //change the color of the tabs
    tab1.style.backgroundColor = lightBeige;
    tab_p1.style.backgroundColor = "white";

    tab2.style.backgroundColor = darkBeige;
    tab_p2.style.backgroundColor = grey;

    location.reload();
}

tab1.addEventListener("click", insertProjects);

expLink.addEventListener("click", ()=>{
    insertExperience();
    tab2.scrollIntoView({ behavior: 'smooth' });
});

function insertExperience(){
    tab2.style.backgroundColor = lightBeige;
    tab_p2.style.backgroundColor = "white";

    tab1.style.backgroundColor = darkBeige;
    tab_p1.style.backgroundColor = grey;


    folder.textContent = ""; 
    const exp = document.createElement("div");
    exp.id = "exp";
    folder.appendChild(exp);

    const title = document.createElement("h1");
    title.id = "folder_title";
    title.textContent = "Experience"
    exp.appendChild(title);


    const divCoop = document.createElement("div");
    divCoop.id = "coop";
    exp.appendChild(divCoop);

    const subtitle = document.createElement("div");
    subtitle.className = "subtitle";
    subtitle.style.marginRight="2em";
    
    let role = document.createElement("p");
    role.textContent="COOP Careers - Data Analytics Apprentice";
    role.classList="role";
    let date = document.createElement("p");
    date.textContent="August 2023 - December 2023";
    subtitle.appendChild(role);
    subtitle.appendChild(date);
    divCoop.appendChild(subtitle);

    const textDiv = document.createElement("div");
    textDiv.className = "text";
    divCoop.appendChild(textDiv);

    const text1 = document.createElement("p");
    text1.textContent="● Enrolled in a 16-week online apprenticeship program; gaining expertise in data cleaning, transformation, analysis, and visualization using SQL, Python, and Tableau, in addition to continuous professional development"
    textDiv.appendChild(text1);

    const text2 = document.createElement("p");
    text2.textContent="● Completed 200 hours of instruction time with a hands-on mastery of data tools, communication training, and client work"
    textDiv.appendChild(text2);
    
    const text3 = document.createElement("p");
    text3.textContent="● Showcase data analytics skills with two group projects and a final capstone project - seen in the projects section"
    textDiv.appendChild(text3);



    const divSound = document.createElement("div");
    divSound.id = "sound";
    exp.appendChild(divSound);

    const subtitle2 = document.createElement("div");
    subtitle2.className = "subtitle";
    subtitle2.style.marginRight="2em";
    
    role = document.createElement("p");
    role.textContent="Bioinformatics Intern at Sound Agriculture";
    role.classList="role";
    date = document.createElement("p");
    date.textContent="May 2023 - August 2023";
    subtitle2.appendChild(role);
    subtitle2.appendChild(date);
    divSound.appendChild(subtitle2);

    const largeContainer = document.createElement("div");
    largeContainer.id="largeContainer";

    const textDiv2 = document.createElement("div");
    textDiv2.style.fontSize="2em"
    textDiv2.className = "text";
    largeContainer.appendChild(textDiv2);

    const spotlight = document.createElement("img");
    spotlight.id="spotlight";
    spotlight.src="spotlight.jpeg";
    // spotlight.style.height="30em";
    // spotlight.style.width="30em";
    spotlight.style.borderRadius="1em";
    largeContainer.appendChild(spotlight);
    divSound.appendChild(largeContainer);

    const text4 = document.createElement("p");
    text4.textContent="● Created a database of over 300 genetic sequences to serve as a reference for tech leads during project design"
    textDiv2.appendChild(text4);

    const text5 = document.createElement("p");
    text5.textContent="● Curated and analyzed 1 TB of mRNA and siRNA sequences while improving script efficiency"
    textDiv2.appendChild(text5);

    const text6 = document.createElement("p");
    text6.textContent="● Utilized generated data for the creation of a reference database that continues to be used by tech leads for product design"
    textDiv2.appendChild(text6);


    const divBlack = document.createElement("div");
    exp.appendChild(divBlack);

    const subtitle3 = document.createElement("div");
    subtitle3.className = "subtitle";
    subtitle3.style.marginRight="2em";
    
    role = document.createElement("p");
    role.textContent="Undergraduate Researcher at the Blackman Laboratory";
    role.classList="role";
    date = document.createElement("p");
    date.textContent="August 2020 - May 2023";
    subtitle3.appendChild(role);
    subtitle3.appendChild(date);

    subtitle3.className = "subtitle";
    divBlack.appendChild(subtitle3);

    const textDiv3 = document.createElement("div");
    textDiv3.className = "text";
    divBlack.appendChild(textDiv3);

    const text7 = document.createElement("p");
    text7.textContent="● Constructed a computational population genomics pipeline for a  M. guttatus spanning 113 populations"
    textDiv3.appendChild(text7);

    const text8 = document.createElement("p");
    text8.textContent="● Investigated potentially adaptive genetic variations linked to climatic conditions, soon to be published as contributing work in a scientific paper"
    textDiv3.appendChild(text8);

    const text9 = document.createElement("p");
    text9.textContent="● Utilized generated data for the creation of a reference database that continues to be used by tech leads for product design"
    textDiv3.appendChild(text9);

};

tab2.addEventListener("click", insertExperience);
