

export const food = () => {
/*header();*/    
const page = document.querySelector("#content")
// Define an array of objects for each menu section
const menu = [
    {
      section: 'Appetizers',
      items: [
        {
          name: 'Bruschetta',
          description: 'A delicious mix of diced tomatoes, garlic, and basil served on top of toasted bread.',
          price: '$8.99'
        },
        {
          name: 'Chicken Wings',
          description: 'Choose from buffalo, honey garlic, or BBQ sauce.',
          price: '$12.99'
        },
        {
          name: 'Spinach Dip',
          description: 'A creamy blend of spinach, artichokes, and cheese served with tortilla chips.',
          price: '$10.99'
        }
      ]
    },
    {
      section: 'Entrees',
      items: [
        {
          name: 'Steak',
          description: '8 oz. grilled steak served with your choice of mashed potatoes or fries and steamed vegetables.',
          price: '$19.99'
        },
        {
          name: 'Salmon',
          description: 'Grilled salmon fillet served with rice pilaf and steamed vegetables.',
          price: '$16.99'
        },
        {
          name: 'Chicken Parmesan',
          description: 'Breaded chicken breast topped with marinara sauce and melted mozzarella cheese served with spaghetti.',
          price: '$14.99'
        }
      ]
    },
    {
      section: 'Desserts',
      items: [
        {
          name: 'Chocolate Cake',
          description: 'A rich and decadent chocolate cake topped with whipped cream and a cherry.',
          price: '$6.99'
        },
        {
          name: 'Crème Brûlée',
          description: 'A creamy vanilla custard topped with caramelized sugar.',
          price: '$7.99'
        },
        {
          name: 'Ice Cream Sundae',
          description: 'Vanilla ice cream topped with your choice of chocolate, caramel, or strawberry sauce, whipped cream, and a cherry.',
          price: '$5.99'
        }
      ]
    }
  ];
  
  // Get the main tag element
  const main = document.querySelector('main');
  main.innerHTML = ""
  // Loop through the menu array and create the HTML elements for each section and item
  menu.forEach(section => {
    const sectionElement = document.createElement('section');
    const headingElement = document.createElement('h2');
    const listElement = document.createElement('ul');
    
    headingElement.textContent = section.section;
    sectionElement.appendChild(headingElement);
    
    section.items.forEach(item => {
      const listItemElement = document.createElement('li');
      const itemHeadingElement = document.createElement('h3');
      const descriptionElement = document.createElement('p');
      const priceElement = document.createElement('p');
      
      itemHeadingElement.textContent = item.name;
      descriptionElement.textContent = item.description;
      priceElement.textContent = item.price;
      priceElement.classList.add('price');
      
      listItemElement.appendChild(itemHeadingElement);
      listItemElement.appendChild(descriptionElement);
      listItemElement.appendChild(priceElement);
      listElement.appendChild(listItemElement);
    });
    
    sectionElement.appendChild(listElement);
    main.appendChild(sectionElement);
  });
  page.insertBefore(main,page.children[2])
return;
}