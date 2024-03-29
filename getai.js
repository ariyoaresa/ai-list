function getList() {
    fetch('./ai/list.js')
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
                <div class="list-item">
                    <div class="list-content">
                        <div class="list-content-left">
                            <img src="${item.logo}" alt="AI Logo" class="logo">
                        </div>
                        <div class="list-content-right">
                            <h2 class="name">${item.name}</h2>
                            <p class="description">${item.description}</p>
                        </div>
                    </div>
                    <div class="list-footer">
                        <div class="list-footer-content">
                            <div class="launch-icon">
                                <svg class="launch" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_712_143)">
                                        <path d="M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V8H12.6667V12.6667ZM9.33333 2V3.33333H11.7267L5.17333 9.88667L6.11333 10.8267L12.6667 4.27333V6.66667H14V2H9.33333Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_712_143">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <a href="${item.url}" target="_blank">Visit website</a>
                        </div>
                        
                    </div>
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
                        <a href="${value.html_url}"><img src="${value.avatar_url}" alt="User's Avatar" class="userImage"></a>
                    </div>
                    `;
                });     
                contributorsDiv.innerHTML = contributorsHTML;
            }
        });
}

getContributors();

document.getElementById('searchBar').addEventListener('input', function(event) {
    let searchTerm = event.target.value.toLowerCase();
    let items = document.querySelectorAll('.list-item');

    items.forEach(item => {
        let title = item.querySelector('.name').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
