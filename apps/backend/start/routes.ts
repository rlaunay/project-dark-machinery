/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'HomeController.index').as('home')

Route.get('/profile', 'ProfileController.index').as('profile').middleware('auth')

Route.group(() => {
  Route.get('/', 'FichesController.index').as('home')
})
  .prefix('/fiches')
  .as('fiche')
  .middleware('auth')

Route.group(() => {
  Route.get('/', 'WikiController.index').as('home')
  Route.get('/:categorySlug', 'WikiController.category').as('category')
  Route.get('/:categorySlug/pageSlug', 'WikiController.page').as('page')
})
  .prefix('/wiki')
  .as('wiki')

Route.group(() => {
  Route.get('/', 'AdminController.index').as('home')
})
  .prefix('/admin')
  .as('admin')
  .middleware(['auth', 'admin'])

Route.group(() => {
  Route.get('/redirect', 'DiscordController.redirect').as('redirect')
  Route.get('/callback', 'DiscordController.callback')
  Route.post('/logout', 'DiscordController.logout').as('logout')
})
  .prefix('/discord')
  .as('discord')
