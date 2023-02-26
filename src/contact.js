export function createContactSections() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    // Create phone section
    const phoneSection = document.createElement('section');
    const phoneHeading = document.createElement('h2');
    phoneHeading.textContent = 'Phone';
    const phoneParagraph = document.createElement('p');
    phoneParagraph.textContent = 'Give us a call at ';
    const phoneLink = document.createElement('a');
    phoneLink.href = 'tel:123-456-7890';
    phoneLink.textContent = '123-456-7890';
    phoneParagraph.appendChild(phoneLink);
    phoneSection.appendChild(phoneHeading);
    phoneSection.appendChild(phoneParagraph);
    
    // Create email section
    const emailSection = document.createElement('section');
    const emailHeading = document.createElement('h2');
    emailHeading.textContent = 'Email';
    const emailParagraph = document.createElement('p');
    emailParagraph.textContent = 'Send us an email at ';
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:info@restaurant.com';
    emailLink.textContent = 'info@restaurant.com';
    emailParagraph.appendChild(emailLink);
    emailSection.appendChild(emailHeading);
    emailSection.appendChild(emailParagraph);
    
    // Create address section
    const addressSection = document.createElement('section');
    const addressHeading = document.createElement('h2');
    addressHeading.textContent = 'Address';
    const addressParagraph1 = document.createElement('p');
    addressParagraph1.textContent = 'Stop by and visit us at:';
    const addressParagraph2 = document.createElement('p');
    addressParagraph2.textContent = '123 Main Street';
    const addressParagraph3 = document.createElement('p');
    addressParagraph3.textContent = 'Anytown, USA 12345';
    addressSection.appendChild(addressHeading);
    addressSection.appendChild(addressParagraph1);
    addressSection.appendChild(addressParagraph2);
    addressSection.appendChild(addressParagraph3);
    
    // Create social media section
    const socialSection = document.createElement('section');
    const socialHeading = document.createElement('h2');
    socialHeading.textContent = 'Social Media';
    const socialList = document.createElement('ul');
    const facebookItem = document.createElement('li');
    const facebookLink = document.createElement('a');
    facebookLink.href = '#';
    facebookLink.textContent = 'Facebook';
    const twitterItem = document.createElement('li');
    const twitterLink = document.createElement('a');
    twitterLink.href = '#';
    twitterLink.textContent = 'Twitter';
    const instagramItem = document.createElement('li');
    const instagramLink = document.createElement('a');
    instagramLink.href = '#';
    instagramLink.textContent = 'Instagram';
    facebookItem.appendChild(facebookLink);
    twitterItem.appendChild(twitterLink);
    instagramItem.appendChild(instagramLink);
    socialList.appendChild(facebookItem);
    socialList.appendChild(twitterItem);
    socialList.appendChild(instagramItem);
    socialSection.appendChild(socialHeading);
    socialSection.appendChild(socialList);
    
    // Append sections to main tag
    main.appendChild(phoneSection);
    main.appendChild(emailSection);
    main.appendChild(addressSection);
    main.appendChild(socialSection);
  }
  
  