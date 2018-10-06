$(document).ready(function()
{
	const $form = $('#addUserForm')

	$form.on('submit', submitHandler)
	//$(".btn-close").on('click', handleDelete)

	function submitHandler (e) {
	  e.preventDefault()
	  let age = $("#userAge").val();
	  if(isNaN(age)) { 
	  	alert(`age must be numeric number ${age}`)
	  	return;
		} else {
			$.ajax({
			    url: '/user',
			    type:'POST',
			    data: $form.serialize()
			  }).done(response => { 
			    console.log(response)
			  }).done(()=>{$form.trigger("reset");})
				
		}		
	}
	  
})
