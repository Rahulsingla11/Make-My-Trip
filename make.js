let hidenav = document.getElementById("hidenav")
window.onscroll = () => {
    if (document.documentElement.scrollTop > 130) {
        hidenav.style.display = "flex"
    }
    if (document.documentElement.scrollTop < 130) {
        hidenav.style.display = "none"
    }
}

let fun = (y) => {
    if (y == 0) {
        let filtername = document.getElementById("search").value.toUpperCase();
        let tr = document.getElementsByClassName("tr");
        for (var i = 0; i < tr.length; i++) {
            let th = tr[i].getElementsByTagName('th')[0];
            if (th) {
                let textvalue = th.innerHTML;
                if (textvalue.toUpperCase().indexOf(filtername) > -1) {
                    tr[i].style.display = "block";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    else if (y == 1) {
        let filtername1 = document.getElementById("search1").value.toUpperCase();
        let tr1 = document.getElementsByClassName("tr1");
        for (var j = 0; j < tr1.length; j++) {
            let th1 = tr1[j].getElementsByTagName('th')[0];
            if (th1) {
                let textvalue1 = th1.innerHTML;
                if (textvalue1.toUpperCase().indexOf(filtername1) > -1) {
                    tr1[j].style.display = "block";
                } else {
                    tr1[j].style.display = "none";
                }
            }
        }
    }
}

let ttr = document.querySelectorAll(".tr")
ttr.forEach((ttr1, index) => {
    ttr1.addEventListener("click", () => {
        let tableh5 = document.getElementsByClassName("table-h5")
        let tableh6 = document.getElementsByClassName("table-h6")
        document.getElementById("city1").value = tableh5[index].innerHTML
        document.getElementById("re").innerHTML = tableh6[index].innerHTML
        document.getElementById("table-search").style.display = "none"
    })
})

let flight = document.getElementById("tocity1")
flight.addEventListener("click", () => {
    document.getElementById("table-search").style.display = "block"
})
let fliclose = document.getElementById("search-close")
fliclose.addEventListener("click", () => {
    document.getElementById("table-search").style.display = "none"
})



let ttr2 = document.querySelectorAll(".tr1")
ttr2.forEach((ttr2, index) => {
    ttr2.addEventListener("click", () => {
        let tableh15 = document.getElementsByClassName("table-h5")
        let tableh16 = document.getElementsByClassName("table-h6")
        document.getElementById("city2").value = tableh15[index].innerHTML
        document.getElementById("re1").innerHTML = tableh16[index].innerHTML
        document.getElementById("table-search1").style.display = "none"
    })
})

let flight1 = document.getElementById("tocity2")
flight1.addEventListener("click", () => {
    document.getElementById("table-search1").style.display = "block"
})
let fliclose2 = document.getElementById("search-close1")
fliclose2.addEventListener("click", () => {
    document.getElementById("table-search1").style.display = "none"
})

$(document).ready(function () {
    $("#change-btn").click(function () {
        a = $("#city1").val();
        $("#city1").val($("#city2").val());
        $("#city2").val(a);

        a1 = $("#re").html();
        a2 = $("#re1").html();
        $("#re").html(a2)
        $("#re1").html(a1)
    });
});

window.onload = function () {
    let curdate = document.getElementById("city211")
    let curdate1 = document.getElementById("city21")
    let date = new Date
    let fuldate = date.getDate();
    let fuldate1 = date.getMonth() + 1;
    let fuldate2 = date.getFullYear();
    let finaldate = fuldate2 + "-" + fuldate1 + "-" + fuldate
    curdate.value = finaldate
    curdate1.value = finaldate
    curdate.min = finaldate
    curdate1.min = finaldate
    
    let date1=document.getElementById("city211").value
    var a = new Date(date1);
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var r = weekdays[a.getDay()];
    document.getElementById("date-p").innerHTML=r
    document.getElementById("date-p1").innerHTML=r
}
let fun2=()=>{
    let date2=document.getElementById("city211").value
    let date23=document.getElementById("city21").value
    var v = new Date(date2);
    var v1 = new Date(date23);
    var weekdays1 = new Array(7);
    weekdays1[0] = "Sunday";
    weekdays1[1] = "Monday";
    weekdays1[2] = "Tuesday";
    weekdays1[3] = "Wednesday";
    weekdays1[4] = "Thursday";
    weekdays1[5] = "Friday";
    weekdays1[6] = "Saturday";
    var i = weekdays1[v.getDay()];
    var i1 = weekdays1[v1.getDay()];
    document.getElementById("date-p").innerHTML=i
    document.getElementById("date-p1").innerHTML=i1
}

    let returnclose=document.getElementById("date-close")
    returnclose.addEventListener("click",()=>{
        let date24=document.getElementById("city21")
        let date28=document.getElementById("date-p1")
       date24.value=""
       
       date28.innerHTML=""
    })

let fun3=(x1)=>{
if(x1==2){
    document.querySelector(".first-1-2").style.height="420px"
    document.querySelector(".first-part-img").style.height="100vh"
    document.querySelector(".first-1-2-21").style.display="flex"
}
if(x1==0){
    document.querySelector(".first-1-2").style.height="310px"
    document.querySelector(".first-part-img").style.height="90vh"
    document.querySelector(".first-1-2-21").style.display="none"
}
if(x1==1){
    document.querySelector(".first-1-2").style.height="310px"
    document.querySelector(".first-part-img").style.height="90vh"
    document.querySelector(".first-1-2-21").style.display="none"
}
}


// log page 
const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

		signUpButton.addEventListener('click', () => {
			container.classList.add("right-panel-active");
		});

		signInButton.addEventListener('click', () => {
			container.classList.remove("right-panel-active");
		});


let travelbtn=document.getElementById("travelbtn")
travelbtn.addEventListener('click',()=>{
    document.querySelector(".traval-seaction").style.display="block"
})
let travelclose=document.getElementById("travelclose")
travelclose.addEventListener('click',()=>{
    document.querySelector(".traval-seaction").style.display="none"
})



let slider = document.querySelectorAll(".second-img-1");
let count = 0;
slider.forEach((ele, index) => {
    ele.style.left= (index*100)+"%"
})
let next = document.querySelector("#next")
next.addEventListener("click", () => {
    count++;
    if (count ==slider.length/2-2) {
        count = 0
    }
    trans()
})

let pre = document.querySelector("#pre");
pre.addEventListener("click", () => {
    count--;
    if (count ==-1) {
        count = slider.length/2-3
    }
    trans()
})
let trans = () => {
    slider.forEach((ele) => {
        ele.style.transform = "translatex("+count*-200+"%)";
    })
}




let slider1 = document.querySelectorAll(".three-1-1");
let count1 = 0;
slider1.forEach((ele1, index) => {
    ele1.style.left= (index*100)+"%"
})
let next1 = document.querySelector("#next11")
next1.addEventListener("click", () => {
    count1++;
    if (count1 ==slider1.length-2) {
        count1 = 0
    }
    trans1()
})

let pre1 = document.querySelector("#pre11");
pre1.addEventListener("click", () => {
    count1--;
    if (count1 ==-1) {
        count1 = slider1.length-3
    }
    trans1()
})
let trans1 = () => {
    slider1.forEach((ele1) => {
        ele1.style.transform = "translatex("+count1*-100+"%)";
    })
}


let slider11 = document.querySelectorAll(".fifth-1-2-1");
let count11 = 0;
slider11.forEach((ele11, index) => {
    ele11.style.left= (index*100)+"%"
})
let next11 = document.querySelector("#next12")
next11.addEventListener("click", () => {
    count11++;
    if (count11 ==slider11.length -4) {
        count11 = 0
    }
    trans11()
})

let pre11 = document.querySelector("#pre12");
pre11.addEventListener("click", () => {
    count11--;
    if (count11 ==-1) {
        count11 = slider11.length -5
    }
    trans11()
})
let trans11 = () => {
    slider11.forEach((ele11) => {
        ele11.style.transform = "translatex("+count11*-100+"%)";
    })
}



let slider111 = document.querySelectorAll(".fifth-1-2-11");
let count111 = 0;
slider111.forEach((ele111, index) => {
    ele111.style.left= (index*100)+"%"
})
let next111 = document.querySelector("#next111")
next111.addEventListener("click", () => {
    count111++;
    if (count111 ==slider111.length -4) {
        count111 = 0
    }
    trans111()
})

let pre111 = document.querySelector("#pre111");
pre111.addEventListener("click", () => {
    count111--;
    if (count111 ==-1) {
        count111 = slider111.length -5
    }
    trans111()
})
let trans111 = () => {
    slider111.forEach((ele111) => {
        ele111.style.transform = "translatex("+count111*-100+"%)";
    })
}

function imghide(x5){
    $(".all").hide();
    $("."+x5).show();
}