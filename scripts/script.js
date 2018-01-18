var dropdownExpanded = false;
var navType;
var navPacks, navStore, animatedMenu;
var selectedOutfit1, selectedOutfit2, selectedOutfit2;
var breakdown1, description1, addOns1, breakdown2, description2, addOns2;
var foodDeaths, waterDeaths, shelterDeaths;
var navOpened = false;
var addOn1, addOn2, addOn3;
var currentPage;

$( document ).ready(function() {
    if(currentPage != "detailPage")
    {
    if(!navOpened)
        {
    if ($("#header-nav").offset().top > 100) {
        $("#background-gradient").addClass("hidden");
        $("#header-nav").addClass("navbar-altered");
    } else {
        $("#background-gradient").removeClass("hidden");
            $("#header-nav").removeClass("navbar-altered");
    }
} 
    } 
});

function makeNavTransparent()
{
    $("#background-gradient").removeClass("hidden");
    $("#header-nav").delay(3000).removeClass("navbar-altered");
}

function hideNavContent()
{
    document.getElementById("navbar-content").className = "animated fadeOut not-active";
}

function enterOutfitItem(input)
{
    document.getElementById("outfit-item-name" + input).className = "outfit-item-name center-abs outfit-item-name-background";
}

function exitOutfitItem(input)
{
    document.getElementById("outfit-item-name" + input).className = "outfit-item-name center-abs";
}

function enterSocialMedia()
{
    document.getElementById("facebookIcon").className = "social-media-icon gray footer-icon fa fa-facebook facebook-icon";
    document.getElementById("twitterIcon").className = "social-media-icon gray footer-icon fa fa-twitter twitter-icon";
    document.getElementById("pinterestIcon").className = "social-media-icon gray footer-icon fa fa-pinterest pinterest-icon";
    document.getElementById("instagramIcon").className = "social-media-icon gray footer-icon fa fa-instagram instagram-icon";
}

function exitSocialMedia()
{
    document.getElementById("facebookIcon").className = "social-media-icon footer-icon fa fa-facebook facebook-icon";
    document.getElementById("twitterIcon").className = "social-media-icon footer-icon fa fa-twitter twitter-icon";
    document.getElementById("pinterestIcon").className = "social-media-icon footer-icon fa fa-pinterest pinterest-icon";
    document.getElementById("instagramIcon").className = "social-media-icon footer-icon fa fa-instagram instagram-icon";
}

function enterEmployee(employee, employeeNumber)
{
    document.getElementById("employee-body" + employeeNumber).className = "center-abs employee-body noselect animated fadeIn";
    document.getElementById("employee-button" + employeeNumber).className = "employee-bottom-button noselect animated fadeInUp";
    document.getElementById("employee-head" + employeeNumber).className = "employee-overlay-title animated fadeInDown";
    document.getElementById("employee-position" + employeeNumber).className = "employee-overlay-subtitle animated fadeIn";
    
    if(employee == "home")
    {
        document.getElementById("employee-title" + employeeNumber).className = "employee-title smaller-employee-title add-on-inactive";
    }
    else if(employee == "about")
    {
        document.getElementById("employee-title" + employeeNumber).className = "employee-title add-on-inactive";
    }
}

function exitEmployee(employee, employeeNumber)
{
    document.getElementById("employee-body" + employeeNumber).className = "center-abs employee-body";
    document.getElementById("employee-button" + employeeNumber).className = "employee-bottom-button";
    document.getElementById("employee-head" + employeeNumber).className = "employee-overlay-title";
    document.getElementById("employee-position" + employeeNumber).className = "employee-overlay-subtitle";

    if(employee == "home")
    {
        document.getElementById("employee-title" + employeeNumber).className = "employee-title smaller-employee-title add-on-active";
    }
    else if(employee == "about")
    {
        document.getElementById("employee-title" + employeeNumber).className = "employee-title add-on-active";
    }
}

function openNav(input)
{
    if(!navOpened)
    {
        document.getElementById("nav-controls").className = "invisible-navbar-controls hidden-md-down invisible-nav-active";

        if(input == "store")
        {
            /*document.getElementById("header-nav").className = "navbar navbar-toggleable-md desktop-nav hidden-md-down navbar-altered bg-faded fixed-top";*/
            $("#header-nav").addClass("navbar-altered");
            $("#background-gradient").addClass("hidden");
            document.getElementById("navbar-expanded").className = "navbar-expanded navbar-active";
            document.getElementById("navbar-content").className = "animated fadeIn active";
        }

        navOpened = true;
    }
}

function closeNav(input)
{
    navOpened = false;

    document.getElementById("nav-controls").className = "invisible-navbar-controls hidden-md-down invisible-nav-not-active";
    if(input != "top-nav")
    {
        if ($("#header-nav").offset().top < 100) 
        {
            setTimeout(makeNavTransparent, 140);
        }

        document.getElementById("navbar-expanded").className = "navbar-expanded navbar-not-active";
        setTimeout(hideNavContent, 100);
    }
}

$(window).scroll(function() {
    if(currentPage != "detailPage")
    {
    if(!navOpened)
        {
    if ($("#header-nav").offset().top > 100) {
        $("#background-gradient").addClass("hidden");
        $("#header-nav").addClass("navbar-altered");
    } else {
        $("#background-gradient").removeClass("hidden");
            $("#header-nav").removeClass("navbar-altered");
    }
} 
    } 
});

function outfitCategory(type)
{
    if(type == "men")
    {
        document.getElementById("men-outfit-category").className = "outfit-category-box text-center no-select selected-outfit-category";
        document.getElementById("all-outfit-category").className = "outfit-category-box text-center no-select";
        document.getElementById("women-outfit-category").className = "outfit-category-box text-center no-select";
    }
    else if(type == "all")
    {
        document.getElementById("men-outfit-category").className = "outfit-category-box text-center no-select";
        document.getElementById("all-outfit-category").className = "outfit-category-box text-center no-select selected-outfit-category";
        document.getElementById("women-outfit-category").className = "outfit-category-box text-center no-select";
    }
    else if(type == "women")
    {
        document.getElementById("men-outfit-category").className = "outfit-category-box text-center no-select";
        document.getElementById("all-outfit-category").className = "outfit-category-box text-center no-select";
        document.getElementById("women-outfit-category").className = "outfit-category-box text-center no-select selected-outfit-category";
    }
}

