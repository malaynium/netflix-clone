/*
author:Wan
email:hello.wanlab@gmail.com
website:malaynium.my
april 2020
## Full Stack! Eat Sleep Code Repeat ##
*/

/* Grab tab Items and tab Content Item */
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'))
}

// Select tab content item to display
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add('tab-border');
  // Grab content item to display from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class to display the selected tabcontentitems
  tabContentItem.classList.add('show');
}

// Listen tab click for all the 3 tab items. When click run function selectItem to display the tab contents.
tabItems.forEach(item => item.addEventListener('click', selectItem));


