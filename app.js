const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];


// navbar
const navtoggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.links')
navtoggle.addEventListener('click',function(){
   links.classList.toggle('show-links')
})

// menu 
const sectionCenter=document.querySelector(".section-center");
const btnContainers=document.querySelector('.btn-container');
window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
    displayCategories()
})

function displayCategories(){
    const categories=menu.reduce(function(values,item){
               if(!values.includes(item.category)){
                   values.push(item.category);
               }
               return values;
    },['all']);
    const btns=categories.map((item)=>{
       return `<button class="filter-btn" data-id=${item}>${item}</button>`
    }).join('')
    btnContainers.innerHTML=btns;
    const filterBtns=document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            const data=e.currentTarget.dataset.id;
            const neuItemsCategorie=menu.filter((item)=>item.category===data);
            if(data==='all'){
                displayMenuItems(menu);
            }
            else{
                displayMenuItems(neuItemsCategorie);
            }
        })
    })
}
function displayMenuItems(menu){
    let displayItems=menu.map((item)=>{
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
    }).join('');
    sectionCenter.innerHTML=displayItems;
}


// rewiews

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const prevbtn=document.querySelector('.prev-btn')
const nextbtn=document.querySelector('.next-btn')
const randombtn=document.querySelector('.random-btn')
const autor=document.getElementById('autor')
const job=document.getElementById('job')
const info=document.getElementById('info')
const img=document.getElementById('person-img')


let index=0;
window.addEventListener("DOMContentLoaded",function(){
showPerson(index)

})

nextbtn.addEventListener('click',()=>{
if(index==reviews.length -1){
   index=0 ;
}
else{
   index=index+1;
}

showPerson(index)
})

prevbtn.addEventListener('click',()=>{
  if(index==0){
      index=reviews.length -1 ;
  }
  else{
      index=index-1;
  }
 
  showPerson(index)
 })

function showPerson(index){
  const  person=reviews[index];
  job.textContent=person.job;
 info.textContent=person.info;
 autor.textContent=person.autor;
 img.src=person.img
}






