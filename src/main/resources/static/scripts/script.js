document.addEventListener('DOMContentLoaded', function() {
    // Solo aplica a la página de inicio (index)
    if (document.getElementById('form-section')) {
        const animalItems = document.querySelectorAll('.animal');
        const animalsGrid = document.querySelector('.animals-grid');

        // Signos del zodíaco chino con descripciones (solo para la página de inicio)
        const zodiacSigns = {
            "Mono": {
                        icon: "fas fa-monkey",
                        description: "Los monos son ingeniosos, inteligentes y tienen un gran sentido del humor. Son inventores, solucionadores de problemas y les encanta estar en el centro de atención. Su curiosidad los lleva a explorar nuevas ideas."
                    },
                    "Gallo": {
                        icon: "fas fa-crow",
                        description: "Los gallos son observadores, trabajadores y valientes. Son muy organizados y prestan atención a los detalles. Aunque a veces pueden ser críticos, son leales y confiables. Su franqueza puede sorprender a algunos."
                    },
                    "Perro": {
                        icon: "fas fa-dog",
                        description: "Los perros son leales, honestos y tienen un fuerte sentido de la justicia. Son protectores naturales y excelentes amigos. Su naturaleza cautelosa los hace buenos jueces de carácter. Siempre están dispuestos a ayudar a los demás."
                    },
                    "Cerdo": {
                        icon: "fas fa-piggy-bank",
                        description: "Los cerdos son bondadosos, tolerantes y diligentes. Son conocidos por su generosidad y disfrutan ayudando a los demás. Tienen un gran apetito por la vida y les encanta disfrutar de los placeres sencillos. Son confiables y sinceros."
                    },
                    "Rata": {
                        icon: "fas fa-rat",
                        description: "Las ratas son inteligentes, astutas y carismáticas. Tienen una gran capacidad para percibir oportunidades y son excelentes en situaciones que requieren soluciones rápidas. Son encantadoras y sociales, pero pueden ser un poco tacañas."
                    },
                    "Buey": {
                        icon: "fas fa-cow",
                        description: "Los bueyes son pacientes, meticulosos y confiables. Son trabajadores incansables con un fuerte sentido de la responsabilidad. Su naturaleza tranquila oculta una gran determinación. Son líderes naturales que inspiran confianza."
                    },
                    "Tigre": {
                        icon: "fas fa-paw",
                        description: "Los tigres son valientes, competitivos y seguros de sí mismos. Tienen un carisma natural y una personalidad magnética. Son apasionados en todo lo que hacen, pero a veces pueden ser impulsivos. Les encantan los desafíos."
                    },
                    "Conejo": {
                        icon: "fas fa-rabbit",
                        description: "Los conejos son elegantes, amables y artísticos. Prefieren evitar conflictos y buscan entornos armoniosos. Son buenos oyentes y consejeros. Su naturaleza sensible los hace vulnerables, pero también muy empáticos."
                    },
                    "Dragón": {
                        icon: "fas fa-dragon",
                        description: "Los dragones son carismáticos, poderosos y llenos de vitalidad. Son líderes naturales que inspiran a los demás. Tienen mucha suerte y éxito, pero pueden ser un poco arrogantes. Su energía es contagiosa."
                    },
                    "Serpiente": {
                        icon: "fas fa-staff-snake",
                        description: "Las serpientes son sabias, misteriosas e intuitivas. Son pensadores profundos y buenos para resolver problemas complejos. Su naturaleza tranquila puede parecer reservada, pero son muy observadoras. Tienen un gran encanto."
                    },
                    "Caballo": {
                        icon: "fas fa-horse",
                        description: "Los caballos son animados, activos y amantes de la libertad. Son populares y disfrutan de la compañía de otros. Su energía es contagiosa y tienen un espíritu aventurero. A veces pueden ser impacientes, pero siempre son sinceros."
                    },
                    "Cabra": {
                        icon: "fas fa-sheep",
                        description: "Las cabras son creativas, amables y pacíficas. Tienen un fuerte sentido artístico y aprecian la belleza. Son compasivas y siempre están dispuestas a ayudar. Su naturaleza sensible las hace vulnerables al estrés, pero también muy empáticas."
                    }
        };

        // Crear popover para mostrar descripción al pasar el ratón
        animalItems.forEach(item => {
            const signo = item.getAttribute('data-sign');
            const signoInfo = zodiacSigns[signo];

            // Configurar popover de Bootstrap
            new bootstrap.Popover(item, {
                title: signo,
                content: signoInfo.description,
                trigger: 'hover focus',
                placement: 'top',
                container: 'body'
            });
        });
    }
});