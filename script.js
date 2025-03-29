document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMe');
    const result = document.getElementById('result');
    
    button.addEventListener('click', function() {
        result.textContent = '你好，这是来自JavaScript的问候！';
        setTimeout(() => {
            result.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
        }, 500);
    });
});