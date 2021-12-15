 "use strict";





			function loadAll()
			{
				for(let c=0; c<8; c++){
					
					
					for(let i=1; i<9; i++){
						
						
				
				if(document.querySelector('#'+letters[c]+i).firstElementChild){
				
						document.querySelector('#'+letters[c]+i).addEventListener('click',function() 
						{piece(document.querySelector('#'+letters[c]+i),''+letters[c]+i, '');},{once :true});
				    
					
				}
					
					document.querySelector('#'+letters[c]+i).addEventListener('click',function() 
					{deplacer(document.querySelector('#'+letters[c]+i),''+letters[c]+i);},) }
					
				
			}
			
			}
			
		function loadNew(newPosition, newPositionStr){
			
			newPosition.addEventListener('click',function() 
			{piece(newPosition, newPositionStr);},{once :true});
	
		}
		
	
		
		
		let couleur = 'blanc';
		let letters = ['A','B','C','D','E','F','G','H'];
		let newNode;
		let	placement;
		let placementStr;
		let idPiece;
		let deplacementPossible=[];
		let deplacementPossibleAttack=[];
		let deplacementPossibleDangerBlanc=[];
		let deplacementPossibleDangerNoir=[];
		let deplacementPossibleBlanc=[];
		let deplacementPossibleNoir=[];
		let deplacementIndigene=[];
		let deplacementIndigeneBlanc=[];
		let deplacementIndigeneNoir=[];
		let number = 0;
		let boolean = false;
		let debug = true;
		let dangerPiece = false;
		let firstIndex ;
		let secondIndex ;
		let KingDanger = true;
		let KingDangerArray = [];
		let newPositionStrArrayBlanc = [];
		let newPositionStrArrayNoir = [];
		loadAll();
		
		
			
let range =        [ ['A1','B1','C1','D1','E1','F1','G1','H1'],
					 ['A2','B2','C2','D2','E2','F2','G2','H2'],
					 ['A3','B3','C3','D3','E3','F3','G3','H3'],
					 ['A4','B4','C4','D4','E4','F4','G4','H4'],
					 ['A5','B5','C5','D5','E5','F5','G5','H5'],
					 ['A6','B6','C6','D6','E6','F6','G6','H6'],
					 ['A7','B7','C7','D7','E7','F7','G7','H7'],
					 ['A8','B8','C8','D8','E8','F8','G8','H8'] ];


					 function loadNew(newPosition, newPositionStr){
			
						newPosition.addEventListener('click',function() 
						{piece(newPosition, newPositionStr);},{once :true});
						
					}
					function getRandomInt(max) {
						return Math.floor(Math.random() * max);
					  }
					 

					function player(){
						
							
							  let result;
							  let shadowRanger = [];
							  

							  range.forEach(element => {
								  element.forEach(piece => {
									if (document.querySelector('#'+piece).firstElementChild) {
										shadowRanger.push(piece)
									}
								  });
							  });
							
							result = shadowRanger.filter(shadowRanger_ => document.querySelector('#'+shadowRanger_).firstElementChild.id.includes('noir'));
							
								let number = result.length ;
								let newNumber = getRandomInt(number);
								let piecee = result[newNumber];
							
									piece(document.querySelector('#'+piecee),''+piecee, 'auto');
								
								
							
							  
					}


