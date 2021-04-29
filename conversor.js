"use strict"

// Se crea la funcion calcular para llamarla cuando se aprete el boton correspondiente.
function calcular(){

  // Declaracion de variables (Obtengo los elementos de HTML)
  var entrada = document.getElementById("numIngresado").value // Obtengo el valor del campo tipo input, donde el usuario ingresa su numero

  // Se guarda dentro de variables, los elementos de HTML para un uso mas prolijo, legible y sencillo cuando requiera modificarlos o leerlos.
  var salidaBinario = document.getElementById("iBinario")
  var salidaOctal = document.getElementById("iOctal")
  var salidaDecimal = document.getElementById("iDecimal")
  var salidaHexadecimal = document.getElementById("iHexadecimal")


  //Se pregunta cual boton radio esta apretado para realizar distintas conversiones, y despues utilizo la funcion toString(), donde convierte la base original a la base especificada en los parametros

  // Caso Binario
  if(document.getElementById("rBinario").checked) {
    salidaBinario.value = entrada // Entrega el mismo numero que ingreso el usuario ya que las bases coinciden
    salidaOctal.value = parseInt(entrada, 2).toString(8)
    salidaDecimal.value = parseInt(entrada, 2).toString(10)
    salidaHexadecimal.value = parseInt(entrada, 2).toString(16)
  }

  // Caso Octal
  if(document.getElementById("rOctal").checked) {
    salidaBinario.value = parseInt(entrada, 8).toString(2)
    salidaOctal.value = entrada // Entrega el mismo numero que ingreso el usuario ya que las bases coinciden
    salidaDecimal.value = parseInt(entrada, 8).toString(10)
    salidaHexadecimal.value = parseInt(entrada, 8).toString(16)
  }

  // Caso Decimal
  if(document.getElementById("rDecimal").checked) {
    salidaBinario.value = parseInt(entrada, 10).toString(2)
    salidaOctal.value = parseInt(entrada, 10).toString(8)
    salidaDecimal.value = entrada // Entrega el mismo numero que ingreso el usuario ya que las bases coinciden
    salidaHexadecimal.value = parseInt(entrada, 10).toString(16)
  }

  // Caso Hexadecimal
  if(document.getElementById("rHexadecimal").checked) {
    salidaBinario.value = parseInt(entrada, 16).toString(2)
    salidaOctal.value = parseInt(entrada, 16).toString(8)
    salidaDecimal.value = parseInt(entrada, 16).toString(10)
    salidaHexadecimal.value = entrada // Entrega el mismo numero que ingreso el usuario ya que las bases coinciden
  }
}
