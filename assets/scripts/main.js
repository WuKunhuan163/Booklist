document.addEventListener('DOMContentLoaded', () => {
    const languageManager = new LanguageManager();
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const languageSelect = document.getElementById('languageSelect');

    // Initialize language
    languageManager.updateUI();

    // Sidebar toggle functionality
    sidebarToggle.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('expanded');
        } else {
            sidebar.classList.toggle('collapsed');
        }
    });

    // Language selector functionality
    languageSelect.addEventListener('change', (e) => {
        languageManager.setLanguage(e.target.value);
    });

    // Auto-collapse sidebar on mobile
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('collapsed');
            sidebar.classList.remove('expanded');
        } else {
            sidebar.classList.remove('expanded');
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            sidebar.classList.contains('expanded')) {
            sidebar.classList.remove('expanded');
        }
    });

    sidebar.classList.add('expanded');
}); 