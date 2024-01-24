// Получаем все карточки товара
const cardIn = document.querySelectorAll('.card');

// Для каждой карточки товара привязываем обработчики событий
cardIn.forEach(card => {
  // Получаем скрытый блок внутри карточки
  const cardOut = card.querySelector('.card-out');

  // Обработчик события наведения мыши
  card.addEventListener('mouseenter', () => {
    // Показываем скрытый блок
    cardOut.style.display = 'block';
  });

  // Обработчик события отведения мыши
  card.addEventListener('mouseleave', () => {
    // Скрываем скрытый блок
    cardOut.style.display = 'none';
  });
});
