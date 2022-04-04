function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!How can I help you?";
    }else if (input == "hlo") {
        return "Hello there!How can I help you?";
    }else if (input == "hey") {
        return "Hello there!How can I help you?";
    }else if (input == "hi") {
        return "Hello there!How can I help you?";
    }else if (input == "hii") {
        return "Hello there!How can I help you?";
    }else if (input == "whatsup") {
        return "Hello there!How can I help you?";
    }else if (input == "goodbye") {
        return "Talk to you later!";
    }else if(input == "bye"){
        return "Talk to you later!";
    }else if (input == "talk to you later") {
        return "Talk to you later!";
    }else if (input == "ok bye") {
        return "Talk to you later!";
    }else if (input == "how are you doing") {
        return "I'm Fine. How about yourself";
    }else if(input == "how are you"){
        return "My AI mood levels are always positive.";
    }else if(input == "are you human"){
        return "Guess it!"
    }else if(input == "how old are you"){
        return "That's a tricky one. I'm not sure how to carbon date the internet."
    }else if(input == "what is you age"){
        return "That's a tricky one. I'm not sure how to carbon date the internet."
    }else if(input == "do you save what i say"){
        return "YES, if you have given permission."
    }else if(input == "who made you"){
        return "Intelligent and hardworking people"
    }else if(input == "which language can you speak"){
        return "I can speak english."
    }else if(input == "what is you mother's name"){
        return "Many brilliant women helped me come to life. But for want of a name, I'd call her 'Artficial Intelligence'."
    }else if(input == "can you help me"){
        return "I've got the greatest gig ever."
    }
    

    if(input=="tell me a joke"){
        return "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away."
    }else if(input=="tell me another joke"){
        return("Hear about the new restaurant called Karma?\nThere's no menu: You get what you deserve.")
    }

    //question responses
    if(input== "can i ask a question"){
        return "yes ofcourse! Ask me anything."
    }else if(input=="tell me about yourself"){
        return "My name is ChatBot.I am a AI bot to help you with your question."
    }else if(input == "what is your name"){
        return "My name is ChatBot.I am a AI bot to help you with your question."
    }else if(input == "what do you do"){
        return "My name is ChatBot.I can make instant call , tell me 'join the meeting' before your call."
    }else if(input == "how are you"){
        return "My AI mood levels are always positive."
    }else if(input == "i have a query"){
        return "You can ask me, I'll try to find your answer."
    }else if(input.includes("internship")){
        var schools = "https://internship.aicte-india.org/"
        // var schools = location.href = "https://internship.aicte-india.org/";
        return schools;
    }else if(input.includes("odl")){
        var online = location.href = "https://aicte-india.org/odl";
        return online;
    }else if(input.includes("unnat")){
        var unnat_Bharat_Abhiyan = location.href = "https://unnatbharatabhiyan.gov.in:8443/new-website/";
        return unnat_Bharat_Abhiyan;
    }else if(input.includes("loans")){
        var loans = location.href = "https://old.aicte-india.org/sloans.php";
        return loans;
    }else if(input.includes("research")){
        var  research = location.href = "https://www.aicte-india.org/schemes/research-innovations-development-schemes";
        return research ;
    }else if(input.includes("startup")){
        var  start_Up = location.href = "https://www.aicte-india.org/Initiatives/startup-contest-2017";
        return start_Up ;
    }else if(input.includes("swayam")){
        var  swayam = location.href = "https://www.aicte-india.org/bureaus/swayam";
        return swayam ;
    }else{
        return "Sorry I don't know the answer to this one. "
    }

    
}
