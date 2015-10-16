$(function(){
    $('.panel').on('show.bs.collapse', function(){
      $(this).find('.fa').addClass('fa-caret-left').removeClass('fa-caret-down');
    });
    $('.panel').on('hide.bs.collapse', function(){
      $(this).find('.fa').addClass('fa-caret-down').removeClass('fa-caret-left');
    });
});