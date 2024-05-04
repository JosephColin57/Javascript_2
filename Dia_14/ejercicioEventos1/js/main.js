document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const targetId = this.dataset.target;
            const targetDiv = document.getElementById(targetId);

            if (targetDiv) {
                targetDiv.style.display = this.checked ? 'none' : 'block';
            }
        });
    });
});
