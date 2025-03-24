document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.developer-link');
    const targetElement = document.querySelector('.name_first');

    button.addEventListener('click', function() {
        targetElement.scrollIntoView({
            behavior: 'smooth', 
            block: 'center' 
        });
    });
      toggleVisibility();
});

document.addEventListener('DOMContentLoaded', () => {
    const mediafiles = document.querySelectorAll('img, video')
    Array.from(mediafiles).forEach((file)=>{
        file.onload =() => {
            i++

            percents.innerHTML = ((i*100)/ length)

            if(i === mediafiles.length){
                preloader.classList.add('preloader--hide')
                percents.innerHTML = 100
            }
        }

    })
})

function toggleVisibility() {
    const element = document.getElementById('container_myMade');
    if (!element) return;
  
    const isHidden = element.style.display === 'none';
    
    if (isHidden) {
      element.style.display = 'block';
      let opacity = 0;
      const animation = setInterval(() => {
        opacity += 0.1;
        element.style.opacity = opacity.toString();
        if (opacity >= 1) {
          clearInterval(animation);
        }
      }, 20);
    } else {
      let opacity = 1;
      const animation = setInterval(() => {
        opacity -= 0.1;
        element.style.opacity = opacity.toString();
        if (opacity <= 0) {
          element.style.display = 'none';
          clearInterval(animation);
        }
      }, 20);
    }
    }

    
$('.button_submit').on('click', function(e) {
    e.preventDefault();
    
    
    var inputs = $('.input_1');
    var name = inputs.eq(0).val();
    var email = inputs.eq(1).val();
    var password = inputs.eq(2).val();
    var repass = inputs.eq(3).val();
    var fail = "";

    console.log('Проверка значений:', { name, email, password, repass }); 

    
    if (!name || !email || !password || !repass) {
        fail = "Заполните все поля";
    } else if (name.length < 2 || name.length > 30) {
        fail = "Имя должно быть не меньше 2 символов и не больше 30 символов";
    } else if (email.indexOf("@") == -1) {
        fail = "Некорректный email";
    } else if (password.length < 6) {
        fail = "Пароль должен быть не меньше 6 символов";
    } else if (password != repass) {
        fail = "Пароли должны совпадать";
    }

    
    if (fail != "") {
        
        $('.error-message').remove();
        
        $('.popup').append('<div class="error-message">' + fail + '</div>');
    } else {
        alert("Все данные корректно заполнены");
        
        inputs.val('');
        
        $('.error-message').remove();
    }
});


