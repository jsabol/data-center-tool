$(function(){
    $('.panel').on('show.bs.collapse', function(){
      $(this).find('.fa').addClass('fa-caret-down').removeClass('fa-caret-right');
    });
    $('.panel').on('hide.bs.collapse', function(){
      $(this).find('.fa').addClass('fa-caret-right').removeClass('fa-caret-down');
    });
    
    $('.yellow-bar').tooltip({
      title: "In Progress",
      placement: 'left'
    });
    
    $('.green-bar').tooltip({
      title: "Complete",
      placement: 'left'
    });
});