# Kramis (Administration Theme)
Drupal 8 and 9 Admin Theme. (sub theme of seven)

Introduction
------------
This is an administration theme for Drupal 9 that I have been using on most of my drupal 9 sites.
It's a subtheme of Seven and loosely based on the starter theme "lightship" https://github.com/devcollaborative/drupal8-devcollab-lightship

It's basically just what I feel are some css improvements and a few alter hook implementations to get a nicer admin experience with some of the modules I commonly use.

It's rough around the edges and needs to be cleaned up a bit, but it works well for my cases.

If you are editing the sass:
- `npm install` will install all the needed node_modules for comiling the css
- `gulp watch` will watch the sass folder and compile the css when the scss files are changed.


Gulp Tasks
--------

`gulp watch` - watches sass directories for changes and recompiles whenever you save a change

`gulp sass` - compiles sass into CSS

`gulp clean:css` - deletes compiled CSS

`gulp build` - simple one time build task



