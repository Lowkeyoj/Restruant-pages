    import { createContactSections as contact} from "./contact";
    import { food } from "./menu";
    
    
    
    export const header = () => {
    const page = document.querySelector("#content");
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");
    const a3 = document.createElement("a")

    h1.textContent = "welcome to my restruant";

    a1.href = "index.html";
    a1.textContent = "Home";

    a2.href ="#";
    a2.addEventListener('click', function(event) {
        event.preventDefault();
        food();
        console.log("workin?")
      });
    
    a2.textContent = "Menu";

    a3.href = "#";
    a3.addEventListener('click', function(event) {
        event.preventDefault();
        contact();
        console.log("workin?")
      });
    a3.textContent = "Contact Us";

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    nav.appendChild(ul);

    header.appendChild(nav);

    page.appendChild(h1);
    page.appendChild(header);

    return;
}; 

export const main = 
    () => {
        const page = document.querySelector("#content");
        const main = document.createElement("main");
        const firsth2 = document.createElement("h2");
        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");
        const secondh2 = document.createElement("h2");
        const form = document.createElement("form");
        const nameLabel = document.createElement("label");
        const nameInput = document.createElement("input");
        const emailLabel = document.createElement("label");
        const emailInput = document.createElement("input");
        const messagesLabel = document.createElement("label");
        const textArea = document.createElement("textarea");
        const input = document.createElement("input");
        const br1 = document.createElement("br");
        const br2 = document.createElement("br");
        const br3 = document.createElement("br");


        firsth2.textContent = "Menu";
        
        li1.textContent = "Appetizers";
        li2.textContent = "Main Dishes";
        li3.textContent = "Desserts";
        li4.textContent = "Drinks";

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        
        secondh2.textContent = "Contact Us";

        form.setAttribute("action","#");
        form.setAttribute("method","post");

        nameLabel.setAttribute("for","name");
        nameLabel.textContent = "name";

        nameInput.type = "text";
        nameInput.id = "name";
        nameInput.name = "name";

        emailLabel.setAttribute("for","email");
        emailLabel.textContent = "Email";

        emailInput.type = "email";
        emailInput.id = "email";
        emailInput.name = "email";

        messagesLabel.setAttribute("for","message");
        messagesLabel.textContent = "Message";

        textArea.id = "message";
        textArea.name = "message";
        
        input.type = "submit";
        input.value = "Submit";

        form.appendChild(nameLabel);
        form.appendChild(nameInput);
        form.appendChild(br1);
        form.appendChild(emailLabel);
        form.appendChild(emailInput);
        form.appendChild(br2);
        form.appendChild(messagesLabel);
        form.appendChild(textArea);
        form.appendChild(br3);
        form.appendChild(input);

        main.appendChild(firsth2);
        main.appendChild(ul);
        main.appendChild(secondh2);
        main.appendChild(form);

        page.appendChild(main);
        
        return;

    };

    export const footer = 
    () => {
        const page = document.querySelector("#content");
        const footer = document.createElement("footer");
        const ptag = document.createElement("p");

        ptag.textContent = "&copy; 2023 My Restaurant. All rights reserved.";
        footer.appendChild(ptag);
        page.appendChild(footer);

        return;
    };