function piece(firstPosition, firstPositionStr, random)
{
	let couleur2;
	
	if(!boolean){
		couleur ='noir';
	}else{
		couleur ='blanc';
	}

	if(boolean){
		couleur2 ='noir';
	}else{
		couleur2 ='blanc';
	}

	let selectedPiece = document.importNode(document.getElementById(firstPositionStr).firstElementChild).id;

	if(selectedPiece.includes(couleur)){ 
		return loadNew(firstPosition, firstPositionStr);
		
	};
	

	
	newNode   = false;
	placement = false;
	idPiece   = false;
	placementStr = firstPositionStr;
	placement = firstPosition;
	deplacementPossible.forEach(element => {document.getElementById(element).classList.remove('bleu');});
	deplacementPossible.splice(0, deplacementPossible.length);
	deplacementPossibleAttack.forEach(element => {document.getElementById(element).classList.remove('red');});
	deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
	deplacementPossibleDangerBlanc.splice(0, deplacementPossibleDangerBlanc.length);
	deplacementPossibleDangerNoir.splice(0, deplacementPossibleDangerNoir.length);
	deplacementPossibleNoir.splice(0, deplacementPossibleNoir.length);
	deplacementPossibleBlanc.splice(0, deplacementPossibleBlanc.length);
	deplacementIndigeneBlanc.splice(0, deplacementIndigeneBlanc.length);
	deplacementIndigeneNoir.splice(0, deplacementIndigeneNoir.length);
	
	newNode = document.importNode(placement.firstElementChild);
	idPiece = newNode.id

	

	for(let i=0; i <= range.length; i++){
	
        if(range[i].indexOf(firstPositionStr) != -1)	{
			firstIndex = i;
            secondIndex = range[i].indexOf(firstPositionStr);break;
		}
	
		
	
	}	
	

	let arrayFou1 = [];
	let arrayFou2 = [];
	let arrayFou3 = [];
	let arrayFou4 = [];

	let arrayTour1  = [];
	let arrayTour2  = [];
	let arrayTour3  = [];
	let arrayTour4  = [];

	let Fou1 ;
	let Fou2 ;
	let Fou3 ;
	let Fou4 ;
	
	let Tour1 ;
	let Tour2 ;
	let Tour3 ;
	let Tour4 ;
	
	
	
	let maxLoop = 8;

					 
		range.forEach((aa, element) => {
			aa.forEach((aa, element1) => {
				
			if(document.getElementById(range[element][element1]).firstElementChild){
				if(document.getElementById(range[element][element1]).firstElementChild.id.includes('tour'+couleur) || document.getElementById(range[element][element1]).firstElementChild.id.includes('dame'+couleur)){
					let index1 = element;
					let index2 = element1;
					let index3 = element;
					let index4 = element1;
					let number = 0;
				    arrayTour1.push(range[element][element1])
                	arrayTour2.push(range[element][element1])
                 	arrayTour3.push(range[element][element1])
	                arrayTour4.push(range[element][element1])

					for(let i =1; i<9; i++){
						index1 += 1;
						
						if(index1 >= 0 && index1 <8 ){
							

							
							if(document.getElementById(range[index1][element1]).firstElementChild == undefined){
								
								arrayTour1.push(range[index1][element1])
							}else{
								if(document.getElementById(range[index1][element1]).firstElementChild.id.includes(couleur)){
									break;
									}
							 	if((document.getElementById(range[index1][element1]).firstElementChild).id.includes(couleur2)){
									if (!document.getElementById(range[index1][element1]).firstElementChild.id.includes('roi')){
										arrayTour1.push(range[index1][element1])
										number += 1;
										if (number != 1){
											arrayTour1.splice(0, arrayTour1.length);
										}
									}else{
										Tour1 = range[index1][element1];
										
										break;
									}
								
								}
							}
						}

					}
					if(Tour1 == undefined){
						
					arrayTour1.splice(0, arrayTour1.length);
					}

					number = 0
					for(let i =1; i<9; i++){
						index2 = index2 +1;
						if(index2 >= 0 && index2 <8 ){
							
							if(!document.getElementById(range[element][index2]).firstElementChild){
								arrayTour2.push(range[element][index2])
							}else{
								if(document.getElementById(range[element][index2]).firstElementChild.id.includes(couleur)){
									break;
									}
							 	if(document.getElementById(range[element][index2]).firstElementChild.id.includes(couleur2)){
									if (!document.getElementById(range[element][index2]).firstElementChild.id.includes('roi')){
										arrayTour2.push(range[element][index2])
										number += 1;
										if (number != 1){
											arrayTour2.splice(0, arrayTour2.length);
										}
									}else{
										Tour2 = range[element][index2];
										break;
									}
								
								}
							}


						}

					}
						if(Tour2 == undefined){
						
							arrayTour2.splice(0, arrayTour2.length);
						}

					number = 0;
					for(let i =1; i<9; i++){

						index3 = index3 -1;
						
						if(index3 >= 0 && index3 <8 ){
								
							
							
							if(!document.getElementById(range[index3][element1]).firstElementChild){
								arrayTour3.push(range[index3][element1])
							}else{
								if(document.getElementById(range[index3][element1]).firstElementChild.id.includes(couleur)){
									break;
									}
							 	if(document.getElementById(range[index3][element1]).firstElementChild.id.includes(couleur2)){
									if (!document.getElementById(range[index3][element1]).firstElementChild.id.includes('roi')){
										arrayTour3.push(range[index3][element1])
										number += 1;
										if (number != 1){
											arrayTour3.splice(0, arrayTour3.length);
										}
									}else{
										Tour3 = range[index3][element1];
										break;
									}
								
								}
							}

						}

					}
						if(Tour3 == undefined){
						
							arrayTour3.splice(0, arrayTour3.length);
						}
					
					number = 0
					for(let i =1; i<9; i++){
						index4 = index4 -1;
						if(index4 >= 0 && index4 <8 ){

							
							if(!document.getElementById(range[element][index4]).firstElementChild){
								arrayTour4.push(range[element][index4])
							}else{
								if(document.getElementById(range[element][index4]).firstElementChild.id.includes(couleur)){
									break;
									}
							 	if(document.getElementById(range[element][index4]).firstElementChild.id.includes(couleur2)){
									if (!document.getElementById(range[element][index4]).firstElementChild.id.includes('roi')){
										arrayTour4.push(range[element][index4])
										number += 1;
										if (number != 1){
											arrayTour4.splice(0, arrayTour4.length);
										}
									}else{
										Tour4 = range[element][index4];
										break;
									}
								
								}
							}

						}
						}

						if(Tour4 == undefined){
						
							arrayTour4.splice(0, arrayTour4.length);
						}

					

				}
				 if(document.getElementById(range[element][element1]).firstElementChild.id.includes('fou'+couleur) || document.getElementById(range[element][element1]).firstElementChild.id.includes('dame'+couleur)){
					
					let index10 = element;
					let index20 = element1;
					let index30 = element;
					let index40 = element1;

					let indexbis1 = element;
					let indexbis2 = element1;
					let indexbis3 = element;
					let indexbis4 = element1;
					let number = 0;
                    arrayFou1.push(range[element][element1])
                	arrayFou2.push(range[element][element1])
                 	arrayFou3.push(range[element][element1])
	                arrayFou4.push(range[element][element1])

					for(let i =1; i<9; i++){

						index10 = index10 +1;
						index20 = index20 +1;

						if((index10 >= 0 && index10 <8) && (index20 >= 0 && index20 <8) ){
							
							if(!document.getElementById(range[index10][index20]).firstElementChild){
								arrayFou1.push(range[index10][index20])
							}else{
								if(document.getElementById(range[index10][index20]).firstElementChild.id.includes(couleur)){
									break;
									}
							 	if(document.getElementById(range[index10][index20]).firstElementChild.id.includes(couleur2)){
									if (!document.getElementById(range[index10][index20]).firstElementChild.id.includes('roi')){
										arrayFou1.push(range[index10][index20])
										number += 1;
										if (number != 1){
											arrayFou1.splice(0, arrayFou1.length);
										}
									}else{
										Fou1 = range[index10][index20];
										break;
									}
								
								}
							}
							
						}
						}
						if(Fou1 == undefined){
						
							arrayFou1.splice(0, arrayFou1.length);
						}

						number = 0;
						for(let i =1; i<9; i++){

							index30 = index30 -1;
							index40 = index40 -1;

							if((index30 >= 0 && index30 <8) && (index40 >= 0 && index40 <8) ){
								if(!document.getElementById(range[index30][index40]).firstElementChild){
									arrayFou2.push(range[index30][index40])
								}else{
									if(document.getElementById(range[index30][index40]).firstElementChild.id.includes(couleur)){
										break;
										}
									 if(document.getElementById(range[index30][index40]).firstElementChild.id.includes(couleur2)){
										if (!document.getElementById(range[index30][index40]).firstElementChild.id.includes('roi')){
											arrayFou2.push(range[index30][index40])
											number += 1;
											if (number != 1){
												arrayFou2.splice(0, arrayFou2.length);
											}
										}else{
											Fou2 = range[index30][index40];
											break;
										}
									
									}
								}
							}
							
						}
						if(Fou2 == undefined){
						
							arrayFou2.splice(0, arrayFou2.length);
						}
						number = 0
						for(let i =1; i<9; i++){

							indexbis1 +=1;
							indexbis2 -=1;

							
							if((indexbis1 >= 0 && indexbis1 <8) && (indexbis2 >= 0 && indexbis2 <8) ){
								
								if(!document.getElementById(range[indexbis1][indexbis2]).firstElementChild){
									arrayFou3.push(range[indexbis1][indexbis2])
								}else{
									if(document.getElementById(range[indexbis1][indexbis2]).firstElementChild.id.includes(couleur)){
										break;
										}
									 if(document.getElementById(range[indexbis1][indexbis2]).firstElementChild.id.includes(couleur2)){
										if (!document.getElementById(range[indexbis1][indexbis2]).firstElementChild.id.includes('roi')){
											arrayFou3.push(range[indexbis1][indexbis2])
											number += 1;
											if (number != 1){
												arrayFou3.splice(0, arrayFou3.length);
											}
										}else{
											Fou3 = range[indexbis1][indexbis2];
											break;
										}
									
									}
								}
							}
						}
						if(Fou3 == undefined){
						
							arrayFou3.splice(0, arrayFou3.length);
						}
						number = 0
						for(let i =1; i<9; i++){

							indexbis3 = indexbis3 -1;
							indexbis4 = indexbis4 +1;
							if((indexbis3 >= 0 && indexbis3 <8) && (indexbis4 >= 0 && indexbis4 <8) ){

								if(!document.getElementById(range[indexbis3][indexbis4]).firstElementChild){
									arrayFou4.push(range[indexbis3][indexbis4])
								}else{
									if(document.getElementById(range[indexbis3][indexbis4]).firstElementChild.id.includes(couleur)){
										break;
										}
									 if(document.getElementById(range[indexbis3][indexbis4]).firstElementChild.id.includes(couleur2)){
										if (!document.getElementById(range[indexbis3][indexbis4]).firstElementChild.id.includes('roi')){
											arrayFou4.push(range[indexbis3][indexbis4])
											number += 1;
											if (number != 1){
												arrayFou4.splice(0, arrayFou4.length);
											}
										}else{
											Fou4 = range[indexbis3][indexbis4];
											break;
										}
									
									}
								}
							}

						}
				
						if(Fou4 == undefined){
						
							arrayFou4.splice(0, arrayFou4.length);
						}
				}
			}
			});
		});

		
	
			if(idPiece.includes('tour')){
				
				tour(firstIndex, secondIndex, maxLoop, boolean, '');
				
				
			}else if(idPiece.includes('fou')){
				
				fou(firstIndex, secondIndex, maxLoop, boolean, '');
				
			}else if(idPiece.includes('dame')){
				queen(firstIndex, secondIndex, boolean,'');
				
			}else if(idPiece.includes('cavalier')){
				horse(firstIndex, secondIndex, boolean, '');
				
			}else if(idPiece.includes('pion')){
				pion(firstIndex, secondIndex, boolean, '')
				
	
			}else if(idPiece.includes('roi')){
				allMoves('kingMove');
				king(firstIndex, secondIndex, boolean)
			}
		
			let arrayCopy = [];
		
			
			console.log(KingDangerArray);
	if(KingDanger == false){
		if(KingDangerArray.length == 5){
			console.log('//[List2, 0,0 ,0 0]')
			
			deplacementPossible.forEach(element => {
						
				if(KingDangerArray[0].includes(element)){
					arrayCopy.push(element)
				}

				
			});
		
			deplacementPossible.splice(0, deplacementPossible.length);
			arrayCopy.forEach(element => {
				deplacementPossible.push(element);
			});
			arrayCopy.splice(0, arrayCopy.length);
		


		}else if(KingDangerArray.length == 3){
			console.log('list, depla, newpostionstr')
			deplacementPossible.forEach(element => {
						
				if(KingDangerArray[0].includes(element)){
					arrayCopy.push(element)
				}

				if(idPiece.includes('roi') && KingDangerArray[1].includes(element)){
					arrayCopy.push(element)
				}
			});
		
			deplacementPossible.splice(0, deplacementPossible.length);
			arrayCopy.forEach(element => {
				deplacementPossible.push(element);
			});
			arrayCopy.splice(0, arrayCopy.length);
		

				if(deplacementPossibleAttack.includes(KingDangerArray[2])){
					
					deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
					deplacementPossibleAttack.push(KingDangerArray[2]);
				}else{
					deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
				}

		}else if(KingDangerArray.length == 2){
			
			if(Array.isArray(KingDangerArray[1])){
				console.log('/[List, deplacementPossible]')
				
					deplacementPossible.forEach(element => {
						
						if(KingDangerArray[0].includes(element)){
							arrayCopy.push(element)
						}

						if(idPiece.includes('roi') && KingDangerArray[1].includes(element)){
							arrayCopy.push(element)
						}
					});

					deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
					deplacementPossible.splice(0, deplacementPossible.length);
					arrayCopy.forEach(element => {
						deplacementPossible.push(element);
					});
					arrayCopy.splice(0, arrayCopy.length);

					
				
				}else{
				console.log('//[depla, newPositionStr]')
				

				if(idPiece.includes('roi')){


					deplacementPossible.forEach(element => {
							
						if(KingDangerArray[0].includes(element)){
							arrayCopy.push(element)
						}
	
					});
					deplacementPossible.splice(0, deplacementPossible.length);
					arrayCopy.forEach(element => {
						deplacementPossible.push(element);
					});
					arrayCopy.splice(0, arrayCopy.length);

					if(deplacementPossibleAttack.includes(KingDangerArray[1])){
						
						deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
						deplacementPossibleAttack.push(KingDangerArray[1]);
					}


				}else{

					deplacementPossible.splice(0, deplacementPossible.length);
					if(deplacementPossibleAttack.includes(KingDangerArray[1])){
						
						deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
						deplacementPossibleAttack.push(KingDangerArray[1]);
					}else{
						deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
					}

				}
			

			}

		}else if(KingDangerArray.length == 1){
			if(Array.isArray(KingDangerArray[0])){
				console.log('deplacementPossible')
				
				deplacementPossible.forEach(element => {
						
					if(idPiece.includes('roi') && KingDangerArray[0].includes(element)){
						arrayCopy.push(element)
					}

					
				});
			
				deplacementPossible.splice(0, deplacementPossible.length);
				deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
				arrayCopy.forEach(element => {
					deplacementPossible.push(element);
				});
				arrayCopy.splice(0, arrayCopy.length);
			
				
			}else{
				console.log('newPositionStr')
				
				deplacementPossible.splice(0, deplacementPossible.length);
				if(deplacementPossibleAttack.includes(KingDangerArray[0])){
					deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
					deplacementPossibleAttack.push(KingDangerArray[0]);
				}else{
					deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
				}
			}
		}
	}
		


		let bigArray =  [arrayTour1, arrayTour2, arrayTour3, arrayTour4, arrayFou1, arrayFou2, arrayFou3, arrayFou4];
		
		bigArray.forEach((arr, index) => {
			
		
		
		if(arr.length >0 ){
			
		
			if(arr.includes(firstPositionStr) ){
				arr.splice(arr.indexOf(firstPositionStr), 1)
			
				deplacementPossible.forEach(element => {
					
					if(arr.includes(element)){
						arrayCopy.push(element)
					}
				});
				if (deplacementPossibleAttack.includes(arr[0])){
					deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
					deplacementPossibleAttack.push(arr[0]);
				}else{
					deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);
				}
				deplacementPossible.splice(0, deplacementPossible.length);
				arrayCopy.forEach(element => {
					deplacementPossible.push(element);
				});
				arrayCopy.splice(0, arrayCopy.length);
			}
		
		}
	
	});
	
	
	
	
	

	deplacementPossible.forEach(element => {document.getElementById(element).classList.add('bleu');});
	
	deplacementPossibleAttack.forEach(element => {document.getElementById(element).classList.add('red');});
