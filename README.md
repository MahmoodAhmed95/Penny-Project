# Penny-Project

npx create-nx-workspace@latest penny

✔ Which stack do you want to use? · angular
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · penny
✔ Which bundler would you like to use? · webpack
✔ Default stylesheet format · scss
✔ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? · No
✔ Test runner to use for end to end (E2E) tests · cypress
✔ Which CI provider would you like to use? · github

npm install -g nx

npm install @nrwl/angular --save-dev

nx generate @nrwl/angular:application frontend

npm install @nrwl/nest --save-dev
