
    $(function() {

        var transport = null;
        

        var daysValue = document.getElementById("daysRadio").value,
            peoplesValue = document.getElementById("peopleRadio").value;


function init(){
//get vehicle name from JSON file
$.getJSON('json/transport.json', function (data) {
    vehicle = data.vehicle;
    displayVehicl(vehicle);
});

//get vehicle name from JSON file
$.getJSON('json/transport.json', function (data) {
    vehicleDays = data.days;
});

function getHTMLVehicleItem(vehicle){
return `<<td>
            <div data-id="" class="video-list--item">
            <div><h4>${transport.vehicle}</h4>
            <p>dfdfdfd</p>
            </div> </div>
        </td>`
}
    }

function (){
$.getJSON('json/transport.json', functio (data){

});

}





    });