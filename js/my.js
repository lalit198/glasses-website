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
  //   $('#main_filt_btn').click(function () {
  //     $('.main_filt_con').css("display", "none");
  //     $('#main_show_prod_filt').css("display", "block");
  //   });

  //   $('#main_filt_can_btn').click(function () {
  //     $('#main_show_prod_filt').css("display", "none");
  //     $('.main_filt_con').css("display", "block");
  //   });

  // });

  // $(document).ready(function () {
  //   $('#sec_btn_flt').click(function () {
  //     $('#mob_fr_shp_show').css("display", "block");
  //     $('#sec_btn_flt').css("display", "none");
  //     $('#sec_btn_flt_ls').css("display", "block");
  //   });

  //   $('#sec_btn_flt_ls').click(function () {
  //     $('#mob_fr_shp_show').css("display", "none");
  //     $('#sec_btn_flt').css("display", "block");
  //     $('#sec_btn_flt_ls').css("display", "none");

  //   });

  // });


  // $(document).ready(function () {
  //   $('#thr_btn_flt_mor').click(function () {
  //     $('#thr_fr_shp_show').css("display", "block");
  //     $('#thr_btn_flt_mor').css("display", "none");
  //     $('#thr_btn_flt_ls').css("display", "block");
  //   });

  //   $('#thr_btn_flt_ls').click(function () {
  //     $('#thr_fr_shp_show').css("display", "none");
  //     $('#thr_btn_flt_mor').css("display", "block");
  //     $('#thr_btn_flt_ls').css("display", "none");

  //   });

  // });

  // $(document).ready(function () {
  //   $('#four_btn_flt_mor').click(function () {
  //     $('#four_fr_shp_show').css("display", "block");
  //     $('#four_btn_flt_mor').css("display", "none");
  //     $('#four_btn_flt_ls').css("display", "block");
  //   });

  //   $('#four_btn_flt_ls').click(function () {
  //     $('#four_fr_shp_show').css("display", "none");
  //     $('#four_btn_flt_mor').css("display", "block");
  //     $('#four_btn_flt_ls').css("display", "none");

  //   });
  // });

  // $(document).ready(function () {
  //   $('#five_btn_flt_mor').click(function () {
  //     $('#five_fr_shp_show').css("display", "block");
  //     $('#five_btn_flt_mor').css("display", "none");
  //     $('#five_btn_flt_ls').css("display", "block");
  //   });

  //   $('#five_btn_flt_ls').click(function () {
  //     $('#five_fr_shp_show').css("display", "none");
  //     $('#five_btn_flt_mor').css("display", "block");
  //     $('#five_btn_flt_ls').css("display", "none");

  //   });
  // });

  // $(document).ready(function () {
  //   $('#six_btn_flt_mor').click(function () {
  //     $('#six_fr_shp_show').css("display", "block");
  //     $('#six_btn_flt_mor').css("display", "none");
  //     $('#six_btn_flt_ls').css("display", "block");
  //   });

  //   $('#six_btn_flt_ls').click(function () {
  //     $('#six_fr_shp_show').css("display", "none");
  //     $('#six_btn_flt_mor').css("display", "block");
  //     $('#six_btn_flt_ls').css("display", "none");

  //   });
  // });

  // $(document).ready(function () {
  //   $('#sev_btn_flt_mor').click(function () {
  //     $('#sev_fr_shp_show').css("display", "block");
  //     $('#sev_btn_flt_mor').css("display", "none");
  //     $('#sev_btn_flt_ls').css("display", "block");
  //   });

  //   $('#sev_btn_flt_ls').click(function () {
  //     $('#sev_fr_shp_show').css("display", "none");
  //     $('#sev_btn_flt_mor').css("display", "block");
  //     $('#sev_btn_flt_ls').css("display", "none");

  //   });
  // });



  // 1 filter

  $('#mobile_srt').click(function () {
    $('#mobile_srt').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_srt').css("display", "block");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 2 filter

  $('#mobile_frm_typ').click(function () {
    $('#mobile_frm_typ').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#show_mobile_frm_typ').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 3 filter
  $('#mobile_frm_shp').click(function () {
    $('#mobile_frm_shp').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_frm_shp').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 4 filter

  $('#mobile_frm_clr').click(function () {
    $('#mobile_frm_clr').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_frm_clr').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 5 filter

  $('#mobile_brnd').click(function () {
    $('#mobile_brnd').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_brnd').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 6 filter

  $('#mobile_frm_siz').click(function () {
    $('#mobile_frm_siz').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_frm_siz').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 7 filter

  $('#mobile_prc').click(function () {
    $('#mobile_prc').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_prc').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 8 filter

  $('#mobile_gndr').click(function () {
    $('#mobile_gndr').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_gndr').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 9 filter
  $('#mobile_matrl').click(function () {
    $('#mobile_matrl').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });



    $('#show_mobile_matrl').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 10 filter

  $('#mobile_wght_grp').click(function () {
    $('#mobile_wght_grp').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_wght_grp').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 11 filter

  $('#mobile_pres_typ').click(function () {
    $('#mobile_pres_typ').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_pres_typ').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 12 filter

  $('#mobile_coll').click(function () {
    $('#mobile_coll').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });



    $('#show_mobile_coll').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 13 Filter
  $('#mobile_grs_clr').click(function () {
    $('#mobile_grs_clr').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mob_frame_wid').css({ "background-color": "transparent", "color": "black" });


    $('#show_mobile_grs_clr').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_mtrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mob_frame_wid').css("display", "none");
  });

  // 14 filter
  $('#mob_frame_wid').click(function () {
    $('#mob_frame_wid').css({ "background-color": "#18CFA8", "color": "white" });

    $('#mobile_srt').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_shp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_clr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_brnd').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_frm_siz').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_prc').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_gndr').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_matrl').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_wght_grp').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_pres_typ').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_coll').css({ "background-color": "transparent", "color": "black" });
    $('#mobile_grs_clr').css({ "background-color": "transparent", "color": "black" });


    $('#show_mob_frame_wid').css("display", "block");
    $('#show_mobile_srt').css("display", "none");
    $('#show_mobile_frm_typ').css("display", "none");
    $('#show_mobile_frm_shp').css("display", "none");
    $('#show_mobile_frm_clr').css("display", "none");
    $('#show_mobile_brnd').css("display", "none");
    $('#show_mobile_frm_siz').css("display", "none");
    $('#show_mobile_prc').css("display", "none");
    $('#show_mobile_gndr').css("display", "none");
    $('#show_mobile_matrl').css("display", "none");
    $('#show_mobile_wght_grp').css("display", "none");
    $('#show_mobile_pres_typ').css("display", "none");
    $('#show_mobile_coll').css("display", "none");
    $('#show_mobile_grs_clr').css("display", "none");
  });

});

$('input[type=radio]').click(function(){
  if (this.previous) {
      this.checked = false;
  }
  this.previous = this.checked;
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
  $('.single_prd_click_feature').click(function () {
    $('.single_prd_click_feature').css("color", "black");
    $('.single_prd_clk_desc').css("color", "#C2C2C3");
    $('.single_prd_click_table').css("color", "#C2C2C3");
    $('.single_prd_feature').css("display", "inline-block");
    $('.single_prd_desc').css("display", "none");
    $('.single_prd_table').css("display", "none");
  });

  $('.single_prd_clk_desc').click(function () {
    $('.single_prd_clk_desc').css("color", "black");
    $('.single_prd_clk_feature').css("color", "#C2C2C3");
    $('.single_prd_click_table').css("color", "#C2C2C3");
    $('.single_prd_desc').css("display", "block");
    $('.single_prd_feature').css("display", "none");
    $('.single_prd_table').css("display", "none");
  });

  $('.single_prd_click_table').click(function () {
    $('.single_prd_click_table').css("color", "black");
    $('.single_prd_clk_desc').css("color", "#C2C2C3");
    $('.single_prd_click_feature').css("color", "#C2C2C3");
    $('.single_prd_table').css("display", "block");
    $('.single_prd_feature').css("display", "none");
    $('.single_prd_desc').css("display", "none");
  });

});

$(document).ready(function () {
  $('#click_1caro_single_prd').click(function () {
    $('#show_1caro_single_prd').show();
    $('#show_2caro_single_prd').hide();
    $('#show_3caro_single_prd').hide();
    $('#show_4caro_single_prd').hide();
    $('#show_5caro_single_prd').hide();
  });

  $('#click_2caro_single_prd').click(function () {
    $('#show_2caro_single_prd').show();
    $('#show_1caro_single_prd').hide();
    $('#show_3caro_single_prd').hide();
    $('#show_4caro_single_prd').hide();
    $('#show_5caro_single_prd').hide();
  });

  $('#click_3caro_single_prd').click(function () {
    $('#show_3caro_single_prd').show();
    $('#show_2caro_single_prd').hide();
    $('#show_1caro_single_prd').hide();
    $('#show_4caro_single_prd').hide();
    $('#show_5caro_single_prd').hide();
  });

  $('#click_4caro_single_prd').click(function () {
    $('#show_4caro_single_prd').show();
    $('#show_2caro_single_prd').hide();
    $('#show_3caro_single_prd').hide();
    $('#show_1caro_single_prd').hide();
    $('#show_5caro_single_prd').hide();
  });

  $('#click_5caro_single_prd').click(function () {
    $('#show_5caro_single_prd').show();
    $('#show_2caro_single_prd').hide();
    $('#show_3caro_single_prd').hide();
    $('#show_1caro_single_prd').hide();
    $('#show_4caro_single_prd').hide();
  });
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});



//  $(document).ready(function(){
//    $('.show_hrt').hide();
//    $('.click_hrt').click(function(){
//      var hrt = $(this).next('.show_hrt');
//      hrt.show();
//      $(this).show();

//    });

//  });




// $(document).ready(function(){
//   $(".like").click(function(){
//     $(this).toggleClass("show_hrt");

//   });

// });

// $(document).ready(function(){
//   $(".rim_div").click(function(){
//     $(this).toggleClass("show_rim");

//   });

// });


$(document).ready(function(){
  $(".clk_sngl_clr_choose").click(function(){
    $(this).addClass("fir");

  });

});