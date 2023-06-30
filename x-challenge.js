var minutes = 0
var seconds = 0

$('#startButton').click(function() {
 chrono()
})

function timesynthax(value) {

    if (value< 10){
        return "0" +value
        } else {

            return value.toString()
    }
}
    
        
      
var chronointerv

    function chrono() {
        chronointerv =setInterval(function() {
        seconds++
        if (seconds=== 60) {
          minutes++
          seconds= 0
        }
  
        var minsynthax =timesynthax(minutes)
        var secondssynthaw =timesynthax(seconds)
  
        $('#timer').text(minsynthax + ":" + secondssynthaw)
      }, 80)
    }
  
    function stopTimer(){
      clearInterval(chronointerv)
    }
  
    
  
    $('#stopButton').click(function(){
      stopTimer()
      displayReward(minutes)
      minutes=0
      seconds=0
    })
  
    


    function displayReward(minutes) {
      var reward = 0
  
      if (minutes <= 1) {
        reward = 40;
      } else if (minutes <= 2) {
        reward = 20;
      } else {
        
        reward = 10;
      }
      
      localStorage.setItem('reward',reward)

  
      $('#reward').text('Congratulations! You completed the challenge in ' + minutes +':'+seconds +'  Your reward: $' + reward)
    }
  
        
