function showlocation(){
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(showPosition);
        
       }else{
           alert("Not Support geolocation !");
       }
    function showPosition(Position){
        alert("Latitude  "+Position.coords.latitude+"  logitude "+Position.coords.longitude);
    }
    
}