console.log(deplacementPossible, deplacementPossibleAttack)
	if(random === 'auto'){

							

		function getRandomIntt(max) {
			return Math.floor(Math.random() * max);
		  }
							  
							
		  					
							let result = deplacementPossible.concat(deplacementPossibleAttack);
							result.length
							let number = result.length ;
							let newNumber = getRandomIntt(number);
							if(result.length == 1){
								newNumber = 0;
							}
							
							let piecee = result[newNumber];
							

								
								while (result.length <1) {
									return player();
									
								}
								
								deplacer(document.querySelector('#'+piecee),''+piecee);
								
							
								
							
							  
					


						}
	
	
		
		number += 1;
		if(number> 0) {
			
			loadNew(placement, placementStr);
			
		}
		
		
		
	}

	
	
	
	
	function deplacer(newPosition, newPositionStr)
	{
		
		if(deplacementPossible.includes(newPositionStr) || deplacementPossibleAttack.includes(newPositionStr))
		{
		
			placement.removeChild(placement.firstChild);
			if(newPosition.firstElementChild){
				newPosition.removeChild(newPosition.firstChild);
			}
			newPosition.append(newNode);
			
			
			
			
			
			deplacementPossible.forEach(element => {document.getElementById(element).classList.remove('bleu');});
			deplacementPossible.splice(0, deplacementPossible.length);
			deplacementPossibleAttack.forEach(element => {document.getElementById(element).classList.remove('red');});
			deplacementPossibleBlanc.splice(0, deplacementPossibleBlanc.length);
			deplacementPossibleNoir.splice(0, deplacementPossibleNoir.length);
			deplacementPossibleDangerBlanc.splice(0, deplacementPossibleDangerBlanc.length);
			deplacementPossibleDangerNoir.splice(0, deplacementPossibleDangerNoir.length);
			deplacementIndigeneBlanc.splice(0, deplacementIndigeneBlanc.length);
			deplacementIndigeneNoir.splice(0, deplacementIndigeneNoir.length);
			KingDangerArray.splice(0, KingDangerArray.length);
			newPositionStrArrayBlanc.splice(0, newPositionStrArrayBlanc.length);
			newPositionStrArrayNoir.splice(0, newPositionStrArrayNoir.length);

			
			
			checkMat(couleur, placement, newPositionStr);
			
			
		

			loadNew(newPosition, newPositionStr);
			newNode   = false;
			idPiece   = false;
			debug = false;
			number = 0;
			
			boolean = !boolean;
			
			if(boolean){
			setTimeout(player, 0.02);
			}
			
			
			
		}
		
		
	

}

