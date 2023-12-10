

const mainFunction = async () => {
    
  let collect = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`);
  let data = await collect.json();
  // console.log(data);
  return data;
};


const display = async () => {
  let data = await mainFunction();
  console.log(data);
  append(data)
};
display();

const append = async (data)=>{
  document.querySelector("#container").innerHTML = ""
    console.log(data)

    
    data?.forEach((el,i)=>{
        
let box = document.createElement("div")
box.setAttribute("class","card g-4 mb-2 col-lg-4 col-md-6 col-sm-12 text-white bg-dark main")
// 
let hd = document.createElement("div")
hd.setAttribute("class","card-header")
hd.innerText = el.nome

// let cb = document.createElement("div")
// cb.setAttribute("class","card-body")



// let h5 = document.createElement("h5");
// h5.setAttribute(
//   "class",
//   "card-title align-items-start justify-content-center"
// );
// h5.textContent ="QUOTES >"+" "+ el.q ;


// let p = document.createElement("p");
// cb.setAttribute("class","card-text")
// p.textContent = el.h;


box.append(hd)
// cb.append(h5,p)
document.querySelector("#container").append(box)

    });
}