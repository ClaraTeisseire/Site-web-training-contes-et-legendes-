let page_livre= {
	name: 'Animation',
	type: 'test'
}
console.log(page_livre);  

//Performing a task 
function greet(prénom, nom){
	console.log('essai  '+ prénom+ ' '+ nom)
}
greet('Jeanne', 'Dupon');

// Calcul
function square(number) {
	return number + number 
}
//Premiere possibilité:
// let number = square(2);
//console.log(number)

// Deuxieme possibilité
console.log(square(3 ))

let hour = 19;
if(hour>=6 && hour<12)
	console.log('Good morning !');

else if(hour>=12 && hour<18)
	console.log('Good afternoon!');

else 
	console.log("Good evening!");

// Boucles de répétitions
for (let i = 1; i <= 5; i++ ){
	console.log('Hello world',i  );
}
for(let i=1; i<=5; i++){
	if(i % 2!==0)console.log(i)
}




var button = document.getElementById("submit_btn");
			button.addEventListener("click",function(event){
			
				var commentaire = document.getElementById('commentaire').value;
				var commentaireText = document.getElementById('commentTest');
				commentaireText.textContent = commentaire;
				console.log(commentaire);
				var popup = document.getElementById('popup-1');
            	popup.classList.toggle('active');
				console.log("btn clicked", comment);
			})
				

			function togglePopup(){
				var commentaire = document.getElementById('commentaire').value;
				console.log(commentaire);

				var commentaire = document.getElementById('commentaire').value;
				var commentaireText = document.getElementById('commentTest');
				commentaireText.textContent = commentaire;
				console.log(commentaire);
				var popup = document.getElementById('popup-1');
            	popup.classList.toggle('active');
				
				
				document.getElementById("popup-1").classList.toggle("active");
			}
		  