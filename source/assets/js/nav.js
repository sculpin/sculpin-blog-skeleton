// Navbar Toggle
// provided by: https://mydnic.be/post/responsive-navigation-bar-with-tailwind-css-and-a-drop-of-javascript
document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

                // Get the "main-nav" element
                var $target = document.getElementById('main-nav');

                // Toggle the class on "main-nav"
                $target.classList.toggle('hidden');

            });
        });
    }

});