String.prototype.escapeSpecialChars = function() {
    return this.replace(/<br>/g, "");
};

$.ajax({
    type: "GET",
    url: "../../data/pickup.json",
    dataType: "json",
    success: function(data){
        const funcSort = function( obj ){
            return -obj.pickupOrder;
        };
        const funcDate = function( val ){
            const date = new Date(val.date);
            return val.date = formatDate(date, 'yyyy/MM/dd');
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
        const sortData = _.sortBy( data, funcSort );
        _.each( sortData, funcDate );
        const template = $.templates("#tmplPickup");
        const htmlOutput = template.render(sortData);
        $("#pickupItems").html(htmlOutput);
    },
})
