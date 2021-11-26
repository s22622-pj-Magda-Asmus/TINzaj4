function auto (rok, przebieg, cena_wyjsciowa, cena_koncowa) {
	this.rok=rok;
	this.przebieg=przebieg;
	this.cena_wyjsciowa=cena_wyjsciowa;
	this.cena_koncowa=cena_koncowa;
}

var auto1 = new auto (1999, 100000, 40000,0) ;
				
var auto2= new auto(0,0,50000,0)	;		


var tablicaAut = [];

document.write(auto1.cena_koncowa);

function podwyzka(auto) {
	this.auto=auto;
	auto.cena_wyjsciowa = auto.cena_wyjsciowa + 1000;
	return auto.cena_wyjsciowa;
}

		function test1(){
		document.write(auto1.cena_wyjsciowa);
		}

function obnizkaWiek(auto) {
	this.auto=auto;
	auto.cena_koncowa =  auto.cena_wyjsciowa-(1000*(2021-auto.rok));
	return auto.cena_koncowa;
}

		function test2(){
		document.write(auto1.cena_koncowa);
		}

function obnizkaKilometry(auto) {
	this.auto=auto;
	mnoznik= Math.floor((auto.przebieg/100000));
	auto.cena_koncowa=auto.cena_koncowa-(10000*mnoznik);
	return auto.cena_koncowa;
}
		function test3(){
		document.write(auto2.cena_koncowa);
		}

function addPrzebiegIRok(auto,rok, przebieg){
	this.auto=auto;
	auto.rok=rok;
	auto.przebieg=przebieg;
	podwyzka(auto);
	obnizkaWiek(auto);
	obnizkaKilometry(auto);
	return auto.cena_koncowa;
}

function doTablicy(auto) {
	this.auto=auto;
	if (auto.cena_koncowa>10000){
		tablicaAut.push(auto);

	}
}

	function test4() {
		console.log(tablicaAut.length);
	}

function zwiekszRok() {
	for(const auto of tablicaAut) {
		auto.rok=auto.rok +1;
	}

}


