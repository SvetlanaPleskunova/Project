$(document).on('click', '.open', function(){
    $(this).siblings('.cont').toggleClass('hide');
  });
  /*<script >
                    $(document).ready(function(){
                        $("input#qwe").change(function(){
                            if ($(this).prop('checked')) {
                            $('#money').fadeIn().show();
                            } else {
                                $('#money').fadeOut(300); 
                            }
                            });
                        })
                    </script>*/