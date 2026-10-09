
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
menuBtn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();
  const material = document.getElementById('material').value;
  const grade = document.getElementById('grade').value.trim() || '-';
  const size = document.getElementById('size').value.trim() || '-';
  const length = document.getElementById('length').value.trim() || '-';
  const quantity = document.getElementById('quantity').value.trim() || '-';
  const notes = document.getElementById('notes').value.trim() || '-';

  const text = [
    'Hello R.P. STEEL, I would like a quotation.',
    '',
    `Material: ${material}`,
    `Grade: ${grade}`,
    `Size: ${size}`,
    `Length: ${length}`,
    `Quantity: ${quantity}`,
    `Notes: ${notes}`
  ].join('\n');

  window.open('https://wa.me/919054887071?text=' + encodeURIComponent(text), '_blank', 'noopener');
});
