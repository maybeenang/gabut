
// const Ayang = "Arum"

// const namaAyang = document.querySelector('.ayang')
// namaAyang.innerHTML = Ayang


const text = document.querySelector('.fullText')

const option = {
    strings: ['Cantik', 'Gemoy', 'Ngambekan', 'Nyebelin', 'kek babi'],
    typeSpeed: 150,
    backSpeed: 150,
    onComplete: (self) => {end()}
}

let typed = new Typed('.text', option);

const end = () => {
    text.animate([
        {opacity: 1},
        {opacity: 0},
    ], {
        duration: 1000,
        iterations: 1
    }).onfinish = () => {
        text.style.display = 'none'
    }

    document.querySelector('.container').animate([
        {backgroundColor: "#424b53"},
        {backgroundColor: "#d3e9fd"},
    ], {
        duration: 1000,
        iterations: 1
    }).onfinish = () => {
        document.querySelector('.container').style.backgroundColor = "#d3e9fd"
        text.innerHTML = `Selamat bobok <span class='ayang'>ayang</span> Arum:)`
        text.style.color = "#424b53"
        text.style.display = 'block'
        text.animate([
            {opacity: 0},
            {opacity: 1},
        ], {
            duration: 1000,
            iterations: 1
        }).onfinish = () => {
            text.style.display = 'block'
        }
    }


}
