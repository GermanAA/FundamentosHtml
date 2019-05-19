//---------------Gasto----------------------
$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'php/CargarConcepto.php'
  })


  
  .done(function(listas_rep){
    $('#tipodegasto').html(listas_rep)
  })
  .fail(function(){
    alert('Hubo un errror al cargar el Concepto')
  })
 

})

//----------------CUenta #Id-----------------------------------

$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'php/CargarCuenta.php'
  })


  .done(function(listas_rep){
    $('#tipodecount').html(listas_rep)
  })
  .fail(function(){
    alert('Hubo un errror al cargar la Cuenta')
  })
 

})

//-----Metodo #id

$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'php/CargarMetodoPago.php'
  })

  .done(function(listas_rep){
    $('#metododepago').html(listas_rep)
  })
  .fail(function(){
    alert('Hubo un errror al cargar el Método de Pago')
  })
 

})

//-----Fuente #id

$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'php/CargarFuente.php'
  })

  .done(function(listas_rep){
    $('#fuente').html(listas_rep)
  })
  .fail(function(){
    alert('Hubo un errror al cargar el Método de Pago')
  })
 

})

//Ingresos------------------------
$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'php/ingreso/CargarConceptoI.php'
  })


  //---------------Gasto----------------------
  .done(function(listas_rep){
    $('#tipodegastoi').html(listas_rep)
  })
  .fail(function(){
    alert('Hubo un errror al cargar el Concepto')
  })
 

})

//----------------CUenta #Id-----------------------------------

$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'php/ingreso/CargarCuentaI.php'
  })


  .done(function(listas_rep){
    $('#tipodecounti').html(listas_rep)
  })
  .fail(function(){
    alert('Hubo un errror al cargar la Cuenta')
  })
 

})


//----------------CUenta #Fuente-----------------------------------

$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'php/ingreso/CargarFuenteI.php'
  })


  .done(function(listas_rep){
    $('#fuentei').html(listas_rep)
  })
  .fail(function(){
    alert('Hubo un errror al cargar la Fuente')
  })
 

})

//-------------Forma de Pago

$(document).ready(function(){
  $.ajax({
    type: 'POST',
    url: 'php/CargarFormaPago.php'
  })

  .done(function(listas_rep){
    $('#paymethod').html(listas_rep)
  })
  .fail(function(){
    alert('Hubo un errror al cargar la Forma de Pago')
  })
 

})












