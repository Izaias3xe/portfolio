const reveals = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active")
        }
    })
})

reveals.forEach(el => observer.observe(el))

const text = "Transformando ideias em código. Explore meus projetos e acompanhe minha jornada no desenvolvimento e na tecnologia."

const element = document.getElementById("typing-text")

let i = 0

function typeWriter() {
    if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, 35)
    }
}

typeWriter()

const text2 = [

"Sou Izaias, um desenvolvedor apaixonado por tecnologia, criação e resolução de problemas. Gosto de transformar ideias em projetos reais através do código, explorando diferentes tecnologias e buscando sempre aprender algo novo a cada desafio.",
"",
"Tenho interesse especial em desenvolvimento web, interfaces modernas e construção de sistemas que sejam ao mesmo tempo funcionais e bem projetados. Para mim, programar não é apenas escrever código, mas criar experiências, soluções e ferramentas que possam impactar pessoas de forma positiva.",
"",
"Este portfólio é um espaço onde compartilho alguns dos meus projetos, experimentos e aprendizados ao longo da minha jornada no desenvolvimento."]

const element2 = document.getElementById("typing-text2")

let line = 0;
let char = 0;

function typeWriter2() {

    if (line < text2.length) {
        if (char < text2[line].length) {
            element2.innerHTML += text2[line].charAt(char)
            char++
            setTimeout(typeWriter2, 20)
        } else {
            element2.innerHTML += "<br>"
            line++
            char = 0
            setTimeout(typeWriter2, 20)
        }
    }
}

typeWriter2()

const elements = document.querySelectorAll(".scroll-reveal");

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer2.observe(el));