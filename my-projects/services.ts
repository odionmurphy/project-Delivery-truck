










  // example: replace with your own fetch
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("user-list");

      container.innerHTML = data.map(user => `
        <div class="user-card">
          <h3>${user.name}</h3>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> ${user.website}</p>
          <p><strong>Company:</strong> ${user.company.name}</p>
          <p><strong>City:</strong> ${user.address.city}</p>
        </div>
      `).join('');
    })
    .catch(err => console.error(err));

 

