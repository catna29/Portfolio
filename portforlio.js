
//Nav bar Change by page section //
// - can't fix when change screen site //
// - can use link with section //
// - can use media@ change pixel // 


/*
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav .nav-bar ul li a');


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top < offset + height ){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav .nav-bar ul li a [ href='+id+']').classList.add('active');
            });
        };
    });
};


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop = 500 ) {
    document.getElementById("about").className = "active";
  } else {
    document.getElementById("about").className = "";
  }
}



window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 0 ){
    document.getElementById("home").className = "active"; 
  }

  if (document.documentElement.scrollTop > 700 ) {
    document.getElementById("about").className = "active"; 
    document.getElementById("home").classList.remove('active');
  } else {
    document.getElementById("about").className = "";
  }

  if (document.documentElement.scrollTop > 700*2 ) {
    document.getElementById("skills").className = "active";
    document.getElementById("about").classList.remove('active');
  } else {
    document.getElementById("skills").className = "";
  }

  if (document.documentElement.scrollTop > 700*3 ) {
    document.getElementById("product").className = "active";
    document.getElementById("skills").classList.remove('active');
  } else {
    document.getElementById("product").className = "";
  }
}




let id_Lists = ["home", "about", "skills", "product"]
let id_List = id_Lists.forEach( (id) => { document.getElementById("id")});



//this is you can do by length hight 
window.onscroll = function() {myFunction()};

function myFunction() {

  let id_List = ["home", "about", "skills", "product"]

  
  for (let i = 0; i < id_List.length ; i++) {
    let scroll = document.documentElement.scrollTop
    console.log(scroll)
    if ( scroll  >= 700*i && scroll < 700*(i + 1)) {
      document.getElementById(id_List[i]).className = "active";
    } else {
      document.getElementById(id_List[i]).className = "";
    }
  }
}

*/
