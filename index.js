document.getElementById('buttom').addEventListener('click', function() {
    // Convertir a mayúsculas
    const usuario = document.getElementById('usuario').value.toUpperCase();
    const contrasena = document.getElementById('contraseña').value.toUpperCase();

    fetch('../data/usuarios.json')
        .then(response => response.json())
        .then(data => {
            const usuarioValido = data.some(user => user.usuario.toUpperCase() === usuario && user.contrasena.toUpperCase() === contrasena);
            
            if (usuarioValido) {
                Swal.fire({
                    title: 'Éxito!',
                    text: 'Login exitoso',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    // Vaciar los valores de los campos manualmente
                    document.getElementById('usuario').value = '';
                    document.getElementById('contraseña').value = '';
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Usuario o contraseña incorrectos',
                    icon: 'error',
                    confirmButtonText: 'Reintentar'
                }).then(() => {
                    // Vaciar los valores de los campos manualmente
                    document.getElementById('usuario').value = '';
                    document.getElementById('contraseña').value = '';
                });
            }
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});