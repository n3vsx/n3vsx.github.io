var controller = new ScrollMagic.Controller();

var content2_h2_title = new ScrollMagic.Scene({
    triggerElement: '#content2',
    reverse: false,
})
.setClassToggle('#content2-title' , 'content2-title-fade-in')
.addTo(controller);

var content2_p_title = new ScrollMagic.Scene({
    triggerElement: '#content2',
    reverse: false,
})
.setClassToggle('#content2-subtitle' , 'content2-title-fade-in')
.addTo(controller);

var usp_1 = new ScrollMagic.Scene({
    triggerElement: '#content2-subtitle',
})
.setClassToggle('#usp-1' , 'usp-1-fade')
.addIndicators({})
.addTo(controller);

var usp_2 = new ScrollMagic.Scene({
    triggerElement: '#content2-subtitle',
})
.setClassToggle('#usp-2' , 'usp-2-fade')
.addIndicators({})
.addTo(controller);