function selectOutfitCategory(input)
{
    if(input == "men")
    {
        document.getElementById("outfitButton1").className = "btn btn-primary outfit-button cell-button selected-button";
        document.getElementById("outfitButton2").className = "btn btn-primary outfit-button cell-button";
        document.getElementById("outfitButton3").className = "btn btn-primary outfit-button cell-button";

       
        document.getElementById("outfitContainer1").innerHTML = '<div class = "animated fadeIn"><div class = "outfit-container-home">\
                        <div class = "outfit-image outfit-pic1"></div>\
                        <div class = "outfit-text">\
                            <span class = "outfit-name white heavy">Summer Polka Dot</span>\
                            <div class = "highlight-line pure-white-line"></div>\
                            <div class = "item-price white light">$15</div>\
                            <div class = "item-button outfit-hover">Add to Cart</div>\
                        </div>\
                    </div></div>';

        document.getElementById("outfitContainer2").innerHTML = '<div class = "animated fadeIn"><div class = "outfit-container-home">\
                        <div class = "outfit-image outfit-pic1"></div>\
                        <div class = "outfit-text">\
                            <span class = "outfit-name white heavy">Summer Polka Dot</span>\
                            <div class = "highlight-line pure-white-line"></div>\
                            <div class = "item-price white light">$15</div>\
                            <div class = "item-button outfit-hover">Add to Cart</div>\
                        </div>\
                    </div></div>';

        document.getElementById("outfitContainer3").innerHTML = '<div class = "animated fadeIn"><div class = "outfit-container-home">\
                        <div class = "outfit-image outfit-pic1"></div>\
                        <div class = "outfit-text">\
                            <span class = "outfit-name white heavy">Summer Polka Dot</span>\
                            <div class = "highlight-line pure-white-line"></div>\
                            <div class = "item-price white light">$15</div>\
                            <div class = "item-button outfit-hover">Add to Cart</div>\
                        </div>\
                    </div></div>';

        document.getElementById("outfitContainer4").innerHTML = '<div class = "animated fadeIn"><div class = "outfit-container-home">\
                        <div class = "outfit-image outfit-pic1"></div>\
                        <div class = "outfit-text">\
                            <span class = "outfit-name white heavy">Summer Polka Dot</span>\
                            <div class = "highlight-line pure-white-line"></div>\
                            <div class = "item-price white light">$15</div>\
                            <div class = "item-button outfit-hover">Add to Cart</div>\
                        </div>\
                    </div></div>';
    }
    else if(input == "all")
    {
        document.getElementById("outfitButton1").className = "btn btn-primary outfit-button cell-button";
        document.getElementById("outfitButton2").className = "btn btn-primary outfit-button cell-button selected-button";
        document.getElementById("outfitButton3").className = "btn btn-primary outfit-button cell-button";

        
        document.getElementById("outfitContainer1").innerHTML = '<div class = "animated fadeIn"><div class = "outfit-container-home">\
                        <div class = "outfit-image outfit-pic1"></div>\
                        <div class = "outfit-text">\
                            <span class = "outfit-name white heavy">Summer Polka Dot</span>\
                            <div class = "highlight-line pure-white-line"></div>\
                            <div class = "item-price white light">$15</div>\
                            <div class = "item-button outfit-hover">Add to Cart</div>\
                        </div>\
                    </div></div>';
    }
    else if(input == "women")
    {
        document.getElementById("outfitButton1").className = "btn btn-primary outfit-button cell-button";
        document.getElementById("outfitButton2").className = "btn btn-primary outfit-button cell-button";
        document.getElementById("outfitButton3").className = "btn btn-primary outfit-button cell-button selected-button";
    }
        
}

function shakeArrow()
{
    document.getElementById("down-arrow").className = "animated extendedAnimation shake";
}

