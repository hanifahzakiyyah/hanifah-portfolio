const porto = document.getElementById("porto")
const portoDetail = document.getElementById("portoDetail")
const info = document.getElementById("info")

const elemenPorto = [
    {
      filter : "Website",
      file : "urfah.webp",
      files : "https://myplatform.vip/urfah/",
      judul: "Urfah Website",
      subJudul: "you can open 3d world here by double clicking on the object you want",
      tanggal: "oktober, 2024",
      deskripsi: ""
    },
    {
      filter : "Furniture",
      file : "armchair.webp",
      files : [
          "armchair.webp",
          "armchair1.webp",
          "armchair2.webp",
          "armchair3.webp"
      ],
      judul: "Armchair in Luxury Scene",
      subJudul: "Modeled and Textured in Blender",
      tanggal: "oktober, 2024",
      deskripsi: "Modeled and textured in blender 3d. I made this one while i am doing interior project. Due to client rights, I cannot display the entire work, so I render each piece of furniture individually."
    },
    {
      filter : "Furniture",
      file : "tree-house.webp",
      files : [
          "tree-house.webp",
          "tree-house1.webp",
          "tree-house2.webp",
          "tree-house3.webp"
      ],
      judul: "Tree-house in the forest",
      subJudul: "Modeled and Textured in Blender",
      tanggal: "oktober, 2024",
      deskripsi: "the tree-house in the forest. i wanna sleep there peacefully. i wanna go there now. who wanna follow me? hahaha."
    },
    {
      filter : "Furniture",
      file : "sofa.webp",
      files : [
          "sofa.webp",
          "sofa1.webp",
          "sofa2.webp",
          "sofa3.webp"
      ],
      judul: "Little Yellow Sofa",
      subJudul: "Modeled and Textured in Blender",
      tanggal: "oktober, 2024",
      deskripsi: "Modeled and textured in blender 3d. I made this one while i am doing interior project. Due to client rights, I cannot display the entire work, so I render each piece of furniture individually."
    },
    {
      filter : "Furniture",
      file : "woodarmchair.webp",
      files : [
          "woodarmchair.webp",
          "woodarmchair1.webp",
          "woodarmchair2.webp",
          "woodarmchair3.webp"
      ],
      judul: "Wooden Armchair",
      subJudul: "Modeled and Textured in Blender",
      tanggal: "oktober, 2024",
      deskripsi: "Modeled and textured in blender 3d. I made this one while i am doing interior project. Due to client rights, I cannot display the entire work, so I render each piece of furniture individually."
    },
    {
        filter : "Furniture",
        file : "anyam.webp",
        files : [
            "anyam.webp",
            "anyamWire.webp",
            "anyamWire2.webp",
            "anyamWire3.webp"
        ],
        judul: "Woven Armchair in Outdoor Scene",
        subJudul: "Modeled and Textured in Blender",
        tanggal: "oktober, 2024",
        deskripsi: "Modeled and textured in blender 3d. I made this one while i am doing interior project. Due to client rights, I cannot display the entire work, so I render each piece of furniture individually."
    },
    {
        filter : "Furniture",
        file : "kasur.webp",
        files : [
            "kasur.webp",
            "kasurWire.webp",
            "kasurWire2.webp"
        ],
        judul: "Bedcover and Pillows",
        subJudul: "Modeled and Textured in Blender",
        tanggal: "Oktober 2024",
        deskripsi: "Modeled and textured in blender 3d. I made this one while i am doing mockup project. Due to client rights, I cannot display the entire work, so I render each piece of furniture individually."
    },
    {
        filter : "Website",
        file : "web-lebaran.webp",
        files : "lebaran/index.html",
        judul: "Eid el-Fithr Mubarok",
        subJudul: "scroll and drag mouse to interact with this website. press the link to go to the website!",
        tanggal: "",
        deskripsi: ""
    },
    {
        filter : "Website",
        file : "dirgahayu.webp",
        files : "dirgahayu/index.html",
        judul: "Dirgahayu Indonesia",
        subJudul: "you can turn the phone on by clicking white button. go to website and try it!",
        tanggal: "",
        deskripsi: ""
    },
    {
        filter : "App",
        file : "tasrif.webp",
        files : "shorf",
        judul: "Shorf - verbs in arabic",
        subJudul: "you can enter the word, and the app will transform it to everything in shorf",
        tanggal: "",
        deskripsi: ""
    },
    {
        filter : "Website",
        file : "link.webp",
        files : "linkScroll/index.html",
        judul: "campaign of linktree in 3d",
        subJudul: "if you open the website in PC you just have to scroll it and enjoy.",
        tanggal: "",
        deskripsi: ""
    },
    
]

const filter = []
const file = []
const files = []
const judul = []
const subJudul = []
const desk =[]
const tanggal = []
var countFile =  file.length

for (var i = 0; i < elemenPorto.length; i++) {
    filter.push(elemenPorto[i].filter);
    file.push(elemenPorto[i].file);
    files.push(elemenPorto[i].files);
    judul.push(elemenPorto[i].judul);
    subJudul.push(elemenPorto[i].subJudul);
    desk.push(elemenPorto[i].deskripsi);
    tanggal.push(elemenPorto[i].tanggal);
}


if (porto) {
    for (var i = 0; i< elemenPorto.length; i++){
            porto.innerHTML += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 portfolio-item ${filter[i]}">
              <div class="portfolio-wrap">
                <img src="assets/img/portfolio/${file[i]}" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>${judul[i]}</h4>
                  <p>${subJudul[i]}</p>
                  <div class="portfolio-links">
                    <a href="assets/img/portfolio/${file[i]}" data-gallery="portfolioGallery" class="portfokio-lightbox" title="${subJudul[i]} <br> click to go to: <a href='${ (Array.isArray (elemenPorto[i].files) ) ? "portfolio-details.html?objek=" + i : files[i] }' target='_blank'>${ (Array.isArray(elemenPorto[i].files)) ? "Details" : "Website" }</a> ">Zoom In</a>
                    <a href="${ (Array.isArray(elemenPorto[i].files)) ? "portfolio-details.html?objek=" + i : files[i] }" ${ (Array.isArray(elemenPorto[i].files)) ? "" : "target='_blank'" }" title="More Details">${ (Array.isArray(elemenPorto[i].files)) ? "Details" : "Website" }</a>
                  </div>
                </div>
              </div>
            </div>
            `;
       
    }
}



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const noObjek = Number(urlParams.get("objek"))



if(portoDetail) {
    for (var i=0; i< elemenPorto[noObjek].files.length ; i++) {
        portoDetail.innerHTML += `
            <div class="swiper-slide">
                <img class="img-fluid" src="assets/img/portfolio/${elemenPorto[noObjek].files[i]}" alt="">
            </div>
        `
    }
    info.innerHTML += `<div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: ${elemenPorto[noObjek].filter}</li>
                <li><strong>Project date</strong>: ${elemenPorto[noObjek].tanggal}</li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h3>${elemenPorto[noObjek].judul}</h3>
              <p>${elemenPorto[noObjek].deskripsi}</p>
            </div>
          </div>
    `
}