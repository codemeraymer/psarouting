document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#main-nav a');
    const pages = document.querySelectorAll('.page');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('#main-nav ul');
    const notification = document.getElementById('notification');

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            showPage(targetPage);
        });
    });

    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));

        const targetPage = document.getElementById(pageId);
        const targetLink = document.querySelector(`[data-page="${pageId}"]`);

        targetPage.classList.add('active');
        targetLink.classList.add('active');
    }

    // Mobile navigation toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Form submissions
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const routeDocumentForm = document.getElementById('routeDocumentForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate login
        showNotification('Login successful!');
        showPage('dashboard');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate signup
        showNotification('Account created successfully!');
        showPage('login');
    });

    routeDocumentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate document routing
        const newDocument = {
            date: new Date().toLocaleString(),
            from: routeDocumentForm.from.value,
            to: routeDocumentForm.to.value,
            subject: routeDocumentForm.subject.value,
            action: routeDocumentForm.action.value,
            remarks: routeDocumentForm.remarks.value
        };
        addDocumentToHistory(newDocument);
        routeDocumentForm.reset();
        showNotification('Document routed successfully!');
    });

    // Document history
    function addDocumentToHistory(document) {
        const historyContainer = document.getElementById('documentHistory');
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.innerHTML = `
            <p><strong>Date:</strong> ${document.date}</p>
            <p><strong>From:</strong> ${document.from}</p>
            <p><strong>To:</strong> ${document.to}</p>
            <p><strong>Subject:</strong> ${document.subject}</p>
            <p><strong>Action:</strong> ${document.action}</p>
            <p><strong>Remarks:</strong> ${document.remarks}</p>
        `;
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }

    // Notification system
    function showNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
});