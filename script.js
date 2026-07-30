/* =====================================
   Love Website Script
   Scene 1 تا Scene 6
===================================== */


document.addEventListener("DOMContentLoaded", function () {



    /* =========================
       گرفتن عناصر
    ========================= */


    const scenes = document.querySelectorAll(".scene");


    const startBtn = document.getElementById("startBtn");

    const bgMusic = document.getElementById("bgMusic");


    const dateBtn = document.getElementById("dateBtn");

    const noBtn = document.getElementById("noBtn");

 /* =========================
       پخش خودکار آهنگ
       آهنگ در تمام Sceneها ادامه دارد
    ========================= */

    function playMusic(){

        if(bgMusic){

            bgMusic.volume = 0.5;

            bgMusic.play()
            .then(function(){

                console.log("موزیک پخش شد");

            })
            .catch(function(error){

                console.log(
                    "پخش خودکار توسط مرورگر مسدود شد:",
                    error
                );

            });

        }

    }
document.addEventListener("touchstart", playMusic, { once: true });
document.addEventListener("click", playMusic, { once: true });

// فقط در دسکتاپ تلاش برای پخش خودکار
if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    playMusic();
}

    console.log("دکمه آماده است");


    if(startBtn){

        startBtn.addEventListener("click", function(){

            console.log("کلیک روی شروع انجام شد");

        });

    }


    let currentScene = 1;

    let timer = null;




    /* =========================
       تغییر صفحه
    ========================= */


    function goToScene(number){


        clearTimeout(timer);



        scenes.forEach(function(scene){

            scene.classList.remove("active");

        });



        const nextScene = document.getElementById(
            "scene" + number
        );



    if(nextScene){


    nextScene.classList.add("active");


    console.log("رفتم به Scene:", number);


    currentScene = number;


}


    }




/* =========================
   دکمه شروع
   Scene 1 -> Scene 2
========================= */

if(startBtn){

    startBtn.onclick = function(){

        console.log("شروع شد");

             playMusic();

        goToScene(2);


        console.log("رفتم به Scene 2");


        startTimer(2);


    };

}


    /* =========================
       رفتن خودکار صفحات
    ========================= */


    function startTimer(sceneNumber){



        timer = setTimeout(function(){



            if(currentScene === sceneNumber){



                if(sceneNumber < 5){


                    goToScene(sceneNumber + 1);


                    startTimer(sceneNumber + 1);


                }



            }



        },12000);



    }







    /* =========================
       لمس Scene 2
    ========================= */


   const nextBtn2 = document.getElementById("nextBtn2");


if(nextBtn2){

    nextBtn2.onclick = function(e){

        e.stopPropagation();

        goToScene(3);

        startTimer(3);

    };

}






    /* =========================
       لمس Scene 3
    ========================= */


    const scene3 = document.getElementById("scene3");


    if(scene3){


        scene3.onclick = function(){


            goToScene(4);


            startTimer(4);


        };


    }






    /* =========================
       لمس Scene 4
    ========================= */


    const scene4 = document.getElementById("scene4");


    if(scene4){


        scene4.onclick = function(){


            goToScene(5);


        };


    }






    /* =========================
       دکمه قبول Scene 5
    ========================= */


    if(dateBtn){


        dateBtn.onclick = function(){


            goToScene(6);


        };


    }






    /* =========================
       دکمه نه
    ========================= */


    if(noBtn){


        noBtn.onclick = function(){


            noBtn.innerHTML =
            "هر وقت آماده بودی ❤️";


        };


    }





    /* =========================
       کلید کیبورد تست
    ========================= */


    document.onkeydown = function(e){


        if(e.key === "ArrowRight"){


            if(currentScene < 6){


                goToScene(currentScene + 1);


            }


        }


    };

console.log("Love Script Loaded");
// =========================
// باران قلب Scene1
// =========================

function createHeartRain(){

    const scene1 = document.getElementById("scene1");

    if(!scene1) return;


    setInterval(function(){


        const heart = document.createElement("span");

        heart.className = "heart";


        heart.innerHTML = "❤️";


        heart.style.left = Math.random() * 100 + "%";


        heart.style.fontSize =
        (15 + Math.random() * 30) + "px";


        heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";


        scene1.appendChild(heart);



        setTimeout(function(){

            heart.remove();

        },9000);



    },400);

}



createHeartRain();
// باران قلب صفحه اول

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart-rain";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.animationDuration=
    (3 + Math.random()*5)+"s";


    heart.style.fontSize=
    (15 + Math.random()*25)+"px";


    document.getElementById("heartContainer")
    .appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },8000);

}



setInterval(createHeart,400);

});