function checkMat(couleur, placement, newPositionStr){
	
	
	
	
	allMoves('');
	
		for(let i=0; i<8; i++)
	{
		range[i].forEach((element2, index) => {
			
			if(document.getElementById(element2).firstElementChild){
				if(document.getElementById(element2).firstElementChild.id.includes('roi'+couleur)){
					if(couleur === 'noir'){
						let foo = KingEscape('noir', i, index, newPositionStr, range[i][index]) 
						
						if(foo == 'gagne'){
							 window.alert('Echec et math les Blancs ont gagnés')
							 location.reload()
							 
						 
						}else{
							if (Array.isArray(foo)) {
								KingDanger = !KingDanger;
								
								foo.forEach(element => {
									KingDangerArray.push(element)
								});
								
								foo.splice(0, foo.length)
							}else{
								KingDanger = true;
							}
							console.log(KingDanger);
						}

					}else{
						let foo = KingEscape('blanc', i, index, newPositionStr, range[i][index]) 
						
						if(foo == 'gagne'){
						
							 window.alert('Echec et math les noirs ont gagnés')
							 location.reload()
							 
						}else{
							if (Array.isArray(foo)) {
								
								KingDanger = !KingDanger;
								
								foo.forEach(element => {
									KingDangerArray.push(element)
								});
								foo.splice(0, foo.length)
							}else{
								KingDanger = true;
							}
							
						}
					}
				}
			}
		});
	}
		
	
	
	function KingEscape(param, a, b, newPositionStrr, placement){

		
		deplacementPossible.splice(0, deplacementPossible.length);
		let newPositionStr;
		
		

		if(param == 'noir'){
			allMoves('kingMove');
			king(a, b, true)	
			let depla = [];
			deplacementPossible.forEach(element => {
				depla.push(element)
			});
			console.log(depla)
			if(newPositionStrArrayNoir.length == 1){
				newPositionStr = newPositionStrArrayNoir[0];
			}else if(newPositionStrArrayNoir.length == 2){
				if(deplacementPossible.length == 0){
					return 'gagne';
				}else{
					let result4 = [depla]
						return result4;
				}
			}else{
				return 'd';
			}
			console.log(newPositionStrArrayNoir)
			let List = kingProtection(newPositionStr, 'noir', placement);
				if(deplacementPossibleDangerNoir.includes(range[a][b])
				 && !deplacementPossibleDangerBlanc.includes(newPositionStr) && deplacementPossible.length == 0){
					if (List.length == 0){
						return 'gagne';
					}else{
					
						let result = [List, 1, 2, 3, 4];
						return result;
					}
				
					
				}else if(deplacementPossibleDangerNoir.includes(range[a][b])
				&& deplacementPossibleDangerBlanc.includes(newPositionStr) && deplacementPossible.length >0){
					
					
					
					if (List.length > 0){
						
						
						let result = [List, depla, newPositionStr]
						return result;
					}else{
						
						let result = [ depla, newPositionStr]
						console.table(result)
						return result;
					}
					
				}else if(deplacementPossibleDangerNoir.includes(range[a][b])
				&& deplacementPossibleDangerBlanc.includes(newPositionStr) && deplacementPossible.length == 0){
					
					if (List.length > 0){
						
						
						let result = [List, newPositionStr]
						console.table(result)
						return result;
					}else{
						

						let result3 = [newPositionStr]
						return result3;
					}
					
				}else if(deplacementPossibleDangerNoir.includes(range[a][b])
				&& !deplacementPossibleDangerBlanc.includes(newPositionStr) && deplacementPossible.length > 0){
					
					if (List.length > 0){
						
						let result = [List, depla]
						console.table(result)
						return result;
					}else{
						let result4 = [depla]
						console.table(result4)
						return result4;
					}
				}
				
		}else{
			allMoves('kingMove');
			king(a, b, false)
			let depla = [];
			deplacementPossible.forEach(element => {
				depla.push(element)
			});
			
			if(newPositionStrArrayBlanc.length == 1){
				newPositionStr = newPositionStrArrayBlanc[0];
			}else if(newPositionStrArrayBlanc.length == 2){
				if(deplacementPossible.length == 0){
					return 'gagne';
				}else{
					let result4 = [depla]
						return result4;
				}
			}else{
				return 'd';
			}
				

			let List2 = kingProtection(newPositionStr, 'blanc', placement)
			
			    if((deplacementPossibleDangerBlanc.includes(range[a][b]))
				&& !deplacementPossibleDangerNoir.includes(newPositionStr) && deplacementPossible.length == 0){
					if (List2.length == 0){
						return 'gagne';
					}else{
						let result = [List2, 1, 2, 3, 4];
						return result;
					}
					
				}else if (deplacementPossibleDangerBlanc.includes(range[a][b])
				&& deplacementPossibleDangerNoir.includes(newPositionStr) && deplacementPossible.length > 0){
					
					if (List2.length > 0){
						
						let result = [List2, depla, newPositionStr]
						return result;
					}else{
						let result = [ depla, newPositionStr]
						return result;
					}

				}else if (deplacementPossibleDangerBlanc.includes(range[a][b])
				&& deplacementPossibleDangerNoir.includes(newPositionStr) && deplacementPossible.length == 0){
					
					if (List2.length > 0){
						
						let result = [List2,  newPositionStr]
						return result;
					}else{
						let result3 = [newPositionStr]
						return result3;
					}

				}else if (deplacementPossibleDangerBlanc.includes(range[a][b])
				&& !deplacementPossibleDangerNoir.includes(newPositionStr) && deplacementPossible.length > 0){
					
					if (List2.length > 0){
						
						let result = [List2, depla]
						return result;
					}else{
						let result4 = [depla]
						return result4;
					}
					
					
				}
		
			}

	}
	
}

function FriendlyIdentification(Position, boolean)
{
	
	let result;
	let color;
	if(boolean){
		color ='noir';
	}else{
		color ='blanc';
	}

	
	 if(document.getElementById(Position).firstElementChild != null){
			let frendlyPiece = document.importNode(document.getElementById(Position).firstElementChild).id;
			result = frendlyPiece.includes(color);
			
			if(result){
				return true;
			}
			return false;
		}
	return false;
}
	
	function FriendlyIdentificationHorse(Position, boolean)
	{
		
		let result;
		let color;
		if(boolean){
			color ='noir';
		}else{
			color ='blanc';
		}
		
		
		if(!document.getElementById(Position).firstElementChild){
			return true;
		}else if(document.getElementById(Position).firstElementChild){
			let frendlyPiece = document.importNode(document.getElementById(Position).firstElementChild).id;
			result = frendlyPiece.includes(color);
			
			if(result){
				return false;
			}
			return true;
		}
		
	}
	
	
	function pion(firstIndex, secondIndex, booleanParamater, param)
	{
		
		let number1 = 1;
		let number2 = 1;
		let firstNumber = firstIndex;
		let switchValue = booleanParamater;
		
		if(document.importNode(document.getElementById(range[firstIndex][secondIndex]).firstElementChild).id.includes('noir'))
		{
			number1 = 6;
			number2 = -1;
		}
		

		
			if(firstIndex === number1){
					firstIndex += number2;			
				if(!document.getElementById(range[firstIndex][secondIndex]).firstElementChild ){
					deplacementPossible.push(range[firstIndex][secondIndex])
					firstIndex += number2;
				if(!document.getElementById(range[firstIndex][secondIndex]).firstElementChild ){
					deplacementPossible.push(range[firstIndex][secondIndex])
				}
			}
			}else{
				if((firstIndex >-1 && firstIndex <8 ) ){
					firstIndex += number2;
					if(!document.getElementById(range[firstIndex][secondIndex]).firstElementChild ){
						deplacementPossible.push(range[firstIndex][secondIndex])}
				}
			}
		
		
			
			firstNumber += number2;
			secondIndex -= 1;
			if((firstNumber >-1 && firstNumber <8 ) && (secondIndex >-1 && secondIndex <8 )){
					
					if(document.getElementById(range[firstNumber][secondIndex]).firstElementChild
					&&( !FriendlyIdentification(range[firstNumber][secondIndex],switchValue) || param == 'king')){
						deplacementPossibleAttack.push(range[firstNumber][secondIndex])
					}else if(!document.getElementById(range[firstNumber][secondIndex]).firstElementChild && param == 'king'){
						deplacementPossibleAttack.push(range[firstNumber][secondIndex])
					}
					
			}
			secondIndex += 2;
			if((firstNumber >-1 && firstNumber <8 ) && (secondIndex >-1 && secondIndex <8 )){

					
					if(document.getElementById(range[firstNumber][secondIndex]).firstElementChild
					&& (!FriendlyIdentification(range[firstNumber][secondIndex],switchValue) ||  param == 'king' )){
						deplacementPossibleAttack.push(range[firstNumber][secondIndex])
					}else if(!document.getElementById(range[firstNumber][secondIndex]).firstElementChild && param == 'king'){
						deplacementPossibleAttack.push(range[firstNumber][secondIndex])
					}

			}
			
		
			dangerPiece = false;
	}




