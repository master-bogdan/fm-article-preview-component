const shareBtn = document.getElementById('share_icon');
const shareBar = document.getElementById('share_bar');
const shareComponent = document.querySelector('.component_user');
const mobileShareBar = document.getElementById('share_bar_mobile');

if (window.innerWidth > 375) {
    shareBtn.addEventListener('mouseover', () => {
        shareBar.style.display = 'block';
        
    });
    
    shareBtn.addEventListener('mouseout', () => {
        shareBar.style.display = 'none';
    });
}


if (window.innerWidth <= 375) {
    shareBtn.addEventListener('click', () => {
        shareComponent.style.display = 'none';
        mobileShareBar.style.display = 'flex';
    });
    
}