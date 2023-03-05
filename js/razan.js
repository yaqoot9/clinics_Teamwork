// start scroll navbar by razan //
  $(window).scroll(function(){
    let t = $(window).scrollTop();
    if(t>=700){
      $('.navbar').addClass('bg-black')
      $('.navbar').removeClass('bg-transparent')
      $('.navbar').css('transition','.5s')
      $('.btnTop').css('display','block')
      
    }else{
      $('.navbar').addClass('bg-transparent')
      $('.navbar').removeClass('bg-black')
      $('.btnTop').css('display','none')
      


    } 
  })

  $('.btnTop').click(function(){
    
    $(window).scrollTop(0)
  })
  // end scroll navbar by razan//