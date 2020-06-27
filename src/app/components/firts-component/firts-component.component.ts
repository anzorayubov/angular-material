import { Component, OnInit } from '@angular/core';
import {data} from 'src/app/data';

@Component({
  selector: 'app-firts-component',
  templateUrl: './firts-component.component.html',
  styleUrls: ['./firts-component.component.scss']
})
export class FirtsComponentComponent implements OnInit {
  Data = data;
  constructor() { }

  ngOnInit() {

    let accordionToggles = document.getElementsByClassName('js-accordionTrigger'),
      setAria,
      setAccordionAria,
      switchAccordion,
      touchSupported = ('ontouchstart' in window),
      pointerSupported = ('pointerdown' in window);
    // console.log(accordionToggles)
  let skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

  let setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};

switchAccordion = function(e) {

	e.preventDefault();
  const thisAnswer = e.target.parentNode.nextElementSibling;
  const thisQuestion = e.target;
  // console.log(thisAnswer)
  if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');

  	thisAnswer.classList.toggle('animateIn');
	};

  let arr = [];

  setTimeout(()=> {
    for (let i=0; i < accordionToggles.length; i++) {
      if(touchSupported) {
        accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
      }
      if(pointerSupported){
        accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
      }
      accordionToggles[i].addEventListener('click', switchAccordion, false);

      if(typeof accordionToggles[i].childNodes[1].offsetParent.childNodes[i] != 'undefined' && accordionToggles[i].childNodes[1].offsetParent.childNodes[i].nodeName != '#comment' )
        arr.push(accordionToggles[i].childNodes[1].offsetParent.childNodes[i])
    }

}, 1000)

    function sort(reverse?) {
      arr.sort(function(nodeA, nodeB) {
        const textA = nodeA.children[0].firstChild.children[0].innerHTML;
        const textB = nodeB.children[0].firstChild.children[0].innerHTML;
        const numberA = parseInt(textA);
        const numberB = parseInt(textB);
        if (numberA < numberB) return reverse ? 1 : -1;
        if (numberA > numberB) return reverse ? - 1 : 1;
        return 0;
      })
      let node = document.querySelector('.accordion');
      node.innerHTML = '';

      arr.forEach((Node) => {
        node.appendChild(Node)
      });
    }

    let btnClicked = true;

    document.getElementById('btn').addEventListener('click', ()=> {
      if (btnClicked == true){
        sort()
        btnClicked = false;
      } else {
        sort(1)
        btnClicked = true;
      }

    })

  }

}
