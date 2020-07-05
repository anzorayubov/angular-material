import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-firts-component',
  templateUrl: './firts-component.component.html',
  styleUrls: ['./firts-component.component.scss']
})
export class FirtsComponentComponent implements OnInit {
  constructor() {

  }

  form: FormGroup

  ngOnInit() {
    // this.open()
    this.form = new FormGroup(
      {
        likes: new FormControl(''),
        reposts: new FormControl(''),
        link: new FormControl(''),
        boost: new FormControl(''),
        subscribers: new FormControl(''),
        play: new FormControl('')
      }
    )

    if (localStorage.getItem('key')) {
      return
    } else {
      localStorage.setItem('key', JSON.stringify([]))
    }
  }

  arr = JSON.parse(localStorage.getItem('key'))
  isOpen = false;
  likes: any;
  reposts: any;
  boost: any;
  subscribers: any;


  open() {
    // let modalOverlay = document.getElementById('modal-overlay');

    if (this.isOpen == false) {
      this.isOpen = true
    } else {
      this.isOpen = false
    }

  }

  close() {
    // let modalOverlay = document.getElementById('modal-overlay');
    if (this.isOpen == true) {
      // modalOverlay.style.display = 'none'
      this.isOpen = false
    }
    this.form.reset()

    this.isVk = false
    this.isInstagram = false
    this.isPost = false
  }

  removeItem(id) {
    this.arr = this.arr.filter((card) => {
      return card.id !== id
    })
    localStorage.setItem(`key`, JSON.stringify(this.arr));
  }

  addOrder() {
    this.arr = JSON.parse(localStorage.getItem('key'))


    let card = this.form.value
    card.id = Date.now()

    if (this.isPost)
      card.type = 'post'
    else card.type = 'account'

    // пушим value формы
    this.arr.push(card)
    // console.log(card)

    localStorage.setItem(`key`, JSON.stringify(this.arr));

    for (let i = 0; i < this.arr.length; i++) {

      this.arr = JSON.parse(localStorage.getItem('key'))
      // console.log(this.arr)
    }

    this.form.reset()
    this.close()
  }

  removeBox(id, event) {

    let type = event.target.parentNode.parentNode.parentNode.classList[0];

    // удалить ключ из объекта в массиве .. delete
    for (let i = 0; i < this.arr.length; i++) {
      if (id == this.arr[i].id) {
        // console.log(type)
        // delete this.arr[i][type]
        this.arr[i][type] = ''
        localStorage.setItem(`key`, JSON.stringify(this.arr));

        // длинна объекта/ для удаления корточки
        this.arr[i].objLength = Object.keys(this.arr[i]).length
        console.log(this.arr[i])

      }
    }
    this.tabIsOpen = false

  }

  isVk = false
  isInstagram = false
  isPost = false
  tabIsOpen = false;
  isPlay = true;

  checkIt(value) {

    let val = value.target.value;
    if (val.includes('vk.com')) {
      this.isVk = true
    } else {
      this.isVk = false
    }
    if (val.includes('instagram.com')) {
      this.isInstagram = true
    } else {
      this.isInstagram = false
    }
    if (val.includes('instagram.com/p/') || val.includes('photo') || val.includes('video') || val.includes('wall') || val.includes('market')) {
      this.isPost = true
    } else {
      this.isPost = false
    }

  }

  openTab() {
    if (this.tabIsOpen == false)
      this.tabIsOpen = true
    else
      this.tabIsOpen = false
  }

  play(id, event) {
    let type = event.target.parentNode.parentNode.parentNode.classList[0];
    // удалить ключ из объекта в массиве .. delete
    for (let i = 0; i < this.arr.length; i++) {
      if (id == this.arr[i].id) {

        if (this.arr[i].isPlay == false)
          this.arr[i].isPlay = true
        else {
          this.arr[i].isPlay = false
        }

        localStorage.setItem(`key`, JSON.stringify(this.arr));

      }
    }
    console.log(this.arr)


  }
}
