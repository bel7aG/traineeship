$(document).ready(() => {
  const es6 = $(".composition__photo--p1");
  const html5 = $(".composition__photo--p2");
  const sass = $(".composition__photo--p3");
  const maxWeb = $(".maxWeb");
  const pOne = $(".paragraph-one");
  const pTwo = $(".paragraph-two");
  console.log(maxWeb)
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

  const me = `  Frontend-focused web developer with a passion for
  design. I have experience working with Java, Python, C, jQuery and countless other frontend and backend
  frameworks and tools, but I spend most of my time
  fighting with React, Javascript, and CSS/SASS/LESS`;

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

  maxWeb.click(() => {
    pOne.css({
      "transition": "all .6s",
      "font-size": "1.6rem"
    })

    pOne.html(`<img id="me" src="IMG/me.jfif"><br>${me}`)
    maxWeb.text('Click right photo');
  })


  es6.click(() => {
    pOne.css({
      "transition": "all 1s",
      "color": "rgb(0, 0, 0)",
      "fontSize": '1.8rem'
    })
    pOne.html(`${jsMessage}`);
    maxWeb.text('You can click me');
  });

  html5.click(() => {
    pOne.css({
      "transition": "all 1s",
      "color": "rgb(0, 0, 0)",
      "fontSize": '1.8rem'
    })
    pOne.html(`${htmlMessage}`);
    maxWeb.text('You can click me');
  });

  sass.click(() => {
    pOne.css({
      "transition": "all 1s",
      "color": "rgb(0, 0, 0)",
      "fontSize": '1.8rem'
    })
    pOne.html(`${sassMessage}`);
    maxWeb.text('You can click me');
  });


  const merciBox = document.querySelector('#merciMessage');
  const merciMessage = `
  Je remercie Monsieur Sami Seddik, qui m'a aidé a acquerir ces nouvelles
  connaissant durant cette semestre.
  `;

  /* using new javascript syntax */
  document.querySelector('#merci').addEventListener('click', () => {
    merciBox.style.transition = "all 1s";
    merciBox.style.color = "rgb(0, 0, 0)";
    merciBox.style.fontSize = '1.8rem';
    merciBox.textContent = merciMessage;
    merciBox.style.color = 'rgb(77, 78, 77)';
  });
})
