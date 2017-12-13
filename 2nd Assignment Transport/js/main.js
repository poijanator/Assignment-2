
    $(function() {

        var transport = null;
        

        var daysValue = document.getElementsByName("inlineRadioOptions").value,
            peoplesValue = document.getElementsByName("inlineRadioPeople").value;


function init(){


function getHTMLVehicleItem(vehicle){
return `<<td>
            <div data-id="" class="video-list--item">
            <div><h4>${transport.vehicle}</h4>
            <p>dfdfdfd</p>
            </div> </div>
        </td>`
    }
    
}

function createVehicleArray(){
var motorbike = [];
$.getJSON('json/transport.json', function (data){
motorbike = data.motorbike
});

}




    });