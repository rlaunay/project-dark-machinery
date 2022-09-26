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

Route.get('/wiki', 'WikiController.index').as('wiki')

Route.group(() => {
  Route.get('/admin', 'AdminController.index').as('admin')
}).middleware(['auth', 'admin'])

Route.get('/discord/redirect', 'DiscordController.redirect').as('discord.redirect')
Route.get('/discord/callback', 'DiscordController.callback')
Route.post('/discord/logout', 'DiscordController.logout').as('discord.logout')
