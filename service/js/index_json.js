String.prototype.escapeSpecialChars = function() {
    return this.replace(/<br>/g, "")
                .replace(/<a(?: .+?)?>(.*?)<\/a>/g, "$1")
                .replace(/<b>(.*?)<\/b>/g, "$1");
};

// pickup items
$.ajax({
    type: "GET",
    url: "./data/pickup.json",
    dataType: "json",
    success: function(data){
        var funcSort = function( obj ){
            return obj.topPickupOrder;
        }
        const funcDate = function( val ){
            const date = new Date(val.date);
            return val.date = formatDate(date, 'yyyy/MM/dd')
        };
        const funcNumber = function( val ){
            const topPickupOrder = Number(val.topPickupOrder);
            const pickupOrder = Number(val.pickupOrder);
            const genreId = ( '00' + val.genreId ).slice( -2 );
            return [val.topPickupOrder, val.pickupOrder, val.genreId] = [topPickupOrder, pickupOrder, genreId];
        };
        function formatDate (date, format) {
            format = format.replace(/yyyy/g, date.getFullYear());
            format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
            format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
            format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
            format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
            format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
            format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
            return format;
        };

        _.each( data, funcNumber );
        var sortData = _.sortBy( data, funcSort );
        _.each( sortData, funcDate );
        const myJSONString = JSON.stringify(sortData);
        const myEscapedJSONString = myJSONString.escapeSpecialChars();
        const topPickupItems = JSON.parse(myEscapedJSONString);
        const template = $.templates("#tmplPickup");
        const htmlOutput = template.render(topPickupItems);
        $("#pickupItems").html(htmlOutput);
    },
});

// channel items
$.ajax({
    type: "GET",
    url: "./data/channel.json",
    dataType: "json",
    success: function(data){
        const funcNumber = function( val ){
            const img = ( '00' + val.img ).slice( -2 );
            return val.img = img;
        };

        _.each( data, funcNumber );
        const template = $.templates("#tmplChannel");
        const htmlOutput = template.render(data);
        $("#channelItems").html(htmlOutput);
    },
});

// provider items
$.ajax({
    type: "GET",
    url: "./data/provider.json",
    dataType: "json",
    success: function(data){
        const template = $.templates("#tmplProvider");
        const htmlOutput = template.render(data);
        $("#providerItems").html(htmlOutput);
    },
});

// copyright items
$.ajax({
    type: "GET",
    url: "./data/copyright.json",
    dataType: "json",
    success: function(data){
        const template = $.templates("#tmplCopyright");
        const htmlOutput = template.render(data);
        $("#copyrightItems").html(htmlOutput);
    },
});

// banner items
$.ajax({
    type: "GET",
    url: "./data/group_banner.json",
    dataType: "json",
    success: function(data){
        const template = $.templates("#tmplBanner");
        const htmlOutput = template.render(data);
        $("#bannerItems").html(htmlOutput);
    },
});