const shareBtn = document.getElementById('share_icon');
const shareBar = document.getElementById('share_bar');
const shareComponent = document.querySelector('.component_user');
const mobileShareBar = document.getElementById('share_bar_mobile');

shareBtn.addEventListener('mouseover', (event) => {
    shareBar.style.display = 'block';
    
});

shareBtn.addEventListener('mouseout', (event) => {
    shareBar.style.display = 'none';
});

if (window.innerWidth <= 375) {
    shareBtn.addEventListener('click', (event) => {
        event.preventDefault();
        shareComponent.style.display = 'none';
        mobileShareBar.style.display = 'flex';
    });
    
}