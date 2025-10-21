const totalImages = 64;
const gallery = document.getElementById('gallery');

for(let i=1;i<=totalImages;i++){
    const img = document.createElement('img');
    img.src = `images/${i}.jpg`;
    img.alt = `Jovana Petrović ${i}`;
    img.onclick = () => openModal(i);
    gallery.appendChild(img);
}

let currentImg = 1;

function openModal(index){
    currentImg = index;
    document.getElementById('modal').style.display='flex';
    document.getElementById('modal-img').src = `images/${currentImg}.jpg`;
}

function closeModal(){
    document.getElementById('modal').style.display='none';
}

function changeImage(direction){
    currentImg += direction;
    if(currentImg>totalImages) currentImg=1;
    if(currentImg<1) currentImg=totalImages;
    document.getElementById('modal-img').src = `images/${currentImg}.jpg`;
}

function revealSections() {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight * 0.9;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom){
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);