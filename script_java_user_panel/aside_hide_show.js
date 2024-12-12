document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const arrow = document.getElementById('toggle-arrow');
    const mainContent = document.getElementById('main-content'); 

    function toggleSidebar() {
        const isHidden = sidebar.classList.contains('hidden');
        const isMobile = window.innerWidth <= 768;

        if (isHidden) {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('sidebar-visible');
            if (!isMobile) {
                mainContent.classList.add('shifted');
            }
        } else {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('sidebar-visible');
            if (!isMobile) {
                mainContent.classList.remove('shifted');
            }
        }

        if (isMobile) {
            arrow.style.top = '10px';  // Stay at the top on mobile
            arrow.style.left = '50%';
            arrow.style.transform = isHidden ? 'translateX(-50%) rotate(180deg)' : 'translateX(-50%) rotate(0deg)';
        } else {
            arrow.style.left = isHidden ? '250px' : '10px';
            arrow.style.transform = isHidden ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)';
        }
    }

    const isMobile = window.innerWidth <= 768;
    arrow.style.top = isMobile ? '10px' : '50%';  
    arrow.style.left = isMobile ? '50%' : '10px';
    arrow.style.transform = isMobile ? 'translateX(-50%) rotate(0deg)' : 'translateY(-50%) rotate(0deg)';

    arrow.addEventListener('click', toggleSidebar);
});