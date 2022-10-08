function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lKzwyZBuI/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);}

        else {
            console.log(results);
            random_number_r = Math.floor(Math.random() * 255) + 1;
            random_number_g = Math.floor(Math.random() * 255) + 1;
            random_number_b = Math.floor(Math.random() * 255) + 1;
    
            document.getElementById("result_label").innerHTML = 'Number of times animal detected - '+
            results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
            (results[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_r+")";
            document.getElementById("result_confidence").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_r+")";

            if (results[0].label == "bark"){
                img.src = 'bark.gif';

            } else if(results[0].label == "Meow"){
                img.src = 'meow.gif';

            }else if (results[0].label == "Moo"){
                img.src = 'R (1).jpg';
                
            }else if (results[0].label == "Roar"){
            img.src = 'R.jpg';
            
            else{
                img.src = 'listen.gif'
            }
            
        }
    
    }