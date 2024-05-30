document.getElementById('openLinks').addEventListener('click', () => {
    const links = document.getElementById('links').value.trim().split('\n');
    for (const link of links) {
        if (link) {
            chrome.tabs.create({ url: link });
        }
    }
});
