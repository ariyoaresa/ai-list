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
                    <button class="itview"><a href="${item.url}" target="_blank">Visit website</a></button>
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

function getContributors() {
    fetch('https://api.github.com/repos/ariyoaresa/ai-list/contributors')
        .then(response => response.json())
        .then(values => {
            contributorsDiv = document.getElementById('contributors');
            if (values.length === 0) {
                contributorsDiv.innerHTML = "<h3>No contributors found</h3>";
            } else {
                let contributorsHTML = "";
                values.forEach(value => {
                    contributorsHTML += `
                    <div class="contributors">
                        <img src="${value.avatar_url}" alt="User's Avatar" class="userImage">
                    </div>
                    `;
                });     
                contributorsDiv.innerHTML = contributorsHTML;
            }
        });
}

getContributors();
