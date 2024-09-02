import {phone} from 'phone';

// Validate and format phone number
export const formatPhoneNumber = (contact) => {
    const formattedPhone = phone(contact, { country: 'IN' }); // Adjust the country code as needed
    if (formattedPhone.isValid) {
        return formattedPhone.phoneNumber;
    } else {
        throw new Error('Invalid phone number');
    }
};
