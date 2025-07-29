import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts, writeContacts } from '../utils/index.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];
    
    await writeContacts(updatedContacts);
    console.log('Successfully added one new contact:', newContact.name);
  } catch (error) {
    console.error('Error adding contact:', error.message);
  }
};

addOneContact();
