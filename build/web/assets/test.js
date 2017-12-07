/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


  $(document).ready(function() {
    $('#example').DataTable( {
       
    } );
} );
function submitForm(){
  var root = 'https://jsonplaceholder.typicode.com';


$.ajax({
  url: root + '/posts/1',
  method: 'GET'
}).then(function(data) {
  console.log(data);
});
  
}
