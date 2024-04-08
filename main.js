let input = document.querySelector('#search-id');
let form = document.querySelector('form');
let cardArea = document.querySelector('main');

function callApi() {
    let ip = input.value;
    let url = `https://ipwho.is/${ip}`;
    fetch(url)
    .then(resp => resp.json())
    .then(resp => cardRender(resp));
}

function cardRender(resp) {
    cardArea.innerHTML = '';
    let { ip, type, continent, country, region, city, latitude, longitude, borders, flag, connection, timezone, success } = resp;
    if (success !== false) {
        cardArea.innerHTML = 
        `
        <div class="ip-info-card">
            <div class="header1">
                <h3>IP Info</h3>
            </div>
            <p>IP:${ip} IP-Type:${type}</p>
            <div class="header2">
                <h3>Country Info</h3>
            </div>
            <p>Continent:${continent} Country:${country}</p>
            <p>Region:${region} City:${city}</p>
            <p>Coordinates: ${latitude}  ${longitude} </p>
            <p>Country Borders:${borders}</p>
            <img src="${flag.img}" alt="Flag">
            <div class="header3">
                <h3>IPS Info</h3>
            </div>
            <p>Organization:${connection.org}</p>
            <p>ISP Name:${connection.isp}</p>
            <p>Web Site: <a href="http://${connection.domain}" target="_blank" >${connection.domain}</a></p>
            <div class="header4">
                <h3>Time Zone</h3>
            </div>
            <div class="time-zone">
                <p>${timezone.id}</p>
                <p>${timezone.abbr}</p>
            </div>
            <p>${timezone.current_time}</p>
        </div>
        `;
    } else {
        alert('IP Address is incorrect!!!'); 
    };
};

form.addEventListener('submit', function (def){
    def.preventDefault();
    callApi();
});

callApi();