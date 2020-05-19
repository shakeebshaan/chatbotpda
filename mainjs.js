
document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input")
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter") {
			let input = inputField.value;
			//alert("Hello! I am an alert box!!");
			 console.log(`I typed '${input}'`)
		//	inputField.value = "";
		//	output(input);
		//update DOM

  addChat(input);

    }
  });
});



function addChat(input) {
	const product="reply";

	const mainDiv = document.getElementById("main1");
	let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `	<div class="mine messages" >
	 											<div class="message last" id="bot-response">
													YOU
													</div>
													</div>

													<div class="yours messages">
												 <div class="message" id="bot-response">
													YOU
													</div>
													</div>
													`;
  mainDiv.appendChild(userDiv);



	//const mainDivq = document.getElementById("main2");
  //let botDiv = document.createElement("div");
  //botDiv.id = "bot";
 	//botDiv.innerHTML = `Chatbot:`;
	//mainDivq.appendChild(botDiv);
//  speak(product);
}
