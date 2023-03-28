const showSocial = (toggleCard, socialCard) =>{
    const toggle = document.getElementById(toggleCard),
          social = document.getElementById(socialCard)

    toggle.addEventListener('click', () =>{
//ıf the animation class exist,we add the down-animation
        if(social.classList.contains('animation')){
            social.classList.add('down-animation')

            //we remove the don-animation class
            setTimeout(() =>{
                social.classList.remove('down-animation')
            },1000)
        }
//we add the animation class to the div tag 
        social.classList.toggle('animation')
    })     
}
showSocial('card-toggle','card-social')
  