function initNav(page)
{

    currentPage = page;
    window.sr = ScrollReveal();
    foodDeaths = 0;

    if(page == "home")
    {
        setTimeout("shakeArrow", 500);
    }

    if(page == "outfits")
    {
        
        breakdown1="";
        breakdown1 += "<div class = \"outfitContainer animated fadeIn\">";
        breakdown1 += "<div class = \"col col-12\">";
        breakdown1 += "                    <div class = \"row\">";
        breakdown1 += "                        <div class = \"col col-7\">";
        breakdown1 += "                             <span class = \"white item-number\">1<\/span> ";
        breakdown1 += "                        <span class = \"item-name white\">Comfy Shirt<\/span>";
        breakdown1 += "                        <\/div>";
        breakdown1 += "                        <div class = \"col col-5  text-right\">";
        breakdown1 += "                            <span class = \"item-savings\">4 dollars saved (25%)<\/span>";
        breakdown1 += "                        <\/div>";
        breakdown1 += "                    <\/div>";
        breakdown1 += "                    <div class = \"row margin-top\">";
        breakdown1 += "                        <div class = \"col col-7\">";
        breakdown1 += "                             <span class = \"white item-number\">2<\/span> ";
        breakdown1 += "                        <span class = \"item-name white\">Fuzzy Cap<\/span>";
        breakdown1 += "                        <\/div>";
        breakdown1 += "                        <div class = \"col col-5 text-right\">";
        breakdown1 += "                            <span class = \"item-savings\">12 dollars saved (22%)<\/span>";
        breakdown1 += "                        <\/div>";
        breakdown1 += "                    <\/div>";
        breakdown1 += "                    <div class = \"row margin-top\">";
        breakdown1 += "                        <div class = \"col col-7\">";
        breakdown1 += "                             <span class = \"white item-number\">3<\/span> ";
        breakdown1 += "                        <span class = \"item-name white\">Leather Watch<\/span>";
        breakdown1 += "                        <\/div>";
        breakdown1 += "                        <div class = \"col col-5 text-right\">";
        breakdown1 += "                            <span class = \"item-savings\">6 dollars saved (12%)<\/span>";
        breakdown1 += "                        <\/div>";
        breakdown1 += "                    <\/div>";
        breakdown1 += "                    <div class = \"row margin-top\">";
        breakdown1 += "                        <div class = \"col col-7\">";
        breakdown1 += "                             <span class = \"white item-number\">4<\/span> ";
        breakdown1 += "                        <span class = \"item-name white\">Wool Socks<\/span>";
        breakdown1 += "                        <\/div>";
        breakdown1 += "                        <div class = \"col col-5 text-right\">";
        breakdown1 += "                            <span class = \"item-savings\">8 dollars saved (40%)<\/span>";
        breakdown1 += "                        <\/div>";
        breakdown1 += "                    <\/div>";
        breakdown1 += "                <\/div>";
        breakdown1 += "                 <\/div>"

        breakdown2="";
        breakdown2 += "<div class = \"outfitContainer text-left animated fadeIn\">";
        breakdown2 += "<div class = \"col col-12\">";
        breakdown2 += "                    <div class = \"row\">";
        breakdown2 += "                        <div class = \"col col-7\">";
        breakdown2 += "                             <span class = \"white item-number\">1<\/span> ";
        breakdown2 += "                        <span class = \"item-name\">Comfy Shirt 2<\/span>";
        breakdown2 += "                        <\/div>";
        breakdown2 += "                        <div class = \"col col-5  text-right\">";
        breakdown2 += "                            <span class = \"item-savings adjusted-green\">4 dollars saved (25%)<\/span>";
        breakdown2 += "                        <\/div>";
        breakdown2 += "                    <\/div>";
        breakdown2 += "                    <div class = \"row margin-top\">";
        breakdown2 += "                        <div class = \"col col-7\">";
        breakdown2 += "                             <span class = \"white item-number\">2<\/span> ";
        breakdown2 += "                        <span class = \"item-name\">Fuzzy Cap<\/span>";
        breakdown2 += "                        <\/div>";
        breakdown2 += "                        <div class = \"col col-5 text-right\">";
        breakdown2 += "                            <span class = \"item-savings adjusted-green\">12 dollars saved (22%)<\/span>";
        breakdown2 += "                        <\/div>";
        breakdown2 += "                    <\/div>";
        breakdown2 += "                    <div class = \"row margin-top\">";
        breakdown2 += "                        <div class = \"col col-7\">";
        breakdown2 += "                             <span class = \"white item-number\">3<\/span> ";
        breakdown2 += "                        <span class = \"item-name\">Leather Watch<\/span>";
        breakdown2 += "                        <\/div>";
        breakdown2 += "                        <div class = \"col col-5 text-right\">";
        breakdown2 += "                            <span class = \"item-savings adjusted-green\">6 dollars saved (12%)<\/span>";
        breakdown2 += "                        <\/div>";
        breakdown2 += "                    <\/div>";
        breakdown2 += "                    <div class = \"row margin-top\">";
        breakdown2 += "                        <div class = \"col col-7\">";
        breakdown2 += "                             <span class = \"white item-number\">4<\/span> ";
        breakdown2 += "                        <span class = \"item-name\">Wool Socks<\/span>";
        breakdown2 += "                        <\/div>";
        breakdown2 += "                        <div class = \"col col-5 text-right\">";
        breakdown2 += "                            <span class = \"item-savings adjusted-green\">8 dollars saved (40%)<\/span>";
        breakdown2 += "                        <\/div>";
        breakdown2 += "                    <\/div>";
        breakdown2 += "                <\/div>";
        breakdown2 += "                 <\/div>"

        breakdown3="";
        breakdown3 += "<div class = \"outfitContainer animated fadeIn\">";
        breakdown3 += "<div class = \"col col-12\">";
        breakdown3 += "                    <div class = \"row\">";
        breakdown3 += "                        <div class = \"col col-7\">";
        breakdown3 += "                             <span class = \"white item-number\">1<\/span> ";
        breakdown3 += "                        <span class = \"item-name white\">Comfy Shirt<\/span>";
        breakdown3 += "                        <\/div>";
        breakdown3 += "                        <div class = \"col col-5  text-right\">";
        breakdown3 += "                            <span class = \"item-savings\">4 dollars saved (25%)<\/span>";
        breakdown3 += "                        <\/div>";
        breakdown3 += "                    <\/div>";
        breakdown3 += "                    <div class = \"row margin-top\">";
        breakdown3 += "                        <div class = \"col col-7\">";
        breakdown3 += "                             <span class = \"white item-number\">2<\/span> ";
        breakdown3 += "                        <span class = \"item-name white\">Fuzzy Cap<\/span>";
        breakdown3 += "                        <\/div>";
        breakdown3 += "                        <div class = \"col col-5 text-right\">";
        breakdown3 += "                            <span class = \"item-savings\">12 dollars saved (22%)<\/span>";
        breakdown3 += "                        <\/div>";
        breakdown3 += "                    <\/div>";
        breakdown3 += "                    <div class = \"row margin-top\">";
        breakdown3 += "                        <div class = \"col col-7\">";
        breakdown3 += "                             <span class = \"white item-number\">3<\/span> ";
        breakdown3 += "                        <span class = \"item-name white\">Leather Watch<\/span>";
        breakdown3 += "                        <\/div>";
        breakdown3 += "                        <div class = \"col col-5 text-right\">";
        breakdown3 += "                            <span class = \"item-savings\">6 dollars saved (12%)<\/span>";
        breakdown3 += "                        <\/div>";
        breakdown3 += "                    <\/div>";
        breakdown3 += "                    <div class = \"row margin-top\">";
        breakdown3 += "                        <div class = \"col col-7\">";
        breakdown3 += "                             <span class = \"white item-number\">4<\/span> ";
        breakdown3 += "                        <span class = \"item-name white\">Wool Socks<\/span>";
        breakdown3 += "                        <\/div>";
        breakdown3 += "                        <div class = \"col col-5 text-right\">";
        breakdown3 += "                            <span class = \"item-savings\">8 dollars saved (40%)<\/span>";
        breakdown3 += "                        <\/div>";
        breakdown3 += "                    <\/div>";
        breakdown3 += "                <\/div>";
        breakdown3 += "                 <\/div>"

        breakdown4="";
        breakdown4 += "<div class = \"outfitContainer text-left animated fadeIn\">";
        breakdown4 += "<div class = \"col col-12\">";
        breakdown4 += "                    <div class = \"row\">";
        breakdown4 += "                        <div class = \"col col-7\">";
        breakdown4 += "                             <span class = \"white item-number\">1<\/span> ";
        breakdown4 += "                        <span class = \"item-name\">Comfy Shirt 2<\/span>";
        breakdown4 += "                        <\/div>";
        breakdown4 += "                        <div class = \"col col-5  text-right\">";
        breakdown4 += "                            <span class = \"item-savings adjusted-green\">4 dollars saved (25%)<\/span>";
        breakdown4 += "                        <\/div>";
        breakdown4 += "                    <\/div>";
        breakdown4 += "                    <div class = \"row margin-top\">";
        breakdown4 += "                        <div class = \"col col-7\">";
        breakdown4 += "                             <span class = \"white item-number\">2<\/span> ";
        breakdown4 += "                        <span class = \"item-name\">Fuzzy Cap<\/span>";
        breakdown4 += "                        <\/div>";
        breakdown4 += "                        <div class = \"col col-5 text-right\">";
        breakdown4 += "                            <span class = \"item-savings adjusted-green\">12 dollars saved (22%)<\/span>";
        breakdown4 += "                        <\/div>";
        breakdown4 += "                    <\/div>";
        breakdown4 += "                    <div class = \"row margin-top\">";
        breakdown4 += "                        <div class = \"col col-7\">";
        breakdown4 += "                             <span class = \"white item-number\">3<\/span> ";
        breakdown4 += "                        <span class = \"item-name\">Leather Watch<\/span>";
        breakdown4 += "                        <\/div>";
        breakdown4 += "                        <div class = \"col col-5 text-right\">";
        breakdown4 += "                            <span class = \"item-savings adjusted-green\">6 dollars saved (12%)<\/span>";
        breakdown4 += "                        <\/div>";
        breakdown4 += "                    <\/div>";
        breakdown4 += "                    <div class = \"row margin-top\">";
        breakdown4 += "                        <div class = \"col col-7\">";
        breakdown4 += "                             <span class = \"white item-number\">4<\/span> ";
        breakdown4 += "                        <span class = \"item-name\">Wool Socks<\/span>";
        breakdown4 += "                        <\/div>";
        breakdown4 += "                        <div class = \"col col-5 text-right\">";
        breakdown4 += "                            <span class = \"item-savings adjusted-green\">8 dollars saved (40%)<\/span>";
        breakdown4 += "                        <\/div>";
        breakdown4 += "                    <\/div>";
        breakdown4 += "                <\/div>";
        breakdown4 += "                 <\/div>"

    
        description1="";
        description1 += "<div class = \"outfitContainer animated fadeIn\">";
        description1 += " <div class = \"outfit-container-header white\">Outfit Name<\/div> ";
        description1 += "                    <div class = \"highlight-line white-line\"><\/div>";
        description1 += "                    <div class = \"col-12 col-md-10 col-centered outfit-container-text margin-top-medium white\">Placeholder placeholder placeholder placeholder placeholder. Placeholder placeholder placeholder placeholder.<\/div>";
        description1 += "                      <\/div>"

        description2="";
        description2 += "<div class = \"outfitContainer animated fadeIn\">";
        description2 += " <div class = \"outfit-container-header\">Outfit Name<\/div> ";
        description2 += "                    <div class = \"highlight-line\"><\/div>";
        description2 += "                    <div class = \"col-12 col-md-10 col-centered outfit-container-text margin-top-medium\">Placeholder placeholder placeholder placeholder placeholder. Placeholder placeholder placeholder placeholder.<\/div>";
        description2 += "                      <\/div>"

        description3="";
        description3 += "<div class = \"outfitContainer animated fadeIn\">";
        description3 += " <div class = \"outfit-container-header white\">Outfit Name<\/div> ";
        description3 += "                    <div class = \"highlight-line white-line\"><\/div>";
        description3 += "                    <div class = \"col-12 col-md-10 col-centered outfit-container-text margin-top-medium white\">Placeholder placeholder placeholder placeholder placeholder. Placeholder placeholder placeholder placeholder.<\/div>";
        description3 += "                      <\/div>"

        description4="";
        description4 += "<div class = \"outfitContainer animated fadeIn\">";
        description4 += " <div class = \"outfit-container-header\">Outfit Name<\/div> ";
        description4 += "                    <div class = \"highlight-line\"><\/div>";
        description4 += "                    <div class = \"col-12 col-md-10 col-centered outfit-container-text margin-top-medium\">Placeholder placeholder placeholder placeholder placeholder. Placeholder placeholder placeholder placeholder.<\/div>";
        description4 += "                       <\/div>"
        

        
       
        addOns1 += "  <div class = \"outfitContainer larger-container animated fadeIn\">";
        addOns1 += "        <div class = \"row\">";
        addOns1 += "                            <div class = \"col redx col-4 text-center margin-top-medium\">";
        addOns1 += "                                <div id = \"add-on1\" class = \"add-on-overlay center-abs add-on-inactive\">Bamboo Sunglasses<\/div>";
        addOns1 += "                                <div class = \"add-on-box outfit-add-on-box add-on1\" onclick = \"selectAddOn(1)\" onmouseover=\"enterAddOn(1)\" onmouseout=\"exitAddOn(1)\">";
        addOns1 += "                                    <div id = \"add-on-price1\" class = \"add-on-box-price add-on-active\">$25<\/div>";
        addOns1 += "                                <\/div>";
        addOns1 += "                                <span class = \"add-on-subtext green-text\">25% Discount<\/span>";
        addOns1 += "                            <\/div>";
        addOns1 += "                            <div class = \"col bluex col-4 text-center margin-top-medium\">";
        addOns1 += "                                <div id = \"add-on2\" class = \"add-on-overlay center-abs add-on-inactive\">Bamboo Sunglasses<\/div>";
        addOns1 += "                                <div class = \"add-on-box outfit-add-on-box add-on2\" onclick = \"selectAddOn(2)\" onmouseover=\"enterAddOn(2)\" onmouseout=\"exitAddOn(2)\">";
        addOns1 += "                                    <div id = \"add-on-price2\" class = \"add-on-box-price add-on-active\">$25<\/div>";
        addOns1 += "                                <\/div>";
        addOns1 += "                                 <span class = \"add-on-subtext green-text\">25% Discount<\/span>";
        addOns1 += "                            <\/div>";
        addOns1 += "                            <div class = \"col redx col-4 text-center margin-top-medium\">";
        addOns1 += "                                <div id = \"add-on3\" class = \"add-on-overlay center-abs add-on-inactive\">Bamboo Sunglasses<\/div>";
        addOns1 += "                                <div class = \"add-on-box outfit-add-on-box add-on1\" onclick = \"selectAddOn(3)\" onmouseover=\"enterAddOn(3)\" onmouseout=\"exitAddOn(3)\">";
        addOns1 += "                                    <div id = \"add-on-price3\" class = \"add-on-box-price add-on-active\">$25<\/div>";
        addOns1 += "                                <\/div>";
        addOns1 += "                                 <span class = \"add-on-subtext green-text\">25% Discount<\/span>";
        addOns1 += "                            <\/div>";
        addOns1 += "                            ";
        addOns1 += "                        <\/div>";
        addOns1 += "            <\/div>";



        addOns2="";
        addOns2 += "<div class = \"outfitContainer animated fadeIn\">";
        addOns2 += "                 <div class = \"col col-12 text-center\">";
        addOns2 += "                     <span class = \"outfit-header\">Click the checkboxes to add items to this outfit<\/span>";
        addOns2 += "                     <div class = \"row margin-top\">";
        addOns2 += "                        <div class = \"col col-6 text-left\">";
        addOns2 += "                             <span class = \"white item-image add-on1\"><\/span> ";
        addOns2 += "                             <span class = \"item-name-small\">Bamboo Shades<\/span>";
        addOns2 += "                        <\/div>";
        addOns2 += "                        <div class = \"col col-6 text-right add-on-price-line-height\">";
        addOns2 += "                            <span class = \"item-savings adjusted-green\">$4.99 (25% discount)<\/span>";
        addOns2 += "                            <span class = \"positon-add-on-checkbox\">";
        addOns2 += "                            <input type=\"checkbox\" class = \"checkbox-blue-background inline\" id=\"item1\" \/>";
        addOns2 += "                            <label class = \"noselect margin-top black checkbox-blue-background checkbox-label pos-check-left\" for=\"item1\"><\/label>";
        addOns2 += "                            <\/span>";
        addOns2 += "                        <\/div>";
        addOns2 += "                         <div class = \"col col-6 text-left\">";
        addOns2 += "                             <span class = \"white item-image add-on2\"><\/span> ";
        addOns2 += "                             <span class = \"item-name-small\">Baseball Cap<\/span>";
        addOns2 += "                        <\/div>";
        addOns2 += "                        <div class = \"col col-6 text-right add-on-price-line-height\">";
        addOns2 += "                            <span class = \"item-savings adjusted-green\">$4.99 (25% discount)<\/span>";
        addOns2 += "                            <span class = \"positon-add-on-checkbox\">";
        addOns2 += "                            <input type=\"checkbox\" class = \"checkbox-blue-background inline\" id=\"item2\" \/>";
        addOns2 += "                            <label class = \"noselect margin-top black checkbox-blue-background checkbox-label pos-check-left\" for=\"item2\"><\/label>";
        addOns2 += "                            <\/span>";
        addOns2 += "                        <\/div>";
        addOns2 += "                        <div class = \"col col-6 text-left\">";
        addOns2 += "                             <span class = \"white item-image add-on3\"><\/span> ";
        addOns2 += "                             <span class = \"item-name-small\">Nylon Watch<\/span>";
        addOns2 += "                        <\/div>";
        addOns2 += "                        <div class = \"col col-6 text-right add-on-price-line-height\">";
        addOns2 += "                            <span class = \"item-savings adjusted-green\">$4.99 (25% discount)<\/span>";
        addOns2 += "                            <span class = \"positon-add-on-checkbox\">";
        addOns2 += "                            <input type=\"checkbox\" class = \"checkbox-blue-background inline\" id=\"item3\" \/>";
        addOns2 += "                            <label class = \"noselect margin-top black checkbox-blue-background checkbox-label pos-check-left\" for=\"item3\"><\/label>";
        addOns2 += "                            <\/span>";
        addOns2 += "                        <\/div>";
        addOns2 += "                     <\/div>";
        addOns2 += "                    <\/div>";
        addOns2 += "                <\/div>";

        addOns3="";
        addOns3 += "<div class = \"outfitContainer animated fadeIn\">";
        addOns3 += "                 <div class = \"col col-12 text-center\">";
        addOns3 += "                     <span class = \"white outfit-header white\">Click the checkboxes to add items to this outfit<\/span>";
        addOns3 += "                     <div class = \"row margin-top\">";
        addOns3 += "                        <div class = \"col col-6 text-left\">";
        addOns3 += "                             <span class = \"white item-image add-on1\"><\/span> ";
        addOns3 += "                             <span class = \"item-name-small white\">Bamboo Shades<\/span>";
        addOns3 += "                        <\/div>";
        addOns3 += "                        <div class = \"col col-6 text-right add-on-price-line-height\">";
        addOns3 += "                            <span class = \"item-savings\">$4.99 (25% discount)<\/span>";
        addOns3 += "                            <span class = \"positon-add-on-checkbox\">";
        addOns3 += "                            <input type=\"checkbox\" class = \"checkbox-blue-background inline\" id=\"item1\" \/>";
        addOns3 += "                            <label class = \"noselect margin-top black checkbox-blue-background checkbox-label pos-check-left\" for=\"item1\"><\/label>";
        addOns3 += "                            <\/span>";
        addOns3 += "                        <\/div>";
        addOns3 += "                         <div class = \"col col-6 text-left\">";
        addOns3 += "                             <span class = \"white item-image add-on2\"><\/span> ";
        addOns3 += "                             <span class = \"item-name-small white\">Baseball Cap<\/span>";
        addOns3 += "                        <\/div>";
        addOns3 += "                        <div class = \"col col-6 text-right add-on-price-line-height\">";
        addOns3 += "                            <span class = \"item-savings\">$4.99 (25% discount)<\/span>";
        addOns3 += "                            <span class = \"positon-add-on-checkbox\">";
        addOns3 += "                            <input type=\"checkbox\" class = \"checkbox-blue-background inline\" id=\"item2\" \/>";
        addOns3 += "                            <label class = \"noselect margin-top black checkbox-blue-background checkbox-label pos-check-left\" for=\"item2\"><\/label>";
        addOns3 += "                            <\/span>";
        addOns3 += "                        <\/div>";
        addOns3 += "                        <div class = \"col col-6 text-left\">";
        addOns3 += "                             <span class = \"white item-image add-on3\"><\/span> ";
        addOns3 += "                             <span class = \"item-name-small white\">Nylon Watch<\/span>";
        addOns3 += "                        <\/div>";
        addOns3 += "                        <div class = \"col col-6 text-right add-on-price-line-height\">";
        addOns3 += "                            <span class = \"item-savings\">$4.99 (25% discount)<\/span>";
        addOns3 += "                            <span class = \"positon-add-on-checkbox\">";
        addOns3 += "                            <input type=\"checkbox\" class = \"checkbox-blue-background inline\" id=\"item3\" \/>";
        addOns3 += "                            <label class = \"noselect margin-top black checkbox-blue-background checkbox-label pos-check-left\" for=\"item3\"><\/label>";
        addOns3 += "                            <\/span>";
        addOns3 += "                        <\/div>";
        addOns3 += "                     <\/div>";
        addOns3 += "                    <\/div>";
        addOns3 += "                <\/div>";

        addOns4="";
        addOns4 += "<div class = \"outfitContainer animated fadeIn\">";
        addOns4 += "                 <div class = \"col col-12 text-center\">";
        addOns4 += "                     <span class = \"outfit-header\">Click the checkboxes to add items to this outfit<\/span>";
        addOns4 += "                     <div class = \"row margin-top\">";
        addOns4 += "                        <div class = \"col col-6 text-left\">";
        addOns4 += "                             <span class = \"white item-image add-on1\"><\/span> ";
        addOns4 += "                             <span class = \"item-name-small\">Bamboo Shades<\/span>";
        addOns4 += "                        <\/div>";
        addOns4 += "                        <div class = \"col col-6 text-right add-on-price-line-height\">";
        addOns4 += "                            <span class = \"item-savings adjusted-green\">$4.99 (25% discount)<\/span>";
        addOns4 += "                            <span class = \"positon-add-on-checkbox\">";
        addOns4 += "                            <input type=\"checkbox\" class = \"checkbox-blue-background inline\" id=\"item1\" \/>";
        addOns4 += "                            <label class = \"noselect margin-top black checkbox-blue-background checkbox-label pos-check-left\" for=\"item1\"><\/label>";
        addOns4 += "                            <\/span>";
        addOns4 += "                        <\/div>";
        addOns4 += "                         <div class = \"col col-6 text-left\">";
        addOns4 += "                             <span class = \"white item-image add-on2\"><\/span> ";
        addOns4 += "                             <span class = \"item-name-small\">Baseball Cap<\/span>";
        addOns4 += "                        <\/div>";
        addOns4 += "                        <div class = \"col col-6 text-right add-on-price-line-height\">";
        addOns4 += "                            <span class = \"item-savings adjusted-green\">$4.99 (25% discount)<\/span>";
        addOns4 += "                            <span class = \"positon-add-on-checkbox\">";
        addOns4 += "                            <input type=\"checkbox\" class = \"checkbox-blue-background inline\" id=\"item2\" \/>";
        addOns4 += "                            <label class = \"noselect margin-top black checkbox-blue-background checkbox-label pos-check-left\" for=\"item2\"><\/label>";
        addOns4 += "                            <\/span>";
        addOns4 += "                        <\/div>";
        addOns4 += "                        <div class = \"col col-6 text-left\">";
        addOns4 += "                             <span class = \"white item-image add-on3\"><\/span> ";
        addOns4 += "                             <span class = \"item-name-small\">Nylon Watch<\/span>";
        addOns4 += "                        <\/div>";
        addOns4 += "                        <div class = \"col col-6 text-right add-on-price-line-height\">";
        addOns4 += "                            <span class = \"item-savings adjusted-green\">$4.99 (25% discount)<\/span>";
        addOns4 += "                            <span class = \"positon-add-on-checkbox\">";
        addOns4 += "                            <input type=\"checkbox\" class = \"checkbox-blue-background inline\" id=\"item3\" \/>";
        addOns4 += "                            <label class = \"noselect margin-top black checkbox-blue-background checkbox-label pos-check-left\" for=\"item3\"><\/label>";
        addOns4 += "                            <\/span>";
        addOns4 += "                        <\/div>";
        addOns4 += "                     <\/div>";
        addOns4 += "                    <\/div>";
        addOns4 += "                <\/div>";

    }
    else if(page == "charity")
    {  
        window.setInterval(function(){
            foodDeaths++;
            document.getElementById("hunger-deaths").innerHTML = foodDeaths;
        }, 3900);
    }
}

