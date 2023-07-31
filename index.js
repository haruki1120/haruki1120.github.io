window.onload = function() {
    const imageList = [
        'media/ikekou.jpg',
        'media/iriguti.jpg',
        'media/chukyou.jpg',
        
    ];

    function showRandomIllustration() {
        const mainImage = document.getElementById('mainImage');
        const randomIndex = Math.floor(Math.random() * imageList.length);
        const randomImage = imageList[randomIndex];
        mainImage.src = randomImage;
    }

    const randomButton = document.getElementById('randomButton');
    randomButton.addEventListener('click', showRandomIllustration);

    showRandomIllustration();
};