function fou(firstIndex, secondIndex, maxLoop, booleanParamater, king){

	
	let switchValue = booleanParamater;
	

	for(let i=1; i<maxLoop;i++)
	{
		let firstValue = (firstIndex +  i);
		let secondvalue = (secondIndex + i);
		if((firstValue > 7 || firstValue <0) || (secondvalue > 7 || secondvalue <0)){break;}
		if(FriendlyIdentification(range[firstValue][secondvalue],switchValue)){
			if (switchValue) {
				deplacementIndigeneNoir.push(range[firstValue][secondvalue])
			}else{
				deplacementIndigeneBlanc.push(range[firstValue][secondvalue])
			}
			break;
		};
		if(document.getElementById(range[firstValue][secondvalue]).firstElementChild){
			if(king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue][secondvalue]) == -1 && 
			!deplacementIndigeneNoir.includes(range[firstValue][secondvalue])){

				deplacementPossibleAttack.push(range[firstValue][secondvalue]);
			}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue][secondvalue]) == -1 &&
			!deplacementIndigeneBlanc.includes(range[firstValue][secondvalue])){
				deplacementPossibleAttack.push(range[firstValue][secondvalue])
			}else if (king == ''){
				deplacementPossibleAttack.push(range[firstValue][secondvalue])
			}else if (king == 'kingLastEscape'){
				let uniqueValue = firstValue + 1 ;
				let uniqueValue2 = secondvalue + 1 ;
				if(document.getElementById(range[firstValue][secondvalue]).firstElementChild.id.includes('roi')
				&& (uniqueValue < 8 && uniqueValue > 0 && uniqueValue2 < 8 && uniqueValue2 > 0) ){
					deplacementPossible.push(range[uniqueValue][uniqueValue2])
				}
			}
			break;
		}if( king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue][secondvalue]) == -1 ){
			deplacementPossible.push(range[firstValue][secondvalue])
		}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue][secondvalue]) == -1){
			deplacementPossible.push(range[firstValue][secondvalue])
		}else if (king != 'king'){
			deplacementPossible.push(range[firstValue][secondvalue])
		}
	}	

	
	for(let i=1; i<maxLoop;i++)
	{
		let firstValue1 = (firstIndex - i );
		let secondvalue1 = (secondIndex - i);
		if((firstValue1 > 7 || firstValue1 <0) || (secondvalue1 > 7 || secondvalue1 <0)){break;}
		if(FriendlyIdentification(range[firstValue1][secondvalue1],switchValue)){
			if (switchValue) {
				deplacementIndigeneNoir.push(range[firstValue1][secondvalue1])
			}else{
				deplacementIndigeneBlanc.push(range[firstValue1][secondvalue1])
			}
			break;
		};
		if(document.getElementById(range[firstValue1][secondvalue1]).firstElementChild){
			if(king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue1][secondvalue1]) == -1 && 
			!deplacementIndigeneNoir.includes(range[firstValue1][secondvalue1])){

				deplacementPossibleAttack.push(range[firstValue1][secondvalue1]);
				
			}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue1][secondvalue1]) == -1&& 
			!deplacementIndigeneBlanc.includes(range[firstValue1][secondvalue1])){

				deplacementPossibleAttack.push(range[firstValue1][secondvalue1])
				
			}else if (king == ''){
				deplacementPossibleAttack.push(range[firstValue1][secondvalue1])
			}else if (king == 'kingLastEscape'){
				let uniqueValue = firstValue1 - 1 ;
				let uniqueValue2 = secondvalue1 - 1 ;
				if(document.getElementById(range[firstValue1][secondvalue1]).firstElementChild.id.includes('roi')
				&& (uniqueValue < 8 && uniqueValue > 0 && uniqueValue2 < 8 && uniqueValue2 > 0) ){
					deplacementPossible.push(range[uniqueValue][uniqueValue2])
				}
			}
			break;
		}if( king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue1][secondvalue1]) == -1 ){

			deplacementPossible.push(range[firstValue1][secondvalue1])
		}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue1][secondvalue1]) == -1){
			deplacementPossible.push(range[firstValue1][secondvalue1])
		}else if (king != 'king'){
			deplacementPossible.push(range[firstValue1][secondvalue1])
		}
	}	


	for(let i=1; i<maxLoop;i++)
	{
		let firstValue2 = (firstIndex -   i );
		let secondvalue2 = (secondIndex + i);
		if((firstValue2 > 7 || firstValue2 <0) || (secondvalue2 > 7 || secondvalue2 <0)){break;}
		if(FriendlyIdentification(range[firstValue2][secondvalue2],switchValue)){
			if (switchValue) {
				deplacementIndigeneNoir.push(range[firstValue2][secondvalue2])
			}else{
				deplacementIndigeneBlanc.push(range[firstValue2][secondvalue2])
			}
			break;
		};
		if(document.getElementById(range[firstValue2][secondvalue2]).firstElementChild){
			if(king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue2][secondvalue2]) == -1 && 
			!deplacementIndigeneNoir.includes(range[firstValue2][secondvalue2])){
				deplacementPossibleAttack.push(range[firstValue2][secondvalue2]);
			}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue2][secondvalue2]) == -1&& 
			!deplacementIndigeneBlanc.includes(range[firstValue2][secondvalue2])){
				deplacementPossibleAttack.push(range[firstValue2][secondvalue2])
			}else if (king == ''){
				deplacementPossibleAttack.push(range[firstValue2][secondvalue2])
			}else if (king == 'kingLastEscape'){
				let uniqueValue  = firstValue2  - 1 ;
				let uniqueValue2 = secondvalue2 + 1 ;
				if(document.getElementById(range[firstValue2][secondvalue2]).firstElementChild.id.includes('roi')
				&& (uniqueValue < 8 && uniqueValue > 0 && uniqueValue2 < 8 && uniqueValue2 > 0) ){
					deplacementPossible.push(range[uniqueValue][uniqueValue2])
				}
			}
			break;
		}if( king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue2][secondvalue2]) == -1 ){
			deplacementPossible.push(range[firstValue2][secondvalue2])
		
		}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue2][secondvalue2]) == -1){
			deplacementPossible.push(range[firstValue2][secondvalue2])
		
		}else if (king != 'king'){
			deplacementPossible.push(range[firstValue2][secondvalue2])
		}
	}


	for(let i=1; i<maxLoop;i++)
	{
		let firstValue3  = (firstIndex + i);
		let secondvalue3 = (secondIndex - i);
		if((firstValue3 > 7 || firstValue3 <0) || (secondvalue3 > 7 || secondvalue3 <0)){break;}
		if(FriendlyIdentification(range[firstValue3][secondvalue3],switchValue)){
			if (switchValue) {
				deplacementIndigeneNoir.push(range[firstValue3][secondvalue3])
			}else{
				deplacementIndigeneBlanc.push(range[firstValue3][secondvalue3])
			}
			break;
		};
		if(document.getElementById(range[firstValue3][secondvalue3]).firstElementChild){
			if(king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue3][secondvalue3]) == -1 && 
			!deplacementIndigeneNoir.includes(range[firstValue3][secondvalue3])){
				deplacementPossibleAttack.push(range[firstValue3][secondvalue3]);
			}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue3][secondvalue3]) == -1&& 
			!deplacementIndigeneBlanc.includes(range[firstValue3][secondvalue3])){
				deplacementPossibleAttack.push(range[firstValue3][secondvalue3])
			}else if (king == ''){
				deplacementPossibleAttack.push(range[firstValue3][secondvalue3])
			}else if (king == 'kingLastEscape'){
				let uniqueValue  = firstValue3  + 1 ;
				let uniqueValue2 = secondvalue3 - 1 ;
				
				if(document.getElementById(range[firstValue3][secondvalue3]).firstElementChild.id.includes('roi')
				&& (uniqueValue < 8 && uniqueValue > 0 && uniqueValue2 < 8 && uniqueValue2 > 0) ){
					deplacementPossible.push(range[uniqueValue][uniqueValue2])
				}
			}
			break;
		}if( king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue3][secondvalue3]) == -1 ){
			deplacementPossible.push(range[firstValue3][secondvalue3])
		}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue3][secondvalue3]) == -1){
			deplacementPossible.push(range[firstValue3][secondvalue3])
		}else if (king != 'king'){
			deplacementPossible.push(range[firstValue3][secondvalue3])
		}
	}



	dangerPiece = true;
}


