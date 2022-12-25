if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(sucess)
}
else{
    console.log("nnaaa")
}

function sucess(position){
    
    console.log(position)
}




    //media test
    navigator.mediaDevices.getUserMedia({
        
        video: true
    })
    console.log(navigator)
    
    async function getMedia(constraints) {
  let stream = null;

  try {
      
      console.log(navigator)
      
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
    console.log("king of kings")
  } catch (err) {
    /* handle the error */
    
    console.log("wala")
  }
}

    