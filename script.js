document.addEventListener('DOMContentLoaded', function() {
    var categoriesBtn = document.getElementById('categoriesBtn');
    var categoriesDropdown = document.getElementById('categoriesDropdown');

    categoriesBtn.addEventListener('click', function(event) {
        event.preventDefault();
        categoriesDropdown.classList.toggle('hidden');
    });

    // Close the dropdown if clicked outside
    window.onclick = function(event) {
        if (!event.target.matches('#categoriesBtn')) {
            if (!categoriesDropdown.classList.contains('hidden')) {
                categoriesDropdown.classList.add('hidden');
            }
        }
    };
});
