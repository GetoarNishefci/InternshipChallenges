// Function to shuffle the order of checkbox inputs
function shuffleValues() {
    const form = document.getElementById("myForm");
    const checkboxes = Array.from(form.elements.checkbox);
  
    for (let i = checkboxes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [checkboxes[i].value, checkboxes[j].value] = [checkboxes[j].value, checkboxes[i].value];
      checkboxes[i].nextSibling.textContent = checkboxes[i].value;
      checkboxes[j].nextSibling.textContent = checkboxes[j].value;
    }
  }
  
  // Function to change the values of checkbox inputs
  function changeValues() {
    const form = document.getElementById("myForm");
    const checkboxes = Array.from(form.elements.checkbox);
  
    checkboxes.forEach((checkbox) => {
      checkbox.value = "New Value";
      checkbox.nextSibling.textContent = checkbox.value;
    });
  }
  
  // Function to display selected checkboxes
  function showSelectedValues() {
    const form = document.getElementById("myForm");
    const checkboxes = Array.from(form.elements.checkbox);
    const selectedValues = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
  
    document.getElementById("result").textContent = selectedValues.join(", ");
  }
  