let url = "https://widget.proxiopro.com/CRMLS/PropertyResult.aspx";

var paramsToUrl = function(params, baseUrl = url) {
  let paramStr = Object.keys(params).map(function(val) {
      return `${encodeURIComponent(val)}=${encodeURIComponent(params[val])}`;
  }).join('&');
  
  return `${baseUrl}?${paramStr}`;
}

for (var i=1; i<=3; i++){
  $.get("/cms/showcase/?id=" + i, function(data) {      
    $("#display-header-"+data.id).text(data.header+"");
    $("#display-body-"+data.id).text(data.body+"");
    $("#img-display-"+data.id).css("background-image", "url(assets/img/"+data.image_path+")");
    $("#img-display-"+data.id).data("src", data.image_path)
    $("#img-edit-"+data.id).attr("src", "assets/img/"+data.image_path);
  })
};

$(document).ready(function() {
  

  //Changes navbar when scrolling
  $(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
      $("#navbar-row-0").show("slow");
      $("#navbar-row-1").hide();
      $("#navbar-row-2").hide();
      $("#navbar-row-3").hide();
    } else if ($(document).scrollTop() < 25){
      $("#navbar-row-0").hide();
      $("#navbar-row-1").show();
      $("#navbar-row-2").show();
      $("#navbar-row-3").show();
    }
  });

  //default search parameters
  var parameters={
    id: '0', 
    AgentID: '0',
    OfficeID: "",
    CountryId: '1', // US
    RegionId: "CA", 
    RegionName: "California", 
    CityId: '-1',
    CityName: "",
    PostCode: "",
    CurrencyId: '490', // USD
    GarageCount: '-1',
    BedRoomCount: '-1',
    BathRoomCount: '-1',
    MinPrice: '0',
    MaxPrice: '0',
    YearBuilt: '0',
    YearBuiltTo: '0',
    PriceOption: 'down',
    ClassId: '-1',
    LivingAreaFrom: '0',
    LivingAreaTo: '0',
    LandAreaFrom: '0',
    LandAreaTo: '0',
    AreaUnit: '1',
    lng: 'en-US',
    AGENT: "",
    OFFICE: ""
  }

  //admin table elements
  var search = {};

  //basic search
  $("#basic-search-button").on("click", function(){
    if ($("#basic-city").val()){
      search.CityName = $("#basic-city").val();
      parameters.CityName = $("#basic-city").val();
      parameters.CityId = $("#basic-city").val();
    }
    if ($("#basic-zip").val()){
      search.PostCode = $("#basic-zip").val();
      parameters.PostCode = $("#basic-zip").val();
    }
    if ($("#basic-min-val").val()){
      search.MinPrice = $("#basic-min-val").val();
      parameters.MinPrice = $("#basic-min-val").val();
    }
    if ($("#basic-max-val").val()){
      search.MaxPrice = $("#basic-max-val").val();
      parameters.MaxPrice = $("#basic-max-val").val();
    }
    search.Currency = $("#basic-unit-val").find(':selected').data('label')
    parameters.CurrencyId = $("#basic-unit-val").val();
    var url = paramsToUrl(parameters);
    $("#widget-iframe").attr("src", url);
    $("#widget-modal").modal("toggle");
    postSearch(search);
  })

  //advanced search
  $("#advanced-search-button").on("click", function(){
    if ($("#advanced-city").val()){
      search.CityName = $("#advanced-city").val();
      parameters.CityName = $("#advanced-city").val();
      parameters.CityId = $("#advanced-city").val();
    }
    if ($("#advanced-zip").val()){
      search.PostCode = $("#advanced-zip").val();
      parameters.PostCode = $("#advanced-zip").val();
    }
    search.Type = $("#advanced-type").find(":selected").data("label");
    parameters.ClassId=$("#advanced-type").val();
    if ($("#advanced-year-start").val()){
      search.YearBuilt = $("#advanced-year-start").val();
      parameters.YearBuilt = $("#advanced-year-start").val();
    }
    if ($("#advanced-year-end").val()){
      search.YearBuiltTo = $("#advanced-year-end").val();
      parameters.YearBuiltTo = $("#advanced-year-end").val();
    }
    search.BedRoomCount = $("#advanced-bedrooms").val();
    parameters.BedRoomCount = $("#advanced-bedrooms").val();
    search.BathRoomCount = $("#advanced-bathrooms").val();
    parameters.BathRoomCount = $("#advanced-bathrooms").val();
    search.GarageCount = $("#advanced-garages").val();
    parameters.GarageCount = $("#advanced-garages").val();
    if ($("#advanced-min-val").val()){
      search.MinPrice = $("#advanced-min-val").val();
      parameters.MinPrice = $("#advanced-min-val").val();
    }
    if ($("#advanced-max-val").val()){
      search.MaxPrice = $("#advanced-max-val").val();
      parameters.MaxPrice = $("#advanced-max-val").val();
    }
    search.Currency = $("#advanced-unit-val").find(':selected').data('label')
    parameters.CurrencyId = $("#advanced-unit-val").val();
    if ($("#advanced-max-val").val()){
      search.LivingAreaFrom = $("#advanced-min-res-size").val();
      parameters.LivingAreaFrom = $("#advanced-min-res-size").val();
    }
    if ($("#advanced-max-val").val()){
      search.LivingAreaTo = $("#advanced-max-res-size").val();
      parameters.LivingAreaTo = $("#advanced-max-res-size").val();
    }
    if ($("#advanced-max-val").val()){
      search.LandAreaFrom = $("#advanced-min-lot-size").val();
      parameters.LandAreaFrom = $("#advanced-min-lot-size").val();
    }
    if ($("#advanced-max-val").val()){
      search.LandAreaTo = $("#advanced-max-lot-size").val();
      parameters.LandAreaTo = $("#advanced-max-lot-size").val();
    }
    search.AreaUnit = $("#advanced-unit-size").find(':selected').data('label')
    parameters.AreaUnit = $("#advanced-unit-size").val();    
    var url = paramsToUrl(parameters);    
    $("#widget-iframe").attr("src", url);    
    $("#widget-modal").modal("toggle");
    postSearch(search);
  })

  $("#advanced-button").on("click", function(){
    showAdvancedSearch();
  })

  $(".home-search").on("click", function(){
    showAdvancedSearch();
  })

  //expands search form
  function showAdvancedSearch(){
    $("#advanced-city").val($("#basic-city").val());
    $("#advanced-zip").val($("#basic-zip").val());
    $("#advanced-min-val").val($("#basic-min-val").val());
    $("#advanced-max-val").val($("#basic-max-val").val());
    $("#advanced-unit-val").val($("#basic-unit-val").val());
    $(".basic-search").hide("fast");  
    $(".advanced-search").show("slow");
  }

  //Edit showcase sections
  $(".edit-button").on("click", function(){
    if ($(this).text() != "Hide"){
      $(this).text("Hide");
    } else {
      $(this).text("Edit Section");
    }
    openEditSection($(this).data("number"));
  })

  //display edit form for the given seciton
  function openEditSection(number){
    $("#edit-section-"+number).toggle("slow");
    $("#edit-header-"+number).val($("#display-header-"+number).text());
    $("#edit-body-"+number).val($("#display-body-"+number).text());
    //$("#img-edit-"+number).data('src', $("#img-display-"+number).src());
  }

  //updates image when one is uploaded
  $(".img-upload").change(function(){
    var num = $(this).data("number");
    readURL(this, num)
  })

  //prevent forms from being submit on Enter
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  //reloads page and discards all changes
  $(".discard-button").on("click", function(){
    event.preventDefault();
    location.reload();
  })

  //updates database with new section info
  $(".submit-button").on("click", function(){
    event.preventDefault();

    var number = $(this).data("number");

    var fd = new FormData();
    fd.append('header', $("#edit-header-"+number).val());
    fd.append('body', $("#edit-body-"+number).val());    
    if ($("#img-display-"+number).data('image_path')) {
      fd.append('image_path', $("#img-display-"+number).data('image_path') );
      fd.append('file', $("#img-display-"+number).data('file'));
    }
    fd.append('id', number);
    updateShowcase(fd);
  })

  //update header and body as they are modified
  $(".edit-header").on("input", function(){
    var number = $(this).data("number")
    $("#display-header-"+number).text($("#edit-header-"+number).val());
  })

  $(".edit-body").on("input", function(){
    var number = $(this).data("number")
    $("#display-body-"+number).text($("#edit-body-"+number).val());
  })

  //interprets img upload
  function readURL(input, number) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img-edit-'+number)
                .attr('src', e.target.result)
                .height(200);
            $("#img-display-"+number).css("background-image", "url("+e.target.result+")");
            $("#img-display-"+number).data("file", input.files[0]);
            $("#img-display-"+number).data("image_path", input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);
    }
  }

  //updates a showcase
  function updateShowcase(edit) {
  
    $.ajax({
      url: "/cms/showcase",
      data: edit,
      processData: false,
      contentType:  false ,
      type: 'PUT',
      beforeSend: function(data){
        // disable button
        $(".submit-button").prop('disabled', true);
        // notify that file is uploading "File uploading..."
      },
      success: function(data){
        $(".submit-button").prop('disabled', false);
        $("#edit-section-"+edit.get('id')).toggle("slow");
      },
      error: function(err) {
        // notify user somehow
        // console.error(err)
        // reenable button
        $(".submit-button").prop('disabled', false);
      }
    });
  }

  function postSearch(query){
    $.post("/search", query, function() {
    }).then(function(data) {
      console.log(data);
    }).catch(function(err) {
      console.log(err);
    });
  }
});