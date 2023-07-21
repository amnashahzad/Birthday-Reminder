const birthdayForm = document.getElementById('birthdayForm');
const birthdayList = document.getElementById('birthdayList');

birthdayForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const birthdayInput = document.getElementById('birthday');
    
    const name = nameInput.value;
    const birthday = new Date(birthdayInput.value);
    
    if (!name || !birthday) {
        alert('Please enter a name and a valid birthday date.');
        return;
    }
    
    const today = new Date();
    const birthdayThisYear = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    const daysUntilBirthday = Math.ceil((birthdayThisYear - today) / (1000 * 60 * 60 * 24));
    
    const birthdayListItem = document.createElement('div');
    birthdayListItem.classList.add('birthday-item');
    birthdayListItem.innerHTML = `<strong>${name}</strong> - ${birthday.toLocaleDateString()} (${daysUntilBirthday} days left)`;
    
    birthdayList.appendChild(birthdayListItem);
    
    nameInput.value = '';
    birthdayInput.value = '';
});
