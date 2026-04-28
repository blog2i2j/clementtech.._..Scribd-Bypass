const form = document.getElementById("form");

const output = document.getElementById("output");

const outputLink = document.getElementById("outputLink");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const scribd_link = document.getElementById("scribd_link").value.trim();

  const scribd_splitted_link = scribd_link.split("/")[4];

  const link_ready = `https://www.scribd.com/embeds/${scribd_splitted_link}/content?start_page=1&view_mode=scroll`;

  output.textContent = link_ready;

  outputLink.href = link_ready;
});
