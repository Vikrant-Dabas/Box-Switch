let loader = document.querySelector('.loader');
let txt = document.querySelector('.text');
let name = document.querySelector('.name');
let pos = document.querySelector('.pos');

let obj = [
    {
        text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
        nme: "Renee Sims",
        position: "Reception"
    },
    {
        text: `This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.`,
        nme: "Iida Niskanen",
        position: "Data Entry"
    }, 
    {
        text:`I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!`,
        nme:"Jonathan Nunfiez",
        position:'Graphic Designer'
    },
    {
        text:`This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.`,
        nme:"Veeti Seppanen",
        position:'Director'
    },
    {
        text:`This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!`,
        nme:'June Cha',
        position:'Software Engineer'
    }
];
let i = 1;
let myInterval = setInterval(() => {
    let curr = obj[i];
    console.log(curr.nme,curr.position,curr.text);
    txt.textContent = curr.text;
    name.textContent = curr.nme;
    pos.textContent = curr.position;
    i+=1;
    i%=obj.length;
}, 5000);