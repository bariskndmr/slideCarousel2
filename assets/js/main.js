function carouselData() { 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "./carousel-data.json", true);
    xhttp.send();
}