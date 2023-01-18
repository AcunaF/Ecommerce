import { OnInit, Component, ViewEncapsulation, ViewChild } from '@angular/core';
// import Swiper JS
import SwiperCore, {
  SwiperOptions,
  Pagination,
  Virtual,
  Swiper,
  Navigation,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-coroucel',
  templateUrl: './coroucel.component.html',
  styleUrls: ['./coroucel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CoroucelComponent implements OnInit {
  //@ViewChild('Swiper') newSwiper: any;
  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  public swiperConfig: SwiperOptions = {
    pagination: true,
    slidesPerView: 1,
    spaceBetween: 1,
    freeMode: true,
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  };
  constructor() {}

  ngOnInit(): void {
    Swiper.use([Pagination]);
    SwiperCore.use([Virtual]);
  }
  sliderA_next() {
    this.swiper.swiperRef.slideNext(100);
  }
  sliderB_prev() {
    this.swiper.swiperRef.slidePrev(100);
  }
}
