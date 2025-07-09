const getradius = document.getElementById("radius");
const getvolume = document.getElementById("volume");
const radius = parseFloat(getradius.value);
const volume = parseFloat(getvolume.value);

if(radius){
    volume.value = (4/3) * Math.PI * Math.pow(radius, 3);
    getvolume.value = volume.toFixed(2);
}else{
    getvolume.value = "please enter a valid radius";
}