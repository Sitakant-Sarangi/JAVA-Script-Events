
     
        var button = document.getElementById('clickButton');

        console.log(button);
        

        button.addEventListener('click', function() {
            alert('You clicked the button!');
            this.style.backgroundColor = 'lightblue'; 
        });
        document.getElementById('clickButton').addEventListener('click', function() {
            alert('Button clicked (addEventListener Method)');
        });
         document.getElementById('dblclickButton').addEventListener('dblclick', function() {
            alert('Button double-clicked (addEventListener Method)');
        });
        

        var hoverDiv = document.getElementById('hoverDiv');
        hoverDiv.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'lightblue';
        });
        hoverDiv.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
        var hoverBtn = document.querySelector('#hoverBtn');
        var mouseMsg = document.querySelector('#mouseMsg');

         hoverBtn.addEventListener('mouseenter', () => {
         mouseMsg.textContent = "You are hovering over the button!";
         });

        hoverBtn.addEventListener('mouseleave', () => {
        mouseMsg.textContent = "The hovering has ended.";
         });

         var keyInput = document.addEventListener('keydown', function(event) {
            console.log(`Key pressed: ${event.key}`);
            if (event.key === 'Enter') {
                console.log('Enter key was pressed.');
         }
        });
         document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('myForm');
            const username = document.getElementById('username');
            const status = document.getElementById('status');

          
            form.addEventListener('submit', function(event) {
                console.log('Form submitted');
                event.preventDefault(); // Prevent the actual form submission
                alert(`Username: ${username.value}, Status: ${status.value}`);
            });

    
            status.addEventListener('change', function() {
                console.log('Selection changed to:', this.value);
            });

       
            username.addEventListener('input', function() {
                console.log('Input changed: ', this.value);
            });
        });

       function validateAge() {
            var age = document.getElementById('ageInput');
            var ageValue = parseInt(age.value, 10);

            
            if (ageValue >= 45) {
                age.style.backgroundColor = 'lightgreen';
                console.log('Eligible age confirmed.');
            } else {
                age.style.backgroundColor = 'salmon'; 
                console.log('Check age, may be under 45.');
            }
        }
        // Access the parent element
        const list = document.getElementById('itemList');

        // Attach event listener to the parent element
        list.addEventListener('click', function(event) {
            // Check if the clicked element is a list item
            if (event.target.tagName === 'LI') {
                alert('You clicked: ' + event.target.textContent);
                // Perform any additional logic here, such as updating other parts of the UI
                event.target.style.backgroundColor = 'pink'; // Highlight the clicked item
            }
        });