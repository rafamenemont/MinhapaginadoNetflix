// $('.owl-carousel1').owlCarousel1({
//     loop:false,
//     margin:10,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

// function myFunction() {
//     document.getElementById("cardprincipal").style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url('img/mini7.jpg')";
//     paragraph.textContent = "O programa comandado por Érick Jacquin, tem objetivo de levantar restaurantes que estão indo à falência."; 

    
// }

function myFunction(id) {

    switch(id){
        case "a":
            document.getElementById("cardprincipal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.959), rgba(0,0,0,.384)100%), url('img/mini1.jpg')";
            paragraph.textContent = "O programa comandado por Érick Jacquin, tem objetivo de levantar restaurantes que estão indo à falência."; 
            titulo.textContent = "PESADELO NA COZINHA";
            break;
        case "b":
            document.getElementById("cardprincipal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.959), rgba(0,0,0,.384)100%), url('img/mini4.jpg')";
            paragraph.textContent = "Talk-show apresentado por Danilo Gentili e atrações como a banda Utraje a Rigor, a assistente de palco Juliana e os humoristas Léo Lins e Murilo Couto."; 
            titulo.textContent = "THE NOITE";
            break;
        case "c":
            document.getElementById("cardprincipal").style.background = "linear-gradient(rgba(0,0,0,.959), rgba(0,0,0,.384)100%), url('img/mini3.jpg')";
            paragraph.textContent = "Jordan (Halle Berry) é atendente do sistema de emergência da polícia. Um dia, atende uma ligação de uma jovem assustada com o fato de que existe um homem tentando invadir sua casa. O caso acaba com o pior final possível. Anos mais tarde, ela se vê diante do mesmo criminoso, que agora ameaça outra garota."; 
            titulo.textContent = "CHAMADA DE EMERGÊNCIA";
            break;
        case "d":
            document.getElementById("cardprincipal").style.background = "linear-gradient(rgba(0,0,0,.959), rgba(0,0,0,.384)100%), url('img/mini7c.jpg')";
            paragraph.textContent = "4 candidatos conseguiram se dar bem em um concurso público para se tornar juiz, mas ainda falta uma última etapa. Um deles acaba colocando todos numa tremenda enrascada por conta da ideia de conseguir o gabarito faltando menos de 48 horas para o dia D."; 
            titulo.textContent = "O CONCURSO";
            break;
        case "e":
            document.getElementById("cardprincipal").style.background = "linear-gradient(rgba(0,0,0,.959), rgba(0,0,0,.384)100%), url('img/mini5.jpg')";
            paragraph.textContent = "Benjamin Button é um homem que nasce idoso e rejuvenesce à medida que o tempo passa. "; 
            titulo.textContent = "O CURIOSO CASO DE BENJAMIN BUTTON";
            break;
        case "f":
            document.getElementById("cardprincipal").style.background = "linear-gradient(rgba(0,0,0,.959), rgba(0,0,0,.384)100%), url('img/mini6.jpg')";
            paragraph.textContent = "O programar restaurantes que estão indo à falência."; 
            titulo.textContent = "EU, A PATROA E AS CRIANÇAS";
            break;
        case "g":
            document.getElementById("cardprincipal").style.background = "linear-gradient(rgba(0,0,0,.959), rgba(0,0,0,.384)100%), url('img/mini8.jpg')";
            paragraph.textContent = "Um dos crimes mais sofisticados e bem planejados de que já se teve notícia no Brasil. Quem eram essas pessoas? E o que aconteceu com elas depois? São as perguntas que todo o Brasil se faz desde então."; 
            titulo.textContent = "ASSALTO AO BANCO CENTRAL";
            break;
        case "h":
                document.getElementById("cardprincipal").style.background = "linear-gradient(rgba(0,0,0,.959), rgba(0,0,0,.384)100%), url('img/mini2c.jpg')";
                paragraph.textContent = "Esta sequência de Karate Kid pega 30 anos depois dos eventos do All Valley Karate Tournament de 1984 e encontra Johnny Lawrence em busca de redenção reabrindo o infame dojo de karate Cobra Kai. Isso reacende sua antiga rivalidade com o bem-sucedido Daniel LaRusso."; 
                titulo.textContent = "COBRA KAI";
                break;
        case "i":
                document.getElementById("cardprincipal").style.background = "linear-gradient(rgba(0,0,0,.959), rgba(0,0,0,.384)100%), url('img/mini9.jpg')";
                paragraph.textContent = "Uma menina muito louca que tem poderes"; 
                titulo.textContent = "MATILDA";
                break;
    }
}