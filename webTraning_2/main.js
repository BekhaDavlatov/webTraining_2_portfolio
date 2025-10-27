document.addEventListener("scroll", parallaxEffect);

function parallaxEffect() {
    const image = document.querySelector(".thumb_container_img");
    if (!image) return;

    // ограничивающий контейнер (чтобы правильно считать)
    const container = image.closest(".thumb_container");
    const rect = container.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    // Центр контейнера относительно окна
    const offset = rect.top + rect.height / 2 - windowHeight / 2;

    // Коэффициент скорости
    const speed = 0.2;

    // Смещение картинки
    const move = offset * speed;

    // Применяем сдвиг
    image.style.transform = `translateY(${move}px)`;
}
