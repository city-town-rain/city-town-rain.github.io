document.getElementById('surb').addEventListener('click', function(event) {
    event.preventDefault();
    var sur = document.getElementById('surbscribe');
    sur.style.display = sur.style.display === 'none' ? 'block' : 'none';
});
document.getElementById('surb').addEventListener('mouseenter', function(event) {
    var sur = document.getElementById('surbscribe');
    sur.style.display = 'block';
});
document.getElementById('surbscribe').addEventListener('mouseleave', function(event) {
    var sur = document.getElementById('surbscribe');
    sur.style.display = 'none';
});