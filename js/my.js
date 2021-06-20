$(document).ready(function () {
  $('#eyeglassId').mouseenter(function () {
    $('#showOne,#showTwo,#showThree,showFour').css("visibility", "visible");
    $('#showTwo,#showThree,#showFour').css("visibility", "hidden");

  });

});

$(document).ready(function () {
  $('#showOne').mouseleave(function () {
    $('#showOne').css("visibility", "hidden");
  });
});

$(document).ready(function () {
  $('#sunglassId').mouseenter(function () {
    $('#showTwo').css("visibility", "visible");
    $('#showOne,#showThree,#showFour').css("visibility", "hidden");
  });
});


$(document).ready(function () {
  $('#showTwo').mouseleave(function () {
    $('#showTwo').css("visibility", "hidden");
  });
});

$(document).ready(function () {
  $('#lensId').mouseenter(function () {
    $('#showThree').css("visibility", "visible");
    $('#showTwo,#showOne,#showFour').css("visibility", "hidden");
  });

});

$(document).ready(function () {
  $('#showThree').mouseleave(function () {
    $('#showThree').css("visibility", "hidden");
  });
});

$(document).ready(function () {
  $('#discoverId').mouseenter(function () {
    $('#showFour').css("visibility", "visible");
    $('#showTwo,#showThree,#showOne').css("visibility", "hidden");
  });
});


$(document).ready(function () {
  $('#showFour').mouseleave(function () {
    $('#showFour').css("visibility", "hidden");
  });
});

// LOGIN POPUP 

$(document).ready(function () {
  $('#click_reg').click(function () {
    $('#show_reg').css("display", "block");
  });
});

$(document).ready(function () {
  $('#reg_can').click(function () {
    $('#show_reg').css("display", "none");

  });
});

// ---------------first time registration-----------------------

// $(document).ready(function(){
//   $('#reg_btn').click(function(){
//     $('#show_form').css("visibility","visible");
//   });
// });

// $(document).ready(function(){
//   $('#form_can').click(function(){
//     $('#show_form').css("visibility","hidden");
//     $('#show_reg').css("visibility","hidden");

//   });
// }); 

// ----------Sign In Form--------------------

$(document).ready(function () {
  $('#reg_btn').click(function () {
    $('#show_sigin').css("display", "block");
    $('#show_reg').css("display", "none");
  });
});

$(document).ready(function () {
  $('#sigin_can').click(function () {
    $('#show_sigin').css("display", "none");


  });
});

$(document).ready(function () {
  $('#sigin_btn').click(function () {
    $('#show_otp').css("display", "block");
    $('#show_sigin').css("display", "none");
    $('#show_reg').css("display", "none");
  });
});

$(document).ready(function () {
  $('#sigin_email').click(function () {
    $('#show_reg').css("display", "block");
    $('#show_sigin').css("display", "none");

  });
});

$(document).ready(function () {
  $('#sigin_frgtpass').click(function () {
    $('#show_forget').css("display", "block");
    $('#show_sigin').css("display", "none");
    $('#show_reg').css("display", "none");
  });
});

// ----------Otp Form--------------------

$(document).ready(function () {
  $('#otp_change').click(function () {
    $('#show_reg').css("display", "block");
    $('#show_otp').css("display", "none");

  });
});

$(document).ready(function () {
  $('#otp_pass').click(function () {
    $('#show_sigin').css("display", "block");
    $('#show_otp').css("display", "none");
  });
});



$(document).ready(function () {
  $('#otp_can').click(function () {
    $('#show_otp').css("display", "none");


  });
});

//----------- Forget----------

$(document).ready(function () {
  $('#forget_can').click(function () {
    $('#show_forget').css("display", "none");


  });
});


$(document).ready(function () {
  $('#clk_reg').click(function () {
    $('#show_reg').css("display", "block");
  });
});


$(document).ready(function () {
  $('#show_four').click(function () {
    $('#dis_fil_lf').css("display", "block");
    $('#show_four').css("display", "none");
    $('#show_2four').css("display", "block");
  });
});

$(document).ready(function () {
  $('#show_2four').click(function () {
    $('#dis_fil_lf').css("display", "none");
    $('#show_four').css("display", "block");
    $('#show_2four').css("display", "none");
  });
});





