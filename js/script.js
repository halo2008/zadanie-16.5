var url = 'https://restcountries.eu/rest/v2/name/';
$('#search').click(searchCountries);

function searchCountries() {    
    var countryName = $('#country-name').val();
    $('#tab').css('dispaly', 'block');
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

$('#clear').click(function() {
    clearTable();
});

function clearTable() {
    $('.list').remove();    
}

function showCountriesList(resp) {   
    resp.forEach(function(item) {      
        var $tr = $('<tr/>').attr('class', 'list');
        $('#body').append($tr);
        $tr.append($('<td>').append($('<img>').attr('src', item.flag)));
        $tr.append($('<td>').text(item.name));
        $tr.append($('<td>').text(item.capital));
        $tr.append($('<td>').text(item.population));
        $tr.append($('<td>').text(item.area));
        $tr.append($('<td>').text(item.borders));
        $tr.append($('<td>').text(item.nativeName));
        $tr.append($('<td>').text(item.region));
        $tr.append($('<td>').text(item.currencies.name));        
    });    
}