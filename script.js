
$("#p-form").validate({
    rules: {
        Name: {
            required: true,
            minlength: 2

        },
        Email: {
            required: true,
            email: true
        },
        Phone: {
            required: true,
            minlength: 10,
        },
        Message: {
            required: true,
            minlength: 2
        }
    },
    messages: {
        Name: {
            required: "Enter your name",
            minlength: "Atleast 5 character required"
        },
        Email: {
            required: "email id needed",
            email: "email a valid email id"
        },
        Phone: {
            required: "Enter your number",
            minlength: 10
        },
        Message: {
            required: "Enter a message",
            minlength: "Atleast 2 characters"
        }

    },
    submitHandler: function() {

        $('#p-form').submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbzW3epEfgIH9rSXZyHWdxe8R0hUPuIwKnQ7CC875myRQ4yr94XKwIEpzxqElGkfv2Et/exec",
                data:$("#p-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
        
                }
            })
        })
    }
    

})

