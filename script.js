let array = [
    {
        name: "Muhammad Saad",
        role: "Full Stack Web Developer",
        description: "Creates dynamic and efficient web apps using modern frameworks like React and Express.",
        image: "https://i.pinimg.com/736x/eb/4a/78/eb4a7843510a5b54f02f9aed29db0b55.jpg",
        hired: 'Requested',
        approved: 'Accept Approvel',
        color: 'white'
    }, {
        name: "Hamza Shah",
        role: "Full Stack Web Developer",
        description: "Experienced in developing both client and server-side applications using modern web technologies",
        image: "https://i.pinimg.com/736x/13/d5/36/13d536c536b7753067fd72ed4770dec7.jpg",
        hired: 'Requested',
        approved: 'Accept Approvel',
        color: 'white'
    }, {
        name: "Manan",
        role: "Back End Developer",
        description: "Proficient in HTML, CSS, JavaScript, Node.js, and databases to build full-stack web applications.",
        image: "https://i.pinimg.com/736x/16/f6/9e/16f69e7b46129dccb174cb31fa5d6bb9.jpg",
        hired: 'Requested',
        approved: 'Accept Approvel',
        color: 'white'
    }, {
        name: "Harsh Sharma",
        role: "Full Stack Web Developer",
        description: "Proficient in HTML, CSS, JavaScript, Node.js, and databases to build full-stack web applications",
        image: "https://i.pinimg.com/736x/1e/26/ec/1e26ec7bf653ac79cc7c7305d136d01a.jpg",
        hired: 'Requested',
        approved: 'Accept Approvel',
        color: 'white'
    }, {
        name: "Shartak",
        role: "Front End Developer",
        description: "Combines UI/UX design with powerful backend logic to create complete, scalable web platform",
        image: "https://i.pinimg.com/736x/dd/4a/af/dd4aafe6c70c6f304f06f1921d6ae592.jpg",
        hired: 'Requested',
        approved: 'Accept Approvel',
        color: 'white'
    },
    {
        name: "Ali Ahmad",
        role: "Front End Developer",
        description: "Combines UI/UX design with powerful backend logic to create complete, scalable web platform",
        image: "https://i.pinimg.com/736x/dd/4a/af/dd4aafe6c70c6f304f06f1921d6ae592.jpg",
        hired: 'Requested',
        approved: 'Accept Approvel',
        color: 'white'
    },
];
let main = document.querySelector('.main')
function FetchingHtml() {
    let sum = ''
    array.forEach(function (elem, idx) {
        sum = sum + `<div class="card" style="background-color: ${elem.color};">
            <img src="${elem.image}" alt="${name}">
            <h3>${elem.name}</h3>
            <p class="title">${elem.role}</p>
            <p class="desc">${elem.description}</p>
            <h4>${elem.hired}</h4>
            <button id = ${idx}>${elem.approved}</button>
        </div>`
    })

    main.innerHTML = sum
}
FetchingHtml()

main.addEventListener('click', function (dets) {
    let detail = array[dets.target.id];

    if (detail.hired == 'Requested') {
        detail.hired = 'Hired'
        detail.color = 'green'
    } else detail.hired = 'Requested'


    if (detail.approved == 'Accept Approvel') {
        detail.approved = 'Remove Approvel'
    } else{
        detail.approved = 'Accept Approvel'
        detail.color = 'white'
    } 
    FetchingHtml()
})
