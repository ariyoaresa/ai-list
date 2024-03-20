function getList() {
    fetch('https://ariyoaresa.me/ai-list/ai/list.js')
        .then(response => response.json())
        .then(data => {
            console.log(data[1]);
        });
}

getList();
