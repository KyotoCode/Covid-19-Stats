class UI{
  getText(info){
    console.log(info.Countries[147]);
    let out = `<div>Country: ${info.Countries[147].Country}</div>
    <br>
    <div>Date: ${info.Countries[147].Date}</div>
    <div>New Confirmed: ${info.Countries[147].NewConfirmed}</div>
    <div>New Deaths: ${info.Countries[147].NewDeaths}</div>
    <div>New Recovered: ${info.Countries[147].NewRecovered}</div>
    <div>Total Confirmed: ${info.Countries[147].TotalConfirmed}</div>
    <div>Total Recovered: ${info.Countries[147].TotalRecovered}</div>
    <div>Total Deaths: ${info.Countries[147].TotalDeaths}</div>
    `;
    document.getElementById('x').innerHTML = out;
  }
}