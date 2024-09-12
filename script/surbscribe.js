document.getElementById('surb').addEventListener('click', function(event) {
    var sur = document.getElementById('surbscribe');
    sur.style.display = sur.style.display === 'block' ? 'none' : 'block';
});
document.getElementById('surb').addEventListener('mouseenter', function(event) {
    var sur = document.getElementById('surbscribe');
    sur.style.display = 'block';
});
document.getElementById('surbscribe').addEventListener('mouseleave', function(event) {
    var sur = document.getElementById('surbscribe');
    sur.style.display = 'none';
});