function enterTriangle(triangleInput)
{
    if(triangleInput == "zach")
    {
        document.getElementById("zach-title").className = "center-abs triangle-title add-on-active";
    }
    else if(triangleInput == "liam")
    {
        document.getElementById("liam-title").className = "center-abs triangle-title add-on-active";
    }
    else if(triangleInput == "men")
    {
        document.getElementById("men-title").className = "center-abs triangle-title add-on-active";
    }
    else if(triangleInput == "women")
    {
        document.getElementById("women-title").className = "center-abs triangle-title add-on-active";
    }
        
}

function exitTriangle(triangleInput)
{
    if(triangleInput == "zach")
    {
        document.getElementById("zach-title").className = "center-abs triangle-title add-on-inactive";
    }
    else if(triangleInput == "liam")
    {
        document.getElementById("liam-title").className = "center-abs triangle-title add-on-inactive";
    }
    else if(triangleInput == "men")
    {
        document.getElementById("men-title").className = "center-abs triangle-title add-on-inactive";
    }
    else if(triangleInput == "women")
    {
        document.getElementById("women-title").className = "center-abs triangle-title add-on-inactive";
    }
}

function enterAddOn(input)
{
    document.getElementById("add-on" + input).className = "add-on-overlay center-abs add-on-active";
    document.getElementById("add-on-price" + input).className = "add-on-box-price add-on-inactive"
}

