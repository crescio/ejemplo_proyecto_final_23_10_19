
function buscarDiscovery(textoBusqueda) {
    /* let input = document.querySelector("#inputSearchDiscovery");
    let texto = input.value; */
    return new Promise((resolve, reject) => {
        console.log(`Texto busqueda: ${textoBusqueda}`);
        fetch('/api/v1/search/discovery', {
            method: 'POST',
            body: JSON.stringify({ text: textoBusqueda }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                resolve(response.results[0]);
            })
            .catch(error => {
                console.error('Error:', error)
                reject(error);
            });
    });
}

function reconocerImagen() {
    let formData = new FormData();
    let fileField = document.querySelector('#inputImage');
    let divRespuesta = document.querySelector('#respuestaWatsonVisualRecognition');
    mostrarImagen(fileField);
    formData.append('image', fileField.files[0]);
    fetch('/api/v1/classify/image', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(async (response) => {
            
            

            console.log('Resuesta reconocer()', response);

            let persona = response.images[0].classifiers[0].classes[0].class;
            let datos = await buscarDiscovery(persona);

            divRespuesta.innerHTML=`
            <h2> datos de <h2>
            <p>${datos.text}<p>
            `



        })
        .catch(error => console.error('Error:', error))
}
function mostrarImagen(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        let imagenPreview = document.querySelector('#imagenPreview');
        reader.onload = function (e) {
            imagenPreview.src =  e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}


//respuesta funcion reconocer vieja

         /*  console.log('Success:', response);
            divRespuesta.innerHTML = JSON.stringify(response.result,null, 2);
            let defaultClasses = "<ul>"
            response.result.images[0].classifiers[0].classes.forEach(
                clase => {
                    defaultClasses += `
                    <li> Clase: ${clase.score} - ${clase.class}</li>
                `
            });
            defaultClasses += '</ul>';
            let modeloCustom = "<ul>"
            response.result.images[0].classifiers[1].classes.forEach(
                clase => {
                    modeloCustom += `
                    <li> Clase: ${clase.score} - ${clase.class}</li>
                `
            });
            modeloCustom += '</ul>';
            divRespuesta.innerHTML = `
                <h2>Resultados</h2>
                <br/>
                <br/>
                <h3>Modelo Default</h3>
                ${defaultClasses}
                <h3>Modelo Custom</h3>
                ${modeloCustom}
            ` ; */