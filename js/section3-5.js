document.querySelectorAll('.section3-5-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.section3-5-card');
    card.classList.toggle('is-open');
    button.textContent = card.classList.contains('is-open')
      ? '閉じる'
      : '詳細情報';
  });
});