function exitAddOn(input)
{
    document.getElementById("add-on" + input).className = "add-on-overlay center-abs";
    document.getElementById("add-on-price" + input).className = "add-on-box-price add-on-active";
}

$(".add-on-option1").mouseleave(function(){
    if(!addOn1)
    {
        document.getElementById("add-on-box1").className = "add-on-box add-on1";
    }

    document.getElementById("add-on1").className = "add-on-overlay center-abs add-on-inactive";
});

$(".add-on-option2").mouseleave(function(){
    if(!addOn2)
    {
        document.getElementById("add-on-box2").className = "add-on-box add-on2";
    }

    document.getElementById("add-on2").className = "add-on-overlay center-abs add-on-inactive";
});

$(".add-on-option3").mouseleave(function(){
    if(!addOn3)
    {
        document.getElementById("add-on-box3").className = "add-on-box add-on1";
    }

    document.getElementById("add-on3").className = "add-on-overlay center-abs add-on-inactive";
});

function selectAddOn(input)
{
    if(input == 1)
    {
        if(!addOn1)
        {
            document.getElementById("add-on-box1").className = "add-on-box add-on1 add-on-box-selected";
            addOn1 = true;
        }
        else 
        {
            document.getElementById("add-on-box1").className = "add-on-box add-on1 add-on-box-unselected";
            addOn1 = false;
        }
    }
    else if(input == 2)
    {
        if(!addOn2)
        {
            document.getElementById("add-on-box2").className = "add-on-box add-on2 add-on-box-selected";
            addOn2 = true;
        }
        else 
        {
            document.getElementById("add-on-box2").className = "add-on-box add-on2 add-on-box-unselected";
            addOn2 = false;
        }
    }
    else if(input == 3)
    {
        if(!addOn3)
        {
            document.getElementById("add-on-box3").className = "add-on-box add-on1 add-on-box-selected";
            addOn3 = true;
        }
        else 
        {
            document.getElementById("add-on-box3").className = "add-on-box add-on1 add-on-box-unselected";
            addOn3 = false;
        }
    }
}

function categorySelectionIn(input)
{
    var itemID;
    itemID = "categoryHeader" + input;
    if(input == 2 || input == 3 || input == 5 || input == 6)
    {
        document.getElementById(itemID).className = "category-image-box-header category-image-box-header-small price-label-hidden heavy";
        itemID = "individualButton" + input;
        document.getElementById(itemID).className = "center-abs category-item-button category-item-button-small individual-item-button-visible";
    }
    else
    {
        document.getElementById(itemID).className = "category-image-box-header price-label-hidden heavy";
        itemID = "individualButton" + input;
        document.getElementById(itemID).className = "center-abs category-item-button individual-item-button-visible";
    }

}