//  DESKTOP FILTER PAGE

$(document).ready(function () {
  $('#rim_one').click(function () {
    $('#rim_one').css("border", "3px solid #232F3E");
  });
});

$(document).ready(function () {
  $('#rim_two').click(function () {
    $('#rim_two').css("border", "3px solid #232F3E");
  });
});

$(document).ready(function () {
  $('#rim_three').click(function () {
    $('#rim_three').css("border", "3px solid #232F3E");
  });
});

$(document).ready(function () {
  $('#rim_four').click(function () {
    $('#rim_four').css("border", "3px solid #232F3E");
  });
});

$(document).ready(function () {
  $('#rim_five').click(function () {
    $('#rim_five').css("border", "3px solid #232F3E");
  });
});

$(document).ready(function () {
  $('#rim_six').click(function () {
    $('#rim_six').css("border", "3px solid #232F3E");
  });
});

$(document).ready(function () {
  $('#rim_seven').click(function () {
    $('#rim_seven').css("border", "3px solid #232F3E");
  });
});

$(document).ready(function () {
  $('#rim_eight').click(function () {
    $('#rim_eight').css("border", "3px solid #232F3E");
  });
});

$(document).ready(function () {
  $('#rim_nine').click(function () {
    $('#rim_nine').css("border", "3px solid #232F3E");
  });
});

$(document).ready(function () {
  $('#rim_ten').click(function () {
    $('#rim_ten').css("border", "3px solid #232F3E");
  });
});

$(document).ready(function () {
  $('#rim_elv').click(function () {
    $('#rim_elv').css("border", "3px solid #232F3E");
  });
});



$(document).ready(function () {
  $('#show_first_item').hide();
  $('#first_dropdown').click(function () {
    $('#show_first_item').toggle();
    // $('#icn_rot').css("transform", "rotate(180deg)");
  });
});

