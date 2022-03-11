# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

[My solution](./images/FAQ-accordion-screenshot.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/faq-accordion-component-responsive-mobile-first-styled-with-sass-g3YkZhtlo)
- Live Site URL: [Netlify](https://faq-accordion-fewd.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript


### What I learned

I gained a deeper understanding of using backgrounds along with the css property overflow hidden. I wasn't able to 100% use this successfully, which i'll detail below, but i managed to get the main effect of the clipped background image.

I also used the picture tag with source and srcset for the first time, which was an alternative to using media queries with display: none, to use alternative images on smaller devices. I keep seeking ways to minimise the overuse of media queries, such as flex wrap and vh/vw, and i so i enjoyed using this. It felt like it required slightly less code, i think.


I learned to use e.currentTarget in my Javascript forEach function, to apply the active class on my accordion items. This took some research, as my first attempts simply used the HTML collection as a whole, rather than targeting each specific item.

I made this component with Javascript as i wanted to practise it, but there are definitely ways of doing it without, using rare HTML tags like details and summary tags.


```html
<h1>Some HTML code I'm proud of</h1>
<picture>
      <source
        media="(max-width: 1099px)"
        srcset="./images/illustration-woman-online-mobile.svg"
      />
      <source
        media="(min-width: 1100px)"
        srcset="./images/illustration-woman-online-desktop.svg"
        srcset="./images/illustration-box-desktop.svg"
        srcset="./images/bg-pattern-desktop.svg"
      />
      <img
        src="./images/illustration-woman-online-desktop.svg"
        alt="woman illustration"
      />    
       
    </picture>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
.item-heading {
  margin-bottom: 1em;
  font-weight: 400;
  font-size: 12px;
  color: $text-neutral-gray-blue;
    &:hover {
      cursor: pointer;
      color: $text-primary-red;
    }
   
  + .down-arrow {
    position: absolute;
    margin-top: 0.3em;
    top: 0;
    right: 0;
    transition: 0.5s;
    animation: flip-arrow 0.5s ;

    &:hover {
      cursor: pointer;
    }
  }
}


```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}


accordions.forEach(accordion => {
accordion.addEventListener('click', (e) => {   
    e.currentTarget.classList.toggle('active');
});
});
```

I

### Continued development

I think i'm improving my responsive styles, but i still struggle with working on smaller devices, like Galaxy Fold. The height of accordion proved to be a problem, overlapping the body. It may have had something to do with the illustration positioning. Overall i hope to improve my responsive design so i can go smaller and smaller without the site breaking at < 250px/

I partially had success with overflow: hidden, managing to clip off the main illustration. I however went round in circles trying to not get this effect on the box. In the end i gave up and accepted it, but i would like to work this out. I found overflow hidden only worked on the accordion container, and on nothing else. I tried on each parent in a certain section, but couldn't get the desired results.

I included the shadow illustration as a background for mobile devices, and this ended up being pushed down as i expanded the accordion items. There is probably a better way to implement this so it remains fixed.

Going back to responsiveness, i'd like to refine the smaller details, like margins on smaller devices. I


I felt my application of active classes could've been more DRY, as i kept having to put classhere.active another-class {
  property: value;
}

This was in order to add active styles to the down arrow and other separate sections. 




## Author

- Website - [Evan Parker](https://github.com/evancp87)
- Frontend Mentor - [@@evancp87](https://www.frontendmentor.io/profile/evancp87)

