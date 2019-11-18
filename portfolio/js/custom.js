var tlFirstScroll = new TimeLineMax();

tlFirstScroll
    .set('#usp-1', {y: "-10%"})
    .to('#usp-1', {y: "0%"})

var controller = new ScrollMagic.Controller();

var usp_animation = new ScrollMagic.Scene({
    triggerElement: '#content2-subtitle',

})

.setTween(tlFirstScroll)
.addIndicators()
.addTo(controller);


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


