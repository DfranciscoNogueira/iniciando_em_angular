angular.module("dragonBall").controller("dragonBallController", function($scope) {

	$scope.titulo = "Dragon Ball Z";
	$scope.subTitulo = "Personagens";

	$scope.personagens = [

		{
			id: "01",
			nome: "Goku",
			descricao: "Son Goku (孫 悟空, Son Gokū, mais conhecido apenas como Goku) é um personagem e o protagonista da franquia Dragon Ball criada por Akira Toriyama.",
			imagem: "img/goku.jpg"
		}, 

		{
			id: "02",
			nome: "Piccolo",
			descricao: "Piccolo, é um personagem fictício da franquia Dragon Ball, de Akira Toriyama. Piccolo faz sua primeira aparição como a reencarnação do vilão Piccolo Daimao no capítulo 167 do mangá.",
			imagem: "img/Piccolo.jpg"
		},

		{
			id: "03",
			nome: "Majin Boo",
			descricao: "Majin Boo (魔人ブウ, Majin Bū, também conhecido somente como Boo), Majin Boo é um demônio membro da raça Majin, criada pelo mago Bibidi para auxiliá-lo na dominação do universo.",
			imagem: "img/majinboo.png"
		},

		

		{
			id: "04",
			nome: "Freeza",
			descricao: "Freeza (フリーザ, Furīza?) é um personagem fictício da série de mangá Dragon Ball, criado por Akira Toriyama, como um temido tirano alienígena conhecido como O ser mais poderoso do universo!.",
			imagem: "img/freeza.jpg"
		},

		{
			id: "05",
			nome: "Gohan",
			descricao: "Gohan é filho do protagonista Goku com sua esposa Chi-Chi e o primeiro híbrido entre humano e Saiyajin, um tema recorrente na série é o grande poder oculto de Gohan, que aos poucos é liberado.",
			imagem: "img/gohan.gif"
		},

		{
			id: "06",
			nome: "Cell",
			descricao: "Cell é um dos principais supervilões que vem da linha do tempo alternativa no manga Dragon Ball e no anime Dragon Ball Z. Ele é a final criação de Dr. Gero, designado para ter todas as habilidades dos melhores lutadores que já habitaram ou visitaram a Terra.",
			imagem: "img/cell.jpg"
		}
		
	];


	$scope.removerPersonagem = function(id) {

		angular.forEach($scope.personagens, function(p, i){

			if (p.id == id) {
				$scope.personagens.splice(i, 1);
			}

		});
	}

	$scope.novoPersonagem = {}



	$scope.adicionarPersonagem = function() {

		var personagem = angular.copy($scope.novoPersonagem);

		$scope.personagens.push(personagem);

		$scope.novoPersonagem = {};	
	}

});