$(document).ready(function () {
  $('#show_second_item').hide();
  $('#second_dropdown').click(function () {
    $('#show_second_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_third_item').hide();
  $('#third_dropdown').click(function () {
    $('#show_third_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_fourth_item').hide();
  $('#fourth_dropdown').click(function () {
    $('#show_fourth_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_fifth_item').hide();
  $('#fifth_dropdown').click(function () {
    $('#show_fifth_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_six_item').hide();
  $('#six_dropdown').click(function () {
    $('#show_six_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_seven_item').hide();
  $('#seven_dropdown').click(function () {
    $('#show_seven_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_eight_item').hide();
  $('#eight_dropdown').click(function () {
    $('#show_eight_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_nine_item').hide();
  $('#nine_dropdown').click(function () {
    $('#show_nine_item').toggle();
  });
});

$(document).ready(function () {
  $('#show_ten_item').hide();
  $('#ten_dropdown').click(function () {
    $('#show_ten_item').toggle();
  });
});












//MOBILE FILTER PAGE 

$(document).ready(function () {
  $('#main_filt_btn').click(function () {
    $('.main_filt_con').css("display", "none");
    $('#main_show_prod_filt').css("display", "block");
  });

  $('#main_filt_can_btn').click(function () {
    $('#main_show_prod_filt').css("display", "none");
    $('.main_filt_con').css("display", "block");
  });

});

$(document).ready(function () {
  $('#sec_btn_flt').click(function () {
    $('#mob_fr_shp_show').css("display", "block");
    $('#sec_btn_flt').css("display", "none");
    $('#sec_btn_flt_ls').css("display", "block");
  });

  $('#sec_btn_flt_ls').click(function () {
    $('#mob_fr_shp_show').css("display", "none");
    $('#sec_btn_flt').css("display", "block");
    $('#sec_btn_flt_ls').css("display", "none");

  });

});


$(document).ready(function () {
  $('#thr_btn_flt_mor').click(function () {
    $('#thr_fr_shp_show').css("display", "block");
    $('#thr_btn_flt_mor').css("display", "none");
    $('#thr_btn_flt_ls').css("display", "block");
  });

  $('#thr_btn_flt_ls').click(function () {
    $('#thr_fr_shp_show').css("display", "none");
    $('#thr_btn_flt_mor').css("display", "block");
    $('#thr_btn_flt_ls').css("display", "none");

  });

});

$(document).ready(function () {
  $('#four_btn_flt_mor').click(function () {
    $('#four_fr_shp_show').css("display", "block");
    $('#four_btn_flt_mor').css("display", "none");
    $('#four_btn_flt_ls').css("display", "block");
  });

  $('#four_btn_flt_ls').click(function () {
    $('#four_fr_shp_show').css("display", "none");
    $('#four_btn_flt_mor').css("display", "block");
    $('#four_btn_flt_ls').css("display", "none");

  });
});

$(document).ready(function () {
  $('#five_btn_flt_mor').click(function () {
    $('#five_fr_shp_show').css("display", "block");
    $('#five_btn_flt_mor').css("display", "none");
    $('#five_btn_flt_ls').css("display", "block");
  });

  $('#five_btn_flt_ls').click(function () {
    $('#five_fr_shp_show').css("display", "none");
    $('#five_btn_flt_mor').css("display", "block");
    $('#five_btn_flt_ls').css("display", "none");

  });
});

$(document).ready(function () {
  $('#six_btn_flt_mor').click(function () {
    $('#six_fr_shp_show').css("display", "block");
    $('#six_btn_flt_mor').css("display", "none");
    $('#six_btn_flt_ls').css("display", "block");
  });

  $('#six_btn_flt_ls').click(function () {
    $('#six_fr_shp_show').css("display", "none");
    $('#six_btn_flt_mor').css("display", "block");
    $('#six_btn_flt_ls').css("display", "none");

  });
});

$(document).ready(function () {
  $('#sev_btn_flt_mor').click(function () {
    $('#sev_fr_shp_show').css("display", "block");
    $('#sev_btn_flt_mor').css("display", "none");
    $('#sev_btn_flt_ls').css("display", "block");
  });

  $('#sev_btn_flt_ls').click(function () {
    $('#sev_fr_shp_show').css("display", "none");
    $('#sev_btn_flt_mor').css("display", "block");
    $('#sev_btn_flt_ls').css("display", "none");

  });
});

$(document).ready(function () {
  $('#click_hrt').click(function () {
    $('#show_hrt').css("display", "block");
    $('#click_hrt').css("display", "none");
  });

  $('#show_hrt').click(function () {
    $('#click_hrt').css("display", "block");
    $('#show_hrt').css("display", "none");
  });


});


//MOBILE SORT PAGE
$(document).ready(function () {
  $('#main_sort_btn').click(function () {
    $('.main_filt_con').css("display", "none");
    $('#main_show_prod_sort').css("display", "block");
  });

  $('#main_sort_can_btn').click(function () {
    $('#main_show_prod_sort').css("display", "none");
    $('.main_filt_con').css("display", "block");
  });

});


//SINGLE PRODUCT  PAGE 

$(document).ready(function () {
  $('#single_prd_click_feature').click(function () {
    $('#single_prd_click_feature').css("color", "black");
    $('#single_prd_clk_desc').css("color", "#C2C2C3");
    $('#single_prd_click_table').css("color", "#C2C2C3");
    $('#single_prd_feature').css("display", "inline-block");
    $('#single_prd_desc').css("display", "none");
    $('#single_prd_table').css("display", "none");
  });

  $('#single_prd_clk_desc').click(function () {
    $('#single_prd_clk_desc').css("color", "black");
    $('#single_prd_clk_feature').css("color", "#C2C2C3");
    $('#single_prd_click_table').css("color", "#C2C2C3");
    $('#single_prd_desc').css("display", "block");
    $('#single_prd_feature').css("display", "none");
    $('#single_prd_table').css("display", "none");
  });

  $('#single_prd_click_table').click(function () {
    $('#single_prd_click_table').css("color", "black");
    $('#single_prd_clk_desc').css("color", "#C2C2C3");
    $('#single_prd_click_feature').css("color", "#C2C2C3");
    $('#single_prd_table').css("display", "block");
    $('#single_prd_feature').css("display", "none");
    $('#single_prd_desc').css("display", "none");
  });

});