function categorySelectionOut(input)
{
    var itemID;
    itemID = "categoryHeader" + input;
    if(input == 2 || input == 3 || input == 5 || input == 6)
    {
        document.getElementById(itemID).className = "category-image-box-header category-image-box-header-small price-label-visible heavy";
        itemID = "individualButton" + input;
        document.getElementById(itemID).className = "center-abs category-item-button category-item-button-small individual-item-button-hidden";    
    }
    else
    {
        document.getElementById(itemID).className = "category-image-box-header price-label-visible heavy";
        itemID = "individualButton" + input;
        document.getElementById(itemID).className = "center-abs category-item-button individual-item-button-hidden";
    }
}

  var $window = $(window),
      $panel = $('.right-panel'),
      windowPos = $window.scrollTop(),
      scrollPos = $window.scrollTop(),
      maxPos = $('.panel', $panel).height() - $window.height();

  $window.on('scroll.panels-handler', function() {
    var scrollDelta = $window.scrollTop() - windowPos;
    windowPos = $window.scrollTop();
    scrollPos += scrollDelta;

    if (scrollPos < 0) {
      scrollPos = 0;
    } else if (scrollPos > maxPos) {
      scrollPos = maxPos;
    }
    $panel.scrollTop(scrollPos);
  });

function individualItemIn(input, itemName)
{
    var itemID;
    itemID = "individualPrice" + input;
    document.getElementById(itemID).className = "price-label price-label-hidden";
    itemID = "individualButton" + input;
    document.getElementById(itemID).className = "center-abs individual-item-button individual-item-button-visible";
    //document.getElementById(itemID).innerHTML = '<span id =' + "individualArrow" + input + 'class = "price-label-arrow smaller-arrow">&#8702</span>';
    document.getElementById(itemID).innerHTML = itemName + '<span id = "individualArrow' + input + '" class = "price-label-arrow smaller-arrow">&#8702;</span>';
    itemID = "individualArrow" + input;
    setTimeout(function(){ document.getElementById(itemID).className = "price-label-arrow smaller-arrow price-label-arrow-active" }, 100);
}


function individualItemOut(input)
{
    var itemID;
    itemID = "individualButton" + input;
    document.getElementById(itemID).className = "center-abs individual-item-button individual-item-button-hidden";
    itemID = "individualPrice" + input;
    document.getElementById(itemID).className = "price-label price-label-visible";
}


function selectColor(color)
{
    if(color == "green")
    {
        document.getElementById("colorSelection").innerText = "Green";
        document.getElementById("green-option").className = "color-option green-option active-border";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option";
    }
    else if(color == "yellow")
    {
        document.getElementById("colorSelection").innerText = "Yellow";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option active-border";
        document.getElementById("blue-option").className = "color-option blue-option";
    }
    else if(color == "blue")
    {
        document.getElementById("colorSelection").innerText = "Blue";
        document.getElementById("green-option").className = "color-option green-option";
        document.getElementById("yellow-option").className = "color-option yellow-option";
        document.getElementById("blue-option").className = "color-option blue-option active-border";
    }
}

function selectSize(size)
{
    if(size == "small")
    {
        document.getElementById("sizeSelection").innerText = "Small";
        document.getElementById("small-option").className = "color-option small-option active-border";
        document.getElementById("medium-option").className = "color-option medium-option";
        document.getElementById("large-option").className = "color-option large-option";
        document.getElementById("extralarge-option").className = "color-option extralarge-option";
    }
    else if(size == "medium")
    {
        document.getElementById("sizeSelection").innerText = "Medium";
        document.getElementById("small-option").className = "color-option small-option";
        document.getElementById("medium-option").className = "color-option medium-option active-border";
        document.getElementById("large-option").className = "color-option large-option";
        document.getElementById("extralarge-option").className = "color-option extralarge-option";
    }
    else if(size == "large")
    {
        document.getElementById("sizeSelection").innerText = "Large";
        document.getElementById("small-option").className = "color-option small-option";
        document.getElementById("medium-option").className = "color-option medium-option";
        document.getElementById("large-option").className = "color-option large-option active-border";
        document.getElementById("extralarge-option").className = "color-option extralarge-option";
    }
    else if(size == "extralarge")
    {
        document.getElementById("sizeSelection").innerText = "Extra Large";
        document.getElementById("small-option").className = "color-option small-option";
        document.getElementById("medium-option").className = "color-option medium-option";
        document.getElementById("large-option").className = "color-option large-option";
        document.getElementById("extralarge-option").className = "color-option extralarge-option active-border";
    }
}

function enterSlider(slider)
{
    if(slider == "home")
    {
        /*closeNav();*/
        document.getElementById("left-slider-arrow").className = "swiper-button-prev swiper-button-switch solid";
        document.getElementById("right-slider-arrow").className = "swiper-button-next swiper-button-switch solid";
    }
    else if(slider == "outfit1")
    {
        document.getElementById("left-slider-arrow-outfit1").className = "swiper-button-style swiper-button-position-left left-outfit1 outfit-swipe-prev swiper-button-switch solid";
        document.getElementById("right-slider-arrow-outfit1").className = "swiper-button-style swiper-button-position-right right-outfit1 outfit-swipe-prev swiper-button-switch solid";
    }
    else if(slider == "outfit2")
    {
        document.getElementById("left-slider-arrow-outfit2").className = "swiper-button-style swiper-button-position-left left-outfit1 outfit-swipe-prev swiper-button-switch solid";
        document.getElementById("right-slider-arrow-outfit2").className = "swiper-button-style swiper-button-position-right right-outfit1 outfit-swipe-prev swiper-button-switch solid";
    }
    else if(slider == "outfit2-big")
    {
        document.getElementById("left-slider-arrow-outfit2-big").className = "swiper-button-style swiper-button-position-left left-outfit1 outfit-swipe-prev swiper-button-switch solid";
        document.getElementById("right-slider-arrow-outfit2-big").className = "swiper-button-style swiper-button-position-right right-outfit1 outfit-swipe-prev swiper-button-switch solid";
    }
    else if(slider == "outfit3")
    {
        document.getElementById("left-slider-arrow-outfit3").className = "swiper-button-style swiper-button-position-left left-outfit3 outfit-swipe-prev swiper-button-switch";
        document.getElementById("right-slider-arrow-outfit3").className = "swiper-button-style swiper-button-position-right right-outfit3 outfit-swipe-prev swiper-button-switch";
    }
    else if(slider == "outfit3-big")
    {
        document.getElementById("left-slider-arrow-outfit3-big").className = "swiper-button-style swiper-button-position-left left-outfit3 outfit-swipe-prev swiper-button-switch";
        document.getElementById("right-slider-arrow-outfit3-big").className = "swiper-button-style swiper-button-position-right right-outfit3 outfit-swipe-prev swiper-button-switch";
    }
    else if(slider == "outfit4")
    {
        document.getElementById("left-slider-arrow-outfit4").className = "swiper-button-style swiper-button-position-left left-outfit4 outfit-swipe-prev swiper-button-switch";
        document.getElementById("right-slider-arrow-outfit4").className = "swiper-button-style swiper-button-position-right right-outfit4 outfit-swipe-prev swiper-button-switch";
    }
    else if(slider == "outfitHeader")
    {
        document.getElementById("left-slider-arrow-outfit-header").className = "swiper-button-prev swiper-button-switch solid";
        document.getElementById("right-slider-arrow-outfit-header").className = "swiper-button-next swiper-button-switch solid";
    }
    else if(slider == "detail-page")
    {
        document.getElementById("left-slider-arrow").className = "swiper-button-style swiper-button-position-left left-outfit1 swiper-button-switch solid";
        document.getElementById("right-slider-arrow").className = "swiper-button-style swiper-button-position-right left-outfit1 swiper-button-switch solid";
    }    
}

