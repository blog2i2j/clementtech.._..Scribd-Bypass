const scribd_link = "";

const scribd_splitted_link = scribd_link.split("/");

const document_id = scribd_splitted_link[4];

const bypassed_link = `https://www.scribd.com/embeds/${document_id}/content?start_page=1&view_mode=scroll`;

console.log(bypassed_link);