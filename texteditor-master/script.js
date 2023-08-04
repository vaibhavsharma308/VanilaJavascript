
function updateText() {
  const textInputBox = document.querySelector("#text-input");
  const textOutputBox = document.querySelector("#text-output");
  const actualText = textInputBox.value;
  textOutputBox.innerText = actualText;
}

function makeBold(elem) {
  
    const allClasses = elem.classList;
    if(allClasses.contains("active"))
    {
      allClasses.remove("btn-dark");
      allClasses.add("btn-light");
      const textOutputBox = document.querySelector("#text-output");
      textOutputBox.classList.remove('bold');
      elem.classList.remove("active");
  }
  else{
      allClasses.remove("btn-light");
      allClasses.add("btn-dark");
      const textOutputBox = document.querySelector("#text-output");
      textOutputBox.classList.add('bold');
      elem.classList.add("active");
  }
}

function makeItalic(elem) {
      const allClasses = elem.classList;
      if(allClasses.contains("active"))
      {
        allClasses.remove("btn-dark");
        allClasses.add("btn-light");
        const textOutputBox = document.querySelector("#text-output");
        textOutputBox.classList.remove('italic');
        elem.classList.remove("active");
    }
    else{
        allClasses.remove("btn-light");
        allClasses.add("btn-dark");
        const textOutputBox = document.querySelector("#text-output");
        textOutputBox.classList.add('italic');
        elem.classList.add("active");
    }

}

function makeUnderline(elem) {


        const allClasses = elem.classList;
        if(allClasses.contains("active"))
        {
          allClasses.remove("btn-dark");
          allClasses.add("btn-light");
          const textOutputBox = document.querySelector("#text-output");
          textOutputBox.classList.remove('underline');
          elem.classList.remove("active");
      }
      else{
          allClasses.remove("btn-light");
          allClasses.add("btn-dark");
          const textOutputBox = document.querySelector("#text-output");
          textOutputBox.classList.add('underline');
          elem.classList.add("active");
      }


}
function alignText(elem, alignType) {
  //add functionality later
}
