
const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.ForEach(item=>{
    item.addEventListener('click', scrollToIdonClick);
})


function scrollToIdOnClick(event){
    event.PreventDefault();
    const element = event.target;
    const to= id.getAttribute('href');
    const to= document.querySelector(id).offsetTop;

    window.scroll({
        behavior: "smooth"
    });
}