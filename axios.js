axios.get('https://api.github.com/users/gabrielnascimento95')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    })