function tour(firstIndex, secondIndex, maxLoop, booleanParamater, king){



	let switchValue = booleanParamater;
	
	


	for(let i=1; i<maxLoop;i++)
	{
		let firstValue = (firstIndex + i );
		let secondvalue = secondIndex ;
		if((firstValue > 7 || firstValue <0) || (secondvalue > 7 || secondvalue <0)){break}
		if(FriendlyIdentification(range[firstValue][secondvalue],switchValue)){
			if (switchValue) {
				deplacementIndigeneNoir.push(range[firstValue][secondvalue])
			}else{
				deplacementIndigeneBlanc.push(range[firstValue][secondvalue])
			}
			break;
		};
		
		if(document.getElementById(range[firstValue][secondvalue]).firstElementChild){
			if(king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue][secondvalue]) == -1 
			&& !deplacementIndigeneNoir.includes(range[firstValue][secondvalue]) ){
				deplacementPossibleAttack.push(range[firstValue][secondvalue]);
			}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue][secondvalue]) == -1
			&& !deplacementIndigeneBlanc.includes(range[firstValue][secondvalue]) ){

				deplacementPossibleAttack.push(range[firstValue][secondvalue])
			}else if (king == ''){
				deplacementPossibleAttack.push(range[firstValue][secondvalue])
			}else if (king == 'kingLastEscape'){
				let uniqueValue = firstValue + 1 ;
				if(document.getElementById(range[firstValue][secondvalue]).firstElementChild.id.includes('roi')
				&& (uniqueValue < 8 && uniqueValue > 0)){
					deplacementPossible.push(range[uniqueValue][secondvalue])
				}
			}
			break;
		}if( king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue][secondvalue]) == -1 ){
			 
			deplacementPossible.push(range[firstValue][secondvalue])
		}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue][secondvalue]) == -1){
			
			deplacementPossible.push(range[firstValue][secondvalue])
		}else if (king != 'king'){
			deplacementPossible.push(range[firstValue][secondvalue])
		}
	}	

	for(let i=1; i<maxLoop;i++)
	{
		let firstValue1 = (firstIndex - i );
		let secondvalue1 = secondIndex ;
		if((firstValue1 > 7 || firstValue1 <0) || (secondvalue1 > 7 || secondvalue1 <0)){break}
		if(FriendlyIdentification(range[firstValue1][secondvalue1],switchValue)){
			if (switchValue) {
				deplacementIndigeneNoir.push(range[firstValue1][secondvalue1])
			}else{
				deplacementIndigeneBlanc.push(range[firstValue1][secondvalue1])
			}
			break;
		};
		if(document.getElementById(range[firstValue1][secondvalue1]).firstElementChild){
			if(king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue1][secondvalue1]) == -1 
			&& !deplacementIndigeneNoir.includes(range[firstValue1][secondvalue1]) ){
				deplacementPossibleAttack.push(range[firstValue1][secondvalue1]);
			}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue1][secondvalue1]) == -1
			&& !deplacementIndigeneBlanc.includes(range[firstValue1][secondvalue1]) ){
				deplacementPossibleAttack.push(range[firstValue1][secondvalue1])
			}else if (king == ''){
				deplacementPossibleAttack.push(range[firstValue1][secondvalue1])
			}else if (king == 'kingLastEscape'){
				let uniqueValue = firstValue1 - 1 ;
				if(document.getElementById(range[firstValue1][secondvalue1]).firstElementChild.id.includes('roi')
				&& (uniqueValue < 8 && uniqueValue > 0)){
					deplacementPossible.push(range[uniqueValue][secondvalue1])
				}
			}
			break;
		}if( king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue1][secondvalue1]) == -1 ){
			deplacementPossible.push(range[firstValue1][secondvalue1])
			
		}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue1][secondvalue1]) == -1){
			
			deplacementPossible.push(range[firstValue1][secondvalue1])
		}else if (king != 'king'){
			deplacementPossible.push(range[firstValue1][secondvalue1])
		}
	}	

	for(let i=1; i<maxLoop;i++)
	{
		let firstValue2 = firstIndex;
		let secondvalue2 = (secondIndex + i);
		if((firstValue2 > 7 || firstValue2 <0) || (secondvalue2 > 7 || secondvalue2 <0)){break}
		if(FriendlyIdentification(range[firstValue2][secondvalue2],switchValue)){
			if (switchValue) {
				deplacementIndigeneNoir.push(range[firstValue2][secondvalue2])
			}else{
				deplacementIndigeneBlanc.push(range[firstValue2][secondvalue2])
			}
			break;
		};
		if(document.getElementById(range[firstValue2][secondvalue2]).firstElementChild){
			if(king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue2][secondvalue2]) == -1 
			&& !deplacementIndigeneNoir.includes(range[firstValue2][secondvalue2]) ){

				deplacementPossibleAttack.push(range[firstValue2][secondvalue2]);
			}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue2][secondvalue2]) == -1
			&& !deplacementIndigeneBlanc.includes(range[firstValue2][secondvalue2]) ){

				deplacementPossibleAttack.push(range[firstValue2][secondvalue2])
			}else if (king == ''){
				deplacementPossibleAttack.push(range[firstValue2][secondvalue2])
			}else if (king == 'kingLastEscape'){
				let uniqueValue = secondvalue2 + 1 ;
				if(document.getElementById(range[firstValue2][secondvalue2]).firstElementChild.id.includes('roi')
				&& (uniqueValue < 8 && uniqueValue > 0)){
					deplacementPossible.push(range[firstValue2][uniqueValue])
				}
			}
			break;
		}if( king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue2][secondvalue2]) == -1 ){
			deplacementPossible.push(range[firstValue2][secondvalue2])
			
		}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue2][secondvalue2]) == -1){
			deplacementPossible.push(range[firstValue2][secondvalue2])
			
		}else if (king != 'king'){
			deplacementPossible.push(range[firstValue2][secondvalue2])
		}
	}


	for(let i=1; i<maxLoop;i++)
	{
		let firstValue3  = firstIndex;
		let secondvalue3 = (secondIndex - i);
		if((firstValue3 > 7 || firstValue3 <0) || (secondvalue3 > 7 || secondvalue3 <0)){break}
		if(FriendlyIdentification(range[firstValue3][secondvalue3],switchValue)){
			if (switchValue) {
				deplacementIndigeneNoir.push(range[firstValue3][secondvalue3])
			}else{
				deplacementIndigeneBlanc.push(range[firstValue3][secondvalue3])
			}
			break;
		};
		if(document.getElementById(range[firstValue3][secondvalue3]).firstElementChild){

			if(king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue3][secondvalue3]) == -1 
			&& !deplacementIndigeneNoir.includes(range[firstValue3][secondvalue3]) ){
				deplacementPossibleAttack.push(range[firstValue3][secondvalue3]);

			}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue3][secondvalue3]) == -1
			&& !deplacementIndigeneBlanc.includes(range[firstValue3][secondvalue3]) ){
				deplacementPossibleAttack.push(range[firstValue3][secondvalue3])

			}else if (king == ''){
				deplacementPossibleAttack.push(range[firstValue3][secondvalue3])
			}else if (king == 'kingLastEscape'){
				let uniqueValue = secondvalue3 - 1 ;
				if(document.getElementById(range[firstValue3][secondvalue3]).firstElementChild.id.includes('roi')
				&& (uniqueValue < 8 && uniqueValue > 0)){
					deplacementPossible.push(range[firstValue3][uniqueValue])
				}
			}
			break;
		}if( king == 'king' && !switchValue && deplacementPossibleNoir.indexOf(range[firstValue3][secondvalue3]) == -1 ){
			deplacementPossible.push(range[firstValue3][secondvalue3])
			
		}else if( king == 'king' && switchValue && deplacementPossibleBlanc.indexOf(range[firstValue3][secondvalue3]) == -1){
			deplacementPossible.push(range[firstValue3][secondvalue3])
			
		}else if (king != 'king'){
			deplacementPossible.push(range[firstValue3][secondvalue3])
		}
	}

	
	dangerPiece = true;
}

