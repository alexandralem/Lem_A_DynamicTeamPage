(() => {
  const icon = document.querySelectorAll('.iconContainer'),
        photos = document.getElementById('images'),
        memberName = document.querySelector('#name'),
        memberInfo = document.querySelector('.memberInfo');

    let currentPerson = '';

  const memberText = [
    `Hi! I'm Alexandra and I am the person who helped to refresh the website for this beer brand. I do design and coding for 'Old Spice'. I am a little introverted person, so most of my free time I like to spend by myself reading a book or watching a film. This doesn't mean, however, that I am unfriendly. I'd love to be friends with whoever wants to be friends with me.`,

    `This is Jacob Christian Jacobsen, the founder of Carlsberg. This is how this brand was called until Jacobsen teamed up with the 'Old Spice' company owner William Shultz on his journey to create a beer which wouldn't give a disctinctive unpleasant odour to those who drink it. J.C. Jacobsen took over as a brewer after his father died in 1835 and had been pursuing the goal to improve the quality of beer ever since.`

  ]

  
  function animatePhotos() {
    
    photos.style.right = `${this.dataset.offset * 350}px`;
    getMemberText(this.classList, this.dataset.offset);

    currentPerson = this.classList[1];
  }

  function getMemberText(person, index) {
    console.log(person[1]);
    
    memberName.textContent = `${person[1]}`;

    memberInfo.textContent = memberText[index];
  }
  
  icon.forEach(icon => icon.addEventListener('click', animatePhotos));


})();
