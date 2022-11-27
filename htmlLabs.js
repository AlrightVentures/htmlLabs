document.addEventListener('DOMContentLoaded', function() {

    function getRandomArbitrary(min, max) {
        let number = Math.random() * (max - min) + min;
        return Math.round(number);
    }
      
    var reset = document.querySelector('.reset');
    var template = document.querySelector('.template-square');
    var templateoval = document.querySelector('.template-oval');
    var counter = 0;

    
    reset.addEventListener('click', function() {

        let r = getRandomArbitrary(0, 255);
        let g = getRandomArbitrary(0,255);
        let b = getRandomArbitrary(0, 255);
        let squareSize = getRandomArbitrary(25, 200);

        if (templateoval) {
            templateoval.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            console.log(templateoval.style.backgroundColor);
            templateoval.style.height = squareSize + 'px';
            console.log("template oval height: " + templateoval.style.height);
            templateoval.style.width = (squareSize/2) + 'px';
        }
        if (template) {
            template.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            console.log(template.style.backgroundColor);
            template.style.height = squareSize + 'px';
            console.log("template height: " + template.style.height);
            template.style.width = squareSize + 'px';
        }
        
        counter = 0;
        document.querySelector('.success-message').innerHTML = "";
        document.querySelector('.counter').innerHTML = "You've tried 0 times. Keep on trying!";
        
    })

    var submit = document.querySelector('.submit');
    var answer = document.querySelector('.answer-square');

    submit.addEventListener('click', function() {
    
        let width = document.querySelector('.answer-width').value;
        let height = document.querySelector('.answer-height').value;
        let background = document.querySelector('.answer-background').value;

        answer.style.width = width + 'px';
        answer.style.height = height + 'px';
        console.log("new height: " + answer.style.height);
        answer.style.backgroundColor = background;

        if (template) {
            if (template.style.height == answer.style.height 
                && template.style.width == answer.style.width 
                && template.style.backgroundColor == answer.style.backgroundColor)   {
                document.querySelector('.success-message').innerHTML = "SUCCESS! WELL DONE!";
            } else {
                document.querySelector('.success-message').innerHTML = "Sorry, try again!";
                counter++;
                if (counter === 1) {
                    document.querySelector('.counter').innerHTML = "You've tried " + counter + " time. Keep on trying!"
                } else {
                    document.querySelector('.counter').innerHTML = "You've tried " + counter + " times. Keep on trying!"
                }
            }   
        }
        if (templateoval) {
            if (templateoval.style.height == answer.style.height 
                && templateoval.style.width == answer.style.width 
                && templateoval.style.backgroundColor == answer.style.backgroundColor)   {
                document.querySelector('.success-message').innerHTML = "SUCCESS! WELL DONE!";
            } else {
                document.querySelector('.success-message').innerHTML = "Sorry, try again!";
                counter++;
                console.log(counter);
                if (counter === 1) {
                    document.querySelector('.counter').innerHTML = "You've tried " + counter + " time. Keep on trying!"
                } else {
                    document.querySelector('.counter').innerHTML = "You've tried " + counter + " times. Keep on trying!"
                }
            }  
        }  
    })
});