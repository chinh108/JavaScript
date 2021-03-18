var laptop = [
{
	id: 1,
	name: "Laptop Acer Aspire Chinh chinh",
	price: "20.250.000 Đ",
	image: "./assets/img/AcerAspire.jpg",
},
    
{
    id: 2,
	name: "Laptop Asus Zenbook",
	price: "23.990.000 Đ",
	image: "./assets/img/AsusZenbook.png",
},
    
{
    id: 3,
	name: "Laptop Dell Vostro",
	price: "15.450.000 Đ",
	image: "./assets/img/DellVostro.jpg",
},

{
    id: 4,
    name: "Laptop Razer Blade",
    price: "20.120.000 Đ",
    image: "./assets/img/razer.jpg",
},
];

var dientu = [    
{
    id: 1,
    name: "Nintendo Switch ",
    price: "7.420.000 Đ",
    image: "./assets/img/nintendo.jpg",
},
    

{
    id: 2,
    name: "Play Station 4.Pro ",
    price: "4.200.000 Đ",
    image: "./assets/img/PS4.jpg",
},

{
    id: 3,
    name: "Play Station 5 ",
    price: "Sắp Bán",
    image: "./assets/img/PS5.jpg",
},

{
    id: 4,
    name: "Xbox Series X ",
    price: "Sắp Bán",
    image: "./assets/img/xboxX.jpg",
},
];

function Save(){
    localStorage.setItem('demo', JSON.stringify(laptop));
    localStorage.setItem('demo', JSON.stringify(dientu));
}

function load(){
    sanpham = JSON.parse(localStorage.getItem('demo'));
    dientu = JSON.parse(localStorage.getItem('demo'));
}

if (localStorage.getItem("demo") != null) {
    load();
}

function listproduct() {
 
       for (let i = 0; i <= laptop.length-1; i++) {
        var demo= '<div class="col-3">';
        demo += '<div class="card" style="width: 15rem;">';
        demo += '<img src = "'+laptop[i].image+'"class="card-img-top" style="height:200px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+laptop[i].name+'</h5>';
        demo += '<p class="card-text">'+laptop[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("laptop").innerHTML += demo;

    }

        for (let i = 0; i <= dientu.length-1; i++) {
        var demo= '<div class="col-3">';
        demo += '<div class="card" style="width: 15rem;">';
        demo += '<img src = "'+dientu[i].image+'"class="card-img-top" style="height:200px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+dientu[i].name+'</h5>';
        demo += '<p class="card-text">'+dientu[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("dientu").innerHTML += demo;

    }

    Save();
   }

function order() {
    alert("Thank you your order! ");
}
