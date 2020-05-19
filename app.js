const countryClass = new Corona;
const ui = new UI;

countryClass.getVirus()
.then(data => {
   ui.getText(data);
})


document.getElementById('dbl').addEventListener('mouseover', linkIn);

function linkIn (){
  document.getElementById('dbl').innerHTML = 'https://api.covid19api.com/summary';

}
document.getElementById('dbl').addEventListener('mouseout', linkOut);

function linkOut(){
  document.getElementById('dbl').innerHTML = 'Data taken from Covid-19 rest API';
}
