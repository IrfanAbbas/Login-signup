
        console.log("This is project 4");
        const name = document.getElementById('yourName');
        const email = document.getElementById('exampleInputEmail1');
        let validEmail = false;
        let validUser = false;
        $('#failure').hide();
        $('#success').hide();

        name.addEventListener('blur', () => {
            validateName();
        });

        email.addEventListener('blur', () => {
            validateEmail();
        });

        $('#registrationForm').submit((e) => {
            e.preventDefault(); // Prevent form submission
            
            if (validEmail && validUser) {
                $('#failure').hide();
                $('#success').show();
                $('#failure').text("Registration successful!");
                // You can submit the form here if needed
                // e.target.submit();
            } else {
                $('#success').hide();
                $('#failure').show();
                $('#failure').text("Invalid input! Please correct the errors.");
            }
        });

        function validateName() {
            let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
            let str = name.value;
            if(regex.test(str)){
                console.log('Your name is valid');
                name.classList.remove('is-invalid');
                validUser = true;
            } else {
                console.log('Your name is not valid');
                name.classList.add('is-invalid');
                validUser = false;
            }
        }

        function validateEmail() {
            let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
            let str = email.value;
            if(regex.test(str)){
                console.log('Your email is valid');
                email.classList.remove('is-invalid');
                validEmail = true;
            } else {
                console.log('Your email is not valid');
                email.classList.add('is-invalid');
                validEmail = false;
            }
        }