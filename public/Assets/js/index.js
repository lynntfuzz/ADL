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

  var parameters={
    id: '0', 
    AgentID: '0',
    OfficeID: "",
    CountryId: '1', // US
    RegionId: "CA", // will be default to user location
    RegionName: "California", // will be default to user location
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

  function showAdvancedSearch(){
    $("#advanced-city").val($("#basic-city").val());
    $("#advanced-zip").val($("#basic-zip").val());
    $("#advanced-min-val").val($("#basic-min-val").val());
    $("#advanced-max-val").val($("#basic-max-val").val());
    $("#advanced-unit-val").val($("#basic-unit-val").val());
    $(".basic-search").hide("fast");  
    $(".advanced-search").show("slow");
  }

});