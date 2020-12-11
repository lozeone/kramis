# kramis
Drupal 8 Admin Theme. (sub theme of seven)

#Introduction
-----------
This is an administration theme for Drupal 8 that I have been using on most of my D8 sites.
It's a subtheme of Seven and loosely based on the starter theme "lightship" https://github.com/devcollaborative/drupal8-devcollab-lightship

Its basicaly just what I feel are some css improvements and a few alter hook implementations to get a nicer admin experience with some of the modules I commonly use.

It's rough and needs to be cleaned up a bit, but it works.

To complie the css you need Gulp. run `gulp watch`

running `npm install` should install all the needed node modules

#Setting Up Gulp
--------

Steps detailed here: https://css-tricks.com/gulp-for-beginners/

  1. Initialize Node Package Manager - npm init
  This will generate a package-lock.json file, which *should* be committed in Git.

  2. If you have Gulp installed globally (see the CSS Tricks link above for instructions), then save it locally to this project with:
  npm install gulp --save-dev

  3. Type npm i to have npm install the dependencies for the project per package.json. You should be ready to compile now!


#Gulp Tasks
--------

`gulp sass` - compiles sass into CSS

`gulp clean:css` - deletes compiled CSS

`gulp watch` - watches sass directories for changes and recompiles whenever you save a change

`gulp build` - simple one time build task



