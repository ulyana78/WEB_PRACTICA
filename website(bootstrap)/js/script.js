window.addEventListener('load', function() {
    // Находим наш экран загрузки
    const preloader = document.getElementById('preloader');
    
    // Замораживаем экран на 1.5 секунды (1500 мс) перед удалением
    setTimeout(function() {
        preloader.classList.add('hide');
    }, 1300); 
});