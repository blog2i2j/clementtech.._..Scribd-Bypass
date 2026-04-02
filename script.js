const form = document.getElementById("form");

const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const scribd_link = document.getElementById("scribd_link").value.trim();

  const scribd_splitted_link = scribd_link.split("/")[4];

  output.textContent = `https://www.scribd.com/embeds/${scribd_splitted_link}/content?start_page=1&view_mode=scroll`;
});
