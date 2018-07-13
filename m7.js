function fillcity(){
    var  province = document.getElementById('province').value;
    switch (province) {
        case '四川':
            var cities = ['成都','内江','绵阳','南充'];
            break;
        case '云南':
            var cities = ['昆明','大理','丽江','楚雄'];
            break;
        case '湖南':
            var cities = ['长沙','郴州','岳麓','安定'];
            break;
        case '江苏':
            var cities = ['苏州','南京','扬州','镇江'];
            break;
        
        default:
            
    }
    
    for (var i = 0 ; i < cities.length ; i++) {
        var city = document.getElementById('city');
        city.options[i] = new Option(cities[i],cities[i]);        
    };
}
