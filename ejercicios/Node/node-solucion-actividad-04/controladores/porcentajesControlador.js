function porcentaje(req, res) {
	//guardamos en la variable valor, el query param "valor" que fue enviado
	var valor = req.query.valor;
	//guardamos en la variable porcentaje, el query param "porcentaje" que fue enviado
	var porcentaje = req.query.porcentaje;
	//calculamos el porcentaje de ese valor
	var valor_final = valor * (porcentaje/100);
	//enviamos la respuesta
    res.send("El valor final es " + valor_final);
}

//exportamos la función porcentaje para poder llamarla desde el servidor.
module.exports = {
	porcentaje : porcentaje
};