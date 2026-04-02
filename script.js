const form = document.getElementById("form");

const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const scribd_link = document.getElementById("scribd_link").value.trim();

    output.textContent = `https://www.scribd.com/embeds/${scribd_link}/content?start_page=1&view_mode=scroll`;
});