function exitSlider(slider)
{
    if(slider == "home")
    {        
        document.getElementById("left-slider-arrow").className = "swiper-button-prev swiper-button-switch semi-transparent";
        document.getElementById("right-slider-arrow").className = "swiper-button-next swiper-button-switch semi-transparent";
    }
    else if(slider == "outfit1")
    {
        document.getElementById("left-slider-arrow-outfit1").className = "swiper-button-prev swiper-button-switch semi-transparent";
        document.getElementById("right-slider-arrow-outfit1").className = "swiper-button-next swiper-button-switch semi-transparent";
    }
    else if(slider == "outfit2")
    {
        document.getElementById("left-slider-arrow-outfit2").className = "swiper-button-prev swiper-button-switch semi-transparent";
        document.getElementById("right-slider-arrow-outfit2").className = "swiper-button-next swiper-button-switch semi-transparent";
    }
    else if(slider == "outfit2-big")
    {
        document.getElementById("left-slider-arrow-outfit2-big").className = "swiper-button-style swiper-button-position-left left-outfit1 outfit-swipe-prev swiper-button-switch semi-transparent";
        document.getElementById("right-slider-arrow-outfit2-big").className = "swiper-button-style swiper-button-position-right right-outfit1 outfit-swipe-prev swiper-button-switch semi-transparent";
    }
    else if(slider == "outfit3")
    {
        document.getElementById("left-slider-arrow-outfit3").className = "swiper-button-prev swiper-button-switch semi-transparent";
        document.getElementById("right-slider-arrow-outfit3").className = "swiper-button-next swiper-button-switch semi-transparent";
    }
    else if(slider == "outfit3-big")
    {
        document.getElementById("left-slider-arrow-outfit3-big").className = "swiper-button-prev swiper-button-switch semi-transparent";
        document.getElementById("right-slider-arrow-outfit3-big").className = "swiper-button-next swiper-button-switch semi-transparent";
    }
    else if(slider == "outfit4")
    {
        document.getElementById("left-slider-arrow-outfit4").className = "swiper-button-prev swiper-button-switch semi-transparent";
        document.getElementById("right-slider-arrow-outfit4").className = "swiper-button-next swiper-button-switch semi-transparent";
    }
    else if(slider == "outfitHeader")
    {
        document.getElementById("left-slider-arrow-outfit-header").className = "swiper-button-prev swiper-button-switch semi-transparent";
        document.getElementById("right-slider-arrow-outfit-header").className = "swiper-button-next swiper-button-switch semi-transparent";
    }
    else if(slider == "detail-page")
    {
        document.getElementById("left-slider-arrow").className = "swiper-button-prev swiper-button-switch semi-transparent";
        document.getElementById("right-slider-arrow").className = "swiper-button-next swiper-button-switch semi-transparent";
    }
    
}

function selectForm(input)
{
    if(input == "itemRequests")
    {
        document.getElementById("form-option1").className= "btn btn-primary outfit-button btn-primary cell-button wide-button selected-button";
        document.getElementById("form-option2").className= "btn btn-primary outfit-button btn-primary cell-button wide-button";
        document.getElementById("form-option3").className= "btn btn-primary outfit-button btn-primary cell-button wide-button";

        document.getElementById("formUpdate").innerHTML = '<div class = "animated fadeIn"><form>\
                <div class = "form animated fadein">\
                    <div class = "contact-input-header margin-top text-left white">\
                    Your Name\
                    <input type = "text" placeholder="Enter Name" class = "contact-input contact-input1" />\
                    </div>\
                <div class = "contact-input-header margin-top-medium text-left white">\
                    Your Email\
                    <input type = "text" placeholder="Enter Name" class = "contact-input contact-input2" />\
                    </div>\
                    <div class = "contact-input-header text-left margin-top white form-adjustment">Item Types Requested</div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item1" />\
                    <label class = "noselect checkbox-label pos-check-left" for="item1">Hiking Gear</label></div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item2" />\
                    <label class = "noselect checkbox-label pos-check-left" for="item2">Shirts</label></div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item3" />\
                    <label class = "noselect margin-top checkbox-label pos-check-left" for="item3">Shorts</label></div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item4" />\
                    <label class = "noselect margin-top checkbox-label pos-check-left" for="item4">Pants</label></div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item5" />\
                    <label class = "noselect margin-top checkbox-label pos-check-left" for="item5">Hoodies</label></div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item6" />\
                    <label class = "noselect margin-top checkbox-label pos-check-left" for="item6">Sweaters</label></div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item7" />\
                    <label class = "noselect margin-top checkbox-label pos-check-left" for="item7">Hats</label></div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item8" />\
                    <label class = "noselect margin-top checkbox-label pos-check-left" for="item8">Accessories</label></div>\
                    <div class = "margin-top-medium contact-input-header white text-left">\
                    Specific Item Requests\
                    <textarea placeholder = "Enter Request" class = "contact-input contact-input3"></textarea>\
                </div>\
                <input type="submit" class = "item-button outfit-hover margin-top-large outfit-hover-darker force-font" value="Send Message">\
                </div>\
            </form></div>';
    }
    else if(input == "general")
    {
        document.getElementById("form-option1").className= "btn btn-primary outfit-button btn-primary cell-button wide-button";
        document.getElementById("form-option2").className= "btn btn-primary outfit-button btn-primary cell-button wide-button selected-button";
        document.getElementById("form-option3").className= "btn btn-primary outfit-button btn-primary cell-button wide-button";
        
        document.getElementById("formUpdate").innerHTML = '<div class = "animated fadeIn"><form>\
                <div class = "form animated fadein">\
                    <div class = "contact-input-header white margin-top text-left">\
                    Your Name\
                    <input type = "text" placeholder="Enter Name" class = "contact-input contact-input1" />\
                    </div>\
                <div class = "contact-input-header white margin-top-medium text-left">\
                    Your Email\
                    <input type = "text" placeholder="Enter Name" class = "contact-input contact-input2" />\
                    </div>\
                    <div class = "contact-input-header white margin-top-medium text-left">\
                    Your Message\
                    <textarea placeholder = "Enter Message" class = "contact-input contact-input3"></textarea>\
                </div>\
                <input type="submit" class = "item-button outfit-hover margin-top-large outfit-hover-darker force-font" value="Send Message">\
                </div>\
            </form></div>';
    }
    else if(input == "feedback")
    {   
        document.getElementById("form-option1").className= "btn btn-primary outfit-button btn-primary cell-button wide-button";
        document.getElementById("form-option2").className= "btn btn-primary outfit-button btn-primary cell-button wide-button";
        document.getElementById("form-option3").className= "btn btn-primary outfit-button btn-primary cell-button wide-button selected-button";

        document.getElementById("formUpdate").innerHTML = '<div class = "animated fadeIn"><form>\
                <div class = "form animated fadein">\
                    <div class = "contact-input-header white margin-top text-left">\
                    Your Name\
                    <input type = "text" placeholder="Enter Name" class = "contact-input contact-input1" />\
                    </div>\
                <div class = "contact-input-header white margin-top-medium text-left">\
                    Your Email\
                    <input type = "text" placeholder="Enter Email" class = "contact-input contact-input2" />\
                    </div>\
                    <div class = "contact-input-header text-left margin-top white form-adjustment">Feedback Type</div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item1" />\
                    <label class = "noselect margin-top checkbox-label pos-check-left" for="item1">Website Suggestion</label></div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item2" />\
                    <label class = "noselect margin-top checkbox-label pos-check-left" for="item2">Issue/bug report</label></div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item3" />\
                    <label class = "noselect margin-top checkbox-label pos-check-left" for="item3">Questions</label></div>\
                    <div class = "relative smaller-option text-left"><input type="checkbox" class = "inline" id="item4" />\
                    <label class = "noselect margin-top checkbox-label pos-check-left" for="item4">Other</label></div>\
                    <div class = "contact-input-header white margin-top-medium text-left">\
                    Your Feedback\
                    <textarea placeholder = "Enter Feedback" class = "contact-input contact-input3"></textarea>\
                </div>\
                <input type="submit" class = "item-button outfit-hover margin-top-large outfit-hover-darker force-font" value="Send Message">\
                </div>\
            </form></div>';
    }
}

