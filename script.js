// List.js set-up and initialisation

var options = {
    valueNames: [
      "jobTitle",
      "jobType",
      "datePosted",
      "jobLocation",
      { attr: "href", name: "applyLink" }
    ],
    item:
      '<li><a class="applyLink"><h3 class="jobTitle"></h3></a><div class="bottomBox"><div class="left-part"><p class="jobType"></p><p class="jobLocation"></p></div><div class="dateBox"><p class="datePosted"></p></div></div></li>',
    page: 6,
    pagination: {
      innerWindow: 2,
      left: 1,
      right: 1,
      paginationClass: "pagination"
    }
  };
  
  var values = [
    {
      jobTitle: "PHP & ASP.NET Developer",
      jobType: "Full Time",
      datePosted: "2016-08-19",
      jobLocation:"Hyderabad",
      applyLink: "#"
    },
    {
      jobTitle: "Data Scientist",
      jobType: "Full Time",
      jobLocation:"Bengaluru",
      datePosted: "2018-08-19",
      applyLink: "#"
    },
    {
      jobTitle: "Business Development Manager",
      jobType: "Contract",
      jobLocation:"Bengaluru",
      datePosted: "2018-07-19",
      applyLink: "#"
    },
  
    {
      jobTitle: "Graphic Designer",
      jobType: "Part Time",
      jobLocation:"Dubai",
      datePosted: "2019-07-19",
      applyLink: "#"
    },
  
    {
      jobTitle: "Marketing Lead",
      jobType: "Full Time",
      jobLocation:"Hyderabad",
      datePosted: "2018-07-19",
      applyLink: "#"
    },
  
    {
      jobTitle: "Motion graphic Artist",
      jobType: "Full Time",
      jobLocation:"Hyderabad",
      datePosted: "2019-02-11",
      applyLink: "#"
    },
  
    {
      jobTitle: "Node Js Developer",
      jobType: "Full Time",
      jobLocation:"Seattle",
      datePosted: "2018-07-19",
      applyLink: "#"
    },
  
    {
      jobTitle: "Angular & React Developer",
      jobType: "Part Time",
      jobLocation:"London",
      datePosted: "2018-07-19",
      applyLink: "#"
    },
    {
      jobTitle: "Zseries It Specialist",
      jobType: "full Time",
      jobLocation:"Dubai",
      datePosted: "2014-01-19",
      applyLink: "#"
    },
    {
      jobTitle: "Senior Content Writer",
      jobType: "Full Time",
      jobLocation:"Hyderabad",
      datePosted: "2018-07-19",
      applyLink: "#"
    }
  ];
  
  var userList = new List("sandbox", options, values);
  userList.sort("datePosted", {
    order: "desc"
  });
  
  $(".jPaginateNext").on("click", function() {
    var list = $(".pagination").find("li");
    $.each(list, function(position, element) {
      if ($(element).is(".active")) {
        $(list[position + 1]).trigger("click");
      }
    });
  });
  
  $(".jPaginateBack").on("click", function() {
    var list = $(".pagination").find("li");
    $.each(list, function(position, element) {
      if ($(element).is(".active")) {
        $(list[position - 1]).trigger("click");
      }
    });
  });
  
  $('#type-filter').change(function () {
      var selection = this.value;
      if (selection) {
          userList.filter(function(item) {
              return (item.values().jobType == selection);
          });
      } else {
          userList.filter();
      }
  });
  
  $('#location-filter').change(function () {
      var selection = this.value;
      if (selection) {
          userList.filter(function(item) {
              return (item.values().jobLocation == selection);
          });
      } else {
          userList.filter();
      }
  });
  
  $('.mobFilter').click(function() {
     $('.porpSection').addClass('activeMob');
     $('body').addClass('filterActive')
      
  });
  
  $('.xbutton').click(function(){
     $('.porpSection').removeClass('activeMob');
     $('body').removeClass('filterActive')
  });
  
  $('.selectlist').change(function(){
        $('.porpSection').removeClass('activeMob');
     $('body').removeClass('filterActive')           
  });