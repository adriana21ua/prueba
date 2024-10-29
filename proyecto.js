function CalcularTotal() {
    var destino = document.getElementById("destino").value;
    var entradas = parseInt(document.getElementById("entradas").value);
    var formaPago = document.getElementById("pago").value;

    var precioInicial = 0, descuento = 0, totalAPagar = 0;

    switch (destino) {
        case "elPital":
            precioInicial = 20 * entradas;
            descuento = (entradas > 1) ? 0.5 * precioInicial : 0;
            totalAPagar = precioInicial - descuento;
            document.getElementById("result").innerHTML = `
                Destino: El Pital<br>
                Monto Inicial: $${precioInicial.toFixed(2)}<br>
                Descuento: $${descuento.toFixed(2)}<br>
                Total a Pagar: $${totalAPagar.toFixed(2)}
            `;
            break;

        case "conchagua":
            precioInicial = 30 * entradas;
            totalAPagar = precioInicial;
            document.getElementById("result").innerHTML = `
                Destino: Conchagua<br>
                Total a Pagar: $${totalAPagar.toFixed(2)}
            `;
            break;

        case "golfoFonseca":
            precioInicial = 40 * entradas;
            descuento = 0.40 * precioInicial;
            totalAPagar = precioInicial - descuento;
            document.getElementById("result").innerHTML = `
                Destino: Golfo de Fonseca<br>
                Monto Inicial: $${precioInicial.toFixed(2)}<br>
                Descuento: $${descuento.toFixed(2)}<br>
                Total a Pagar: $${totalAPagar.toFixed(2)}
            `;
            break;
    }

    if (formaPago === "credito") {
        var cargoCredito = 0.05 * totalAPagar;
        totalAPagar += cargoCredito;
        document.getElementById("result").innerHTML += `
            Cargo por Crédito (5%): $${cargoCredito.toFixed(2)}<br>
            Total a Pagar con Crédito: $${totalAPagar.toFixed(2)}
        `;
    } 

    

}