const form = document.getElementById("form");
const output = document.getElementById("output");
const outputLink = document.getElementById("outputLink");
const outputSection = document.getElementById("outputSection");
const copyBtn = document.getElementById("copyBtn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const scribd_link = document.getElementById("scribd_link").value.trim();
  const scribd_splitted_link = scribd_link.split("/")[4];
  const link_ready = `https://www.scribd.com/embeds/${scribd_splitted_link}/content?start_page=1&view_mode=scroll`;

  output.textContent = link_ready;
  outputLink.href = link_ready;
  outputSection.style.display = "block";

  // Scroll to output
  setTimeout(() => {
    outputSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 100);
});

// Copy button functionality
copyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  const linkText = output.textContent;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(linkText)
      .then(() => {
        showCopyToast("✓ Link copied to clipboard!");
        // Visual feedback on button
        const originalContent = copyBtn.innerHTML;
        copyBtn.innerHTML = "✓ Copied!";
        copyBtn.style.background = "var(--success)";

        setTimeout(() => {
          copyBtn.innerHTML = originalContent;
          copyBtn.style.background = "";
        }, 2000);
      })
      .catch(() => {
        showCopyToast("❌ Failed to copy link", true);
      });
  } else {
    // Fallback for older browsers
    fallbackCopy(linkText);
  }
});

function showCopyToast(message, isError = false) {
  const toast = document.createElement("div");
  toast.className = `toast ${isError ? "toast-error" : "toast-success"}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.add("toast-show");
  }, 10);

  // Remove after delay
  setTimeout(() => {
    toast.classList.remove("toast-show");
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 2500);
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
    showCopyToast("✓ Link copied to clipboard!");
    const originalContent = copyBtn.innerHTML;
    copyBtn.innerHTML = "✓ Copied!";
    copyBtn.style.background = "var(--success)";

    setTimeout(() => {
      copyBtn.innerHTML = originalContent;
      copyBtn.style.background = "";
    }, 2000);
  } catch (err) {
    showCopyToast("❌ Failed to copy link", true);
  }

  document.body.removeChild(textarea);
}
