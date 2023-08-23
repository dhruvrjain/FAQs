var faq=document.getElementsByClassName('faq');

for(let i=0;i<faq.length;i++){
    faq[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}