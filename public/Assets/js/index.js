let url = "http://widget.proxiopro.com/CRMLS/PropertyResult.aspx";

var paramsToUrl = function(params, baseUrl = url) {
  let paramStr = Object.keys(params).map(function(val) {
      return `${encodeURIComponent(val)}=${encodeURIComponent(params[val])}`;
  }).join('&');
  
  return `${baseUrl}?${paramStr}`;
}

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

  //basic search
  $("#basic-search-button").on("click", function(){
    if ($("#basic-city").val()){
      parameters.CityName = $("#basic-city").val();
    }
    if ($("#basic-zip").val()){
      parameters.PostCode = $("#basic-zip").val();
    }
    if ($("#basic-min-val").val()){
      parameters.MinPrice = $("#basic-min-val").val();
    }
    if ($("#basic-max-val").val()){
      parameters.MaxPrice = $("#basic-max-val").val();
    }
    parameters.CurrencyId = $("#basic-unit-val").val();    
    var url = paramsToUrl(parameters);
    $("#widget-iframe").attr("src", url);    
    $("#widget-modal").modal("toggle");
  })

  //advanced search
  $("#advanced-search-button").on("click", function(){
    if ($("#advanced-city").val()){
      parameters.CityName = $("#advanced-city").val();
    }
    if ($("#advanced-zip").val()){
      parameters.PostCode = $("#advanced-zip").val();
    }
    parameters.ClassId=$("#advanced-type").val()
    if ($("#advanced-year-start").val()){
      parameters.YearBuilt = $("#advanced-year-start").val();
    }
    if ($("#advanced-year-end").val()){
      parameters.YearBuiltTo = $("#advanced-year-end").val();
    }
    parameters.BedRoomCount = $("#advanced-bedrooms").val();
    parameters.BathRoomCount = $("#advanced-bathrooms").val();
    parameters.GarageCount = $("#advanced-garages").val();
    if ($("#advanced-min-val").val()){
      parameters.MinPrice = $("#advanced-min-val").val();
    }
    if ($("#advanced-max-val").val()){
      parameters.MaxPrice = $("#advanced-max-val").val();
    }
    parameters.CurrencyId = $("#advanced-unit-val").val();
    if ($("#advanced-max-val").val()){
      parameters.LivingAreaFrom = $("#advanced-min-res-size").val();
    }
    if ($("#advanced-max-val").val()){
      parameters.LivingAreaTo = $("#advanced-max-res-size").val();
    }
    if ($("#advanced-max-val").val()){
      parameters.LandAreaFrom = $("#advanced-min-lot-size").val();
    }
    if ($("#advanced-max-val").val()){
      parameters.LandAreaTo = $("#advanced-max-lot-size").val();
    }
    parameters.AreaUnit = $("#advanced-unit-size").val();    
    var url = paramsToUrl(parameters);
    $("#widget-iframe").attr("src", url);    
    $("#widget-modal").modal("toggle");
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
    $("#edit-header-"+number).val($("#display-header-"+number).text())
    $("#edit-body-"+number).val($("#display-body-"+number).text())
  }

  //updates image when one is uploaded
  $(".img-upload").change(function(){
    var num = $(this).data("number")
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
    location.reload();
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
            $("#img-display-"+number).css("background-image", "url("+e.target.result+")")            
        };

        reader.readAsDataURL(input.files[0]);
    }
  }
});