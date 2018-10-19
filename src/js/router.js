import crossroads from 'crossroads'
import homeController from './controllers/homeController'
import peopleController from './controllers/peopleController'
import localStorageController from './controllers/localStorageController'
import contactController from './controllers/contactController'

function router () {
    
    crossroads.addRoute('/', function () {
        $('#root').load('./partials/home.html', homeController);
        console.log('hola estoy en home')
    });
    
     crossroads.addRoute('#/favorites', function () {
        $('#root').load('./partials/favorites.html', localStorageController);
           console.log('hola estoy en favs')
    });

     crossroads.addRoute('#/contact', function () {
        $('#root').load('./partials/contact.html', contactController);
           console.log('hola estoy en contact')
    });

     crossroads.addRoute('#/characters', function () {
        $('#root').load('./partials/characters.html', peopleController);
           console.log('hola estoy en char')
    });


     $(window).on('hashchange', function () {
        crossroads.parse(window.location.hash);
    });
    
    crossroads.parse(window.location.hash)

}
    // En cada cambio del # va a verificar las rutas
    

export default router