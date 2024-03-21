function getList() {
    fetch('https://ariyoaresa.me/ai-list/ai/list.js')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let list = document.getElementById('list');
            let listHTML = "";
            data.forEach(item => {
                listHTML += `
                <div class="list">
                    <h1 class="name">${item.name}</h1>
                    <p class="description">${item.description}</p>
                    <button class="itview"><a href="${item.url}" target="_blank">View</a></button>
                </div>
                `;
            });
            list.innerHTML = listHTML;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

getList();
