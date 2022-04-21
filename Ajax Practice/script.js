function fetchbuttonclick(){
    var xhrrequest = new XMLHttpRequest();
    xhrrequest.onload=function (){
        console.log(xhrrequest.response);
        var JSONresponse = JSON.parse(xhrrequest.response);
        var image1=JSONresponse.message;
        $("#dog-image").attr('src',image1);
    };
    xhrrequest.onerror=function(){
        console.log("Error");
    };
    xhrrequest.open("get","https://dog.ceo/api/breeds/image/random",true);
    xhrrequest.send();
}
$("#fetchbutton").click(fetchbuttonclick);
