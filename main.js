function mudarModo(){
    console.log('oko')
    modo = document.querySelectorAll('.modo')

    modo.forEach(element => {
        element.classList.toggle('escuro')
    });

}