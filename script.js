const fontStyle = document.getElementById('fontStyle');
const fontColor = document.getElementById('fontColor');
const bgImage = document.getElementById('bgImage');
const preview = document.getElementById('preview');
const applyBtn = document.getElementById('applyBtn');
const resetBtn = document.getElementById('resetBtn');

function applyStyles() {
  preview.style.fontFamily = fontStyle.value;
  preview.style.color = fontColor.value;

  if (bgImage.value.trim() !== '') {
    document.body.style.backgroundImage = `url(${bgImage.value})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
  } else {
    document.body.style.backgroundImage = 'none';
  }
}

function resetStyles() {
  fontStyle.value = 'Arial';
  fontColor.value = '#3b3535ff';
  bgImage.value = '';
  preview.style.fontFamily = 'Arial';
  preview.style.color = '#f87373ff';
  document.body.style.backgroundImage = 'none';
}

applyBtn.addEventListener('click', applyStyles);
resetBtn.addEventListener('click', resetStyles);