function selectOutfits(input)
{

    if(input == "breakdown1")
    {
        document.getElementById("outfit-option1-1").className = "btn btn-primary outfit-change-button outfit-change-button-red selected-button";
        document.getElementById("outfit-option1-2").className = "btn btn-primary outfit-change-button outfit-change-button-red";
        document.getElementById("outfit-option1-3").className = "btn btn-primary outfit-change-button outfit-change-button-red";
        
        document.getElementById("outfitContainer1").className = "animated fadeIn center-abs outfit-content-description text-left";
        document.getElementById("outfitContainer1").innerHTML = breakdown1;
    }
    else if(input == "description1")
    {
        document.getElementById("outfit-option1-1").className = "btn btn-primary outfit-change-button outfit-change-button-red";
        document.getElementById("outfit-option1-2").className = "btn btn-primary outfit-change-button outfit-change-button-red selected-button";
        document.getElementById("outfit-option1-3").className = "btn btn-primary outfit-change-button outfit-change-button-red";

        document.getElementById("outfitContainer1").className = "animated fadeIn center-abs outfit-content-description text-center";
        document.getElementById("outfitContainer1").innerHTML = description1;
    }
    else if(input == "addOns1")
    {
        document.getElementById("outfit-option1-1").className = "btn btn-primary outfit-change-button outfit-change-button-red";
        document.getElementById("outfit-option1-2").className = "btn btn-primary outfit-change-button outfit-change-button-red";
        document.getElementById("outfit-option1-3").className = "btn btn-primary outfit-change-button outfit-change-button-red selected-button";

        document.getElementById("outfitContainer1").className = "animated fadeIn center-abs outfit-content-description text-center";
        document.getElementById("outfitContainer1").innerHTML = addOns1;
    }
    else if(input == "breakdown2")
    {
        document.getElementById("outfit-option2-1").className = "btn btn-primary outfit-change-button outfit-change-button-white selected-button-lighter";
        document.getElementById("outfit-option2-2").className = "btn btn-primary outfit-change-button outfit-change-button-white";
        document.getElementById("outfit-option2-3").className = "btn btn-primary outfit-change-button outfit-change-button-white";

        document.getElementById("outfitContainer2").className = "animated fadeIn center-abs outfit-content-description text-center";
        document.getElementById("outfitContainer2").innerHTML = breakdown2;
    }
    else if(input == "description2")
    {
        document.getElementById("outfit-option2-1").className = "btn btn-primary outfit-change-button outfit-change-button-white";
        document.getElementById("outfit-option2-2").className = "btn btn-primary outfit-change-button outfit-change-button-white selected-button-lighter";
        document.getElementById("outfit-option2-3").className = "btn btn-primary outfit-change-button outfit-change-button-white";

        document.getElementById("outfitContainer2").className = "animated fadeIn center-abs outfit-content-description text-center";
        document.getElementById("outfitContainer2").innerHTML = description2;
    }
    else if(input == "addOns2")
    {
        document.getElementById("outfit-option2-1").className = "btn btn-primary outfit-change-button outfit-change-button-white";
        document.getElementById("outfit-option2-2").className = "btn btn-primary outfit-change-button outfit-change-button-white";
        document.getElementById("outfit-option2-3").className = "btn btn-primary outfit-change-button outfit-change-button-white selected-button-lighter";
        
        document.getElementById("outfitContainer2").className = "animated fadeIn center-abs outfit-content-description text-center";
        document.getElementById("outfitContainer2").innerHTML = addOns2;
    }
    else if(input == "breakdown3")
    {
        document.getElementById("outfit-option3-1").className = "btn btn-primary outfit-change-button outfit-change-button-red selected-button";
        document.getElementById("outfit-option3-2").className = "btn btn-primary outfit-change-button outfit-change-button-red";
        document.getElementById("outfit-option3-3").className = "btn btn-primary outfit-change-button outfit-change-button-red";
        
        document.getElementById("outfitContainer3").className = "animated fadeIn center-abs outfit-content-description text-left";
        document.getElementById("outfitContainer3").innerHTML = breakdown3;
    }
    else if(input == "description3")
    {
        document.getElementById("outfit-option3-1").className = "btn btn-primary outfit-change-button outfit-change-button-red";
        document.getElementById("outfit-option3-2").className = "btn btn-primary outfit-change-button outfit-change-button-red selected-button";
        document.getElementById("outfit-option3-3").className = "btn btn-primary outfit-change-button outfit-change-button-red";

        document.getElementById("outfitContainer3").className = "animated fadeIn center-abs outfit-content-description text-center";
        document.getElementById("outfitContainer3").innerHTML = description3;
    }
    else if(input == "addOns3")
    {
        document.getElementById("outfit-option3-1").className = "btn btn-primary outfit-change-button outfit-change-button-red";
        document.getElementById("outfit-option3-2").className = "btn btn-primary outfit-change-button outfit-change-button-red";
        document.getElementById("outfit-option3-3").className = "btn btn-primary outfit-change-button outfit-change-button-red selected-button";

        document.getElementById("outfitContainer3").className = "animated fadeIn center-abs outfit-content-description text-center";
        document.getElementById("outfitContainer3").innerHTML = addOns3;
    }
    else if(input == "breakdown4")
    {
        document.getElementById("outfit-option4-1").className = "btn btn-primary outfit-change-button outfit-change-button-white selected-button-lighter";
        document.getElementById("outfit-option4-2").className = "btn btn-primary outfit-change-button outfit-change-button-white";
        document.getElementById("outfit-option4-3").className = "btn btn-primary outfit-change-button outfit-change-button-white";

        document.getElementById("outfitContainer4").className = "animated fadeIn center-abs outfit-content-description text-center";
        document.getElementById("outfitContainer4").innerHTML = breakdown4;
    }
    else if(input == "description4")
    {
        document.getElementById("outfit-option4-1").className = "btn btn-primary outfit-change-button outfit-change-button-white";
        document.getElementById("outfit-option4-2").className = "btn btn-primary outfit-change-button outfit-change-button-white selected-button-lighter";
        document.getElementById("outfit-option4-3").className = "btn btn-primary outfit-change-button outfit-change-button-white";

        document.getElementById("outfitContainer4").className = "animated fadeIn center-abs outfit-content-description text-center";
        document.getElementById("outfitContainer4").innerHTML = description4;
    }
    else if(input == "addOns4")
    {
        document.getElementById("outfit-option4-1").className = "btn btn-primary outfit-change-button outfit-change-button-white";
        document.getElementById("outfit-option4-2").className = "btn btn-primary outfit-change-button outfit-change-button-white";
        document.getElementById("outfit-option4-3").className = "btn btn-primary outfit-change-button outfit-change-button-white selected-button-lighter";
        
        document.getElementById("outfitContainer4").className = "animated fadeIn center-abs outfit-content-description text-center";
        document.getElementById("outfitContainer4").innerHTML = addOns4;
    }
    
}

function hideTitle(itemNumber)
{
    document.getElementById("item" + itemNumber).className = "adventure-box-title hide-title";
}

function restoreTitle(itemNumber)
{
    document.getElementById("item" + itemNumber).className = "adventure-box-title view-title";
}

function animateDropdown(type)
{
    console.log(type);
    if(dropdownExpanded)
    {
        navPacks.className = "hidden navbar-packs";
        navStore.className = "hidden navbar-store";
    }
    if(type == "packs")
    {
        navType = "packs"
        navPacks.className = "visible navbar-packs animated fadeIn";
    }
    else if(type = "store")
    {
        navType = "store";
        navStore.className = "visible navbar-store animated fadeIn";
    }

    animatedMenu.className = "animated-dropdown-menu animated-dropdown-menu-active";
    dropdownExpanded = true;
}

function closeDropdown()
{
    if(dropdownExpanded)
    {
        dropdownExpanded = false;
        //navPacks.className = "hidden navbar-packs";
        //navStore.className = "hidden navbar-store";
           
        setTimeout(function () {
            if(!dropdownExpanded)
            {
                navPacks.className = "hidden navbar-packs";
                navStore.className = "hidden navbar-store";
            }
        }, 200);
        

    animatedMenu.className = "animated-dropdown-menu";
    }
    
}


