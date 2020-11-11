//All the variables 
var startButton = document.getElementById("startbutton")


//hiding all questions

document.getElementById("page2").style.display = "none"
document.getElementById("page3").style.display = "none"
document.getElementById("page4").style.display = "none"
document.getElementById("page5").style.display = "none"
document.getElementById("page6").style.display = "none"




//functions





function timer(event){

    
        var $page1 = document.getElementById("page1").style
        var $page2 = document.getElementById("page2").style
        var $page3 = document.getElementById("page3").style
        var $page4 = document.getElementById("page4").style
        var $page5 = document.getElementById("page5").style
        var $page6 = document.getElementById("page6").style
        var $highScore = document.getElementById("highscore").innerHTML
        localStorage.setItem("currentScore",$highScore)

     
        var $timeLeft = document.getElementById("timeleft")


        if(event.target.getAttribute("id")==="startbutton"){

            $page2.display = "block"
            $page1.display = "none"

            var $interval = setInterval(function(){

                var currentTime=eval($timeLeft.innerHTML)
                currentTime--
                localStorage.setItem("currentTime",currentTime)
                $timeLeft.innerHTML = localStorage.getItem("currentTime")
                
                
               
    
                if(currentTime===0){
                    clearInterval($interval)

                    $page6.display = "block"
                    $page2.display = "none"
                    $page3.display = "none"
                    $page4.display = "none"
                    $page5.display = "none"
                    
                    document.getElementById("finalScore").innerHTML = 0



                }
                
    
                
                
    
            },1000)
        }
        
          else if (event.target.getAttribute("id")==="answer2"){

            $page2.display = "none"
            $page3.display = "block"
            
            var $currentScore = JSON.parse(localStorage.getItem("currentScore"))

            $currentScore++

            localStorage.setItem("currentScore",$currentScore)

            document.getElementById("highscore").innerHTML = $currentScore


            


        }

         else if (event.target.getAttribute("id")==="answer3"){

             $page4.display = "block"
             $page3.display = "none"

             var $currentScore = JSON.parse(localStorage.getItem("currentScore"))

             $currentScore++
 
             localStorage.setItem("currentScore",$currentScore)
 
             document.getElementById("highscore").innerHTML = $currentScore

         }

         else if (event.target.getAttribute("id")==="answer4"){

            $page5.display = "block"
            $page4.display = "none"

            var $currentScore = JSON.parse(localStorage.getItem("currentScore"))

            $currentScore++

            localStorage.setItem("currentScore",$currentScore)

            document.getElementById("highscore").innerHTML = $currentScore
         }

          else if (event.target.getAttribute("id")==="answer5"){
            console.log("Button 5 is working")
            
            $page6.display = "block"
            $page5.display = "none"

            var $currentScore = JSON.parse(localStorage.getItem("currentScore"))

            $currentScore++

            localStorage.setItem("currentScore",$currentScore)

            document.getElementById("highscore").innerHTML = $currentScore

            document.getElementById("finalScore").innerHTML = $currentScore


         }

         else if (event.target.getAttribute("id")==="instructions-p"){

            var currentTime=eval($timeLeft.innerHTML)
            currentTime= currentTime -10
            localStorage.setItem("currentTime",currentTime)
            $timeLeft.innerHTML = localStorage.getItem("currentTime")
            alert("Your got the questions wrong! The time is reduced by 10 seconds!")
           

        
        }

        else if (event.target.getAttribute("id")==="exampleInputEmail1"){
            event.target.preventDefault()
            
        }

        

        

}








//Code
document.addEventListener("click",timer)