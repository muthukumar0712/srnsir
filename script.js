function myDate() {
  var inputValue = document.getElementById('date').value.trim();

  //give your own condition in the if and else if statement

  if (inputValue === '5') {
      var newH1 = document.createElement('h1');
      newH1.textContent = 'Happy'; //replace your text
      document.getElementById('container').appendChild(newH1);
  }

  else if (inputValue === '9') {
     
     var x = document.createElement('h1');
     x.textContent = 'Teachers day'; // replace your text
     document.getElementById('container').appendChild(x);
   }
  
   else if (inputValue === '2024') {

    var newH1 = document.createElement('h1');
      newH1.textContent = '"I wish to express my heartfelt gratitude and deepest admiration for an extraordinary educator like you, whose unwavering dedication, unrelenting passion, and unparalleled expertise have made a profound impact on my academic journey and personal growth. You are the epitome of excellence in teaching, a shining beacon of knowledge, and a guiding light who has illuminated the path of wisdom for me. Your ability to make complex concepts seem simple, your patience and kindness in the face of challenges, and your genuine interest in our growth and success have created a nurturing environment that fosters curiosity, creativity, and critical thinking. As I continue on my lifes journey, I wish for you to know that your influence extends far beyond the classroom, shaping me into a confident, compassionate, and open-minded individual. I wish for you to be recognized and celebrated for your tireless efforts, to be rewarded with joy and fulfillment, and to continue inspiring generations of students with your exceptional teaching and mentorship. Thank you for being an extraordinary teacher, mentor, and role model – I am forever grateful for your presence in my life ~Abi pappa '; 
      document.getElementById('container').appendChild(newH1);
  }
  

   else if (inputValue === 'dhivya@20'){
      

      var x = document.createElement('h1');
     x.textContent = 'Use Headphones For Better Experience';
     document.getElementById('container2').appendChild(x);

      
   }

   else if (inputValue === 'ok'){
      const video = document.createElement('video');
      video.src = ''; // paste your video path here
      
      video.controls = true;
      video.muted = false;
      video.height = 600;
      video.width = 1000;

      const box = document.getElementById('box');
      box.appendChild(video);
   }
  
}