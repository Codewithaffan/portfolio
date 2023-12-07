const microphoneBtn = document.getElementById('microphone');
const voiceText = document.getElementById("voiceText");

/* STEP: 2 grab all of element from Speech web api  */
const speechRecognition = () => {
    let recognition = new webkitSpeechRecognition();

    recognition.onstart = () => {
        microphoneBtn.classList.add('pulse')
        voiceText.innerHTML = `<small class="text-muted"> listening.... </small>`;
    }
    recognition.onend = () => microphoneBtn.classList.remove('pulse');
    recognition.onerror = () => voiceText.innerHTML = `<small class="text-muted"> Not hear yet. </small>`;
    recognition.start();
    recognition.onresult = (event) => {
        let userVoiceText = event.results[0][0].transcript;
        voiceText.innerText = userVoiceText;
        alexResponse(userVoiceText);
    }
}


const alexResponse = (text) => {
    let speech = new SpeechSynthesisUtterance(text);
    /* Command Put Here*/
    if (text == 'Alexa how are you' || text == 'how are you') {
        speech.text = ' I am good what about you?';
    } else if (text == 'hey Alexa' || text == 'hi' || text == 'hello' || text == 'Alexa' || text=='hello hello') {
        speech.text = 'Yeah! how can i help you';
    } else if (text == 'Alexa open Google' || text == 'open Google') {
        speech.text = 'ok bruh! opening google';
        let location = 'https://www.google.com/';
        window.open(location, '_blank')
    } else if (text == 'Alexa open the YouTube' || text == 'open YouTube') {
        speech.text = 'Okay opening!';
        let location = 'https://www.youtube.com/';
        window.open(location, '_blank')
    } else if (text == 'open YouTube abd play something good' || text == 'play song on YouTube') {
        speech.text = 'oky this is my favorite one! hope you like it';
        let location = 'https://www.youtube.com/watch?v=Vqfy4ScRXFQ&list=RDMMHQooYn2OReE&index=2';;
        window.open(location, '_blank')
    } else if (text == "do you know Affan"||text=='do you know fun'||text=='do you know your boss') {
        speech.text = 'Yeah! affan is my founder my developer my boss and most important he is so intelligent and smart i just love him';
    } else if (text == 'I am good or bad' || text == 'good or bad') {
        speech.text = 'If you are my boss affan then good otherwise bad';
    } else if (text == 'Zigli what time is it now' || text == 'tell me the time'||text=='time') {
        speech.text = 'Now time is ' + new Date().toLocaleTimeString();
    } else if (text == "Zigli what is the date today" || text == 'tell me the date' || text == "what's today") {
        speech.text = 'Today is ' + new Date().toDateString();
    } else if (text == 'thank you') {
        speech.text = 'your most welcome broh';
    }else if(text=='who is Fatima'){
        speech.text='she is love and life of my boss affan i wish they meet in future';
    }else if(text=='who is Iqra'||text=='iqra'){
        speech.text='she is the sister of my boss affan';
    }
    else if(text=='my birthday'||text=='when is my birthday'){
        speech.text="11 March";
    }
    else if(text=='my age'||text=='what is my age'||text=='how old I am'||text=='how old i am'){
        speech.text='I dont know your age so help me to know that how old you are?'
        setTimeout(()=>{
            let age = prompt('How old are you?', 100);
            alert(`You are ${age} years old!`);
        },1000)
    }
    else if(text=='my sister birthday'||text=='when is my sister birthday'){
        speech.text="25 February";
    }
    else if(text=='good morning'||text=='Good Morning'||text=='Good morning'||text=='good Morning'){
        speech.text="Good Morning How are You?";
    }
    else if(text=='what I like to eat'||text=='like to eat'){
        speech.text="Pulao, butter chicken , and meat of cow";
    }
    else if(text=='who is my favourite football player'||text=='football player'||text=='favourite football player'){
        speech.text="Lionel Messi";
    }

    else if(text=='which language i use'||text=='which is my favourite language '||text=='which language I use'){
        speech.text="Urdu and englisg simple! ";
    }
    else if(text=='my hairstyle'||text=='my hair style'){
        speech.text="you have curly hairlines my boss and it suits on you ";
    }
    else if(text=='what is your hobby'||text=='what is my hobby'||text=='hobby'){
        speech.text='i am a machine so i dont have hobby but my boss affaan like to play football';
    }
     else if (text == 'do you know Affan'||text=='Boss'||text=='do you know'||text=='do you know affan'||text=='do you know Irfan') {
        speech.text = 'my boss how i can assist you';
    } else if (text == 'what is your name') {
        speech.text = 'I am Bot and my name is Alexa';
    } else if (text == 'Zigli search videos on YouTube' || text == 'search videos on YouTube') {
        speech.text = 'What do you want to search put here?'
        setTimeout(() => {
            let searchTerms = prompt('Search Your Videos');
            if (searchTerms) {
                let location = `https://www.youtube.com/results?search_query=${searchTerms}`;
                window.open(location, '_blank')
            }
        }, 1000)


    }else if(text=='solve maths'||text=='solve Maths'||text=='maths'||text=='mathematics'||text=='Mathematics'){
        speech.text='Choose An Operation'
        setTimeout(()=>{
            var ch=parseInt(prompt( "Enter your choice 1.Addition 2.Subtraction 3.Multiplication 4.Division "));
            	switch(ch)
	{
		case 1:var v1=parseInt(prompt( "Enter the first value "));
		           var v2=parseInt(prompt( "Enter the second value "));
		           var v3=v1+v2;
		           alert('Addition is '+v3);
		           break;
		case 2:var v4=parseInt(prompt( "Enter the first value "));
		           var v5=parseInt(prompt( "Enter the second value "));
		           var v6=v4-v5;
		           alert('Subtraction is'+v6);
		           break;
		case 3:var v7=parseInt(prompt( "Enter the first value "));
		           var v8=parseInt(prompt( "Enter the second value "));
		           var v9=v7*v8;
		           alert('Multiplication is'+v9);
		           break;
		case 4:var v10=parseInt(prompt( "Enter the first value "));
		           var v11=parseInt(prompt( "Enter the second value "));
		           var v12=v10/v11;
		           alert('Division is'+v12);
		           break;
		default: alert('Enter choice correctly');
	}


        },1000)
    }
    else if(text=='search on instagram'||text=='search on Instagram'){
        speech.text='What do you want to search put here'
        setTimeout(()=>{
            let searchTerms = prompt('Search on Instagram');
            if(searchTerms){
                let location=`https://www.instagram.com//${searchTerms}`;
                window.open(location, '_blank')
            }
        },1000)

    }
    else if (text == 'I love you') {
        speech.text = "I love you too my boss affan.";
    } else if (text == 'change the background colour'||text=='change background colour') {
        speech.text = "Ok lets Change the background color";
        setTimeout(()=>{
            let c=prompt("Enter Color ");
            document.body.style.backgroundColor=c;
        })
        
    } else if (text == 'who is rashida' || text == 'who is Rashida'||text=='Rashida'||text=='rashida') {
        speech.text = "she is the mother of my boss affan.";
    } else if (text == 'set the default colour'||text=='set default colour'||text=='back to default colour') {
        speech.text = "ok set a default background color";
        document.body.style.backgroundColor=black;
    } else if(text=='my mother name'||text=='mother name'||text=='what is the name of my mother'||text=='what is my mother name'){
        speech.text='Momin Rashida Aqeel Ahmed a professional government teacher my boss affan love her so much.';
    }

    else if (text == 'my father name'||text=='father name'||text=='what is my father name'||text=='what is the name of my father') {
        speech.text = "Momin Aqeel Ahmed a well known good man won the hearts of many people using his good character may allah grant him jannah.";
    }
    
    else if (text == 'go to github' || text == 'open instagram'|| text=='open Instagram') {
        speech.text = "ok I am going. on instagram just for you";
        let location = 'https://www.instagram.com';
        window.open(location, '_blank')}


        else if (text == 'go to WhatsApp' || text == 'open Whatsapp'|| text=='open WhatsApp') {
            speech.text = "ok I am going. on whatsapp";
            let location = 'https://play.google.com/store/apps/details?id=com.whatsapp.android';
            window.open(location, '_blank')}

 
        else if (text == 'ok close yourself' || text == 'close now'||text=='close') {
        speech.text = "ok I am closing. Thanks for";
        window.close();
    } else if (text == 'who is your founder' || text == 'hey Zigli who made you'||text=='who is your father') {
        speech.text = "My founder name is Affan Momin. I love him.";
    }else{
        speech.text='nothing';
    }


    document.getElementById("alexText").innerText = speech.text;
    window.speechSynthesis.speak(speech);
}

microphoneBtn.addEventListener('click', speechRecognition);

/* STEP: 4 toggle show command area  */
document.getElementById("question-btn").addEventListener('click', () => {
    document.querySelector(".command-area").classList.toggle('active');
})