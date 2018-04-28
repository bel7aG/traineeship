const es6 = document.querySelector(".composition__photo--p1");
const html5 = document.querySelector(".composition__photo--p2");
const sass = document.querySelector(".composition__photo--p3");
const maxWeb = document.querySelector(".maxWeb");
const p = document.getElementsByClassName('paragraph')[0];
const sAbout = document.querySelector(".section-about .row");
const htmlMessage = `
le HTML5 se focalise sur les applications Web
et l'interactivité, sans toutefois délaisser l'accessibilité et la sémantique.
C’est un langage de balisage qui permet d’écrire de l'hypertexte, d’où
son nom. HTML permet aussi de structurer sémantiquement et de
mettre en forme le contenu des pages, d’inclure des ressources
multimédia, des formulaires de saisie, etc... Il est souvent utilisé
conjointement avec des langages de programmation(JavaScript) et des
formats de présentation (feuilles de style en cascade),
`;

const maxMessage = `   MaxWeb Tunisie est une boite de developement qui developpe des site e-commerce en utilisant
   le CMS prestaShop 1.7. qui est la derniere version de prestaShop.
   Mais aussi elle utilise la derniere version de javascript EcmaScript 2015 (ES6)
   qui est une version qui ne fonctionne pas sur des vieux navigateur donc on utilise bubble qui est un (Transpiler),
   il sert a convertir la nouvelle version de JS a une ancienne version EcmaScript5 (ES5).
`;

const jsMessage = `JavaScript est un langage de
programmation principalement
employé dans les pages web interactives
mais aussi pour les serveurs avec l'utilisation
(par exemple) de Node.js.
C'est un langage orienté objet à prototype.
JavaScript a été créé en 1995 par Brendan
Eich. Il a été standardisé sous le nom
d'ECMAScript en juin 1997 par Ecma
International dans le standard ECMA-262. Le
standard ECMA-262 en est actuellement à
sa édition. JavaScript n'est depuis qu'une
implémentation d'ECMAScript, celle mise en
œuvre par la fondation Mozilla. s`;

const sassMessage = `
   Sass facilite l'utilisation de CSS3.
   Sass (le préprocesseur) propose deux syntaxes différentes :
   Sass, qu’on appelle aussi la syntaxe indentée, et SCSS. Vous pouvez
   utiliser celle que vous voulez, les deux sont strictement équivalentes en
   termes de fonctionnalités. C’est donc une question d’esthétique
   personnelle.
`;

maxWeb.addEventListener('click', () => {
   p.style.transition = 'all 1s';
   p.style.fontSize = '1.7rem';

   p.innerHTML = `
      <img src="IMG/max.png"><br>
      ${maxMessage}
   `;
   maxWeb.textContent = 'Max Web Tunisie';
});


es6.addEventListener('click', () => {
   p.style.transition = "all 1s";
   p.style.color = "rgb(0, 0, 0)";
   p.style.fontSize = '1.8rem';
   p.textContent = `${jsMessage}`;
   maxWeb.textContent = 'Javascript';

});

html5.addEventListener('click', () => {
   p.style.transition = "all 1s";
   p.style.color = "rgb(0, 0, 0)";
   p.style.fontSize = '1.8rem';
   p.textContent = `${htmlMessage}`;
   maxWeb.textContent = 'HTML5';

});
sass.addEventListener('click', () => {
   p.style.transition = "all 1s";
   p.style.color = "rgb(0, 0, 0)";
   p.style.fontSize = '1.6rem';
   p.textContent = `${sassMessage}`;
   maxWeb.textContent = 'SASS';

});
const merciBox = document.querySelector('#merciMessage');
const merciMessage = `
   Je remercie madame khaoula talbi, qui m'a aidé a acquerir ces nouvelles
   connaissant durant cette periode de stage.
   J’ai l’honneur d’avoir effectuer mon stage d’observation au sein de
   la société de développement web MaxWeb Tunisie pour découvrir
   le domaine du travail.
`;
document.querySelector('#merci').addEventListener('click', () => {
   merciBox.style.transition = "all 1s";
   merciBox.style.color = "rgb(0, 0, 0)";
   merciBox.style.fontSize = '1.8rem';
   merciBox.textContent = merciMessage;
   merciBox.style.color = 'rgb(77, 78, 77)';


});
