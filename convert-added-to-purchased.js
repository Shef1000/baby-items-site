function convertCheckedItemsToPurchased() {
  document.querySelectorAll('.item-card .item-check').forEach((checkbox) => {
    if (!checkbox.checked) return;

    const card = checkbox.closest('.item-card');
    const label = card?.querySelector('.check-label');

    card?.classList.add('purchased');
    checkbox.disabled = true;
    if (label) label.textContent = 'Purchased';
  });
}

convertCheckedItemsToPurchased();

document.addEventListener('change', (event) => {
  const checkbox = event.target.closest?.('.item-card .item-check');
  if (!checkbox || !checkbox.checked) return;

  const card = checkbox.closest('.item-card');
  const label = card?.querySelector('.check-label');

  card?.classList.add('purchased');
  checkbox.disabled = true;
  if (label) label.textContent = 'Purchased';
});
