$(document).ready(function () {

    $(function () {
        let $priceSlider = $("#priceRange_1");
        let instance_amount;
        $amountFrom = $("#range1");
        $amountTo = $("#range2");
        $priceSlider.ionRangeSlider({
            type: "double",
            min: 10,
            max: 95,
            from: 15,
            to: 70,
            step: 10,
            prefix: "Rs. ",
            postfix: "",
            prettify_enabled: true,
            prettify_separator: ",",
            keyboard: true,
            grid: true,
            onStart: updateAmountInputs,
            onChange: updateAmountInputs,
            // onUpdate: globalHomeLoanAmtEmi,
            // onFinish: emiCalc,
        });
        instance_amount = $priceSlider.data("ionRangeSlider");

        function updateAmountInputs(data) {
            from_amount = data.from;
            to_amount = data.to;
            //from_amount = from_amount.toLocaleString("en-IN");
            $amountFrom.attr("value", from_amount);
            $amountTo.attr("value", to_amount);
            // globalHomeLoanAmtEmi();
        }
        $amountFrom.on("input", function () {
            var val = $(this).prop("value");
            // validate
            if (val > 95) {
                val = 95;
            } else if (val < 10) {
                val = 10;
            }
            instance_amount.update({
                from: val,
            });
        });
        $amountTo.on("input", function () {
            var val = $(this).prop("value");
            // validate
            if (val > 95) {
                val = 95;
            } else if (val < 10) {
                val = 10;
            }
            instance_amount.update({
                from: val,
            });
        });
        // Banner Price
        let $priceSliderBanner = $("#priceSearch");
        let instance_amount_banner;
        // $amountFrom = $("#range1");
        // $amountTo = $("#range2");
        $priceSliderBanner.ionRangeSlider({
            type: "single",
            min: 1000000,
            max: 500000000,
            from: 50000000,
            to: 400000000,
            step: 25000000,
            prefix: "Rs. ",
            postfix: "",
            prettify_enabled: true,
            prettify_separator: ",",
            keyboard: true,
            grid: true,
            // onStart: updateAmountInputs,
            // onChange: updateAmountInputs,
            // onUpdate: globalHomeLoanAmtEmi,
            // onFinish: emiCalc,
        });

    })


    $(document).on("click", "#advanceBtn", function () {
        console.log("Dipanshu");
        $(".priceSearch").removeClass("d-none")
    });
    $(document).on("click", "#backBtn", function () {
        console.log("Dipanshu");
        $(".priceSearch").addClass("d-none")
    });
    let minValue, maxValue;

    $("#priceRange_1").on("change", function (e) {
        var splitArray = $(this).val().split(";");
        var minValue = splitArray[0];
        var maxValue = splitArray[1];
        console.log(minValue)
        console.log(maxValue);
    });

    let allCards = $("#prop-price-range-slider").find(".item");
    // console.log(allCards);
    let arrayCards = Array.from(allCards)
    arrayCards.forEach(function (cards) {
        let propertyPrice = $(cards).find(".propertyPrice").text().trim().split(" ");
        const price = propertyPrice.filter((newArr) => {
            return newArr !== ""
        })
        let priceOne = price[4]
        console.log(priceOne);
        if (priceOne >= minValue && priceOne <= maxValue) {
            cards.style.display = "block";
        } else {
            cards.style.display = "none";
        }
    })

    const properties = [
        { city: "Kanpur", state: "UP", marketPrice: "100", title: "underconstruction", bhk: "1", carpetArea: "12", pricePerSquare: "23", nikul: "Nikul", signature: "signature", propertyType: "Residential", imageUrl: "/content/dam/new-icicihfc-assets/propertyauctionimage/img1.webp" },
        { city: "Kanpur", state: "UP", marketPrice: "500", title: "underconstruction", bhk: "1", carpetArea: "24", pricePerSquare: "25", nikul: "Nikul", signature: "signature", propertyType: "Commercial", imageUrl: "/content/dam/new-icicihfc-assets/propertyauctionimage/img1.webp" },
        { city: "Kanpur", state: "UP", marketPrice: "400", title: "underconstruction", bhk: "1", carpetArea: "36", pricePerSquare: "30", nikul: "Nikul", signature: "signature", propertyType: "Residential", imageUrl: "/content/dam/new-icicihfc-assets/propertyauctionimage/img1.webp" },
        { city: "Kanpur", state: "Rajasthan", marketPrice: "300", title: "underconstruction", bhk: "1", carpetArea: "48", pricePerSquare: "40", nikul: "Nikul", signature: "signature", propertyType: "Commercial", imageUrl: "/content/dam/new-icicihfc-assets/propertyauctionimage/img1.webp" },
        { city: "Banglore", state: "Karnataka", marketPrice: "200", title: "underconstruction", bhk: "1", carpetArea: "12", pricePerSquare: "50", nikul: "Nikul", signature: "signature", propertyType: "Residential", imageUrl: "/content/dam/new-icicihfc-assets/propertyauctionimage/img1.webp" },
        { city: "Patna", state: "Bihar", marketPrice: "800", title: "underconstruction", bhk: "2", carpetArea: "12", pricePerSquare: "60", nikul: "Nikul", signature: "signature", propertyType: "Residential", imageUrl: "/content/dam/new-icicihfc-assets/propertyauctionimage/img1.webp" },
        { city: "Indore", state: "MP", marketPrice: "700", title: "underconstruction", bhk: "1", carpetArea: "60", pricePerSquare: "70", nikul: "Nikul", signature: "signature", propertyType: "Commercial", imageUrl: "/content/dam/new-icicihfc-assets/propertyauctionimage/img1.webp" },
        { city: "Ahamedabad", state: "Gujrat", marketPrice: "600", title: "underconstruction", bhk: "2", carpetArea: "72", pricePerSquare: "75", nikul: "Nikul", signature: "signature", propertyType: "Residential", imageUrl: "/content/dam/new-icicihfc-assets/propertyauctionimage/img1.webp" },
        { city: "Mohali", state: "Punjab", marketPrice: "400", title: "underconstruction", bhk: "1", carpetArea: "84", pricePerSquare: "80", nikul: "Nikul", signature: "signature", propertyType: "Residential", imageUrl: "/content/dam/new-icicihfc-assets/propertyauctionimage/img1.webp" },
        { city: "Karnal", state: "Haryana", marketPrice: "300", title: "underconstruction", bhk: "2", carpetArea: "96", pricePerSquare: "90", nikul: "Nikul", signature: "signature", propertyType: "Commercial", imageUrl: "/content/dam/new-icicihfc-assets/propertyauctionimage/img1.webp" },

    ];
    function owlCarousel(){
        $('#hot-prop-slider').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: true,
            dots: false,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            autoplay: true,
            autoplayHoverPause: false,
            autoplaySpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });
    }
    let previewTemplate;
    previewTemplate = Handlebars.compile($("#preview-template").html());

    // var html = '';
    $("#hot-prop-slider").html(previewTemplate({ properties: properties }));
    owlCarousel()
    $("#propertyType, #city, #state, #marketPriceValue").on("change", function () {
        let filteredPropertyValue = $("#propertyType").val();
        let filteredCityValue = $("#city").val();
        let filteredStateValue = $("#state").val();
        let filteredPriceValue = $("#marketPriceValue").val();
        let filteredProperties = properties;
        if (filteredPropertyValue) {
            filteredProperties = filteredProperties.filter((property) => property.propertyType === filteredPropertyValue);
        }
        if (filteredCityValue) {
            filteredProperties = filteredProperties.filter((property) => property.city === filteredCityValue);
        }
        if (filteredStateValue) {
            filteredProperties = filteredProperties.filter((property) => property.state === filteredStateValue);
        }
        if (filteredPriceValue) {
            filteredProperties = filteredProperties.filter((property) => property.marketPrice === filteredPriceValue);
        }
        $('#hot-prop-slider').owlCarousel('destroy');
        $("#hot-prop-slider").html(previewTemplate({ properties: filteredProperties }));
        owlCarousel();
    });
    $("#marketPriceValue, #state, #city, #propertyType").on("change", function (e) {
        $("." + e.target.id).removeClass("d-none");
        $("." + e.target.id).find("span").text($(this).val());
       
        if (!$(this).val()) {
            $("." + e.target.id).addClass("d-none");
        }
        $("#searchCitiesName").val($("#city").val());
        if(!$("#city").val()){
            $("#searchCitiesName").val("");
        }
    });
    let imgTag = $(".imgTag");
    imgTag.each(function (index, element) {
        $(element).on("click", function () {
            $(element).closest("button").addClass("d-none");
            let inputId = $(element).attr("class").split(" ")[2];
            $("#" + inputId).val("");
            if(inputId=="city"){
                $("#searchCitiesName").val("");
            }
        })
    });
    $("#searchCitiesName").on("input", function(e){
        console.log($(this).val().toLowerCase())
        if($(this).val() == $("#city option[value = '"+ $(this).val() +"']").val()){
            $(".city").removeClass("d-none");
        $(".city").find("span").text($(this).val());
        $("#city").val($(this).val())
        }
        if($(this).val() == ""){
            $(".city").addClass("d-none");
        $(".city").find("span").text("");
        $("#city").val($(this).val())
        }
    });
    // $("#state").on("click", function(){
    //     getStates();
    // })
    // function getStates(){
    //     $.ajax({
    //         type:"Get",
    //         contentType: "application/json",
    //         url : $("header").attr("data-micro-api-host") + "/branch/icici/get/all/cities/by/state",
             
    //         success: function(res){
    //             console.log(res);
    //         }
    //     })
    // }
    









})