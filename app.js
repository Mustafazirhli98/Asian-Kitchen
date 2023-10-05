const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://takestwoeggs.com/wp-content/uploads/2022/02/Dan-Dan-Noodles-Dan-Dan-Mian-5overhead-sq.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


// Buttonların oluşturulduğu alan başlangıcı
let buttonArea = document.querySelector(".btn-container")


let buttonAll = document.createElement("button")
buttonAll.innerHTML = "All";
let buttonKorea = document.createElement("button")
buttonKorea.innerHTML = "Korea";
let buttonJapan = document.createElement("button")
buttonJapan.innerHTML = "Japan";
let buttonChina = document.createElement("button")
buttonChina.innerHTML = "China"

let buttons = [buttonAll, buttonKorea, buttonJapan, buttonChina]


buttons.map((button) => {
  buttonArea.append(button);
  button.classList.add("btn", "btn-item", "border-dark");
})

// Buttonların oluşturulduğu alan bitiş

// Cardların oluşturulduğu kısım başlangıç
let menuItems = document.querySelector(".section-center");
//filtered menu oluşturulunca 2 adet menu oluşacağı için fonksiyonu products parametresi ile başlattık. 2 ayrı menu ile çalıştırabilmek için.
const addProduct = (products) => {
  menuItems.innerHTML = products.map((product) => {
    return `
        <div class="menu-items col-lg-6 col-sm-12">
         <img class="photo" src=${product.img} />
         <div class="menu-info">
            <div class="menu-title">  
              <h4>${product.title}</h4>
             <h4>${product.price}</h4>
            </div> 
            <p class="menu-text">${product.desc}</p>
         </div>
        </div>    `
  }).join("")
}
// Cardların oluşturulduğu kısım bitiş


//filtre kısmı başlanguç

buttons.forEach(button =>
  button.addEventListener("click", () => {


    //buttonun rengini değiştirmek için olan fonksiyon başlangıç

    buttons.forEach(button => {
      button.classList.remove("bg-dark", "text-light")
    })
    button.classList.add("bg-dark", "text-light")



    //buttonun rengini değiştirmek için olan fonksiyon bitiş

    let category = button.innerHTML
    let filteredMenu = category === "All" ? menu : menu.filter(product => product.category === category)

    addProduct(filteredMenu)
  })

)
  
// filtre kısmı bitiş
addProduct(menu);

