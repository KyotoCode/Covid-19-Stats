const countryClass = new Corona;
const ui = new UI;

countryClass.getVirus()
.then(data => {
   ui.getText(data);
})


document.getElementById('dbl').addEventListener('mouseover', linkFun);

function linkFun (){
  document.getElementById('dbl').innerHTML = 'https://api.covid19api.com/summary';

}
document.getElementById('dbl').addEventListener('mouseout', linkFuny);

function linkFuny(){
  document.getElementById('dbl').innerHTML = 'Data taken from Covid-19 rest API';
}
