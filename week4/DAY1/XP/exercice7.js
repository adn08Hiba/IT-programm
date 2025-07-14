(function(userName) {
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('user-profile');
  
    const profileImg = document.createElement('img');
    profileImg.src = 'https://randomuser.me/api/portraits/men/32.jpg';
    profileImg.alt = `${userName}'s profile picture`;
  
    const nameSpan = document.createElement('span');
    nameSpan.textContent = `Welcome, ${userName}`;
  
    profileDiv.appendChild(profileImg);
    profileDiv.appendChild(nameSpan);
  
    const navbar = document.querySelector('nav');
    navbar.appendChild(profileDiv);
  })('John');
  