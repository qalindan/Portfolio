// Smooth scrolling for in-page links (e.g., home, about, story, work, contact)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle external links (e.g., Blog, Newsletter, social links, View All)
document.querySelectorAll('a[href^="http"], a[href^="https"]').forEach(link => {
    link.setAttribute('target', '_blank'); // Open in new tab
    link.setAttribute('rel', 'noopener noreferrer'); // Security best practice
});

// Handle the "Send Enquiry" button
const sendEnquiryBtn = document.querySelector('button');
if (sendEnquiryBtn) {
    sendEnquiryBtn.addEventListener('click', function () {
        window.location.href = 'mailto:kalkidanbinyam83@gmail.com?subject=Enquiry&body=Hello%20Kalkidan,%20I%20would%20like%20to%20get%20in%20touch!';
    });
}