function horse(firstIndex, secondIndex, booleanParamater, param){

	let firstValue = firstIndex;
	let secondvalue = secondIndex;
	let firstValue2 = firstIndex;
	let secondvalue2 = secondIndex;
	let firstValue3 = firstIndex;
	let secondvalue3 = secondIndex;
	let firstValue4= firstIndex;
	let secondvalue4 = secondIndex;
	let switchValue = booleanParamater;

	for(let i=1; i<3;i++)
	{
		firstValue += (i+1) ;
		secondvalue += i;
		if((firstValue > 7 || firstValue <0) || (secondvalue > 7 || secondvalue <0)){
			firstValue -= (i+2);
			secondvalue -= (i+3);
			continue}
		if(FriendlyIdentification(range[firstValue][secondvalue],switchValue)){
			if( (firstValue >=0 && firstValue < 8) && (secondvalue >=0 && secondvalue < 8)  ){
				if (switchValue) {
					deplacementIndigeneNoir.push(range[firstValue][secondvalue])
				}else{
					deplacementIndigeneBlanc.push(range[firstValue][secondvalue])
				}
			}
			firstValue -= (i+2);
			secondvalue -= (i+3);
			continue};
		if(document.getElementById(range[firstValue][secondvalue]).firstElementChild){
			deplacementPossibleAttack.push(range[firstValue][secondvalue])
			firstValue -= (i+2);
			secondvalue -= (i+3);
			continue};
		deplacementPossible.push(range[firstValue][secondvalue])
		firstValue -= (i+2);
		secondvalue -= (i+3);
	}	

	for(let i=1; i<3;i++)
	{
		firstValue2 += 1 ;
		secondvalue2 += 2;
		if((firstValue2 > 7 || firstValue2 <0) || (secondvalue2 > 7 || secondvalue2 <0)){
			firstValue2 -= 1;
			secondvalue2 -= 6;
			continue}
		if(FriendlyIdentification(range[firstValue2][secondvalue2],switchValue)){
			if( (firstValue2 >=0 && firstValue2 < 8) && (secondvalue2 >=0 && secondvalue2 < 8)  ){
				if (switchValue) {
					deplacementIndigeneNoir.push(range[firstValue2][secondvalue2])
				}else{
					deplacementIndigeneBlanc.push(range[firstValue2][secondvalue2])
				}
			}
			firstValue2 -= 1;
			secondvalue2 -= 6;
			continue};
		if(document.getElementById(range[firstValue2][secondvalue2]).firstElementChild){
			deplacementPossibleAttack.push(range[firstValue2][secondvalue2])
			firstValue2 -= 1;
			secondvalue2 -= 6;
			continue};
		deplacementPossible.push(range[firstValue2][secondvalue2])
		firstValue2 -= 1;
		secondvalue2 -= 6;
		
	}	
	
	for(let i=1; i<3;i++)
	{
		firstValue3 -= i ;
		secondvalue3 -= (i+1);
		if((firstValue3 > 7 || firstValue3 <0) || (secondvalue3 > 7 || secondvalue3 <0)){
			firstValue3 += 2;
			secondvalue3 += (i+6);
			continue}
		if(FriendlyIdentification(range[firstValue3][secondvalue3],switchValue) ){
			if( (firstValue3 >=0 && firstValue3 < 8) && (secondvalue3 >=0 && secondvalue3 < 8)  ){
				if (switchValue) {
					deplacementIndigeneNoir.push(range[firstValue3][secondvalue3])
				}else{
					deplacementIndigeneBlanc.push(range[firstValue3][secondvalue3])
				}
			}
			firstValue3 += 2;
			secondvalue3 += (i+6);
			continue};
			
		if(document.getElementById(range[firstValue3][secondvalue3]).firstElementChild){
			deplacementPossibleAttack.push(range[firstValue3][secondvalue3])
			firstValue3 += 2;
			secondvalue3 += (i+6);
			continue};	
		deplacementPossible.push(range[firstValue3][secondvalue3])
		firstValue3 += 2;
		secondvalue3 += (i+6);
	}	

	for(let i=1; i<3;i++)
	{
		firstValue4 -= (i+1) ;
		secondvalue4 -= i;
		if((firstValue4 > 7 || firstValue4 <0) || (secondvalue4 > 7 || secondvalue4 <0)){
			firstValue4 += (i+2);
			secondvalue4 += (i+3);
			continue}
		if(FriendlyIdentification(range[firstValue4][secondvalue4],switchValue)){
			if( (firstValue4 >=0 && firstValue4 < 8) && (secondvalue4 >=0 && secondvalue4 < 8)  ){
				if (switchValue) {
					deplacementIndigeneNoir.push(range[firstValue4][secondvalue4])
				}else{
					deplacementIndigeneBlanc.push(range[firstValue4][secondvalue4])
				}
			}
			firstValue4 += (i+2);
			secondvalue4 += (i+3);
			continue};
		if(document.getElementById(range[firstValue4][secondvalue4]).firstElementChild){
			deplacementPossibleAttack.push(range[firstValue4][secondvalue4])
			firstValue4 += (i+2);
			secondvalue4 += (i+3);
			continue};
		deplacementPossible.push(range[firstValue4][secondvalue4])
		firstValue4 += (i+2);
		secondvalue4 += (i+3);
		
	}	
	dangerPiece = false;

}


function queen(firstIndex, secondIndex, booleanParamater, param)
{
	let booleanSet = booleanParamater;
	let maxLoop = 8;
	if(param === 'kingLastEscape'){
		fou(firstIndex, secondIndex, maxLoop, booleanSet, 'kingLastEscape'), tour(firstIndex, secondIndex, maxLoop, booleanSet, 'kingLastEscape');	
	}else{
		fou(firstIndex, secondIndex, maxLoop, booleanSet, ''), tour(firstIndex, secondIndex, maxLoop, booleanSet, '');	

	}
}

function king(firstIndex, secondIndex, booleanParamater)
{
	let booleanSet = booleanParamater;
	let maxLoop = 2;
	fou(firstIndex, secondIndex, maxLoop, booleanSet, 'king'), tour(firstIndex, secondIndex, maxLoop, booleanSet, 'king');	
}


