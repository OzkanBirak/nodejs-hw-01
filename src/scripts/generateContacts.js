import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts, writeContacts } from '../utils/index.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...existingContacts, ...newContacts];
    
    await writeContacts(updatedContacts);
    console.log(`Successfully generated ${number} new contacts. Total contacts: ${updatedContacts.length}`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};

generateContacts(5);
