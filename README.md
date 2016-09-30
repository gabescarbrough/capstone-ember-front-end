[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# capstone-ember-front-end
## LinkCollectr

[Live App](https://gabescarbrough.github.io/capstone-ember-front-end/)

![screenshot](/screenshot.jpg)

LinkCollectr is an easy to use web app which allows you to organize your favorite links into collections which can be accessed from any device.

I approached this project by planning first. I put together my user stories
and wireframe, and researched many technologies, before writing a line of code.

Then I wrote my back-end API using Rails. I approached this process methodically
and testing each new endpoint as I added them. I made sure data could only be
edited or deleted by the user who created it.

Once my API was solid, I began putting together my front-end using Ember. As I
am new to Ember, this process took longer than expected but I learned a lot.

There are multiple features (such as tagging, viewing other user's collections and
being able to favorite other user's collections) which I have not yet had time to
implement. I plan to continue building on this project to add these features.

### Technologies Used
1. HTML
2. CSS
3. Javascript
4. Ruby
5. Ruby on Rails
6. Ember

### Installation Instructions
1. Fork and Clone
2. ```npm install && bundle install``` in this directory
3. Fork and Clone the [API](https://github.com/gabescarbrough/capstone-rails-api)
4. ```bundle install``` in the API directory.
4. ```ember s``` in this directory.
5. ```bundle exec rails s``` in the API directory.

### User Stories

1. As a user I want to organize links into collections
2. As a user I want to be able to access my collections from many devices
3. As a user I want to be able to edit collections name and description
4. As a user I want to be able to delete links from collections

### Entity Relationship Diagram

The current beta version of this app includes everything shown here except tag and the associated join table.

Link is not a join table. It is associated with both user and collection.

![ERD](/ERD.png)

### Wireframe

![screenshot](/wireframe.png)


## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
