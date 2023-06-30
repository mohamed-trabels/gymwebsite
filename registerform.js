function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i) 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key) 
          } 
    } 
} 
$('#btnlogin').click(function(e){
    e.preventDefault()
    var username=$("#username1").val()
    var password=$("#password1").val()

    localStorage.setItem('username',username)
    localStorage.setItem('password',password)

    if (username !==''&&password !=='') {
    
        var accessCode = thecode(username, password)
           
          $('.output').css('display', 'block')
          $('#error_msg').text('Access code: ' + accessCode)
    } else {
              $('#error_msg').text('Please enter both username and password')
            }

})
function thecode(username,password){
    var t=username+password
    var f=''
    each(t,function(element,i){
        if(i%2===0){
         f+=t[i]  
        }
        

    })
    return f

}

// start button
$('#ok').click(function() {
    window.location.href ='page1.html'
  })
