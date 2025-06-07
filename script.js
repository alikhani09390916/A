const form = document.getElementById('webhookForm');
const list = document.getElementById('webhookList');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const url = document.getElementById('url').value.trim();
  if (name && url) {
    const item = document.createElement('div');
    item.innerHTML = `<strong>${name}</strong>: <a href="\${url}" target="_blank">\${url}</a>`;
    list.appendChild(item);
    form.reset();
  }
});