function allMoves(param){

	
	
	
	for(let i=0; i<8; i++)
	{
		for(let a=0; a<8; a++)
		{
			
			if(document.getElementById(range[i][a]).firstElementChild )
			{

			let maxLoop = 8;
			if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('tour')){
				
				if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('noir')){
					
					if(param == 'kingMove'){
						tour(i, a, maxLoop, true, 'kingLastEscape');
						deplacementPossible.forEach(element => deplacementPossibleNoir.push(element));
					}else{
						tour(i, a, maxLoop, true, '');
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerBlanc.push(element));
						deplacementPossible.forEach(element => deplacementPossibleNoir.push(element));
						deplacementPossibleAttack.forEach(element => {
							if(document.importNode(document.getElementById(element).firstElementChild).id.includes('roiblanc')){
								newPositionStrArrayBlanc.push(range[i][a]);
							}
						});
					}
						deplacementPossible.splice(0,  deplacementPossible.length);
						deplacementPossibleAttack.splice(0,  deplacementPossibleAttack.length);					
					
					
					
				}else if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('blanc')){
					
					if(param == 'kingMove'){
						tour(i, a, maxLoop, false, 'kingLastEscape')
						deplacementPossible.forEach(element => deplacementPossibleBlanc.push(element));
					}else{
						tour(i, a, maxLoop, false, '')
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerNoir.push(element));
						deplacementPossible.forEach(element => deplacementPossibleBlanc.push(element));
						deplacementPossibleAttack.forEach(element => {
							if(document.importNode(document.getElementById(element).firstElementChild).id.includes('roinoir')){
								newPositionStrArrayNoir.push(range[i][a]);
							}
						});
					}
					deplacementPossible.splice(0,  deplacementPossible.length);
					deplacementPossibleAttack.splice(0,  deplacementPossibleAttack.length);
				
			
				}
				
			
			}else if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('fou')){
				
				if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('noir')){
					
					if(param == 'kingMove'){
						fou(i, a, maxLoop, true, 'kingLastEscape');
						deplacementPossible.forEach(element => deplacementPossibleNoir.push(element));
					}else{
						fou(i, a, maxLoop, true, '');
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerBlanc.push(element));
						deplacementPossible.forEach(element => deplacementPossibleNoir.push(element));
						deplacementPossibleAttack.forEach(element => {
							if(document.importNode(document.getElementById(element).firstElementChild).id.includes('roiblanc')){
								newPositionStrArrayBlanc.push(range[i][a]);
							}
						});
					}
					deplacementPossible.splice(0,  deplacementPossible.length);
					deplacementPossibleAttack.splice(0,  deplacementPossibleAttack.length);					
										
					
					
				}else if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('blanc')){
					
					if(param == 'kingMove'){
						fou(i, a, maxLoop, false, 'kingLastEscape');
						deplacementPossible.forEach(element => deplacementPossibleBlanc.push(element));
					}else{
						fou(i, a, maxLoop, false, '');
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerNoir.push(element));
						deplacementPossible.forEach(element => deplacementPossibleBlanc.push(element));
						deplacementPossibleAttack.forEach(element => {
							if(document.importNode(document.getElementById(element).firstElementChild).id.includes('roinoir')){
								newPositionStrArrayNoir.push(range[i][a]);
							}
						});
					}
					deplacementPossible.splice(0,  deplacementPossible.length);
					deplacementPossibleAttack.splice(0,  deplacementPossibleAttack.length);
				
					
			
				}
				
			}else if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('dame')){
				
				if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('noir')){
					
				
					if(param == 'kingMove'){
						queen(i, a,  true, 'kingLastEscape');
						deplacementPossible.forEach(element => deplacementPossibleNoir.push(element));
					}else{
						queen(i, a,  true, '');
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerBlanc.push(element));
						deplacementPossible.forEach(element => deplacementPossibleNoir.push(element));
						deplacementPossibleAttack.forEach(element => {
							if(document.importNode(document.getElementById(element).firstElementChild).id.includes('roiblanc')){
								newPositionStrArrayBlanc.push(range[i][a]);
							}
						});
					}
					
					deplacementPossible.splice(0,  deplacementPossible.length);
					deplacementPossibleAttack.splice(0,  deplacementPossibleAttack.length);					
					
					
					
				}else if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('blanc')){
					
					
					if(param == 'kingMove'){
						queen(i, a, false, 'kingLastEscape')
						deplacementPossible.forEach(element => deplacementPossibleBlanc.push(element));
					}else{
						queen(i, a, false, '')
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerNoir.push(element));
						deplacementPossible.forEach(element => deplacementPossibleBlanc.push(element));
						deplacementPossibleAttack.forEach(element => {
							if(document.importNode(document.getElementById(element).firstElementChild).id.includes('roinoir')){
								newPositionStrArrayNoir.push(range[i][a]);
							}
						});
					}
					
					deplacementPossible.splice(0,  deplacementPossible.length);
					deplacementPossibleAttack.splice(0,  deplacementPossibleAttack.length);
				
				}		
			
				
				
			}else if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('cavalier')){
				if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('noir')){
					
					if(param == 'kingMove'){
						horse(i, a,true, 'king');
						deplacementPossible.forEach(element => deplacementPossibleNoir.push(element));
					}else{
						horse(i, a,true, '');
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerBlanc.push(element));
						deplacementPossible.forEach(element => deplacementPossibleNoir.push(element));
						deplacementPossibleAttack.forEach(element => {
							if(document.importNode(document.getElementById(element).firstElementChild).id.includes('roiblanc')){
								newPositionStrArrayBlanc.push(range[i][a]);
							}
						});
					}
					deplacementPossible.splice(0,  deplacementPossible.length);
					deplacementPossibleAttack.splice(0,  deplacementPossibleAttack.length);					
					
					
					
				}else if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('blanc')){
					
					if(param == 'kingMove'){
						horse(i, a, false, 'king')
						deplacementPossible.forEach(element => deplacementPossibleBlanc.push(element));
					}else{
						horse(i, a, false, '')
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerNoir.push(element));
						deplacementPossible.forEach(element => deplacementPossibleBlanc.push(element));
						deplacementPossibleAttack.forEach(element => {
							if(document.importNode(document.getElementById(element).firstElementChild).id.includes('roinoir')){
								newPositionStrArrayNoir.push(range[i][a]);
							}
						});
					}
					deplacementPossible.splice(0,  deplacementPossible.length);
					deplacementPossibleAttack.splice(0,  deplacementPossibleAttack.length);
										
					
			
				}
				
			}else if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('pion')){
				if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('noir')){
					
					if(param == 'kingMove'){
						pion(i, a, true, 'king');
						deplacementPossibleAttack.forEach(element => deplacementPossibleNoir.push(element));
					}else{
						pion(i, a, true, '');
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerBlanc.push(element));
						deplacementPossible.forEach(element => deplacementPossibleNoir.push(element));
						deplacementPossibleAttack.forEach(element => {
							if(document.importNode(document.getElementById(element).firstElementChild).id.includes('roiblanc')){
								newPositionStrArrayBlanc.push(range[i][a]);
							}
						});
					}
					deplacementPossible.splice(0,  deplacementPossible.length);
					deplacementPossibleAttack.splice(0, deplacementPossibleAttack.length);					
					
					
					
				}else if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('blanc')){
					
					if(param == 'kingMove'){
						pion(i, a,  false, 'king')
						
						deplacementPossibleAttack.forEach(element => deplacementPossibleBlanc.push(element));
					}else{
						pion(i, a, false, '');
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerNoir.push(element));
						deplacementPossible.forEach(element => deplacementPossibleBlanc.push(element));
						deplacementPossibleAttack.forEach(element => {
							if(document.importNode(document.getElementById(element).firstElementChild).id.includes('roinoir')){
								newPositionStrArrayNoir.push(range[i][a]);
							}
						});
					}
					deplacementPossible.splice(0,  deplacementPossible.length);
					deplacementPossibleAttack.splice(0,  deplacementPossibleAttack.length);
					
					
			
				}

			}else if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('roi')){
				if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('noir')){
					
					king(i, a, true)
					if(param == 'kingMove'){
						deplacementPossible.forEach(element => deplacementPossibleNoir.push(element));
					}else{
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerBlanc.push(element));
						deplacementPossible.forEach(element => deplacementPossibleNoir.push(element));
					}
					deplacementPossible.splice(0,  deplacementPossible.length);
					deplacementPossibleAttack.splice(0,  deplacementPossibleAttack.length);					
					
					
					
				}else if(document.importNode(document.getElementById(range[i][a]).firstElementChild).id.includes('blanc')){
					
					king(i, a, false)
					if(param == 'kingMove'){
						deplacementPossible.forEach(element => deplacementPossibleBlanc.push(element));
					}else{
						deplacementPossibleAttack.forEach(element => deplacementPossibleDangerNoir.push(element));
						deplacementPossible.forEach(element => deplacementPossibleBlanc.push(element));
					}
					deplacementPossible.splice(0,  deplacementPossible.length);
					deplacementPossibleAttack.splice(0,  deplacementPossibleAttack.length);
					
					
			
				}
			}
			}
			
		}
	}	


	}

	function kingProtection(newPositionStr, color, placement){
		
		let firstIndex;
		let secondIndex;
		let firstIndex1;
		let secondIndex1;
		let DeplacementPossibleColor;
		let arraList = [];

		if (color == 'noir'){
			DeplacementPossibleColor = deplacementPossibleNoir;
		}else{
			DeplacementPossibleColor = deplacementPossibleBlanc;
		}
			
			
			range.forEach((element1, index1) => {
				
				element1.forEach((element2, index2) => {
					if(newPositionStr == element2){
						firstIndex = index1;
						secondIndex = index2;
					}
					if(placement == element2){
						firstIndex1 = index1;
						secondIndex1 = index2;
					}
					
				});
			});
			console.log(newPositionStr)
			if(document.importNode(document.getElementById(newPositionStr).firstElementChild)){
			if (document.importNode(document.getElementById(newPositionStr).firstElementChild).id.includes('tour') ||
			document.importNode(document.getElementById(newPositionStr).firstElementChild).id.includes( 'dame'))  {
				
				if(firstIndex == firstIndex1){
					
					if (secondIndex - secondIndex1 >= 0) {		
						for (let index = secondIndex; index > secondIndex1; index--) {

							
							if(DeplacementPossibleColor.includes(range[firstIndex][index])  ){
								arraList.push(range[firstIndex][index])
							}
							
						}
					}else{
						for (let index = secondIndex; index < secondIndex1; index++) {

				
							if(DeplacementPossibleColor.includes(range[firstIndex][index])  ){
								arraList.push(range[firstIndex][index])
							}
							
						}
					}
				}
				
				if(secondIndex == secondIndex1){
					
					if (firstIndex - firstIndex1 >= 0) {		
						for (let index = firstIndex; index > firstIndex1; index--) { 
							
							if(DeplacementPossibleColor.includes(range[index][secondIndex])  ){
								arraList.push(range[index][secondIndex])
							}
							
						}
					}else{
						for (let index = firstIndex; index < firstIndex1; index++) { 
							
							if(DeplacementPossibleColor.includes(range[index][secondIndex])  ){

								arraList.push(range[index][secondIndex]) 
							}
							
						}
					}
				}
			}
			
			if (document.importNode(document.getElementById(newPositionStr).firstElementChild).id.includes('fou') ||
			document.importNode(document.getElementById(newPositionStr).firstElementChild).id.includes( 'dame'))  {
				
				let difference1 = firstIndex - firstIndex1;  
				let difference2 = secondIndex - secondIndex1; 
				let differenceBis1 ;
				let differenceBis2 ;
	
				 differenceBis1 = firstIndex - firstIndex1;   // 4 - 7 = -4     7-4 =  4
				 differenceBis2 = secondIndex - secondIndex1; // 7 - 4 =  4     4-7 = -4
				

				if(difference1 > 0 && difference2 > 0){
                                                 
					for (let index = 1; index < difference1; index++) {
						let number1 = index+firstIndex1;
						let number2 = index+secondIndex1;
					
					
						if(DeplacementPossibleColor.includes(range[number1][number2])){
							arraList.push(range[number1][number2])
						}
					}

				}else if(difference1 < 0 && difference2 < 0){
					for (let index = 1; index < firstIndex1 - firstIndex ; index++) {
						let number1 = firstIndex+index;
						let number2 = secondIndex+index;
					
						if(DeplacementPossibleColor.includes(range[number1][number2])){
							arraList.push(range[number1][number2])
						}
					}
				}else if(differenceBis1 > 0 && differenceBis2 < 0){

					for (let index = 1; index < differenceBis1; index++) {
                        let number1 = index+firstIndex1;
						let number2 = secondIndex1 - index;
					
		
						if(DeplacementPossibleColor.includes(range[number1][number2])){
							arraList.push(range[number1][number2])
						}
						
					}

				}else if(differenceBis1 < 0 && differenceBis2 > 0){
					for (let index = 1; index < differenceBis2; index++) {

						let number1 = firstIndex1 - index;
						let number2 = index+secondIndex1;
					
						if(DeplacementPossibleColor.includes(range[number1][number2])){
							arraList.push(range[number1][number2])
						}
						
					}
				}





			}
			}
		
		return arraList;
	}

	