document.addEventListener('DOMContentLoaded', function () {
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        produto.addEventListener('mouseenter', function () {
            this.style.opacity = '0.8';
            const imagem = this.querySelector('img');
            imagem.style.transform = 'scale(1.1)';
        });

        produto.addEventListener('mouseleave', function () {
            this.style.opacity = '1';
            const imagem = this.querySelector('img');
            imagem.style.transform = 'scale(1)';
        });
    });
});